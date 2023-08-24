import { NextResponse } from "next/server"
import { wink } from "@tesla-web/lib/commands"

export async function GET(request: Request, { params }: {params: { id: string}}) {
  // Get All Vehicles
  const response = await wink(params.id)
  return NextResponse.json({ response })
};

export const runtime = 'edge';
