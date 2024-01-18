import * as csv from "fast-csv";

import { Console, InternalError, LoadFileSchemaInterface } from "../index.ts";

export class CsvHelper {
  static async parseRawDataWithDataSchema<T>(
    fileContent: string,
    dataSchema: LoadFileSchemaInterface<T>,
    delimiter: string = ";",
    skipLines: number = 1,
  ): Promise<object[]> {
    const parsedData: object[] = [];
    fileContent = fileContent.trim();

    return await new Promise<object[]>((resolve, reject) => {
      const stream = csv
        .parse({ headers: false, delimiter: delimiter, skipLines: skipLines })
        .on("error", (error) => {
          Console.error(error);
          reject(error);
        })
        .on("data", (row) => {
          const itemWithColumns = {};
          if (Object.keys(row).length === 1) {
            throw new InternalError(
              "Data mapping: only 1 column per item, wrong delimiter configuration suspected.",
            );
          }
          // Map data with columns defined in the data schema
          Object.keys(dataSchema?.fileDescriptor?.columnsPosition ?? []).forEach((columnKey) => {
            itemWithColumns[columnKey] = row[dataSchema?.fileDescriptor?.columnsPosition[columnKey]];
          });

          parsedData.push(itemWithColumns);
        })
        .on("end", (rowCount: number) => {
          Console.info(`Parsed ${rowCount} rows`);
          return resolve(parsedData);
        });
      stream.write(fileContent);
      stream.end();
    });
  }
}
