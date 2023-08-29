import { TESLA_AUTHZ_URL }  from '@tesla-web/lib/constants';
import { Client, type QuerySuccess, fql } from "fauna";

type AccessToken = {
  accessToken: string;
  refreshToken: string;
}

const client = new Client();
const accessId = process.env.ACCESS_ID || '';


export const getCurrentRefreshToken = async () => {
  const query = fql`access.byId(${accessId.toString()})`
  const res: QuerySuccess<AccessToken> = await client.query<AccessToken>(query);
  const data = res.data;
  const { accessToken, refreshToken } = data;
  return { accessToken, refreshToken };
};

export const updateCurrentTokens = async (data: AccessToken) => {
  const query = fql`access.byId(${accessId.toString()})!.replace(${data})`;
  const res: QuerySuccess<AccessToken> = await client.query<AccessToken>(query);
  // Return empty
  return;
}


// Get new tokens from Tesla
export const requestNewToken = async () => {
  const { refreshToken } = await getCurrentRefreshToken()
  
  const authRefreshBody = JSON.stringify({
    "grant_type": "refresh_token",
    "client_id": "ownerapi",
    "refresh_token": `${refreshToken}`,
    "scope": "openid email offline_access"
  });

  const res = await fetch(TESLA_AUTHZ_URL, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.REFRSH_TOKEN}`
    },
    body: authRefreshBody,
    method: 'POST'
  })
  const response: any = await res.json();
  const data = { 
    accessToken: response.access_token, 
    refreshToken: response.refresh_token
  };
  await updateCurrentTokens(data);
  return data;
};