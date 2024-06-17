"use client"

import { TrackPreviousIcon, PlayIcon, PauseIcon, TrackNextIcon } from "@radix-ui/react-icons"
import { useEffect, useState } from "react"
import Play from "./Play";
import Pause from "./Pause"

export default function WebPlayer({ token } : { token: string | undefined}) {

  const [track, setTrack] = useState(undefined);
  const [isPlaying, setPlaying] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(async (res) => {
      setTrack(await res.json());
    })
  }, [])
  
  useEffect(() => {
    if(track) {
      setPlaying(track.is_playing);
    }
  })

  console.log(track)

  return (
  <div
    className="flex p-6 h-full justify-center items-center"
  >
    <div
      className="aspect-square"
    >
      { track && (
        <img
          src={track.item.album.images[2].url}
        />
      )}
    </div>
    <div
      className="flex flex-col h-full w-full justify-between"
    >
      <div
        className="flex justify-center"
      >
        { track && track.item.name }
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
  )
}