// @ts-nocheck TODO: figure out how to fix type errors
"use client"

import { Card } from "@/components/ui/card"
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";
import Image from "next/image";

interface Coords {
  latitude: number,
  longitude: number
}

interface RequestData {
  location: object,
  current: object
}

export default function WeatherForecast() {

  const [coords, setCoords] = useState<Coords>();
  const [weatherData, setWeatherData] = useState<RequestData | null>(null);

  useEffect(() => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setCoords({ latitude, longitude })
      })
    }
  }, [])

  useEffect(() => {
    if(coords) {
      const url = new URL("/dashboard/api/weather", window.location.href)
      url.searchParams.set("latitude", coords.latitude.toString())
      url.searchParams.set("longitude", coords.longitude.toString())
      
      fetch(url).then((res) => {
        res.json().then((data) => {
          setWeatherData(data)
        })
      });
    }
  }, [coords])

  return (
    <Card
      className="aspect-square flex justify-center items-center"
    >
      { !weatherData && (
        <div
          className="aspect-square h-4/5 flex-col justify-center items-center"
        >
          <Skeleton className="h-1/5 w-4/5 my-4 mx-2 rounded-full" />
          <Skeleton className="aspect-square h-2/5 my-4 mx-2 rounded-xl" />
        </div>
      )}

      { weatherData && (
        <div
          className="aspect-square h-4/5 flex-col justify-center items-center"
        >
          <div
            className="w-full text-sm flex justify-center items-center"
          >
            { weatherData.current.condition.text }
            <img
                src={`https:${weatherData.current.condition.icon}`}
                className="grayscale aspect-auto"
                alt="icon"
                width={48}
              />
          </div>
          <div
            className="relative w-full flex justify-center"
          >
            { weatherData.current.feelslike_c}&#176;C
            {/* TODO: add farenheit option */}
          </div>
        </div>
      )}
    </Card>
  )
}