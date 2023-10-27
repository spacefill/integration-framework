import OpenAPIClientAxios from "openapi-client-axios";
import { Config } from '../configs/Config.js';

import type { Client as SpacefillAPIClient } from './spacefill-api-openapi.d.ts';

/**
 * This wrapper is using openapi-stack client
 * see https://openapistack.co/docs/openapi-client-axios/intro/
 */

export class SpacefillAPIWrapperV1{

  // @todo ajouter les context edi.
  public static async initClient(url: string, bearerToken: string) {
    const api = new OpenAPIClientAxios.default({
      definition: "https://dash.readme.com/api/v1/api-registry/p570f12ln978a7s",
      withServer: {
        url: Config.get().spacefillApi.url
      },
      axiosConfigDefaults: {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${bearerToken}`
        }
      }
    });
    return await api.getClient<SpacefillAPIClient>();
  }
}