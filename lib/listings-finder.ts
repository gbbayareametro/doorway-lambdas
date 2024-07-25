import { Duration } from "aws-cdk-lib";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";

export class ListingsFinder extends Construct {
  listingsFinderFunction: NodejsFunction;
  constructor(scope: Construct, id: string) {
    super(scope, id);
    this.listingsFinderFunction = new NodejsFunction(this, "function", {
      timeout: Duration.minutes(5),
    });
  }
}
