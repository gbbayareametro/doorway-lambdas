import { convertToJSON, lotteryLineIsValid } from "./lottery-file-handling";
import * as fs from "fs";
import { createReadableStreamFromReadable } from "@remix-run/node";
describe("Lottery file functions tests", () => {
  test("converts lottery file to JSON", async () => {
    const file = await fs.readFileSync(
      `${__dirname}/lottery-4280319b-a330-423d-bc02-1b779c60deb2-1721949455065.xlsx`,
      {}
    );
    const array = new Uint8Array(file.buffer);

    const JSONOutput = await convertToJSON(array, "Raw Lottery Rank");

    JSONOutput.forEach((jsonObject) => {
      expect(jsonObject["Application Id"]).not.toEqual(undefined);
    });
  });
  test("Confirms Schema is Valid", async () => {
    const file = await fs.readFileSync(
      `${__dirname}/lottery-4280319b-a330-423d-bc02-1b779c60deb2-1721949455065.xlsx`,
      {}
    );
    const array = await new Uint8Array(file.buffer);

    const JSONOutput = await convertToJSON(array, "Raw Lottery Rank");
    await JSONOutput.forEach((jsonObject) => {
      expect(lotteryLineIsValid(jsonObject)).toBeTruthy();
    });
  });
});
