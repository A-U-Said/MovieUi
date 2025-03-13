interface IConfig {
  name: string;
  apiTimeout: string | undefined;
  tokens: {
    endpoint: string;
    accessTokenKey: string;
    refreshTokenKey: string;
  };
  authenticationApiUrl: string;
  baseApiUrl: string;
}


const config: IConfig = {
  name: "Movies",
  apiTimeout: import.meta.env.VITE_API_TIMEOUT,
  tokens: {
    endpoint: "token",
    accessTokenKey: "access_token",
    refreshTokenKey: "refresh_token",
  },
  authenticationApiUrl: `https://${import.meta.env.VITE_AUTHENTICATION_DOMAIN}/`,
  baseApiUrl: `https://${import.meta.env.VITE_API_DOMAIN}/`
};


export default config;
