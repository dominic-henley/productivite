"use client"

import { Card } from "@/components/ui/card"
import { Dialog } from "./ui/dialog";
import { useState } from "react";

export default function TaskTracker() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Card
        className="w-1/2 hover:cursor-pointer"
        onClick={() => setOpenModal(true)}
      >
      </Card>
      {/* dialog here */}
    </>
  )
}