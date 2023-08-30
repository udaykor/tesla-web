import { NextResponse } from "next/server"
import { wakeUp } from "@tesla-web/lib/commands"
import getCarId from "@tesla-web/lib/carId"

export async function GET(request: Request) {
  // Wake up the car
  try {
    const id = await getCarId();
    const response = await wakeUp(id);
    return NextResponse.json({ response });
  } catch(err: any) {
    console.log('Failed to wake up car ');
    return NextResponse.json({ errMsg: 'Failed to wake up car' });
  }
};


