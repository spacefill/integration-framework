import { temporaryFileTask } from 'tempy';

import { Config } from "../configs/Config.ts";
import Console from "../utils/Console.ts";
import { AbstractTask } from "./AbstractTask.ts";
import { GenerateFileTasklnterface, InitialDataItem } from "./GenerateFileTasklnterfaces.ts";
import { EventTypeEnumString } from '../api/EdiEvent.ts';
import { ExceptionUtils } from '../utils/ExceptionUtils.ts';
import NetWorkError from '../exceptions/NetWorkError.ts';
import IoError from '../exceptions/IoError.ts';
import ApiNetWorkError from '../exceptions/ApiNetWorkError.ts';
import UnknownError from '../exceptions/UnknownError.ts';
import { GenerateFileSchemaInterface } from '../data_mapping/SchemaInterfaces.ts';

export abstract class AbstractGenerateFileTask<T> extends AbstractTask implements GenerateFileTasklnterface<T> {

  protected currentFileConfiguration: InitialDataItem<T>;

  initFilesGeneration(): InitialDataItem<T>[] {
    throw new Error("Method not implemented.");
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getDataSchema() : GenerateFileSchemaInterface<T> {
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

      Console.info("Config validation -------------------");
      Config.validate();
      Console.confirm("Config validated");

      const filesConfiguration = this.initFilesGeneration();

      Console.info("Api init ----------------------------");
      await this.initApiClient(this.getWorkflowType());
      this.sdk.dataSource = 'API';

      await this.sdk.client.get_v1_ping_v1_ping_get().then(() => {
        Console.confirm("Api initialized");
      }).catch(() => {
        throw new ApiNetWorkError("Unable to reach the api. Exit.");
      });

      await this.sdk.ediEvent.send(EventTypeEnumString.STARTED,
        `File generation started. Type=${this.getWorkflowType()}`
      );

      for (const fileConfiguration of filesConfiguration) {
        try {
          this.currentFileConfiguration = fileConfiguration;

          Console.info("Data preparation --------------------");
          const rawData = await this.prepareFileData();
          Console.confirm("Data prepared");

          if (rawData.length === 0) {
            Console.confirm("No data to export. Exit.");
            await this.sdk.ediEvent.send(EventTypeEnumString.NO_CONTENT_SUCCESS,
              `File generation - nothing to export. Type=${this.getWorkflowType()}`
            );
            continue;
          }

          Console.info("Data mapping ------------------------");
          Console.debug(`${rawData?.length} items to map.`);
          const mappedData = this.getDataSchema().mapOutputFileData(rawData);
          Console.confirm("Data mapped");

          Console.info("Data validation ---------------------");
          this.getDataSchema().validateFileData(mappedData);
          Console.confirm("Data validated");

          await temporaryFileTask(async (tempFilePath) => {
            Console.info(`Temporary file: ${tempFilePath}`)
            Console.info("File generation ---------------------");
            try {
              await this.generateFile(mappedData, tempFilePath);
              Console.confirm("File generated");
            } catch (ioException) {
              Console.error(ioException);
              throw new IoError(`Error during generating file ${tempFilePath}`);
            }

            Console.info("File sending ------------------------");
            try {
              const sentFile = await this.sendFile(tempFilePath);
              Console.confirm(`File ${sentFile} well sent.`);
            } catch (networkException) {
              Console.error(networkException);
              throw new NetWorkError(`Error during sending file`);
            }
          });

          Console.info("Post file sending ---------------------");
          await this.postFileSending();
          Console.confirm("Post file sending action done");

        } catch (processFileException) {
          Console.error(processFileException?.message);
          errorFound = true;

          await this.sdk.ediEvent.send(ExceptionUtils.getEventTypeFromException(processFileException),
            `File generation failed. Type=${this.getWorkflowType()}`
          );
        }
      }

      if (errorFound) {
        throw new UnknownError("One or more errors found during the execution");
      } else {
        await this.sdk.ediEvent.send(EventTypeEnumString.SUCCESS,
          `File generation ended. Type=${this.getWorkflowType()}`
        );
      }
    } catch (exception) {
      Console.error(exception?.message);
      this.afterRun();

      if (exception instanceof ApiNetWorkError){
        process.exit(1);
      }
      await this.sdk.ediEvent.send(EventTypeEnumString.PRECONDITION_FAILED_ERROR,
        `File generation failed. Type=${this.getWorkflowType()}`
      );
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
