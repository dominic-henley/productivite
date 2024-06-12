"use client"

import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Link from "next/link";

interface menuItemType {
  label: string
  href: string,
}

export default function SidebarMenu() {
  
  // TODO: add type in case we want to have a collapsible menu an array of menuItemType in an array
  const menuItems : Array<menuItemType> = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Profile", href: "/profile" },
    { label: "Settings", href: "/settings" },
  ]

  return (
    <Card
      className="w-1/5 flex flex-col justify-between py-8 px-10"
    >
      <div
        className="flex flex-col items-start gap-4"
      >
        { menuItems.map((el : menuItemType, idx) => (
            // Might move these buttons to a reusable component
            <Button
              variant="link"
              key={ idx }
              className="bg-white text-black dark:bg-black dark:text-white"
            >
              <Link href={ el.href }>{ el.label }</Link>
            </Button>
          )
        )}
      </div>
      <div>
      <Separator />
        <Button
          variant="link"
          className="bg-white dark:bg-black dark:text-white py-8 w-full"
        >
          <Link href="/about">About Productivité</Link>
        </Button>
      </div>
    </Card>
  )
}