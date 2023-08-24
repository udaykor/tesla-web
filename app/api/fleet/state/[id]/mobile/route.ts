import { getMobileEnabled } from "@tesla-web/lib/state"
import { NextResponse } from "next/server"

// id and vehicle_id can be numbers?
export async function GET(request: Request, { params }: {params: { id: string}}) {
  const vehicle = await getMobileEnabled(params.id);
  return NextResponse.json({ vehicle })
};


export const runtime = 'edge';