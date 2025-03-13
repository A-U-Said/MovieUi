import { authenticationClient } from "@/clients";
import configuration from "@/configuration";
import tokenStorage from "./tokenStorage";
import { AxiosRequestConfig } from "axios";
import { LoginResponse } from "@/sharedTypes/authentication";

const TIMEOUT_ERROR_MESSAGE = "The login request timed out. Please try again later.";
const SERVER_ERROR_MESSAGE = "There was a problem logging in. Please try again later.";
const AUTHENTICATION_ERROR_MESSAGE = "Please check your username and password.";
const UNHANDLED_ERROR_MESSAGE = "An error occured while logging in. Please try again later.";


/**
 * Service function to call the authentication endpoint and
 * set refresh tokens for the user with supplied username and password.
 * @param {string} username The username of the user
 * @param {string} password The password of the user
 * @returns {Promise} The response contains the ID of the logged in user
 */
const login = (username: string, password: string) : Promise<string | undefined> => {

  if (!username) {
    throw new Error("A username must be supplied.");
  }
  if (!password) {
    throw new Error("A password must be supplied.");
  }

  const config : AxiosRequestConfig = {
    timeout: Number(configuration.apiTimeout),
    timeoutErrorMessage: TIMEOUT_ERROR_MESSAGE
  };

  return new Promise<string | undefined>((resolve, reject) => {

    authenticationClient.post<LoginResponse>(`${configuration.authenticationApiUrl}login`, { username, password }, config)
      .then(({ data }) => {
        tokenStorage.setToken(data.response.accessToken);
        const { sub } = tokenStorage.getDecodedAccessToken() || {};
        resolve(sub);
      })
      .catch(error => {
        if (error.code === 408 || error.code === "ECONNABORTED") {
          reject(TIMEOUT_ERROR_MESSAGE);
        }

        if (error.response) {
          switch (error.response.status) {
            case 408:
            case "ECONNABORTED":
              reject(TIMEOUT_ERROR_MESSAGE);
              break;
            case 400:
            case 401:
            case 402:
              reject(AUTHENTICATION_ERROR_MESSAGE);
              break;
            case 500:
              reject(SERVER_ERROR_MESSAGE);
              break;
            default:
              reject(error.message);
              break;
          }
        }
        reject(UNHANDLED_ERROR_MESSAGE);
      });
  });
};


const methods = { 
  login
};

export default methods;
