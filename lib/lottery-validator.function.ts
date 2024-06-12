import { S3Event } from "aws-lambda";
import { instance } from "./handler-functions/winston.logger";

export const handler = async (event: S3Event): Promise<void> => {
  const logger = instance;
  event.Records.map((record) => logger.info(record.s3.object.key));
};
