import { path } from "zx";

import { EventTypeEnumString } from "../api/EdiEvent.ts";
import { LoadFileSchemaInterface } from "../data_mapping/SchemaInterfaces.ts";
import { ApiNetWorkError } from "../exceptions/ApiNetWorkError.ts";
import { InternalError } from "../exceptions/InternalError.ts";
import { Console } from "../utils/Console.ts";
import { ExceptionUtils } from "../utils/ExceptionUtils.ts";
import { AbstractTask } from "./AbstractTask.ts";
import { LoadFileTaskInterface, FileItemInterface } from "./LoadFileTaskInterfaces.ts";
import { Config } from "../index.ts";

export abstract class AbstractLoadFileTask<T> extends AbstractTask implements LoadFileTaskInterface<T> {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getDataSchema(): LoadFileSchemaInterface<T> {
    throw new Error("Method not implemented.");
  }

  async getFilesList(): Promise<FileItemInterface[]> {
    throw new Error("Method not implemented.");
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async parseRawData(_fileContent: string): Promise<object[]> {
    throw new Error("Method not implemented.");
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async dataProcessing(_mappedData: T[]): Promise<void> {
    throw new Error("Method not implemented.");
  }
  /* eslint-disable @typescript-eslint/no-unused-vars */
  async onProcessingFileSuccess(
    targetFile: FileItemInterface,
    _preparedData: object[],
    _mappedData: T[],
  ): Promise<void> {
    Console.info(`onProcessingFileSuccess not implemented. Nothing to do on ${targetFile.file}.`);
  }
  /* eslint-enable */

  async onProcessingFileError(targetFile: FileItemInterface): Promise<void> {
    Console.info(`onProcessingFileError not implemented. Nothing to do on ${targetFile.file}`);
  }

  async run(): Promise<void> {
    let errorFound = false;
    try {
      this.beforeRun();

      Console.info(`Starting new task, type: ${this.constructor.name}`);

      Console.title("Config validation");
      Config.validate();
      Console.confirm("Config validated");

      Console.title("Api init");
      await this.initApiClient(this.getWorkflowType());

      if (!this.sdk.client || !this.sdk.ediEvent) {
        throw new InternalError("SDK is not well initialized - client or ediEvent missing");
      }

      await this.sdk.client
        .get_v1_ping()
        .then(() => {
          Console.confirm("Api initialized");
        })
        .catch(() => {
          throw new ApiNetWorkError("Unable to reach the api. Exit.");
        });

      const filesList = await this.getFilesList();

      for (const targetFileItem of filesList) {
        try {
          await this.transfer.moveFile(
            targetFileItem.file,
            `${targetFileItem.file}.${Config.get().edi.runId}`,
          );
          targetFileItem.file = `${targetFileItem.file}.${Config.get().edi.runId}`;
          Console.info(`Start processing ${targetFileItem.file}`);
          this.sdk.dataSource = path.basename(targetFileItem.file);

          Console.title("Download and read file");
          const fileContent = await this.transfer.downloadAndReadFile(targetFileItem.file);
          Console.trace("File content:", fileContent);
          Console.confirm("File content retrieved");

          Console.title("Prepare data");
          const preparedData = await this.parseRawData(fileContent);
          Console.trace("Prepared data:", preparedData);
          Console.confirm("Data prepared");

          Console.title("Data validation");
          this.getDataSchema().validateFileData(preparedData as object[]);
          Console.confirm("Data validated");

          Console.title("Data mapping");
          Console.debug(`${preparedData?.length} items to map.`);
          const mappedData = this.getDataSchema().mapInputFileData(preparedData);
          Console.trace("Mapped data:", mappedData);
          Console.confirm("Data mapped");

          Console.title("Data processing");
          await this.dataProcessing(mappedData);
          Console.confirm("Data processed");

          Console.title("Post data processing");
          await this.onProcessingFileSuccess(targetFileItem, preparedData, mappedData);
          Console.confirm("Post data processing action completed");

          await this.sdk.ediEvent.send(
            EventTypeEnumString.SUCCESS,
            `File correctly loaded. Type=${this.getWorkflowType()}`,
          );
        } catch (processFileException) {
          Console.error(processFileException);
          errorFound = true;
          await this.sdk.ediEvent.send(
            ExceptionUtils.getEventTypeFromException(processFileException as Error),
            `File loading failed. Type=${this.getWorkflowType()}`,
          );
          await this.onProcessingFileError(targetFileItem);
        }
      }
    } catch (exception) {
      Console.error(exception);
      this.afterRun();

      if (exception instanceof ApiNetWorkError) {
        process.exit(1);
      }
      if (this.sdk.ediEvent) {
        await this.sdk.ediEvent.send(
          EventTypeEnumString.PRECONDITION_FAILED_ERROR,
          `File generation failed. Type=${this.getWorkflowType()}`,
        );
      }
      process.exit(1);
    }

    this.afterRun();

    if (errorFound) {
      Console.error("Task completed with errors");
      process.exit(1);
    } else {
      Console.confirm("Task completed with success");
    }
  }
}
