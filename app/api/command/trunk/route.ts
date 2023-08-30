import { NextResponse } from "next/server"
import { actuateTrunk } from "@tesla-web/lib/commands"
import getCarId from "@tesla-web/lib/carId";

export async function GET(request: Request) {
  // Open Trunk and not frunk
  try {
    const which_part = 'rear';
    const id = await getCarId();
    const response = await actuateTrunk(id, which_part)
    return NextResponse.json({ response })
  } catch(err: any) {
    console.log('Failed to actuate rear-trunk')
    return NextResponse.json({ errMsg: 'Failed to actuate rear-trunk' });
  }
};


