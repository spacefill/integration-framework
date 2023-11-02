interface LoadFileTaskInterface<T> {
  getFilesList(): Promise<string[]>,
  prepareData(_fileContent: string): Promise<T[]>,
  dataProcessing(_preparedData: T[]): Promise<void>,
  postDataProcessing(): Promise<void>,
}

export default LoadFileTaskInterface;
