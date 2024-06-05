import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { ListingsFinder } from "./listings-finder";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class ListingsFinderStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    new ListingsFinder(this, "listings-finder");
  }
}
