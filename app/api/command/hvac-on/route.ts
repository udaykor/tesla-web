import { NextResponse } from "next/server"
import { setHvacOn, wakeUp } from "@tesla-web/lib/commands"

export async function GET(request: Request, { params }: {params: { id: string}}) {
  // Get All Vehicles
  const response = await setHvacOn(params.id)
  return NextResponse.json({ response })
};



