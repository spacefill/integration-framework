import { SpacefillAPIWrapperV1 } from "../api/SpacefillAPIWrapperV1.ts";
import type { Client as SpacefillAPIClient } from '../api/spacefill-api-openapi.d.ts';
import { Config } from "../configs/Config.ts";
import { Transfert } from "../transport/Transfert.ts";
import { BaseCommand } from "../utils/BaseCommand.ts";

export abstract class AbstractTask extends BaseCommand {
  protected sdk: SpacefillAPIClient;
  protected transfert: Transfert;

  async initApiClient() {
    this.sdk = await SpacefillAPIWrapperV1.initClient(
      Config.spacefillApi.url,
      Config.spacefillApi.apiToken
    );
  }
}