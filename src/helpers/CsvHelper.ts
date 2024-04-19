import * as stream from "stream";

import * as csv from "fast-csv";
import { fs } from "zx";

import { Console, InternalError, LoadFileSchemaInterface } from "../index.ts";
import { Config } from "../configs/Config.ts";

export interface CsvOptionsInterface {
  encoding: BufferEncoding;
  delimiter: string;
  rowDelimiter: string;
  /**
   * flags
   * @link https://nodejs.org/api/fs.html#file-system-flags
   */
  flags: string;
}

export class CsvHelper {
  private filePath: string;
  private encoding: BufferEncoding;
  private delimiter: string;
  private rowDelimiter: string;
  private flags: string;

  constructor(
    filePath: string,
    options: CsvOptionsInterface = {
      flags: "a",
      encoding: Config.get().edi.fileEncoding as BufferEncoding,
      delimiter: Config.get().edi.fileColumnDelimiter,
      rowDelimiter: Config.get().edi.fileRowDelimiter,
    },
  ) {
    this.filePath = filePath;
    this.encoding = options.encoding;
    this.flags = options.flags;
    this.delimiter = options.delimiter === "\\t" ? JSON.parse(`"${options.delimiter}"`) : options.delimiter;
    this.rowDelimiter = options.rowDelimiter === "\\t" ? JSON.parse(`"${options.rowDelimiter}"`) : options.rowDelimiter;
  }

  async writeLineAsync(data: Array<string | number>): Promise<void> {
    return await new Promise<void>((resolve, reject) => {
      const rawLine = `${data.join(this.delimiter)}${this.rowDelimiter}`;

      // Stream in append mode.
      const appendWs: fs.WriteStream = fs.createWriteStream(this.filePath, {
        encoding: this.encoding,
        flags: this.flags,
      });

      const readableStream: stream.Readable = stream.Readable.from([rawLine]);
      readableStream.pipe(appendWs);

      appendWs.on("finish", () => {
        resolve();
      });

      appendWs.on("error", (error) => {
        Console.error(error);
        reject(error);
      });
    });
  }

  static async parseRawDataWithDataSchema<T>(
    fileContent: string,
    dataSchema: LoadFileSchemaInterface<T>,
    delimiter: string = ";",
    skipLines: number = 1,
    otherParsingOptions: csv.ParserOptionsArgs = {},
  ): Promise<object[]> {
    const parsedData: object[] = [];
    fileContent = fileContent.trim();

    return await new Promise<object[]>((resolve, reject) => {
      const stream = csv
        .parse({ headers: false, delimiter: delimiter, skipLines: skipLines, ...otherParsingOptions })
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
