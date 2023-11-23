interface LoadFileSchemaInterface<T> extends CommonSchemaInterface {
  mapInputFileData(rawData: object[]): T[],
}

interface GenerateFileSchemaInterface<T> extends CommonSchemaInterface {
  mapOutputFileData(rawData: T[]): object[],
}

interface CommonSchemaInterface {
  itemSchemaValidation: object,
  fileDescriptor: ExportFileDescriptor | undefined,
  validateFileData(rawData: object[]): void,
}

interface ExportFileDescriptor {
  csvTotalColumnNumber?: number,
  columnsPosition: object
}

export { GenerateFileSchemaInterface, LoadFileSchemaInterface, ExportFileDescriptor, CommonSchemaInterface };