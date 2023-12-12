import { WorkflowType } from "../api/APIContext.ts";
import { SpacefillAPIWrapperV1 } from "../api/SpacefillAPIWrapperV1.ts";
import { Config } from "../configs/Config.ts";
import { Transfer, TransferProtocol } from "../transfer/Transfer.ts";
import { Argument, BaseCommand } from "./BaseCommand.ts";

export abstract class AbstractTask extends BaseCommand {
  protected sdk: SpacefillAPIWrapperV1;
  protected transfer: Transfer;

  public constructor() {
    super();
    this.sdk = new SpacefillAPIWrapperV1();
    this.transfer = new Transfer(Config.get().transfer.protocol as unknown as TransferProtocol, {
      hostname: Config.get().transfer.hostname as string,
      port: Config.get().transfer.port as number,
      username: Config.get().transfer.username as string,
      password: Config.get().transfer.password as string,
      retries: Config.get().transfer.retries as number,
      delay: Config.get().transfer.delay as number,
    });
  }

  /**
   * This method allows to enrich api call context headers
   */
  getWorkflowType(): WorkflowType {
    throw new Error("Method not implemented.");
  }

  async run(): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async initApiClient(workflowType: WorkflowType) {
    await this.sdk.initClient(
      Config.get().spacefillApi.url,
      Config.get().spacefillApi.apiToken,
      workflowType,
    );
  }

  protected getArgsList(): Argument[] {
    return [
      ...super.getArgsList(),
      {
        argName: "--disable-events",
        argDescription: "Disable edi events emit",
      },
    ];
  }

  protected parseArgs(): void {
    super.parseArgs();

    if (this.argv?.["disable-events"]) {
      process.env.SPACEFILL_API_EVENT_ENABLED = "0";
    }
  }
}
