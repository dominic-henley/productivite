import { auth } from "@/auth";
import Clock from "@/components/Clock";
import DashboardBody from "@/components/DashboardBody";
import SpotifyWrapper from "@/components/SpotifyWrapper";
import WeatherForecast from "@/components/WeatherForecast";
import TaskTracker from "@/components/TaskTracker";

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
          <div
            className="flex grow gap-x-5"
          >
            <SpotifyWrapper />
            <TaskTracker />
          </div>
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