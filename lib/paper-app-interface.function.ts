import { S3Event } from "aws-lambda";
import { instance } from "./handler-functions/winston.logger";
import { getS3File } from "./handler-functions/s3-functions";
import {
  convertToJSON,
  lotteryLineIsValid,
} from "./handler-functions/lottery-file-handling";
import { S3Client } from "@aws-sdk/client-s3";
import { NodeJsClient } from "@smithy/types";
import { json } from "stream/consumers";

export const handler = async (event: S3Event): Promise<string | undefined> => {
  const logger = instance;
  const client = new S3Client({}) as NodeJsClient<S3Client>;
  const bucket = event.Records[0].s3.bucket.name;
  const file = event.Records[0].s3.object.key;
  logger.info(`Processing file: ${file}`);
  const rs = await getS3File(bucket, file);
  logger.debug(`File array: ${rs.toString()}`);
  logger.info("Converting excel rows to JSON....");
  const jsonOutput = await convertToJSON(rs, "Raw Lottery Rank");
  logger.debug(`JSON output: ${jsonOutput}`);
  jsonOutput.forEach((jsonObject) => {
    logger.info("Validating Lottery Line...");
    logger.debug(jsonObject);
    const isvalid = lotteryLineIsValid(jsonObject);
    logger.info(
      `The lottery entry for ${jsonObject["Primary Applicant First Name"]} ${
        jsonObject["Primary Applicant Last Name"]
      } ${isvalid ? "is valid," : "is not valid."}`
    );
  });

  return rs.toString();
};
