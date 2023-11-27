export interface FileItemInterface {
  file: string;
}

export interface LoadFileTaskInterface<T> {
  getFilesList(): Promise<FileItemInterface[]>;
  parseRawData(_fileContent: string): Promise<object[]>;
  dataProcessing(_mappedData: T[]): Promise<void>;
  onProcessingFileSucces(
    _targetFile: FileItemInterface,
    _preparedData: object[],
    _mappedData: T[],
  ): Promise<void>;
  onProcessingFileError(_targetFile: FileItemInterface): Promise<void>;
}
