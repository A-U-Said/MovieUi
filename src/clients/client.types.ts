import { AxiosError } from "axios";

type ApiError = {
  exceptionMessage: string;
}

export interface IApiError extends AxiosError<ApiError> {
  exceptionMessage: string;
}