import Fuse from "fuse.js";

import { MatchingError } from "./matching-error";
import { instance } from "./winston.logger";
import { Api, Listing } from "../../api/Api";
import { error } from "console";

export class ListingsInterface {
  constructor(url: string, passkey: string, maxListings: number = 10000) {
    this.url = url;
    this.logger = instance;
    this.maxListings = maxListings;
    this.passkey = passkey;
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
      baseUrl: this.url,
    });
    this.logger.debug("Calling listings API");
    const response = await api.listings.list({
      page: 1,
      limit: this.maxListings,
    });
    if (response.status > 299) {
      if (response.status == 401) {
        this.logger.error(
          `We were unautuhorized to get listings from ${this.url},  Check the environment variables DOORWAY_API and PASSKEY to make sure they are set properly`
        );
        this.logger.error(response.statusText);
        throw new error(
          `We were unautuhorized to get listings from ${this.url}`
        );
      } else {
        this.logger.error(
          `getting all listings from ${this.url} failed with a status code of ${response.status}`
        );
        this.logger.error(response.statusText);
        throw new error(
          `getting all listings from ${this.url} failed with a status code of ${response.status} - ${response.statusText}`
        );
      }
    }
    await this.logger.info(`RESPONSE: \n ${response}`);
    return response.data.items;
  }
  async listingMatcher(
    match: string,
    threshold: number = 0.25
  ): Promise<Listing> {
    this.logger.debug("Getting all the listings.");
    const listings = await this.getAllListings();
    await this.logger.debug(`${listings.length} total listings found`);

    const fuse = new Fuse(listings, {
      keys: ["name", "listingsBuildingAddress.street"],
      isCaseSensitive: false,
      includeScore: true,
      threshold: threshold,
    });
    let result = await fuse.search(match);

    if (result.length == 0) {
      throw new MatchingError({
        name: "NO_MATCH_FOR_LISTING",
        message: `Cant Find Listing ${match}`,
        cause: match,
      });
    }
    return result[0].item;
  }
  async getListing(id: string): Promise<Listing> {
    const api = new Api({
      baseUrl: this.url,
    });
    this.logger.info(`Getting Listing ${id}`);
    const listing = await api.listings.retrieve(id);
    return listing.data;
  }
}
