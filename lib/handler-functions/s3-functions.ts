import {
  GetObjectCommand,
  GetObjectCommandOutput,
  S3Client,
} from "@aws-sdk/client-s3";
import type { NodeJsClient, SdkStream } from "@smithy/types";
import { instance } from "./winston.logger";

export const getS3File = async (
  bucket: string,
  object: string
): Promise<Uint8Array> => {
  const logger = instance;
  const client = new S3Client({}) as NodeJsClient<S3Client>;

  const output: GetObjectCommandOutput = await client.send(
    new GetObjectCommand({ Key: object, Bucket: bucket })
  );
  const rs = output.Body!.transformToByteArray();
  return rs;
};
