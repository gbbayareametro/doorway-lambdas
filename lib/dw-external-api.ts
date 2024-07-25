import {
  JsonSchemaType,
  LambdaIntegration,
  Model,
  RestApi,
} from "aws-cdk-lib/aws-apigateway";
import { Construct } from "constructs";
import { ListingsFinder } from "./listings-finder";
import { Stack } from "aws-cdk-lib";
import { PaperAppGateway } from "./paper-app-gateway";
export class DwExternalApi extends Stack {
  constructor(scope: Construct, id: string) {
    super(scope, id);
    const listingsFinder = new ListingsFinder(this, "listings-finder");
    const api = new RestApi(this, "dw-rest-api");
    const listings = api.root.addResource("listingsfinder");

    listings.addMethod(
      "GET",
      new LambdaIntegration(listingsFinder.listingsFinderFunction)
    );

    const paperAppGateway = new PaperAppGateway(this, "paper-apps");
    const paperApps = api.root.addResource("paper-apps");
    paperApps.addMethod(
      "POST",
      new LambdaIntegration(paperAppGateway.paperAppGWFunction)
    );
  }
}
