import { EventTypeEnumString } from "../api/EdiEvent.ts";
import { LoadFileSchemaInterface } from "../data_mapping/SchemaInterfaces.ts";
import ApiNetWorkError from "../exceptions/ApiNetWorkError.ts";
import Console from "../utils/Console.ts";
import { ExceptionUtils } from "../utils/ExceptionUtils.ts";
import { AbstractTask } from "./AbstractTask.ts";
import LoadFileTaskInterface, { FileItemInterface } from "./LoadFileTaskInterfaces.ts";

export default abstract class AbstractLoadFileTask<T> extends AbstractTask implements LoadFileTaskInterface<T> {

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getDataSchema() : LoadFileSchemaInterface<T> {
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async postDataProcessing(_preparedData: object[], _mappedData: T[]): Promise<void> {
    Console.debug("No post actions");
  }

  async run(): Promise<void> {
    let errorFound = false;
    try {
      this.beforeRun();

      Console.info(`Starting new task, type: ${this.constructor.name}`);

      Console.title("Api init");
      await this.initApiClient(this.getWorkflowType());

      await this.sdk.client.get_v1_ping_v1_ping_get().then(() => {
        Console.confirm("Api initialized");
      }).catch(() => {
        throw new ApiNetWorkError("Unable to reach the api. Exit.");
      });

      const filesList = await this.getFilesList();

      for (const targetFileItem of filesList) {
        try {
          const targetFile = targetFileItem.file;
          Console.info(`Start processing ${targetFile}`);
          this.sdk.dataSource = targetFile;

          Console.title("Download and read file");
          const fileContent = await this.transfert.downloadAndReadFile(targetFile);
          Console.trace("File content:", fileContent);
          Console.confirm("File content retrieved");

          Console.title("Prepare data");
          const preparedData = await this.parseRawData(fileContent);
          Console.trace("Prepared data:", preparedData);
          Console.confirm("Data prepared");

          Console.title("Data mapping");
          Console.debug(`${preparedData?.length} items to map.`);
          const mappedData = this.getDataSchema().mapInputFileData(preparedData);
          Console.trace("Mapped data:", mappedData);
          Console.confirm("Data mapped");

          Console.title("Data processing");
          await this.dataProcessing(mappedData);
          Console.confirm("Data processed");

          Console.title("Post data processing");
          await this.postDataProcessing(preparedData, mappedData);
          Console.confirm("Post data processing action completed");

        } catch (processFileException) {
          Console.error(processFileException);
          errorFound = true;

          await this.sdk.ediEvent.send(ExceptionUtils.getEventTypeFromException(processFileException),
            `File loading failed. Type=${this.getWorkflowType()}`
          );
        }
      }

    } catch (exception) {
      Console.error(exception?.message);
      this.afterRun();

      if (exception instanceof ApiNetWorkError) {
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