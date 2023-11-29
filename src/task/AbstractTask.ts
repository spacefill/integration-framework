import { WorkflowType } from "../api/APIContext.ts";
import { SpacefillAPIWrapperV1 } from "../api/SpacefillAPIWrapperV1.ts";
import { Config } from "../configs/Config.ts";
import { Transfert, TransfertProtocol } from "../transfert/Transfert.ts";
import { Argument, BaseCommand } from "./BaseCommand.ts";

export abstract class AbstractTask extends BaseCommand {
  protected sdk: SpacefillAPIWrapperV1;
  protected transfert: Transfert;

  public constructor() {
    super();
    this.sdk = new SpacefillAPIWrapperV1();
    this.transfert = new Transfert(Config.get().transfert.protocol as unknown as TransfertProtocol, {
      hostname: Config.get().transfert.hostname as string,
      port: Config.get().transfert.port as number,
      username: Config.get().transfert.username as string,
      password: Config.get().transfert.password as string,
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
