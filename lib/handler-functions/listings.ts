import Fuse from "fuse.js";
import { Listing, ListingsApi } from "../../swagger/api";
import { MatchingError } from "./matching-error";

export class ListingsInterface {
  constructor(url: string) {
    this.url = url;
  }
  url: string;
  getUrl(): string {
    return this.url;
  }
  async getAllListings(): Promise<Listing[]> {
    const listingsApi = new ListingsApi(this.url);
    let listings: string[] = [];
    return (await listingsApi.list()).body.items;
  }
  async listingMatcher(
    match: string,
    threshold: number = 0.25
  ): Promise<Listing> {
    const listings = await this.getAllListings();

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
