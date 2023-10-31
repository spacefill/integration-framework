import { WorkflowType } from "../api/APIContext.ts";
import { SchemaInterface } from "../data_mapping/SchemaInterface.ts";

interface GenerateFileTasklnterface<T> {
    getWorkflowType(): WorkflowType,
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
  initialData: T[]
}

export { GenerateFileTasklnterface, InitialDataItem };
