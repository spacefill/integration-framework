import { CommonSchemaInterface, ExportFileDescriptor } from "./SchemaInterfaces.ts";

export abstract class AbstractLoadFileSchema<T> implements CommonSchemaInterface<T>{
  fileDescriptor: ExportFileDescriptor;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  mapFileData(_rawData: T[]): object[] {
    throw new Error("Method not implemented.");
  }
}
