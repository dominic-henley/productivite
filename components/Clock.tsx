"use client"

import { Card } from "flowbite-react"
import { useEffect, useState } from "react"
import moment from "moment"

export default function Clock() {

  const [time, setTime] = useState<string>(moment(new Date()).format("HH:mm"))

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(moment(new Date()).format("HH:mm"));
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <Card
      className="aspect-square"
    >
      <p
        className="font-semibold flex justify-center"
      >
        { time }
      </p>
    </Card>
  )
}