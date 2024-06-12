"use client"

import { Card } from "@/components/ui/card"
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
      className="aspect-square flex justify-center items-center"
    >
      <p
        className="font-semibold flex justify-center text-3xl"
      >
        { time }
      </p>
    </Card>
  )
}