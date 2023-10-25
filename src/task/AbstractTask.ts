import { SpacefillAPIWrapperV1 } from "../api/SpacefillAPIWrapperV1.ts";
import type { Client as SpacefillAPIClient } from '../api/spacefill-api-openapi.d.ts';
import { Config } from "../configs/Config.ts";
import { Transfert, TransfertProtocol } from "../transport/Transfert.ts";
import { BaseCommand } from "../utils/BaseCommand.ts";

export abstract class AbstractTask extends BaseCommand {
  protected sdk: SpacefillAPIClient;
  protected transfert: Transfert;

  public constructor() {
    super();
    this.transfert = new Transfert(
      Config.get().transfert.protocol as unknown as TransfertProtocol,
      {
        hostname: Config.get().transfert.hostname,
        port: Config.get().transfert.port,
        username: Config.get().transfert.username,
        password: Config.get().transfert.password,
      }
    )
  }

  async initApiClient() {
    this.sdk = await SpacefillAPIWrapperV1.initClient(
      Config.get().spacefillApi.url,
      Config.get().spacefillApi.apiToken
    );
  }
}