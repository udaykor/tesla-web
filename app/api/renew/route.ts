import { NextResponse } from "next/server"
import  { getCurrentToken } from "@tesla-web/lib/authz";


export async function GET(request: Request) {
  try {
    const res = await getCurrentToken();
  return NextResponse.json({ completed: true });
  } catch(err: any) {
    // We need this to be successfull.
    // Alternate when this fails in demo 
    // Get access Token and refresh Token on a separate computer 
    // and Update Database manually.
    // Should take 10-20 seconds
    console.error('Failed to renew tokens')
    return NextResponse.json({ errMsg: 'Failed to renew tokens' });
  }
};


