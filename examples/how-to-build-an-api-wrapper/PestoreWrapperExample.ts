import OpenAPIClientAxios, { AxiosInstance, Document } from "openapi-client-axios";
import axiosRetry, { isNetworkOrIdempotentRequestError } from "axios-retry";

import type { Client as PetStoreAPI } from "./pestore-openapi";
import definition from "./petstore-openapi.json" assert { type: "json" };

export class PestoreWrapperExample {
  private apiUrl?: string;

  private apiToken?: string;

  public client?: PetStoreAPI;

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
            headers["Authorization"] = `Bearer ${bearerToken}`;
          }
          return JSON.stringify(data);
        },
      },
    });

    this.client = await api.getClient<PetStoreAPI>();
    this.axiosInstance = api.instance;

    axiosRetry(api.instance, {
      retries: 3,
      retryDelay: axiosRetry.exponentialDelay,
      retryCondition: (e) => {
        return isNetworkOrIdempotentRequestError(e) || e?.response?.status === 429;
      },
    });
  }

  public getAxiosInstance(): AxiosInstance | undefined {
    return this.axiosInstance;
  }

  private getApiToken(): string | undefined {
    return this.apiToken;
  }
}
