"use client"

import { PauseIcon } from "@radix-ui/react-icons";

export default function Play({ clickHandler } : { clickHandler : MouseEvent}) {
  return (
    <PauseIcon 
      className="hover:cursor-pointer"
    />
  )
}