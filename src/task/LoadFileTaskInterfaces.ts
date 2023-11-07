import { AbstractLoadFileSchema } from "../data_mapping/AbstractLoadFileSchema.ts";

interface FileItemInterface<T> {
  file: string,
  schema: AbstractLoadFileSchema<T>
}

export { FileItemInterface };

interface LoadFileTaskInterface<T> {
  getFilesList(): Promise<FileItemInterface<T>[]>,
  parseRawData(_fileContent: string): Promise<object[]>,
  dataProcessing(_preparedData: T[]): Promise<void>,
  postDataProcessing(): Promise<void>,
}

export default LoadFileTaskInterface;
