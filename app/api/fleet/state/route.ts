import { NextResponse } from "next/server"
import { getVehicles } from "@tesla-web/lib/state"

export async function GET() {
  // Get All Vehicles
  const vehicles = await getVehicles()
  return NextResponse.json({ vehicles })
};

export const runtime = 'edge';