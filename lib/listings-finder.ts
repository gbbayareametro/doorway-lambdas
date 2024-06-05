import { LambdaRestApi } from "aws-cdk-lib/aws-apigateway";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";

export class ListingsFinder extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    const listingsFinder = new NodejsFunction(this, "function");
    new LambdaRestApi(this, "listings-finder", {
      handler: listingsFinder,
    });
  }
}
