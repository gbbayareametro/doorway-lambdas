import { LambdaDestination } from "aws-cdk-lib/aws-s3-notifications";

import { Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Bucket, EventType } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export class LotteryValidator extends Construct {
  constructor(scope: Construct, id: string, bucket: Bucket) {
    super(scope, id);
    const lotteryValidator = new NodejsFunction(this, "function", {
      runtime: Runtime.NODEJS_18_X,
      handler: "handler",
    });

    bucket.addEventNotification(
      EventType.OBJECT_CREATED,
      new LambdaDestination(lotteryValidator)
    );
  }
}
