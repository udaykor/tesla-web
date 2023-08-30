import { NextResponse } from "next/server"
import { doorLock } from "@tesla-web/lib/commands"
import getCarId from "@tesla-web/lib/carId";

export async function GET(request: Request) {

  try {
    // Get ID and do not log;
    const id = await getCarId();
    // Lock doors 
    const response = await doorLock(id);
    return NextResponse.json({ response });
  } catch (err: any) {
    console.log("Failed to lock doors");
    return NextResponse.json({ errMsg: 'Failed to lock doors' });
  };
}