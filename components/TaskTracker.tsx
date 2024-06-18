"use client"

import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { Progress } from "./ui/progress";

export default function TaskTracker() {

  const testData = [
    ["Status", "Ratio"],
    ["Done", 20],
    ["Not done", 80]
  ]

  const chartOptions = {
    pieHole: 0.2,
  }
  
  return (
    <Card
      className="w-1/2 relative"
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div
              className="absolute top-0 right-0 m-2 hover:cursor-pointer"
            >
              <InfoCircledIcon />
            </div>
          </TooltipTrigger>
          <TooltipContent>
            Productivité currently uses your browser's functionality to store content. If you clear your cookies/cache, your data will be deleted. We plan on improving this in the future.
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <Dialog>
        <DialogTrigger asChild>
          <div
            className="my-3 mx-4 hover:cursor-pointer"
            >
            <p className="text-sm">Tasks</p>
            <div
              className="flex flex-col gap-y-2"
            >
              <div>
                Done
                <Progress value={80} />
              </div>
              <div>
                Not Done
                <Progress value={20} />
              </div>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent>
          test
        </DialogContent>
      </Dialog>
    </Card>
  )
}