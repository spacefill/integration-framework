interface FileItemInterface {
  file: string,
}

export { FileItemInterface };

interface LoadFileTaskInterface<T> {
  getFilesList(): Promise<FileItemInterface[]>,
  parseRawData(_fileContent: string): Promise<object[]>,
  dataProcessing(_mappedData: T[]): Promise<void>,
  postDataProcessing(_preparedData: object[], _mappedData: T[]): Promise<void>,
}

export default LoadFileTaskInterface;
