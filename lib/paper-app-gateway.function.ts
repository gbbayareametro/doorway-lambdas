import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";
import {
  SecretsManagerClient,
  GetSecretValueCommand,
} from "@aws-sdk/client-secrets-manager";

import { instance } from "./handler-functions/winston.logger";
import { DoorwayPaperApplications } from "./handler-functions/paper-applications";

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context,
): Promise<APIGatewayProxyResult> => {
  const logger = instance;
  logger.debug(`EVENT:`);
  logger.debug(event.body);
  const application = event.body != null ? JSON.parse(event.body) : {};

  const secretName = process.env.DOORWAY_LOGIN_SECRET
    ? process.env.DOORWAY_LOGIN_SECRET
    : "prod/lambda/serviceaccount";
  logger.debug(`Getting Secret: ${secretName}`);
  const input = {
    SecretId: secretName,
  };
  const secretValueCommand = new GetSecretValueCommand(input);
  const secretsManagerClient = new SecretsManagerClient();
  let dwUser: string;
  let dwPassword: string;
  try {
    logger.debug(secretValueCommand);
    const response = await secretsManagerClient.send(secretValueCommand);
    const secretString = JSON.parse(response.SecretString!);
    dwUser = secretString.user;
    dwPassword = secretString.password;
    try {
      const doorwayApi = process.env.DOORWAY_API
        ? process.env.DOORWAY_API
        : "https://backend.dev.housingbayarea.mtc.ca.gov";
      const passkey = process.env.PASSKEY ? process.env.PASSKEY : "passkey";

      const applicationInterface = new DoorwayPaperApplications(
        dwUser,
        dwPassword,
        doorwayApi,
        passkey,
      );
      const dwApplication = await applicationInterface.transform(application);

      const appResponse = await applicationInterface.submit(dwApplication);
      if (appResponse.status > 299) {
        return {
          statusCode: appResponse.status,
          body: appResponse.statusText,
        };
      }

      return {
        statusCode: 200,

        body: JSON.stringify(appResponse.data),
      };
    } catch (err) {
      logger.error(`Ran into error submitting application: ${err}`);
      return {
        statusCode: 500,
        body: err,
      };
    }
  } catch (secretError) {
    logger.error(`Error thrown getting doorway secrets! ${secretError}`);
    return {
      statusCode: 500,
      body: JSON.stringify(secretError),
    };
  }
  return {
    statusCode: 500,
    body: "Unknown service error check the logs",
  };
};
