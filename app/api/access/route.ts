import { NextResponse } from "next/server"
import  { getCurrentRefreshToken, requestNewToken, updateCurrentTokens } from "@tesla-web/lib/authz";

export async function GET(request: Request) {
  const res = await requestNewToken();
  return NextResponse.json({ res });
};


export const runtime = 'edge';