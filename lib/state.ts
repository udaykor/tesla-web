import  TESLA_API_BASE_URL from '@tesla-web/lib/constants';
import { requestNextNewToken } from '@tesla-web/lib/authz';


export const getVehicles = async () => {
  console.log("get vehicles");
  const { accessToken } = await requestNextNewToken();
  const token =  `Bearer ${accessToken}`;
  const res = await fetch(`${TESLA_API_BASE_URL}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    method: 'GET'
  })
  console.log('get vehicles ', res.status);
  const data = await res.json();
  return data;
};

export const getVehicle = async (id:string, uri?:string, access_token?:string)=>  {  
  const { accessToken } = await requestNextNewToken();
  const token =  `Bearer ${accessToken}`;
  const url = `${TESLA_API_BASE_URL}${id}`
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    method: 'GET'
  })
  const data = await res.json();
  return data;
};

export const getVehicleData = async (id:string, access_token?:string, uri?:string)=>  {
  const { accessToken } = await requestNextNewToken();
  const token =  `Bearer ${accessToken}`;
  const url = uri? uri: `${TESLA_API_BASE_URL}${id}/vehicle_data`
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    method: 'GET'
  })
  const data = await res.json();
  return data;
};

export const getVehicleState = async (id:string, access_token?:string, uri?:string)=>  {
  const { accessToken } = await requestNextNewToken();
  const token =  `Bearer ${accessToken}`;
  // Tainted input for the API call ges here.
  const url = uri? uri: `${TESLA_API_BASE_URL}${id}/data_request/vehicle_state`
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    method: 'GET'
  })
  const data = await res.json();
  return data;
};

export const getServiceData = async (id:string, access_token?:string)=>  {
  const { accessToken } = await requestNextNewToken();
  const token =  `Bearer ${accessToken}`;
  const url = `${TESLA_API_BASE_URL}${id}/service_data`
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    method: 'GET'
  })
  const data = await res.json();
  return data;
};


export const getMobileEnabled = async (id:string, access_token?:string)=>  {
  const { accessToken } = await requestNextNewToken();
  const token =  `Bearer ${accessToken}`;
  const url = `${TESLA_API_BASE_URL}${id}/mobile_enabled`
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    method: 'GET'
  })
  const data = await res.json();
  return data;
};

// Getting a 404
export const getChargeState = async (id:string, access_token?:string)=>  {
  const { accessToken } = await requestNextNewToken();
  const token =  `Bearer ${accessToken}`;
  const url = `${TESLA_API_BASE_URL}${id}/data_request/charge_state`
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    method: 'GET'
  })
  const data = await res.json();
  return data;
};

// This is a 404 - Aug 23
export const getClimateState = async (id:string, access_token?:string)=>  {
  const { accessToken } = await requestNextNewToken();
  const token =  `Bearer ${accessToken}`;
  const url = `${TESLA_API_BASE_URL}${id}/data_request/climate_state`
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    method: 'GET'
  })
  const data = await res.json();
  return data;
};


export const getDriveState = async (id:string, access_token?:string)=>  {
  const { accessToken } = await requestNextNewToken();
  const token =  `Bearer ${accessToken}`;
  const url = `${TESLA_API_BASE_URL}${id}/data_request/drive_state`
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    method: 'GET'
  })

  const data = await res.json();
  return data;
};


export const getGuiSettings = async (id:string, access_token?:string)=>  {
  const { accessToken } = await requestNextNewToken();
  const token =  `Bearer ${accessToken}`;
  const url = `${TESLA_API_BASE_URL}${id}/data_request/gui_settings`
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${accessToken}`
    },
    method: 'GET'
  })
  const data = await res.json();
  return data;
};