import { WorkflowType } from "../api/APIContext.ts";

interface ExportDataToApiTaskInterface<T> {
  initApiClient(workflowType: WorkflowType): void;
  initDataExport(): Promise<InitialDataItemToExport<T>[]>;
  prepareDataExport(): Promise<T[]>;
  sendData(mappedData: object[]): Promise<void>;
  onSendDataSuccess(): Promise<void>;
  onEnd(): Promise<void>;
  run(): void;
}

interface InitialDataItemToExport<T> {
  initialData: T[];
}

export { InitialDataItemToExport, ExportDataToApiTaskInterface };
