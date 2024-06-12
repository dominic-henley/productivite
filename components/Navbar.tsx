"use client"

import { NavigationMenuLink, NavigationMenuList } from "@radix-ui/react-navigation-menu"
import { NavigationMenu, NavigationMenuItem, navigationMenuTriggerStyle } from "./ui/navigation-menu"
import SignOutButton from "./SignOutButton"
import { ThemeChanger } from "./ThemeChanger"
import { Button } from "./ui/button"

export default function Navbar() {
  return (
    <div
      className="flex justify-between py-4 px-8"
    >
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <ThemeChanger />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <SignOutButton />
    </div>
  )
}