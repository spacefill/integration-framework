import { WorkflowType } from "../api/APIContext.ts";
import { SchemaInterface } from "../data_mapping/SchemaInterface.ts";

interface GenerateFileTasklnterface<T> {
    initApiClient(workflowType: WorkflowType): void,
    initFilesGeneration(): InitialDataItem<T>[],
    prepareFileData(): Promise<T[]>,
    generateFile(mappedData: object[], tempFilePath: string): Promise<void>,
    sendFile(tempFilePath: string): Promise<string>,
    postAction(): Promise<void>,
    run(): void
}

interface InitialDataItem<T> {
  schema: SchemaInterface<T>,
  targetFileName?: string,
  workflowType: WorkflowType,
  initialData: T[]
}

export { GenerateFileTasklnterface, InitialDataItem };
