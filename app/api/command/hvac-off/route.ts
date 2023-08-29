import { NextResponse } from "next/server"
import { setHvacOff } from "@tesla-web/lib/commands"

export async function GET(request: Request, { params }: {params: { id: string}}) {
  // Get All Vehicles
  const response = await setHvacOff(params.id)
  return NextResponse.json({ response })
};


