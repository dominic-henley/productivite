"use client"

import { Card } from "@/components/ui/card"
import { Dialog } from "./ui/dialog";
import { useState } from "react";

export default function FinanceTracker() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Card
        className="grow hover:cursor-pointer"
        onClick={() => setOpenModal(true)}
      >
      </Card>
      {/* dialog here */}
    </>
  )
}