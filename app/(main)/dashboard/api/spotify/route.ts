import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const ONE_HOUR = 60 * 60 * 1000

export async function GET(req: NextRequest) {
  // Use this route so that the url is kept as /dashboard instead of /dashboard?code=...
  const response = NextResponse.redirect(new URL("/dashboard", req.url));
  const code = req.nextUrl.searchParams.get('code');

  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  // code will be set when the user authorises the login
  if(code) {
    const params = new URLSearchParams();
    params.set('grant_type', 'authorization_code');
    params.set('code', code)
    params.set('redirect_uri', process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI ?? 'http://localhost:3000/dashboard/api/spotify')

    const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + (Buffer.from(clientId + ':' + clientSecret).toString('base64'))
      },
      body: params
    })
    
    const token = await tokenResponse.json();
    response.cookies.set('productivite-token', token.access_token, { expires: new Date().getTime() + token.expires_in * 1000 });
    response.cookies.set('productivite-refresh-token', token.refresh_token);
  }

  return response;
}