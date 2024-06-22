import { ListingsInterface } from "./listings";
import { MatchingError } from "./matching-error";
import { server } from "./mockListings";
import { Listing } from "../../api/Api";
beforeAll(() => server.listen());

describe("Get All Listings", () => {
  test("Successful Run", async () => {
    const url = "http://doorway";
    const passkey = "testkey";
    let li = new ListingsInterface(url, passkey);
    // const listing = li.listingMatcher("Valley Heights");
    // console.log(listing.name);
    const listings = await li.getAllListings();
    expect(listings.length).toBeGreaterThan(0);

    for (var listing in listings) {
    }
  });
});
describe("Listings Matcher", () => {
  test("Returns successful search based on partial listing name", async () => {
    const url = "http://doorway";
    const passkey = "testkey";
    let li = new ListingsInterface(url, passkey);
    const listing = await li.listingMatcher("Valley");
    expect(listing.name).toBe("Valley Heights Senior Community");
  });
  test("Returns successful search based on partial listing name with typo", async () => {
    const url = "http://doorway";
    const passkey = "testkey";
    let li = new ListingsInterface(url, passkey);
    const listing = await li.listingMatcher("Va113y");
    expect(listing.name).toBe("Valley Heights Senior Community");
  });
  test("Returns successful search based on address", async () => {
    const url = "http://doorway";
    const passkey = "testkey";
    let li = new ListingsInterface(url, passkey);
    const listing = await li.listingMatcher("827 Cerrito");

    expect(listing.name).toContain("Little Village");
  });
  test("Returns successful search based on address", async () => {
    const url = "http://doorway";
    const passkey = "testkey";
    let li = new ListingsInterface(url, passkey);
    const listing = await li.listingMatcher("327 Cerrito");
    expect(listing.name).toContain("Little Village");
  });

  // test("Throws exception on unrecognizable result", async () => {
  //   async function thisShouldFail() {
  //     const url = "http://doorway";
  //     let li = new ListingsInterface(url);
  //     await li.listingMatcher("asdfasdfasdf");
  //   }
  //   expect(thisShouldFail).toThrow(MatchingError);
  // });
});
describe("Get an Individual Listing", () => {
  test("Successfully gets a listing", () => {
    const url = "http://doorway";
    const passkey = "testkey";
    let li = new ListingsInterface(url, passkey);
  });
});
