import { NextResponse } from "next/server"
import { setHvacOn, wakeUp } from "@tesla-web/lib/commands"
import getCarId from "@tesla-web/lib/carId"

export async function GET(request: Request, { params }: {params: { id: string}}) {
  try {
    const id = await getCarId();
    const response = await setHvacOn(id);
    return NextResponse.json({ response });
  } catch(err: any) {
    console.log('Failed to turn onHVAC');
    return NextResponse.json({ errMsg: 'Failed to turn onHAVC '})
  }
};



