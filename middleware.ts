import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { auth } from "@/auth";

export default auth(async function middleware(req : NextRequest) {
  const session = await auth();
  console.log(session);
  
  if(!session && req.nextUrl.pathname == "/dashboard") {
    /* 
      If for whatever reason the user is able to access /dashboard without a valid session
      boot them back into the landing page
    */
    return NextResponse.redirect(new URL("/", req.url));
  }

  if(session && req.nextUrl.pathname == "/") {
    /*
      Alternatively, if the user is already logged in and they are in the landing page
      redirect them to the dashboard
    */
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
})

export const config = {
  /* 
    Negative lookahead regex to prevent middleware from running on these routes
    Primarily, these routes are routes not associated with normal authentication procedures
  */ 
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}