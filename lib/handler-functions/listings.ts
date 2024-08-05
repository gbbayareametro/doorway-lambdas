import Fuse from "fuse.js";

import { MatchingError } from "./custom-errors";
import { instance } from "./winston.logger";
import { Api, Listing } from "../../api/Api";
import { error } from "console";
import { DoorwayInterface } from "./doorway-interface";
import { userInfo } from "os";

export class ListingsInterface {
  constructor(
    user: string,
    password: string,
    url: string,
    passkey: string,
    maxListings: number = 10000
  ) {
    this.url = url;
    this.logger = instance;
    this.maxListings = maxListings;
    this.passkey = passkey;
    this.doorwayInterface = new DoorwayInterface(user, password, url);
  }
  doorwayInterface: DoorwayInterface;
  url: string;
  passkey: string;
  maxListings: number;
  logger: typeof instance;

  getUrl(): string {
    return this.url;
  }
  async getAllListings(): Promise<Listing[]> {
    this.logger.debug("Calling listings API");
    const listings: Listing[] = await this.doorwayInterface.get("/listings");

    this.logger.debug("Here are the listings: ");
    await this.logger.debug(listings);
    return listings;
  }
  async listingMatcher(
    match: string,
    threshold: number = 0.7
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
    this.logger.info(`${result.length} matches found`);
    this.logger.debug(result[0].score);

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
