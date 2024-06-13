"use client"

import { Card } from "@/components/ui/card"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import { generateRandomString, sha256, base64encode } from "@/lib/spotify"
import { useEffect, useState } from "react"
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies"

interface spotifyPlayerPropTypes {
  cookies: RequestCookie | undefined,
}

export default function SpotifyPlayer( { cookies } : spotifyPlayerPropTypes) {
  const router = useRouter()
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [codeChallenge, setCodeChallenge] = useState<string | null>(null);
  
  const scope = 'user-read-private user-read-email'
  const authUrl = new URL("https://accounts.spotify.com/authorize")
  
  console.log(cookies);
  useEffect(() => {
    if(cookies) {
      console.log("HI LOGGED IN")
      setLoggedIn(false);
    } else {
      console.log("NOT LOGGED IN")
      setLoggedIn(true);
    }
  }, [])

  useEffect(() => {
    const codeVerifier = generateRandomString(64);
    window.localStorage.setItem('code_verifier', codeVerifier);
    sha256(codeVerifier).then((res) => {
      setCodeChallenge(base64encode(res));
    })
  }, [])

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    let code = urlParams.get('code')
    if(code || localStorage.getItem('code_verifier')) {
      // If a code is found in the URL or in local storage, then the user has authorised spotify
      setLoggedIn(true);
    }
  })

  const params : Record<string, string> = {
    response_type: 'code',
    client_id: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!,
    scope,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge!,
    redirect_uri: process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI ?? 'http://localhost:3000/dashboard/api/spotify'
  }

  authUrl.search = new URLSearchParams(params).toString();

  return (
    <Card
      className="grow"
    >

      <div
        className="flex p-6 h-full justify-center items-center"
      >
        <div
          className="aspect-square"
        >
          image
        </div>
        <div
          className="flex flex-col h-full w-full justify-between"
        >
          <div
            className="flex justify-center"
          >
            title
          </div>
          <div
            className="flex justify-center"
          >
              <Button
                onClick={() => router.push(authUrl.toString())}
              >
                Login to spotify
              </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}