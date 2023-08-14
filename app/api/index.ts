import { NextResponse } from "next/server"

export async function GET(request: Request, context: { params: any }, ) {
  console.log(context.params)
  // Given incoming request /home
  let response = NextResponse.next()
  // Set a cookie to hide the banner
  response.cookies.set('show-banner', 'false')
  // Response will have a `Set-Cookie:show-banner=false;path=/home` header
  return response
}