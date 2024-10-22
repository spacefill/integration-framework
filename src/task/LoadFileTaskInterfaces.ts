export interface FileItemInterface {
  file: string;
  modifiedDate?: Date;
}

export interface LoadFileTaskInterface<T> {
  getFilesList(): Promise<FileItemInterface[]>;
  parseRawData(_fileContent: string): Promise<object[]>;
  dataProcessing(_mappedData: T[]): Promise<void>;
  onProcessingFileSuccess(
    _targetFile: FileItemInterface,
    _preparedData: object[],
    _mappedData: T[],
  ): Promise<void>;
  onProcessingFileError(_targetFile: FileItemInterface): Promise<void>;
}
