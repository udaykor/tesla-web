import { getVehicle } from "@tesla-web/lib/state"
import { NextResponse } from "next/server"
import type { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false,
  },
};

// id and vehicle_id can be numbers?
export async function GET(request:Request) {
  
  const vehicle = await getVehicle(request.url.split('=')[1], request.headers.get('uri')?.toString(), undefined);
  return NextResponse.json({ vehicle})
}
