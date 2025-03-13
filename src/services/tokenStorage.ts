import { jwtDecode } from "jwt-decode";
import config from "@/configuration/config";


export type DecodedToken = {
  iss: string
  nbf: number
  iat: number
  exp: number
  aud: string[]
  scope: string[]
  amr: string[]
  client_id: string
  sub: string
  auth_time: number
  idp: string
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier": string
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string
  jti: string
};


const { accessTokenKey, refreshTokenKey } = config.tokens;


/**
 * Function to set the access token and refresh token in local storage with the token key
 * @param {string} accessToken
 * @returns {void}
 */
const setToken = (accessToken: string) : void => {
  if (!accessToken) {
    throw new Error("An access token must be supplied.");
  }

  localStorage.setItem(accessTokenKey, accessToken);
};


/**
 * Function to set a refresh token in local storage
 * @param {string} refreshToken The encoded refresh token
 * @returns {void}
 */
const setRefreshToken = (refreshToken: string) : void => {
  if (!refreshToken) {
    throw new Error("A refresh token must be supplied.");
  }
  localStorage.setItem(refreshTokenKey, refreshToken);
};


/**
 * Function to remove access and refresh tokens from local storage
 * @returns {void}
 */
const removeTokens = () : void => {
  localStorage.removeItem(refreshTokenKey);
  localStorage.removeItem(accessTokenKey);
};


/**
 * Function to decode the access token in local storage
 * @returns {decodedToken} The decoded access token or null if not present
 */
const getDecodedAccessToken = () : DecodedToken | null => {
  const accessToken = getAccessToken();
  return accessToken != null ? jwtDecode<DecodedToken>(accessToken) : null;
};


/**
 * Function to get the encoded access token in local storage
 * @returns {string} The encoded access token or null if not present
 */
const getAccessToken = () : string | null => {
  return localStorage.getItem(accessTokenKey);
};


/**
 * Function to get the encoded refresh token in local storage
 * @returns {object} The encoded refresh token or null if not present
 */
const getRefreshToken = () : string | null => {
  return localStorage.getItem(refreshTokenKey);
};


/**
 * Helper function to check if authenticated user tokens exist.
 * @returns {boolean} True is authenticated user tokens exist
 */
const hasAccessToken = () : boolean => {
  const token = localStorage.getItem(accessTokenKey);
  return token ? true : false;
};


const methods = {
  setToken,
  removeTokens,
  getAccessToken,
  getRefreshToken,
  setRefreshToken,
  getDecodedAccessToken,
  hasAccessToken
};

export default methods;
