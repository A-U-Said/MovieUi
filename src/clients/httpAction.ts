import axios from "axios";
import type { ActionCreatorWithoutPayload, ActionCreatorWithPayload } from "@reduxjs/toolkit";
import type { AxiosResponse } from "axios";
import type { IApiError } from "./client.types";
import store from "@/store";
import { CallbackType } from "./movieClient";


export type ReducerActions<T> = {
  onStart: ActionCreatorWithoutPayload<string> | null,
  onSuccess: ActionCreatorWithPayload<T, string> | null,
  onError: ActionCreatorWithPayload<IApiError, string>  | null
}

/**
 * A function to call a service method and dispatch async actions accordingly
 *  (START, SUCCESS, FAILED and ERROR in the event of failure)
 * @param {() => Promise<AxiosResponse<promisePayload, string>>} service The service method to call
 * @returns {Promise<promisePayload>} The data from the service call, or an error in the case of failure
 */
const httpAction = <promisePayload = unknown>(
  service: () => Promise<AxiosResponse<promisePayload, string>>, 
  { onStart, onSuccess, onError }: ReducerActions<promisePayload>,
  callback?: CallbackType
): Promise<promisePayload> => {

  if (!service) {
    throw new Error("A service must be specified.");
  }

  return new Promise<promisePayload>((resolve, reject) => {
    try {
      if (onStart) {
        store.dispatch(onStart());
      }

      service()
        .then(response => {
          if (onSuccess) {
            store.dispatch(onSuccess(response.data));
          }
          callback?.(response.data, response.headers);
          resolve(response?.data);
        })
        .catch(error => {
          if (onError) {
            store.dispatch(onError(error.response?.data?.message ?? "An error has occurred"));
          }
          reject(error);
        });
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        if (onError) {
          store.dispatch(onError(error.response?.data?.message ?? "An error has occurred"));
        }
      }
      reject(error);
    }
  });
};

export default httpAction;