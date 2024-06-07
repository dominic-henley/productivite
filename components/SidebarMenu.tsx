"use client"

import { Sidebar, Card, CustomFlowbiteTheme } from "flowbite-react"
import { IconType } from "react-icons";
import { MdDashboard } from "react-icons/md";
import { CiSettings } from "react-icons/ci";
import { IoPersonCircle } from "react-icons/io5";

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
    { label: "Profile", href: "/profile", icon: IoPersonCircle },
    { label: "Settings", href: "/settings", icon: CiSettings },
  ]
  
  const sidebarTheme : CustomFlowbiteTheme["sidebar"]= {
    root: {
      inner: "h-full shadow-md overflow-y-auto overflow-x-hidden rounded-xl bg-white px-3 py-4 dark:bg-gray-800"
    }
  }

  return (
    <Sidebar
      theme={ sidebarTheme }
    >
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
  )
}