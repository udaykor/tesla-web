import { getVehicleData } from "@tesla-web/lib/state"
import { NextResponse } from "next/server"

// id and vehicle_id can be numbers?
export async function GET(request: Request, { params }: {params: { id: string}}) {
  const q = request.url.split('=')[1]
  // const vehicle = await getVehicleData(params.id)
  const vehicle = await getVehicleData(q);
  return NextResponse.json({ vehicle })
}
