import { convertToJSON, lotteryLineIsValid } from "./lottery-file-handling";
import * as fs from "fs";
import { createReadableStreamFromReadable } from "@remix-run/node";
describe("Lottery file functions tests", () => {
  test("converts lottery file to JSON", async () => {
    const file = await fs.readFileSync(`${__dirname}/mockLottery.xlsx`, {});
    const array = new Uint8Array(file.buffer);

    const JSONOutput = await convertToJSON(array, "Raw Lottery Rank");

    JSONOutput.forEach((jsonObject) => {
      expect(jsonObject["Application Id"]).not.toEqual(undefined);
    });
  });
  test("Confirms Schema is Valid", async () => {
    const file = await fs.readFileSync(`${__dirname}/mockLottery.xlsx`, {});
    const array = await new Uint8Array(file.buffer);

    const JSONOutput = await convertToJSON(array, "Raw Lottery Rank");
    await JSONOutput.forEach((jsonObject) => {
      expect(lotteryLineIsValid(jsonObject)).toBeTruthy();
    });
  });
});
