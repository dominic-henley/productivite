import { auth } from "@/auth";
import Clock from "@/components/Clock";
import DashboardBody from "@/components/DashboardBody";
import FinanceTracker from "@/components/FinanceTracker";
import SpotifyWrapper from "@/components/SpotifyWrapper";
import WeatherForecast from "@/components/WeatherForecast";

export default async function Dashboard() {

  return (
    <>
      <div
        id="container"
        className="flex flex-col gap-y-6 h-full"
      >
        <div
          id="top-row"
          className="flex flex-row gap-x-6 h-1/6 "
        >
          {/* { TODO: might mess around with top row size in the future} */}
          <Clock />
          <SpotifyWrapper />
          <FinanceTracker />
          <WeatherForecast />
        </div>
        <div
          id="main-body"
          className="h-5/6"
        >
          <DashboardBody />
        </div>
      </div>
    </>
  )
}