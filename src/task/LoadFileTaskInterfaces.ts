interface FileItemInterface {
  file: string,
}

export { FileItemInterface };

interface LoadFileTaskInterface<T> {
  getFilesList(): Promise<FileItemInterface[]>,
  parseRawData(_fileContent: string): Promise<object[]>,
  dataProcessing(_preparedData: T[]): Promise<void>,
  postDataProcessing(): Promise<void>,
}

export default LoadFileTaskInterface;
