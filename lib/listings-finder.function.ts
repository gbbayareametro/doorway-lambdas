import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";
import { ListingsInterface } from "./handler-functions/listings";
import { instance } from "./handler-functions/winston.logger";

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  const logger = instance;
  logger.debug(`EVENT:\n ${event}`);
  const doorwayApi = process.env.DOORWAY_API
    ? process.env.DOORWAY_API
    : "https://backend.dev.housingbayarea.mtc.ca.gov";
  const passkey = process.env.PASSKEY ? process.env.PASSKEY : "passkey";
  const maxListings: number = process.env.MAX_LISTINGS
    ? Number(process.env.MAX_LISTINGS)
    : 10000;
  const listings = new ListingsInterface(doorwayApi, passkey, maxListings);

  const listingsQuery = event.queryStringParameters!.listingsQuery
    ? event.queryStringParameters!.listingsQuery
    : "EMPTY";
  logger.info(`Listing Query: ${listingsQuery}`);
  try {
    const listing = await listings.listingMatcher(listingsQuery);
    logger.info(
      `Found ${listing.name}: ${listing.listingsBuildingAddress.street} when searching for ${listingsQuery}`
    );
    return {
      statusCode: 200,
      body: JSON.stringify(listing),
    };
  } catch (err) {
    logger.error(`Ran into error when searching for ${listingsQuery}: ${err}`);
    return {
      statusCode: 500,
      body: JSON.stringify(err),
    };
  }
};
