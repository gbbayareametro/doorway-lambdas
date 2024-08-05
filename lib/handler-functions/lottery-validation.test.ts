import { convertToJSON } from "./lottery-file-handling";
import { LotteryValidator } from "./lottery-validation";
import * as fs from "fs";
import { startDoorway } from "./mockDoorway";
import mockAppsForListing from "./getApplicationsForListingMockResponse.json";
import mockAppsForListingBAD from "./getApplicationsForListingMock_BAD_Response.json";
import { Application } from "../../api/Api";
beforeAll(() => {
  startDoorway();
});
describe("ValidateLottery", () => {
  test("Confirms Schema is Valid", async () => {
    const file = fs.readFileSync(
      `${__dirname}/lottery-4280319b-a330-423d-bc02-1b779c60deb2-1721949455065.xlsx`,
      {}
    );
    const array = new Uint8Array(file.buffer);

    const JSONOutput = await convertToJSON(array, "Raw");
    const validator = new LotteryValidator(
      "good.user@gooduser.com",
      "goodpassword",
      "https://doorway"
    );
    const applications: Application[] = mockAppsForListing.items!;

    JSONOutput.forEach((jsonObject) => {
      const app: Application | undefined = applications.find(
        (application: Application) =>
          application.id === jsonObject["Application Id"]
      );

      expect(validator.fixedFieldsAreValid(jsonObject, app!)).toBeTruthy();
    });
  });
  test("Fail when Schema is invalid", async () => {
    const file = await fs.readFileSync(
      `${__dirname}/lottery-4280319b-a330-423d-bc02-1b779c60deb2-1721949455065.xlsx`,
      {}
    );
    const array = await new Uint8Array(file.buffer);
    const JSONOutput = await convertToJSON(array, "Raw");
    const validator = new LotteryValidator(
      "good.user@gooduser.com",
      "goodpassword",
      "https://doorway"
    );
    const applications: Application[] = mockAppsForListingBAD.items!;
    JSONOutput.forEach((jsonObject) => {
      const app: Application | undefined = applications.find(
        (application: Application) =>
          application.id === jsonObject["Application Id"]
      );
      expect(validator.fixedFieldsAreValid(jsonObject, app!)).toBeFalsy();
    });
  });
});
