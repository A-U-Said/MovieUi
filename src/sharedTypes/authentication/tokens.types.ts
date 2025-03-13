
export interface TokenResult {
  accessTokenType: string;
  identityToken: string | null;
  accessToken: string;
  accessTokenLifetime: number
  refreshToken: string | null;
  scope: string | null;
  dPoPNonce: string | null;
  custom: { [key: string]: unknown; } | null;
}


export interface LoginResponse {
  response: TokenResult;
}