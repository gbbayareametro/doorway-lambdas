import Fuse from "fuse.js";
import {
  Listing,
  ListingFilterParams,
  ListingsApi,
  ListingsStatusEnum,
} from "../../swagger/api";
import { MatchingError } from "./matching-error";
import { instance } from "./winston.logger";

export class ListingsInterface {
  constructor(url: string) {
    this.url = url;
    this.logger = instance;
  }
  url: string;
  logger: typeof instance;
  getUrl(): string {
    return this.url;
  }
  async getAllListings(): Promise<Listing[]> {
    const listingsApi = new ListingsApi(this.url);

    let listings: string[] = [];
    const filter = new ListingFilterParams();
    filter.status = ListingsStatusEnum.Active;
    return (await listingsApi.list(1, 10000, [filter])).body.items;
  }
  async listingMatcher(
    match: string,
    threshold: number = 0.25
  ): Promise<Listing> {
    const listings = await this.getAllListings();
    await this.logger.debug(`${listings.length} total listings found`);

    const fuse = new Fuse(listings, {
      keys: ["name", "listingsBuildingAddress.street"],
      isCaseSensitive: false,
      includeScore: true,
    });
    let result = fuse.search(match);

    if (result.length == 0) {
      throw new MatchingError({
        name: "NO_MATCH_FOR_LISTING",
        message: `Cant Find Listing ${match}`,
        cause: match,
      });
    }
    return result[0].item;
  }
}
