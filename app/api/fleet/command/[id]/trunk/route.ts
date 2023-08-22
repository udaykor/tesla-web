import { NextResponse } from "next/server"
import { actuateTrunk } from "@tesla-web/lib/commands"

export async function GET(request: Request, { params }: {params: { id: string, part?:string}}) {
  // Get All Vehicles
  const which_part = params.part ? params.part: 'rear';
  const response = await actuateTrunk(params.id, which_part)
  return NextResponse.json({ response })
}
