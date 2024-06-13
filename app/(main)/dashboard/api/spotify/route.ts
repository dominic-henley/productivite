import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // Use this route so that the url is kept a /dashboard instead of /dashboard?code=...
  const response = NextResponse.redirect(new URL("/dashboard", req.url));
  const code = req.nextUrl.searchParams.get('code');
  
  // code will be set when the user authorises the login
  if(code) {
    response.cookies.set('code', code);
  }

  return response;
}