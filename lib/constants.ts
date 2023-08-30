const TESLA_API_BASE_URL = `https://owner-api.teslamotors.com/api/1/vehicles/`;

export const TESLA_AUTHZ_URL = `https://auth.tesla.com/oauth2/v3/token`;

export const MILE_TO_KM_MUL = 1.609;

export const BAR_TO_PSI = 14.504;

export default TESLA_API_BASE_URL;

export const sleep = (ms: number) => new Promise((r) => {
  console.log(`Sleeping for ${ms} ms`)
  setTimeout(r, ms)
});