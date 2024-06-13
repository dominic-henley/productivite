import { cookies } from 'next/headers'
import SpotifyPlayer from './SpotifyPlayer';
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { useState } from 'react';

interface payloadType {
  grant_type: string,
  code: RequestCookie | undefined,
  redirect_uri: string,
  client_id: string,
  code_verifier: string
}

export default function SpotifyWrapper() {
  const cookieStore = cookies();
  const code = cookieStore.get('code');
  /* 
    Now that we've got the authorisation code, fetch an access token and
    pass it down a context
  */
  return (
    <SpotifyPlayer cookies={ code } />
  )
}