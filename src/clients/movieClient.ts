import axios, { AxiosResponseHeaders, RawAxiosResponseHeaders } from "axios";
import configuration from "@/configuration/config";
import { tokenStorage } from "@/services";


export type CallbackType<TPayload = unknown> = (data: TPayload, headers: RawAxiosResponseHeaders | AxiosResponseHeaders) => void;


if (!configuration.baseApiUrl) {
  throw new Error("API Base URI has not been supplied.");
}

/**
 * An instance of an AxiosStatic object to call the Server API
 */
const client = axios.create({
  baseURL: configuration.baseApiUrl,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});


/**
 * Axios interceptor to add an authorisation header with the access token
 */
client.interceptors.request.use(config => {
  if (tokenStorage.hasAccessToken()) {
    config.headers.Authorization = `Bearer ${tokenStorage.getAccessToken()}`;
  }
  return config;
});


client.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
);


export default client;