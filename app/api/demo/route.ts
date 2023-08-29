import { NextResponse } from "next/server"
import { actuateTrunk, doorLock, doorUnlock, remoteStartDrive, wakeUp, wink } from "@tesla-web/lib/commands"
import { getVehicles } from "@tesla-web/lib/state";

export async function GET(request: Request) {
  // Get All Vehicles
  const resV = await getVehicles();
  // Remember: Do not share randomnly resV or Vehciles - sensitive data - VIN, car ID, GPS (car state call)
  const vehicles =  resV.response;
  // Do not log this ID - This is static 
  const id = vehicles[0].id;
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
