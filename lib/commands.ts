import  TESLA_API_BASE_URL from '@tesla-web/lib/constants';
import { requestNextNewToken } from '@tesla-web/lib/authz';



export const doRemoteStart = async (id:string, access_token?:string) => {
  const { accessToken } = await requestNextNewToken();
  const token =  `Bearer ${accessToken}`;
  const url = `${TESLA_API_BASE_URL}${id}/command/remote_start_drive`
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: 'POST'
  })
  const response = await res.json();
  return response;
};

export const wakeUp = async (id:string, access_token?:string)=>  {
  const { accessToken } = await requestNextNewToken();
  const token =  `Bearer ${accessToken}`;
  const url = `${TESLA_API_BASE_URL}${id}/wake_up`
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: 'POST'
  })
  const response = await res.json();
  return response;
};


export const setHvacOn = async (id:string, access_token?:string) =>  {
  const { accessToken } = await requestNextNewToken();
  const token =  `Bearer ${accessToken}`;
  const url = `${TESLA_API_BASE_URL}${id}/command/auto_conditioning_start`
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: 'POST'
  })
  const { data } = await res.json();
  return data.response;
};


export const setHvacOff = async (id:string, access_token?:string) =>  {
  const { accessToken } = await requestNextNewToken();
  const token =  `Bearer ${accessToken}`;
  const url = `${TESLA_API_BASE_URL}${id}/command/auto_conditioning_stop`
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: 'POST'
  })
  const { data } = await res.json();
  return data.response;
};

export const setTemperature = async (id:string, driver_temp:string, passenger_temp:string, access_token?:string)=>  {
  const { accessToken } = await requestNextNewToken();
  const token =  `Bearer ${accessToken}`;
  const url = `${TESLA_API_BASE_URL}${id}/command/set_temps?driver_tmep=${driver_temp}&passenger_temp=${passenger_temp}`
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: 'POST',
  })
  const { data } = await res.json();
  return data.response;
};


export const honk = async (id:string, access_token?:string) =>  {
  const { accessToken } = await requestNextNewToken();
  const token =  `Bearer ${accessToken}`;
  const url = `${TESLA_API_BASE_URL}${id}/command/honk_horn`
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: 'POST',
  })
  const response = await res.json();
  return response;
};

export const wink = async (id:string, access_token?:string) =>  {
  const { accessToken } = await requestNextNewToken();
  const token =  `Bearer ${accessToken}`;
  const url = `${TESLA_API_BASE_URL}${id}/command/flash_lights`
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: 'POST',
  })
  const response = await res.json();
  return response;
};

export const actuateTrunk = async (id:string, which_part:string, access_token?:string) =>  {
  const { accessToken } = await requestNextNewToken();
  const token =  `Bearer ${accessToken}`;
  const url = `${TESLA_API_BASE_URL}${id}/command/actuate_trunk?which_trunk=${which_part}`
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: 'POST',
    body: JSON.stringify({
      which_trunk: which_part
    })
  })
  const response = await res.json();
  return response;
};

export const doorUnlock = async (id: string, access_token?: string) => {
  console.log("unlocking doors")
  const { accessToken } = await requestNextNewToken();
  const token =  `Bearer ${accessToken}`;
  const url = `${TESLA_API_BASE_URL}${id}/command/door_unlock`
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: 'POST'
  })
  const response = await res.json();
  return response
}

export const doorLock = async (id: string, access_token?: string) => {
  console.log('attempting locking doors');
  const { accessToken } = await requestNextNewToken();
  const token =  `Bearer ${accessToken}`;
  const url = `${TESLA_API_BASE_URL}${id}/command/door_lock`
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: 'POST'
  })
  const response = await res.json();
  return response
};


export const remoteStartDrive = async (id: string, access_token?: string) => {
  const { accessToken } = await requestNextNewToken();
  const token =  `Bearer ${accessToken}`;
  const url = `${TESLA_API_BASE_URL}${id}/command/remote_start_drive`
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: 'POST'
  })
  const response = await res.json();
  return response
}