import { GenerateFileSchemaInterface } from "./GenerateFileSchemaInterface.ts";
import { AbstractSchema } from "./AbstractSchema.ts";

interface ExportFileDescriptor {
  csvTotalColumnNumber?: number,
  columnsPosition: object
}

export {ExportFileDescriptor};

export abstract class AbstractGenerateFileSchema<T> extends AbstractSchema<T> implements GenerateFileSchemaInterface<T> {
  itemSchemaValidation: object = {};
  fileDescriptor: ExportFileDescriptor;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  mapFileData(_rawData: T[]): object[] {
    throw new Error("Method not implemented.");
  }
}