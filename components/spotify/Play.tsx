"use client"

import { PlayIcon } from "@radix-ui/react-icons";

export default function Play({ clickHandler } : { clickHandler: MouseEvent}) {
  return (
    <PlayIcon 
      className="hover:cursor-pointer"
    />
  )
}