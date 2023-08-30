import { NextResponse } from "next/server"
import { actuateTrunk, doorLock, doorUnlock, remoteStartDrive, wakeUp, wink } from "@tesla-web/lib/commands"
import getCarId from "@tesla-web/lib/carId";

export async function GET(request: Request) {
  const id = await getCarId();
  // Attempt to wake the vehicle up in case it goes to sleep.
  const remoteStartResp = await wakeUp(id);
  // Avoiding sending all the data 
  const safeResponse = {
    api_version: remoteStartResp.response.api_version,
    state: remoteStartResp.response.state
  }

  // Call this twice and car should have woken-up.
  // Remote start drive needs 120 seconds to become active? 
  const remoteDriveResp = await remoteStartDrive(id);

  // // And then honk - Noisy
  // // const honkResp = await honk(id);

  // // And wink at last
  const winkResp = await wink(id);
  // remoteDriveResp, winkResp;
  const actResp = await actuateTrunk(id, 'rear');
  const doorsOp = safeResponse.state === 'asleep' ? await doorUnlock(id): await doorLock(id);  
  
  return NextResponse.json({ safeResponse, winkResp, remoteDriveResp, doorsOp })
};

export const runtime = 'nodejs';
