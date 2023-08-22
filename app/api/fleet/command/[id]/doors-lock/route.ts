import { NextResponse } from "next/server"
import { doorLock } from "@tesla-web/lib/commands"

export async function GET(request: Request, { params }: {params: { id: string}}) {
  // Lock doors 
  const response = await doorLock(params.id);
  return NextResponse.json({ response });
}

export const runtime = 'edge';