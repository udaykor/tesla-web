import { getVehicleState } from "@tesla-web/lib/state"
import { NextResponse } from "next/server"

// id and vehicle_id can be numbers?
// Same as charge State 404
export async function GET(request: Request, { params }: {params: { id: string}}) {
  const vehicle = await getVehicleState(params.id);
  return NextResponse.json({ vehicle })
};



