// @ts-nocheck
"use client"

import { TrackPreviousIcon, PlayIcon, PauseIcon, TrackNextIcon, LoopIcon } from "@radix-ui/react-icons"
import { useEffect, useState } from "react"
import { Skeleton } from "./ui/skeleton";

export default function WebPlayer({ token } : { token: string | undefined}) {

  if(true) {
    return (
      <>
        hi
      </>
    )
  }

  const [track, setTrack] = useState(undefined);
  const [paused, setPaused] = useState<boolean>(false);
  const [is_active, setActive] = useState(false);
  const [playerInstance, setPlayerInstance] = useState(undefined);

  useEffect(() => {
    /*
      Initialise web playback SDK
    */
    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const player = new window.Spotify.Player({
          name: 'Productivité',
          getOAuthToken: cb => { cb(token); },
          volume: 0.20
      });

      setPlayerInstance(player);

      player.addListener('ready', async ({ device_id }) => {
        // Transfer playback to Productivite
        const url = new URL("/v1/me/player", "https://api.spotify.com");
        const ids = [device_id];
 
        await fetch(url, {
          method: "PUT",
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': "application/json"
          },
          body: `{"device_ids": ["${device_id}"]}`
          /* 
            ^^ 79 - ???
            https://community.spotify.com/t5/Spotify-for-Developers/Cannot-Transfer-Playback-Descriptor-ID/td-p/5351203
          */
        })
      });

      player.addListener('not_ready', ({ device_id }) => {
        // ...
      });

      player.addListener('player_state_changed', ( state => {
        console.log(state);
        if (!state) {
            return;
        }
    
        setTrack(state.track_window.current_track);
        setPaused(state.paused);
    
      }));

      player.connect();

      return () => {
        setPaused(false);
      }
    };
  }, [])

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
          className="flex flex-col h-full w-full justify-between"
        >
          <div
            className="flex justify-center"
          >
            { track.name }
          </div>
          <div
            className="flex justify-between"
          >
            <LoopIcon />
            <div
              className="flex justify-center gap-x-10"
            >
              <TrackPreviousIcon 
                className="hover:cursor-pointer"
                onClick={() => playerInstance.previousTrack()} 
              />

              <button onClick={() => playerInstance.togglePlay() }> 
                { paused ? <PlayIcon /> : <PauseIcon /> }
              </button>

              <TrackNextIcon 
                className="hover:cursor-pointer"
                onClick={() => playerInstance.nextTrack()} 
              />

            </div>
            <LoopIcon />
          </div>
        </div>
      </div>
    )}
    </>
  )
}