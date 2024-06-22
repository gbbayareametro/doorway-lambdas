import Fuse from "fuse.js";

import { MatchingError } from "./matching-error";
import { instance } from "./winston.logger";
import { Api, Listing } from "../../api/Api";

export class ListingsInterface {
  constructor(url: string, passkey: string, maxListings: number = 10000) {
    this.url = url;
    this.logger = instance;
    this.maxListings = maxListings;
  }
  url: string;
  passkey: string;
  maxListings: number;
  logger: typeof instance;

  getUrl(): string {
    return this.url;
  }
  async getAllListings(): Promise<Listing[]> {
    const api = new Api({
      baseURL: this.url,
      headers: { passkey: this.passkey },
    });
    return (await api.listings.list({ page: 1, limit: this.maxListings })).data
      .items;
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
