"use client"

import { Card } from "@/components/ui/card"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import { generateRandomString, sha256, base64encode } from "@/lib/spotify"
import { useEffect, useState } from "react"
import { Skeleton } from "./ui/skeleton"
import WebPlayer from "./WebPlayer"

interface spotifyPlayerPropType {
  token: string | undefined
}

export default function SpotifyPlayer({ token } : spotifyPlayerPropType) {
  const router = useRouter()
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [tokenChecked, setTokenChecked] = useState<boolean>(false);

  const scope = 'user-read-private user-read-email user-read-playback-state'
  const authUrl = new URL("https://accounts.spotify.com/authorize")
  const state = generateRandomString(16);

  useEffect(() => {
    // Check if access token exists
    if(token) {
      setLoggedIn(true);
    } else {  
      setLoggedIn(false);
    }
    setTokenChecked(true);
  }, [])
  
  const params : Record<string, string> = {
    response_type: 'code',
    client_id: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!,
    scope,
    redirect_uri: process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI ?? 'http://localhost:3000/dashboard/api/spotify',
    state
  }

  authUrl.search = new URLSearchParams(params).toString();

  return (
    <Card
      className="w-1/2"
    >
      { !tokenChecked && (
        <div
          className="flex justify-center items-center w-full h-full"
        >
          <Skeleton className="w-1/2 h-1/2"/>
        </div>
      )}
      { !loggedIn && tokenChecked && (
        <div
          className="flex justify-center items-center h-full"
        >
          <Button
            onClick={() => router.push(authUrl.toString())}
          >
            Login to spotify
          </Button>
      </div>
      )}
      { loggedIn && tokenChecked && (
        <WebPlayer token={ token }/>
      )}
    </Card>
  )
}