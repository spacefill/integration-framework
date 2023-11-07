interface LoadFileSchemaInterface<T> {
  mapInputFileData(rawData: object[]): T[],
}

interface GenerateFileSchemaInterface<T> {
  mapOutputFileData(rawData: T[]): object[],
}

interface CommonSchemaInterface {
  itemSchemaValidation: object,
  fileDescriptor: ExportFileDescriptor,
  validateFileData(rawData: object[]): void,
}

interface ExportFileDescriptor {
  csvTotalColumnNumber?: number,
  columnsPosition: object
}

export { GenerateFileSchemaInterface, LoadFileSchemaInterface, ExportFileDescriptor, CommonSchemaInterface };