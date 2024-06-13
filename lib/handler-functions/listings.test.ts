import { Listing } from "../../swagger/api";
import { ListingsInterface } from "./listings";
import { MatchingError } from "./matching-error";
import { server } from "./mockListings";
beforeAll(() => server.listen());

describe("Get All Listings", () => {
  test("Successful Run", async () => {
    const url = "http://doorway";
    let li = new ListingsInterface(url);
    // const listing = li.listingMatcher("Valley Heights");
    // console.log(listing.name);
    const listings = await li.getAllListings();
    expect(listings.length).toBeGreaterThan(0);

    for (var listing in listings) {
      expect(listings[listing]).toBeInstanceOf(Listing);
    }
  });
});
describe("Listings Matcher", () => {
  test("Returns successful search based on partial listing name", async () => {
    const url = "http://doorway";
    let li = new ListingsInterface(url);
    const listing = await li.listingMatcher("Valley");
    expect(listing).toBeInstanceOf(Listing);
    expect(listing.name).toBe("Valley Heights Senior Community");
  });
  test("Returns successful search based on partial listing name with typo", async () => {
    const url = "http://doorway";
    let li = new ListingsInterface(url);
    const listing = await li.listingMatcher("Va113y");
    expect(listing).toBeInstanceOf(Listing);
    expect(listing.name).toBe("Valley Heights Senior Community");
  });
  test("Returns successful search based on address", async () => {
    const url = "http://doorway";
    let li = new ListingsInterface(url);
    const listing = await li.listingMatcher("827 Cerrito");
    expect(listing).toBeInstanceOf(Listing);
    expect(listing.name).toContain("Little Village");
  });
  test("Returns successful search based on address", async () => {
    const url = "http://doorway";
    let li = new ListingsInterface(url);
    const listing = await li.listingMatcher("327 Cerrito");
    expect(listing).toBeInstanceOf(Listing);
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
    const url = "https://doorway";
    let li = new ListingsInterface(url);
  });
});
