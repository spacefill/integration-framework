interface CommonSchemaInterface<T> {
  fileDescriptor: ExportFileDescriptor,
  mapFileData(rawData: T[]): object[],
}

interface GenerateFileSchemaInterface {
  itemSchemaValidation: object,
  validateFileData(rawData: object[]): void,
}

interface ExportFileDescriptor {
  csvTotalColumnNumber?: number,
  columnsPosition: object
}

export { GenerateFileSchemaInterface, CommonSchemaInterface, ExportFileDescriptor };