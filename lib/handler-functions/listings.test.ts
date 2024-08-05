import { Listing } from "../../api/Api";
import { DoorwayInterface } from "./doorway-interface";
import { ListingsInterface } from "./listings";
import { MatchingError } from "./custom-errors";
import { startDoorway } from "./mockDoorway";

beforeAll(() => startDoorway());

describe("Get All Listings", () => {
  test("Successful Run", async () => {
    const url = "https://doorway";
    const passkey = "testkey";
    const user = "good.user@gooduser.com";
    const password = "goodpassword";
    const listingsInterface = new ListingsInterface(
      user,
      password,
      url,
      passkey
    );
    const listings: Listing[] = await listingsInterface.getAllListings();
    expect(listings.length).toBe(6);
  });
  describe("Listings Matcher", () => {
    test("Returns successful search based on partial listing name", async () => {
      const url = "https://doorway";
      const passkey = "testkey";
      const user = "good.user@gooduser.com";
      const password = "goodpassword";
      let li = new ListingsInterface(user, password, url, passkey);
      const listing = await li.listingMatcher("Valley");
      expect(listing.name).toBe("Valley Heights Senior Community");
    });
    test("Returns successful search based on partial listing name with typo", async () => {
      const url = "https://doorway";
      const passkey = "testkey";
      const user = "good.user@gooduser.com";
      const password = "goodpassword";
      let li = new ListingsInterface(user, password, url, passkey);
      const listing = await li.listingMatcher("Va113y");
      expect(listing.name).toBe("Valley Heights Senior Community");
    });
    test("Returns successful search based on address", async () => {
      const url = "https://doorway";
      const passkey = "testkey";
      const user = "good.user@gooduser.com";
      const password = "goodpassword";
      let li = new ListingsInterface(user, password, url, passkey);
      const listing = await li.listingMatcher("827 Cerrito");

      expect(listing.name).toContain("Little Village");
    });
    test("Returns successful search based on address", async () => {
      const url = "https://doorway";
      const passkey = "testkey";
      const user = "good.user@gooduser.com";
      const password = "goodpassword";
      let li = new ListingsInterface(user, password, url, passkey);
      const listing = await li.listingMatcher("327 Cerrito");
      expect(listing.name).toContain("Little Village");
    });

    //   // test("Throws exception on unrecognizable result", async () => {
    //   //   async function thisShouldFail() {
    //   //     const url = "https://doorway";
    //   //     let li = new ListingsInterface(url);
    //   //     await li.listingMatcher("asdfasdfasdf");
    //   //   }
    //   //   expect(thisShouldFail).toThrow(MatchingError);
    //   // });
    // });
    // describe("Get an Individual Listing", () => {
    //   test("Successfully gets a listing", () => {
    //     const url = "https://doorway";
    //     const passkey = "testkey";
    //     const user = "good.user@gooduser.com";
    //     const password = "goodpassword";
    //     let li = new ListingsInterface(user, password, url, passkey);
  });
});
