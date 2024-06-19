import { createReadStream } from "fs";
import { getFile } from "./s3-functions";
import { sdkStreamMixin } from "@smithy/util-stream";
import { mockClient } from "aws-sdk-client-mock";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { NodeJsRuntimeStreamingBlobPayloadOutputTypes } from "@smithy/types";

describe("S3 Tests", () => {
  test("It gets the file successfully from S3", async () => {
    const readStream = createReadStream(
      "/Users/gbrown/git-repos/doorway-lambdas/lib/handler-functions/mockLottery.xlsx"
    );
    const sdkStream = sdkStreamMixin(
      readStream
    ) as NodeJsRuntimeStreamingBlobPayloadOutputTypes;
    const s3Mock = mockClient(S3Client);
    s3Mock.on(GetObjectCommand).resolves({ Body: sdkStream });
  });
});
