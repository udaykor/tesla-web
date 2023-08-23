import { getVehicle } from "@tesla-web/lib/state"
import { NextResponse } from "next/server"

// id and vehicle_id can be numbers?
export async function GET(request) {
  // const vehicle = await getVehicle(params.id)
  const id = request.url.split('=')[1];
  const vehicle = await getVehicle(id);
  return NextResponse.json({ vehicle })
}
