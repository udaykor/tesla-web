import { NextResponse } from "next/server"
import { wakeUp } from "@tesla-web/lib/commands"

export async function GET(request: Request, { params }: {params: { id: string}}) {
  // Get All Vehicles
  const response = await wakeUp(params.id)
  return NextResponse.json({ response })
};

export const runtime = 'edge';
