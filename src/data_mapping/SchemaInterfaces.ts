// EDI
interface LoadFileSchemaInterface<T> extends CommonFileSchemaInterface {
  mapInputFileData(rawData: object[]): T[];
}

interface GenerateFileSchemaInterface<T> extends CommonFileSchemaInterface {
  mapOutputFileData(rawData: T[]): object[];
}

interface CommonFileSchemaInterface extends CommonSchemaInterface {
  fileDescriptor: ExportFileDescriptor | undefined;
}

interface CommonSchemaInterface {
  itemSchemaValidation: object;
  validateFileData(rawData: object[]): void;
}

interface ExportFileDescriptor {
  csvTotalColumnNumber?: number;
  columnsPosition: object;
}

// API-to-API
interface DataExportSchemaInterface<T> extends CommonSchemaInterface {
  mapDataToExport(rawData: T[]): object[];
}

export {
  DataExportSchemaInterface,
  GenerateFileSchemaInterface,
  LoadFileSchemaInterface,
  ExportFileDescriptor,
  CommonSchemaInterface,
};
