import { NextResponse } from "next/server"
import { honk } from "@tesla-web/lib/commands"
import getCarId from "@tesla-web/lib/carId"

export async function GET(request: Request) {
  // Honk

  try {
    const id = await getCarId();
    const response = await honk(id)
    return NextResponse.json({ response })
  } catch(err: any) {
    console.log('Failed to honk!');
    return NextResponse.json({ msg: 'Failed to honk! :('})
  }
};


