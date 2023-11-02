import { FileDescriptor } from "./AbstractGenerateFileSchema.ts";

interface GenerateFileSchemaInterface<T> {
  itemSchemaValidation: object,
  fileDescriptor: FileDescriptor,
  mapFileData(rawData: T[]): object[],
  validateFileData(rawData: object[]): void,
}

export { GenerateFileSchemaInterface };