import { Listing } from "../../api/Api";
import { DoorwayInterface } from "./doorway-interface";
import { DoorwayLogin } from "./doorway-login";
import { startDoorway } from "./mockDoorway";

beforeAll(() => {
  startDoorway();
});
describe("Test of Get function", () => {
  test("Successful Get", async () => {
    const doorway = new DoorwayInterface(
      "good.user@gooduser.com",
      "goodpassword",
      "https://doorway"
    );
    const listings: Listing[] = await doorway.get("/listings");
    expect(listings.length).toBe(6);
  });
});
