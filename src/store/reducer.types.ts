import type { IApiError } from "@/clients/client.types";


export interface IReducerBase {
  loading: boolean;
  error: IApiError | null;
};