import { FileDescriptor } from "./AbstractSchema.ts";

interface SchemaInterface<T> {
  itemSchemaValidation: object,
  fileDescriptor: FileDescriptor,
  mapFileData(rawData: T[]): object[],
  validateFileData(rawData: object[]): void,
}

export { SchemaInterface };