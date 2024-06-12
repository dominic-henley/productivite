"use client"

import { Card } from "@/components/ui/card"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"
import { generateRandomString, sha256, base64encode } from "@/lib/spotify"
import { useEffect, useState } from "react"

export default function SpotifyPlayer() {

  const router = useRouter()
  const [codeChallenge, setCodeChallenge] = useState<string | null>(null);

  const scope = 'user-read-private user-read-email'
  const authUrl = new URL("https://accounts.spotify.com/authorize")

  useEffect(() => {
    const codeVerifier = generateRandomString(64);
    sha256(codeVerifier).then((res) => {
      setCodeChallenge(base64encode(res));
    })
  }, [])

  const params : Record<string, string> = {
    response_type: 'code',
    client_id: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID!,
    scope,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge!,
    redirect_uri: process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI ?? 'http://localhost:3000/dashboard'
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