"use client"

import { Card } from "@/components/ui/card"
import { Dialog } from "./ui/dialog";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { useState } from "react";

export default function TaskTracker() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Card
        className="w-1/2 hover:cursor-pointer relative"
        onClick={() => setOpenModal(true)}
      >
        <div
          className="absolute top-0 right-0 m-2"
        >
          <InfoCircledIcon />
        </div>
        <div
          className="my-3 mx-4"
        >
          hello
        </div>
      </Card>
      {/* dialog here */}
    </>
  )
}