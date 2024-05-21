"use client"

import { Sidebar, Card } from "flowbite-react"
import { IconType } from "react-icons";
import { MdDashboard } from "react-icons/md";

interface menuItemType {
  label: string
  href: string,
  icon: IconType,
}

export default function SidebarMenu() {
  
  // TODO: add type in case we want to have a collapsible menu an array of menuItemType in an array
  const menuItems : Array<menuItemType> = [
    { label: "Dashboard", href: "/dashboard", icon: MdDashboard },
    { label: "Dashboard1", href: "/dashboard", icon: MdDashboard },
    { label: "Dashboard2", href: "/dashboard", icon: MdDashboard },
    { label: "Dashboard3", href: "/dashboard", icon: MdDashboard },
  ]
  
  return (
    <Card>
      <Sidebar>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            { menuItems.map((menuItem, idx) => (
              <Sidebar.Item
                key={ idx }
                icon={ menuItem.icon }
                href={ menuItem.href }
              >
                { menuItem.label }
              </Sidebar.Item>
            ))}
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </Card>
  )
}