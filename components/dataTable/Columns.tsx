"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"

export type Task = {
  id: string
  status: "Not Started" | "Started" | "Done"
  name: string,
}

export const columns: ColumnDef<Task>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox 
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={ (val) => table.toggleAllPageRowsSelected(!!val) }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={ row.getIsSelected() }
        onCheckedChange={ (val) => row.toggleSelected(!!val) }
        aria-label="Select row"
      />
    )
  },
  {
    accessorKey: "status",
    header: "Status"
  },
  {
    accessorKey: "name",
    header: "Name"
  },
]