import { WorkflowType } from "../api/APIContext.ts";

interface GenerateFileTasklnterface<T> {
  initApiClient(workflowType: WorkflowType): void,
  initFilesGeneration(): InitialDataItem<T>[],
  prepareFileData(): Promise<T[]>,
  generateFile(mappedData: object[], tempFilePath: string): Promise<void>,
  sendFile(tempFilePath: string): Promise<string>,
  postFileSending(): Promise<void>,
  run(): void
}

interface InitialDataItem<T> {
  targetFileName?: string,
  initialData: T[]
}

export { GenerateFileTasklnterface, InitialDataItem };
