import  TESLA_API_BASE_URL from '@tesla-web/lib/constants';

export const getVehicles = async () => {
  const res = await fetch(`${TESLA_API_BASE_URL}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.ACCESS_TOKEN}`
    },
    method: 'GET'
  })
  const data = await res.json()
  return data;
};

export const getVehicle = async (id:string, access_token?:string)=>  {
  const token = process.env.ACCESS_TOKEN ? `Bearer ${process.env.ACCESS_TOKEN}`: `Bearer ${access_token}`
  const url = `${TESLA_API_BASE_URL}${id}`
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: 'GET'
  })
  const data = await res.json();
  return data;
};

export const getVehicleData = async (id:string, access_token?:string)=>  {
  const token = process.env.ACCESS_TOKEN ? `Bearer ${process.env.ACCESS_TOKEN}`: `Bearer ${access_token}`
  const url = `${TESLA_API_BASE_URL}${id}/vehicle_data`
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: 'GET'
  })
  const data = await res.json();
  return data;
};


export const getServiceData = async (id:string, access_token?:string)=>  {
  const token = process.env.ACCESS_TOKEN ? `Bearer ${process.env.ACCESS_TOKEN}`: `Bearer ${access_token}`
  const url = `${TESLA_API_BASE_URL}${id}/service_data`
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: 'GET'
  })
  const data = await res.json();
  return data;
};


export const getMobileEnabled = async (id:string, access_token?:string)=>  {
  const token = process.env.ACCESS_TOKEN ? `Bearer ${process.env.ACCESS_TOKEN}`: `Bearer ${access_token}`
  const url = `${TESLA_API_BASE_URL}${id}/mobile_enabled`
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: 'GET'
  })
  const data = await res.json();
  return data;
};

export const getChargeState = async (id:string, access_token?:string)=>  {
  const token = process.env.ACCESS_TOKEN ? `Bearer ${process.env.ACCESS_TOKEN}`: `Bearer ${access_token}`
  const url = `${TESLA_API_BASE_URL}${id}/data_request/charge_state`
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: 'GET'
  })
  const data = await res.json();
  return data;
};


export const getClimateState = async (id:string, access_token?:string)=>  {
  const token = process.env.ACCESS_TOKEN ? `Bearer ${process.env.ACCESS_TOKEN}`: `Bearer ${access_token}`
  const url = `${TESLA_API_BASE_URL}${id}/data_request/climate_state`
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: 'GET'
  })
  const data = await res.json();
  return data;
};


export const getDriveState = async (id:string, access_token?:string)=>  {
  const token = process.env.ACCESS_TOKEN ? `Bearer ${process.env.ACCESS_TOKEN}`: `Bearer ${access_token}`
  const url = `${TESLA_API_BASE_URL}${id}/data_request/drive_state`
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: 'GET'
  })

  const data = await res.json();
  return data;
};


export const getGuiSettings = async (id:string, access_token?:string)=>  {
  const token = process.env.ACCESS_TOKEN ? `Bearer ${process.env.ACCESS_TOKEN}`: `Bearer ${access_token}`
  const url = `${TESLA_API_BASE_URL}${id}/data_request/gui_settings`
  const res = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    method: 'GET'
  })
  const data = await res.json();
  return data;
};