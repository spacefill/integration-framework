import OpenAPIClientAxios, { Document } from "openapi-client-axios";
import axios, { AxiosInstance } from "axios";
import FormData from "form-data";
import * as axiosDebug from "axios-debug-log";
import axiosRetry, { isNetworkOrIdempotentRequestError, isRetryableError } from "axios-retry";

import { Console } from "../utils/Console.ts";
import { InternalError } from "../exceptions/InternalError.ts";

import type { Client as SpacefillAPIClient } from "./spacefill-api-openapi.d.ts";
import { APIContext, WorkflowType } from "./APIContext.ts";
import { EdiEvent } from "./EdiEvent.ts";
import definition from "./openapi.json" assert { type: "json" };

/**
 * This wrapper is using openapi-stack client
 * see https://openapistack.co/docs/openapi-client-axios/intro/
 */

export class SpacefillAPIWrapperV1 {
  public client: SpacefillAPIClient | undefined;

  /**
   * Helper that manages the sending of api edi events.
   */
  public ediEvent: EdiEvent | undefined;

  /**
   * Data source used in API Context
   */
  public dataSource?: string;

  /**
   * Workflow type used in API Context
   */
  private workflowType: WorkflowType | undefined;

  private apiUrl: string | undefined;

  private bearerToken: string | undefined;

  private axiosInstance: AxiosInstance | undefined;

  /**
   * Init api client
   * @param url Spacefill api url
   * @param bearerToken Bearer token
   * @param workflowType Context workflow type
   * @returns
   */
  public async initClient(url: string, bearerToken: string, workflowType: WorkflowType): Promise<void> {
    this.workflowType = workflowType;
    this.apiUrl = url;
    this.bearerToken = bearerToken;

    const api = new OpenAPIClientAxios.default({
      definition: definition as Document,
      withServer: {
        url: this.apiUrl,
      },
      axiosConfigDefaults: {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${this.bearerToken}`,
          ...APIContext.getMainHeaders(),
          ...APIContext.getWorkflowHeader(this.workflowType),
        },
        transformRequest: (data, headers) => {
          headers["Spacefill-Ctx-Data-Source"] = this.dataSource?.substring(0, 100)
            ? encodeURI(this.dataSource.substring(0, 100))
            : "unknown";
          if (!headers["Content-Type"]) {
            headers["Content-Type"] = "application/json";
          }
          return JSON.stringify(data);
        },
      },
    });

    this.client = await api.getClient<SpacefillAPIClient>();
    this.axiosInstance = api.instance;

    axiosRetry(api.instance, {
      retries: 3,
      retryDelay: axiosRetry.exponentialDelay,
      retryCondition: (e) => {
        return isNetworkOrIdempotentRequestError(e) || isRetryableError(e);
      },
    });

    axiosDebug.default({
      request: (_debug, config) => {
        if (!(config.data instanceof FormData)) {
          Console.debug(`Axios: ${config.method} ${config.baseURL}${config.url}`, {
            parameter: config.params,
            data: config.data,
          });
        } else {
          Console.debug(`Axios upload: ${config.method} ${config.baseURL}${config.url}`, {
            parameter: config.params,
          });
          Console.trace("FormData", config.data);
        }
      },
      response: (_debug, config) => {
        Console.debug(
          `Axios: ${config.status} ${config.statusText} (${config.config.method} ${config.config.url})`,
        );
        Console.trace("Response data", JSON.stringify(config.data));
      },
      error(_debug, error) {
        Console.trace(error);
      },
    });
    this.ediEvent = new EdiEvent(this.client as SpacefillAPIClient);
  }

  getAxiosInstance(): AxiosInstance | undefined {
    return this.axiosInstance;
  }

  async upload(method: string, path: string, formData: FormData): Promise<void> {
    const axiosInstance: AxiosInstance = axios.create({
      baseURL: this.apiUrl,
    });
    axiosDebug.addLogger(axiosInstance);

    if (!this.workflowType) {
      throw new InternalError("Worklow type is not defined !");
    }

    return await axiosInstance({
      method: method,
      url: path,
      data: formData,
      headers: {
        Authorization: `Bearer ${this.bearerToken}`,
        ...APIContext.getMainHeaders(),
        ...APIContext.getWorkflowHeader(this.workflowType),
        ...APIContext.getDataSourceHeader(this.dataSource?.substring(0, 100) ?? "Unknown data source"),
        ...formData.getHeaders(),
      },
    });
  }
}
