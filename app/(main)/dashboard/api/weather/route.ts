import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  if(process.env.ENVIRONMENT == "dev") {
    return NextResponse.json(null);
  }
  const weatherApiUrl = new URL(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}`);
  const latitude = request.nextUrl.searchParams.get("latitude");
  const longitude = request.nextUrl.searchParams.get("longitude");
  
  weatherApiUrl.searchParams.set("q", `${latitude!.toString()},${longitude!.toString()}`);

  let weatherData = null;

  await fetch(weatherApiUrl).then(async (res) => {
    weatherData = await res.json();
  })

  return NextResponse.json(weatherData);
}