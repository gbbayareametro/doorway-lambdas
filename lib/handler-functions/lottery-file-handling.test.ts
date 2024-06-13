import { convertToJSON, lotterySchemaValidator } from "./lottery-file-handling";

describe("Lottery file functions tests", () => {
  test("converts lottery file to JSON", async () => {
    const JSONOutput = await convertToJSON(
      `${__dirname}/mockLottery.xlsx`,
      "Raw Lottery Rank"
    );

    JSONOutput.forEach((jsonObject) => {
      expect(jsonObject["Application Id"]).not.toEqual(undefined);
    });
  });
  test("Confirms Schema is Valid", async () => {
    const JSONOutput = await convertToJSON(
      `${__dirname}/mockLottery.xlsx`,
      "Raw Lottery Rank"
    );
    JSONOutput.forEach((jsonObject) => {
      expect(lotterySchemaValidator(jsonObject)).toBeTruthy();
    });
  });
});
