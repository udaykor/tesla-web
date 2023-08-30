import { NextResponse } from "next/server"
import { setHvacOff } from "@tesla-web/lib/commands"
import getCarId from "@tesla-web/lib/carId"

export async function GET(request: Request) {

  try {
    const id = await getCarId();
    const response = await setHvacOff(id)
    return NextResponse.json({ response })

  } catch(err: any) {
    console.log('Failed to turn off HVAC');
    return NextResponse.json({ errMsg: 'Failed to turn off HVAC' });
  }
  
};


