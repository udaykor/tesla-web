import { NextResponse } from "next/server"
import { honk } from "@tesla-web/lib/commands"

export async function GET(request: Request, { params }: {params: { id: string}}) {
  // Get All Vehicles
  const response = await honk(params.id)
  return NextResponse.json({ response })
}
