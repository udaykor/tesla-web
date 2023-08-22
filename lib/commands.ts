import  TESLA_API_BASE_URL from '@tesla-web/lib/constants';

export const wakeUp = async (id:string, access_token?:string)=>  {
  const token = process.env.ACCESS_TOKEN ? `Bearer ${process.env.ACCESS_TOKEN}`: `Bearer ${access_token}`
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


export const setHvacOn = async (id:string, access_token?:string)=>  {
  const token = process.env.ACCESS_TOKEN ? `Bearer ${process.env.ACCESS_TOKEN}`: `Bearer ${access_token}`
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


export const setHvacOff = async (id:string, access_token?:string)=>  {
  const token = process.env.ACCESS_TOKEN ? `Bearer ${process.env.ACCESS_TOKEN}`: `Bearer ${access_token}`
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
  const token = process.env.ACCESS_TOKEN ? `Bearer ${process.env.ACCESS_TOKEN}`: `Bearer ${access_token}`
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


export const honk = async (id:string, access_token?:string)=>  {
  const token = process.env.ACCESS_TOKEN ? `Bearer ${process.env.ACCESS_TOKEN}`: `Bearer ${access_token}`
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

export const wink = async (id:string, access_token?:string)=>  {
  const token = process.env.ACCESS_TOKEN ? `Bearer ${process.env.ACCESS_TOKEN}`: `Bearer ${access_token}`
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