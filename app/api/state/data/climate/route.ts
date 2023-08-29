import { getClimateState } from "@tesla-web/lib/state"
import { NextResponse } from "next/server"

// id and vehicle_id can be numbers?
// Charge state EP is now a 404 - Check on Aug 21 5 PM AEST
// Climate State is a 404 
export async function GET(request: Request, { params }: {params: { id: string}}) {
  const vehicle = await getClimateState(params.id);
  return NextResponse.json({ vehicle })
};


