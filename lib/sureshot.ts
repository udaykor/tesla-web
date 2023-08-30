import { requestNewToken } from './authz';
import  TESLA_API_BASE_URL, { sleep } from '@tesla-web/lib/constants';

// Sure-Shot Trunk Open below is a temp fix - This is inefficient and unreliable.
// 1. Remote start the car - Interval 120 seconds
// 2. Wake up the car
// 4. Using a temporary sure-shot with Multiple Tokens - Ensure low requests to TSLA Motors to avoid IP Ban on WAF
// To-Do:
// 1. Investigate vehicle tokens from vehicle detail by ID
// 2. Minimise token fetching
// OR Move into BT-Mode with RPI?


export const wakeUp = async(id: number) => {
  const action1 = await remoteStart(id);
  console.log("Attempting Waking up the car");
  const tokenData = await requestNewToken();

  const wakeUpUrl = `${TESLA_API_BASE_URL}${id}/wake_up`;

  const res = await fetch(wakeUpUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenData.accessToken}`
    },
    method: 'POST',
  })
  const response = await res.json();
  if(res.status === 200) {
    console.log("wake up succeed");
  }
  console.log("Done waking up car");
  await sleep(2200);
  return;
}

// Keyless Driving
export const remoteStart = async(id: number) => {
  console.log("Attempting remote start");
  const tokenData = await requestNewToken();

  const wakeUpUrl = `${TESLA_API_BASE_URL}${id}/command/remote_start_drive`;

  const res = await fetch(wakeUpUrl, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${tokenData.accessToken}`
    },
    method: 'POST',
  })
  const response = await res.json();
  if(res.status === 200) {
    console.log("Remote Start drive succeed");
  }
  console.log("Done with remote start");
  await sleep(1800);
  return response;
}