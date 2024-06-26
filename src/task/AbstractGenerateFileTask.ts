import { temporaryFileTask } from "tempy";
import { path } from "zx";

import { Config } from "../configs/Config.ts";
import { Console } from "../utils/Console.ts";
import { EventTypeEnumString } from "../api/EdiEvent.ts";
import { ExceptionUtils } from "../utils/ExceptionUtils.ts";
import { NetWorkError } from "../exceptions/NetWorkError.ts";
import { IoError } from "../exceptions/IoError.ts";
import { ApiNetWorkError } from "../exceptions/ApiNetWorkError.ts";
import { UnknownError } from "../exceptions/UnknownError.ts";
import { GenerateFileSchemaInterface } from "../data_mapping/SchemaInterfaces.ts";
import { InternalError } from "../exceptions/InternalError.ts";

import { GenerateFileTaskInterface, InitialDataItem } from "./GenerateFileTaskInterfaces.ts";
import { AbstractTask } from "./AbstractTask.ts";

export abstract class AbstractGenerateFileTask<T>
  extends AbstractTask
  implements GenerateFileTaskInterface<T>
{
  protected currentFileConfiguration: InitialDataItem<T> | undefined;

  async initFilesGeneration(): Promise<InitialDataItem<T>[]> {
    throw new Error("Method not implemented.");
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getDataSchema(): GenerateFileSchemaInterface<T> {
    throw new Error("Method not implemented.");
  }

  prepareFileData(): Promise<T[]> {
    throw new Error("Method not implemented.");
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async generateFile(_mappedData: object[], _tempFilePath: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async sendFile(_tempFilePath: string): Promise<string> {
    throw new Error("Method not implemented.");
  }

  async postFileSending(): Promise<void> {
    Console.debug("No post actions");
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
        .catch((exception) => {
          Console.printException(exception);
          throw new ApiNetWorkError("Unable to reach the api. Exit.");
        });

      await this.sdk.ediEvent.send(EventTypeEnumString.STARTED, `File generation started.`);
      const filesConfiguration = await this.initFilesGeneration();

      if (filesConfiguration.length === 0) {
        Console.confirm("No file to generate. Exit.");
        await this.sdk.ediEvent.send(
          EventTypeEnumString.NO_CONTENT_SUCCESS,
          `File generation - no file to generate.`,
        );
      }

      for (const fileConfiguration of filesConfiguration) {
        try {
          this.currentFileConfiguration = fileConfiguration;

          Console.title("Data preparation");
          const rawData = await this.prepareFileData();
          Console.confirm("Data prepared");

          if (rawData.length === 0) {
            Console.confirm("No data to export. Exit.");
            await this.sdk.ediEvent.send(
              EventTypeEnumString.NO_CONTENT_SUCCESS,
              `File generation - nothing to export.`,
            );
            continue;
          }

          Console.title("Data mapping");
          Console.debug(`${rawData?.length} items to map.`);
          const mappedData = this.getDataSchema().mapOutputFileData(rawData);
          Console.confirm("Data mapped");

          Console.title("Data validation");
          this.getDataSchema().validateFileData(mappedData);
          Console.confirm("Data validated");

          let sentFile = "unknown";
          await temporaryFileTask(async (tempFilePath) => {
            Console.info(`Temporary file: ${tempFilePath}`);
            Console.title("File generation");
            try {
              await this.generateFile(mappedData, tempFilePath);
              Console.confirm("File generated");
            } catch (ioException) {
              Console.printException(ioException);
              throw new IoError(`Error during generating file ${tempFilePath}`);
            }

            Console.title("File sending");
            try {
              sentFile = await this.sendFile(tempFilePath);
              Console.confirm(`File ${sentFile} well sent.`);
            } catch (networkException) {
              Console.error(networkException);
              throw new NetWorkError(`Error during sending file`);
            }

            try {
              if (this.currentFileConfiguration?.targetFileName) {
                const fileName = path.basename(this.currentFileConfiguration.targetFileName);
                const targetFileName = `${Config.get().edi.wmsPathArchiveDir}/${fileName}`;
                await this.transfer.upload(tempFilePath, targetFileName);
                Console.confirm(`File ${sentFile} well sent to archives directory.`);
              } else {
                Console.warn("The target file name is not initialized in the current file configuration.");
              }
            } catch (networkException) {
              Console.error(`Error during sending file to archives directory ${networkException}`);
            }
          });
          this.sdk.dataSource = sentFile;

          Console.title("Post file sending");
          await this.postFileSending();
          Console.confirm("Post file sending action done");
        } catch (processFileException) {
          Console.printException(processFileException);
          errorFound = true;

          await this.sdk.ediEvent.send(
            ExceptionUtils.getEventTypeFromException(processFileException as Error),
            `File generation failed.`,
          );
        }
        Console.printLine();
      }
      if (errorFound) {
        throw new UnknownError("One or more errors found during the execution");
      }
    } catch (exception) {
      Console.printException(exception);
      this.afterRun();

      if (exception instanceof ApiNetWorkError) {
        process.exit(1);
      }
      if (this.sdk.ediEvent) {
        await this.sdk.ediEvent.send(
          EventTypeEnumString.PRECONDITION_FAILED_ERROR,
          `File generation failed.`,
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
