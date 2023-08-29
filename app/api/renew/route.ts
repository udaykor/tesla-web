import { NextResponse } from "next/server"
import  { requestNewToken, getCurrentToken } from "@tesla-web/lib/authz";


export async function GET(request: Request) {
  // const res = await requestNewToken();
  const res = await getCurrentToken();
  return NextResponse.json({ completed: true });
};


