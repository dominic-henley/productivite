"use client"

import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import { zip } from "@/utils/arrays";

interface Coords {
  latitude: number,
  longitude: number
}

export default function WeatherForecast() {

  const [coords, setCoords] = useState<Coords>();
  const [weatherData, setWeatherData] = useState([{}]);

  useEffect(() => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setCoords({ latitude, longitude })
      })
    }
  }, [])

  useEffect(() => {
    let weatherApiUrl = "https://api.open-meteo.com/v1/forecast?"; 

    // Set lat and lng params in the weather API URL
    weatherApiUrl += `latitude=${coords?.latitude.toString()}&`;
    weatherApiUrl += `longitude=${coords?.longitude.toString()}&`;
    weatherApiUrl += `hourly=temperature_2m`;
    // console.log(weatherApiUrl)

    if(coords) {
      // Because of useEffect things, we need to check if coords is not null
      fetch(weatherApiUrl).then(async (res) => {
        let response = await res.json()
        response = response.hourly
        const data = zip(response.temperature_2m, response.time)
        setWeatherData(data);
      })
    }
    
  }, [coords])

  // console.log(weatherData);

  return (
    <Card
      className="aspect-square"
    >
      
    </Card>
  )
}