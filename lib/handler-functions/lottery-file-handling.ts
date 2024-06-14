import * as exceljs from "exceljs";
import * as joi from "joi";
export const convertToJSON = async (
  filePath: string,
  worksheetName: string
): Promise<object[]> => {
  let workbook = new exceljs.Workbook();
  workbook = await workbook.xlsx.readFile(filePath);

  const rows: object[] = [];
  const worksheet = workbook.getWorksheet(worksheetName);
  const rowcount = worksheet?.getColumn(1)["_worksheet"]["_rows"].length;
  const header = worksheet?.getRow(1);

  worksheet?.getRows(2, rowcount)?.forEach((row: exceljs.Row) => {
    let cellCount = header?.cellCount != undefined ? header?.cellCount : 1;
    let rowJson = {};
    for (let i = 1; i < cellCount; i++) {
      let key =
        header?.getCell(i).text != undefined ? header.getCell(i).text : "";
      rowJson[key] = row.getCell(i).text;
    }
    if (rowJson["Application Id"] != "") {
      rows.push(rowJson);
    }
  });

  return rows;
};
export const lotteryLineIsValid = (json: object): boolean => {
  const schema = joi.object({
    "Application Id": joi.string().guid(),
    "Application Confirmation Code": joi.string(),
    "Raw Lottery Rank": joi.string().regex(/^\d+$/),
    "Household Size": joi.string().regex(/^\d+$/),
    "Application Type": joi.string().valid("electronic", "paper"),
    "Application Submission Date": joi.string(),
    "Primary Applicant First Name": joi.string(),
    "Primary Applicant Last Name": joi.string(),
    "Primary Applicant Birthday": joi.string(),
    "Primary Applicant Email Address": joi.string(),
    "Primary Applicant Phone Number": joi.string().allow(""),
    "Primary Applicant Phone Type": joi.string().allow(""),
    "Primary Applicant Additional Phone Number": joi.string().allow(""),
    "Primary Applicant Preferred Contact Type": joi.string().allow(""),
    "Primary Applicant Street": joi.string(),
    "Primary Applicant Street 2": joi.string().allow(""),
    "Primary Applicant City": joi.string(),
    "Primary Applicant State": joi.string(),
    "Primary Applicant Zip Code": joi.string(),
    "Primary Applicant Mailing Street": joi.string().allow(""),
    "Primary Applicant Mailing Street 2": joi.string().allow(""),
    "Primary Applicant Mailing City": joi.string().allow(""),
    "Primary Applicant Mailing State": joi.string().allow(""),
    "Primary Applicant Mailing Zip Code": joi.string().allow(""),
    "Primary Applicant Work Street": joi.string().allow(""),
    "Primary Applicant Work Street 2": joi.string().allow(""),
    "Primary Applicant Work City": joi.string().allow(""),
    "Primary Applicant Work State": joi.string().allow(""),
    "Primary Applicant Work Zip Code": joi.string().allow(""),
    Race: joi.string().allow(""),
    Ethnicity: joi.string().allow(""),
    "Alternate Contact First Name": joi.string().allow(""),
    "Alternate Contact Middle Name": joi.string().allow(""),
    "Alternate Contact Last Name": joi.string().allow(""),
    "Alternate Contact Type": joi.string().allow(""),
    "Alternate Contact Email Address": joi.string().allow(""),
    "Alternate Contact Phone Number": joi.string().allow(""),
    "Alternate Contact Street": joi.string().allow(""),
    "Alternate Contact Street 2": joi.string().allow(""),
    "Alternate Contact City": joi.string().allow(""),
    "Alternate Contact State": joi.string().allow(""),
    "Alternate Contact Zip Code": joi.string().allow(""),
    "Alternate Contact Agency": joi.string().allow(""),
    "Alternate Contact Other Type": joi.string().allow(""),
    Income: joi.string(),
    "Income Period": joi.string(),
    "Accessibility Mobility": joi.string().valid("Yes", "No"),
    "Accessibility Vision": joi.string().valid("Yes", "No"),
    "Accessibility Hearing": joi.string().valid("Yes", "No"),
    "Expecting Household Changes": joi.string().valid("Yes", "No"),
    "Marked As Duplicate": joi.string().valid("Yes", "No"),
    "Flagged As Duplicate": joi.string().valid("Yes", "No"),

    "Household Includes Student or Member Nearing 18": joi
      .string()
      .valid("Yes", "No"),
    "Vouchers or Subsidies": joi.string().valid("Yes", "No"),
    "Requested Unit Types": joi
      .string()
      .valid(
        "Studio",
        "One Bedroom",
        "Two Bedroom",
        "Three Bedroom",
        "Four Bedroom"
      ),
    "Preference:  Live/Work in San Jose ": joi.string(),
    "Preference: San Jose Anti-Displacement Preference": joi.string(),
    "Preference: San Jose Anti-Displacement Preference I would like to be considered for this preference - Address":
      joi.string().allow(""),
    "Household Members (1) First Name": joi.string().allow(""),
    "Household Members (1) Middle Name": joi.string().allow(""),
    "Household Members (1) Last Name": joi.string().allow(""),
    "Household Members (1) Birthday": joi.string().allow(""),
    "Household Members (1) Same Address as Primary Applicant": joi
      .string()
      .valid("Yes", "No"),
    "Household Members (1) Relationship": joi.string().allow(""),
    "Household Members (1) Work in Region": joi.string().valid("Yes", "No"),
    "Household Members (1) Street": joi.string().allow(""),
    "Household Members (1) Street 2": joi.string().allow(""),
    "Household Members (1) City": joi.string().allow(""),
    "Household Members (1) State": joi.string().allow(""),
    "Household Members (1) Zip Code": joi.string().allow(""),
  });
  const { error, value } = schema.validate(json);
  if (error == undefined) {
    return true;
  } else {
    throw error;
  }
};
