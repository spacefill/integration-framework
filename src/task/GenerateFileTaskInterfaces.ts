import { WorkflowType } from "../api/APIContext.ts";

interface GenerateFileTaskInterface<T> {
  initApiClient(workflowType: WorkflowType): void;
  initFilesGeneration(): Promise<InitialDataItem<T>[]>;
  prepareFileData(): Promise<T[]>;
  generateFile(mappedData: object[], tempFilePath: string): Promise<void>;
  sendFile(tempFilePath: string): Promise<string>;
  postFileSending(): Promise<void>;
  run(): void;
}

interface InitialDataItem<T> {
  targetFileName?: string;
  initialData: T[];
}

export { GenerateFileTaskInterface, InitialDataItem };
