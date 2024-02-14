#!/usr/bin/env -S npx ts-node --esm --transpile-only

import OpenAPIClientAxios, { AxiosInstance, Document } from "openapi-client-axios";

import { Console, NetWorkError } from "../../src/index.ts";

import type { Client as PulpoAPIClient } from "./pulpo-api-openapi";
import definition from "./wms_pulpo_openapi.json" assert { type: "json" };

export class PulpoAPIWrapper {
  private apiUrl?: string;

  private apiToken?: string;

  public client: PulpoAPIClient;

  private axiosInstance?: AxiosInstance;

  public async initClient(url: string, bearerToken: string): Promise<void> {
    this.apiUrl = url;

    const api = new OpenAPIClientAxios.default({
      definition: definition as unknown as Document,
      withServer: {
        url: this.apiUrl,
      },
      axiosConfigDefaults: {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        transformRequest: (data, headers) => {
          if (!headers["Content-Type"]) {
            headers["Content-Type"] = "application/json";
          }
          if (this.apiToken) {
            headers["Authorization"] = `Bearer ${this.getApiToken()}`;
          }
          return JSON.stringify(data);
        },
      },
    });

    this.client = await api.getClient<PulpoAPIClient>();
    this.axiosInstance = api.instance;

    // token validity: 1h (https://intercom.help/pulpo-wms/en/articles/3792065-api-integration-guide)
    // Wms.Auth.AuthController.request_token
    const authResponse = await this.client.paths["/auth"].post(
      {},
      {
        grant_type: process.env.PULPO_API_GRANT_TYPE as string,
        username: process.env.PULPO_API_LOGIN as string,
        password: bearerToken,
        scope: process.env.PULPO_API_SCOPE as string,
      },
    );
    if (!authResponse?.data?.access_token) {
      Console.error("Auth response", authResponse?.data);
      throw new NetWorkError("Cannot retrieve access_token from Pulpo API");
    }
    this.apiToken = authResponse.data.access_token;
  }

  public getAxiosInstance(): AxiosInstance | undefined {
    return this.axiosInstance;
  }

  private getApiToken(): string | undefined {
    return this.apiToken;
  }
}
