"use client"

import { TrackPreviousIcon, PlayIcon, PauseIcon, TrackNextIcon } from "@radix-ui/react-icons"
import { useEffect, useState } from "react"
import Play from "./spotify/Play";
import Pause from "./Pause"
import { Skeleton } from "./ui/skeleton";

export default function WebPlayer({ token } : { token: string | undefined}) {

  const [track, setTrack] = useState(undefined);
  const [isPlaying, setPlaying] = useState<boolean>(false);

  useEffect(() => {
    // Fetch most recently played track to display on the UI. This may not be playing
    if(token) {
      const url = new URL("/v1/me/player/recently-played", "https://api.spotify.com");
    
      const params : Record<string, string> = {
        limit: "1",
      }

      for(const [k, v] of Object.entries(params)) {
        url.searchParams.set(k, v);
      }

      fetch(url, {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${token}`
        },
      }).then(async (res) => {
        const response = await res.json();
        setTrack(response.items[0].track);
      })
    }
  }, [])
  
  useEffect(() => {
    /*
      Check if the player session is active, this is to sync the player with the session
    */
    const url = new URL("/v1/me/player", "https://api.spotify.com");
    fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(async (res) => {
      // We can't call res.json() here because res might be a 204, which will not send a json body response
      const response = await res; 
      if(response.status == 200) {
        // So we call it here instead
        const playerState = await res.json();
        setPlaying(playerState.is_playing);
      }

      if(response.status == 204) {
        // The API doesn't actually allow the website to play songs,
      }
    })
  })

  console.log(track)

  return (
    <>
    { !track && (
      <div
        className="flex justify-center items-center w-full h-full"
      >
        <Skeleton className="w-1/2 h-1/2"/>
      </div>
    )}
    { track && (
      <div
        className="flex p-6 h-full justify-center items-center"
      >
        <div
          className="aspect-square"
        >
          <img
            src={track.album.images[2].url}
          />
        </div>
        <div
          className="flex flex-col h-full w-full justify-between"
        >
          <div
            className="flex justify-center"
          >
            { track.name }
          </div>
          <div
            className="flex justify-center gap-x-10"
          >
            <TrackPreviousIcon />
            { isPlaying ? <Pause /> : <Play /> }
            <TrackNextIcon />
          </div>
        </div>
      </div>
    )}
    </>
  )
}