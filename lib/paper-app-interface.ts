import { LambdaDestination } from "aws-cdk-lib/aws-s3-notifications";

import { Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Bucket, EventType } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";
import { Duration } from "aws-cdk-lib";

export class PaperAppInterface extends Construct {
  constructor(scope: Construct, id: string, bucket: Bucket) {
    super(scope, id);
    const paperAppInterface = new NodejsFunction(this, "function", {
      runtime: Runtime.NODEJS_18_X,
      handler: "handler",
      timeout: Duration.minutes(5),
    });

    bucket.addEventNotification(
      EventType.OBJECT_CREATED,
      new LambdaDestination(paperAppInterface)
    );
    bucket.grantReadWrite(paperAppInterface);
  }
}
