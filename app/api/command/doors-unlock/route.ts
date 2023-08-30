import { NextResponse } from "next/server"
import { doorUnlock } from "@tesla-web/lib/commands"
import getCarId from "@tesla-web/lib/carId";

export async function GET(request: Request) {
  try {
    const id = await getCarId();
    const response = await doorUnlock(id);
    return NextResponse.json({ response });
  } catch(err: any) {
    console.log('Failed to unlock doors');
    return NextResponse.json({ msg: 'Failed to unlock doors'})
  }
};


