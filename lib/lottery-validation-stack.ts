import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as s3 from "aws-cdk-lib/aws-s3";

import { LotteryValidator } from "./lottery-validator";

export class LotteryValidationStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const bucket = new s3.Bucket(this, "bucket", {
      bucketName: "testlotterybucket2",
      accessControl: s3.BucketAccessControl.PRIVATE,
      encryption: s3.BucketEncryption.S3_MANAGED,
      versioned: false,
      blockPublicAccess: s3.BlockPublicAccess.BLOCK_ALL,
      autoDeleteObjects: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
    new LotteryValidator(this, "lottery-validator", bucket);
  }
}
