import OpenAPIClientAxios from "openapi-client-axios";
import * as axiosDebug from "axios-debug-log";
import type { Client as SpacefillAPIClient } from './spacefill-api-openapi.d.ts';
import APIContext, { WorkflowType } from "./APIContext.ts";
import Console from "../utils/Console.ts";

/**
 * This wrapper is using openapi-stack client
 * see https://openapistack.co/docs/openapi-client-axios/intro/
 */

export class SpacefillAPIWrapperV1{

  public client: SpacefillAPIClient;
  /**
   * Data source used in API Context
   */
  public dataSource?: string;

  /**
   * Init api client
   * @param url Spacefill api url
   * @param bearerToken Bearer token
   * @param workflowType Context workflow type
   * @returns
   */
  public async initClient(url: string, bearerToken: string, workflowType: WorkflowType): Promise<void> {
    const api = new OpenAPIClientAxios.default({
      definition: "https://api.spacefill.fr/openapi.json",
      withServer: {
        url: url
      },
      axiosConfigDefaults: {
        withCredentials: true,
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
          ...APIContext.getMainHeaders(),
          ...APIContext.getWorkflowHeader(workflowType),
        },
        transformRequest: (data, headers) => {
          headers['Spacefill-Ctx-Data-Source']= this.dataSource ?? 'unknown';
          headers['Content-Type']= 'application/json';
          return JSON.stringify(data);
        }
      },
    });

    axiosDebug.default({
      request: (_debug, config) => {
        Console.debug(`axios: ${config.method} ${config.url}`, {
          parameter: config.params,
          data: config.data
        })
      },
      response: (_debug, config) => {
        Console.debug(`axios: ${config.status} ${config.statusText} (${config.config.method} ${config.config.url})`);
        Console.trace('Response data', JSON.stringify(config.data));
      },
      error(_debug, error) {
        Console.error(`axios: ${error.message} (${error.config.method} ${error.config.url})`, JSON.stringify(error.response?.data))
      },
    });
    axiosDebug.addLogger(api.getAxiosInstance());

    this.client = await api.getClient<SpacefillAPIClient>();
  }
}