"use client"

import { Card } from "@/components/ui/card";
import { DataTable } from "./dataTable/DataTable";
import { columns, Task } from "./dataTable/Columns";
import { useEffect, useState } from "react";

export default function DashboardBody() {

  const [selectedRows, setSelectedRows] = useState<Task[]>([])

  useEffect(() => {
    console.log(selectedRows);
  }, [])

  const testTask : Task[] = [
    {
      id: "1",
      name: "test task",
      status: "Not Started"
    },
    {
      id: "2",
      name: "test task1",
      status: "Started"
    },
    {
      id: "3",
      name: "test task",
      status: "Done"
    },
    {
      id: "4",
      name: "test task",
      status: "Not Started"
    },
    {
      id: "5",
      name: "test task1",
      status: "Started"
    },
    {
      id: "6",
      name: "test task",
      status: "Done"
    },
    {
      id: "7",
      name: "test task",
      status: "Not Started"
    },
    {
      id: "8",
      name: "test task1",
      status: "Started"
    },
    {
      id: "9",
      name: "test task",
      status: "Done"
    },
    {
      id: "10",
      name: "test task",
      status: "Not Started"
    },
    {
      id: "11",
      name: "test task1",
      status: "Started"
    },
    {
      id: "12",
      name: "test task",
      status: "Done"
    },
    {
      id: "13",
      name: "test task",
      status: "Not Started"
    },
    {
      id: "14",
      name: "test task1",
      status: "Started"
    },
    {
      id: "15",
      name: "test task",
      status: "Done"
    },
    {
      id: "16",
      name: "test task",
      status: "Not Started"
    },
    {
      id: "17",
      name: "test task1",
      status: "Started"
    },
    {
      id: "18",
      name: "test task",
      status: "Done"
    },
    {
      id: "19",
      name: "test task",
      status: "Not Started"
    },
    {
      id: "20",
      name: "test task1",
      status: "Started"
    },
    {
      id: "21",
      name: "test task",
      status: "Done"
    },
    {
      id: "22",
      name: "test task",
      status: "Not Started"
    },
    {
      id: "23",
      name: "test task1",
      status: "Started"
    },
    {
      id: "24",
      name: "test task",
      status: "Done"
    },
  ]

  return (
    <Card
     className="h-full flex flex-col"
    >
      <div
        className="grow m-5"
      >
        Tasks for the day
      </div>
      <DataTable 
        columns={ columns }
        data={ testTask }
        // callbackFn={ setSelectedRows }
      />
    </Card>
  )
}