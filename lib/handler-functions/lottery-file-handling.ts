import * as exceljs from "exceljs";
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
export const lotterySchemaValidator = (json: object): boolean => {
  return true;
};
