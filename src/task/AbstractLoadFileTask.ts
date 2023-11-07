import { EventTypeEnumString } from "../api/EdiEvent.ts";
import ApiNetWorkError from "../exceptions/ApiNetWorkError.ts";
import Console from "../utils/Console.ts";
import { ExceptionUtils } from "../utils/ExceptionUtils.ts";
import { AbstractTask } from "./AbstractTask.ts";
import LoadFileTaskInterface from "./LoadFileTaskInterfaces.ts";

export default abstract class AbstractLoadFileTask<T> extends AbstractTask implements LoadFileTaskInterface<T> {

  async getFilesList(): Promise<string[]> {
    throw new Error("Method not implemented.");
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async prepareData(_fileContent: string): Promise<T[]> {
    throw new Error("Method not implemented.");
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async dataProcessing(_preparedData: T[]): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async postDataProcessing(): Promise<void> {
    Console.debug("No post actions");
  }

  async run(): Promise<void> {
    let errorFound = false;
    try {
      this.beforeRun();

      Console.info(`Starting new task, type: ${this.constructor.name}`);

      Console.info("Api init ----------------------------");
      await this.initApiClient(this.getWorkflowType());

      await this.sdk.client.get_v1_ping_v1_ping_get().then(() => {
        Console.confirm("Api initialized");
      }).catch(() => {
        throw new ApiNetWorkError("Unable to reach the api. Exit.");
      });

      const filesList = await this.getFilesList();

      for (const targetFile of filesList) {
        try {
          Console.info(`Start processing ${targetFile}`);
          this.sdk.dataSource = targetFile;

          Console.info("Download and read file --------------------");
          const fileContent = await this.transfert.downloadAndReadFile(targetFile);
          Console.debug("File content:", fileContent);
          Console.confirm("File content retrieved");

          Console.info("Prepare data --------------------"); // @todo: Continuer avec la preparation des données.
          const preparedData = await this.prepareData(fileContent);
          Console.confirm("Data prepared");

          Console.info("Data processing --------------------");
          await this.dataProcessing(preparedData);
          Console.confirm("Data processed");

          Console.info("Post data processing ---------------");
          await this.postDataProcessing();
          Console.confirm("Post data processing action completed");

        } catch (processFileException) {
          Console.error(processFileException?.message);
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