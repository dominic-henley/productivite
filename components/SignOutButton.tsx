"use client"

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button"
import { ExitIcon } from "@radix-ui/react-icons";
import { TooltipProvider, TooltipTrigger, TooltipContent, Tooltip } from "@/components/ui/tooltip"

interface SignOutButtonProps {

}

export default function SignOutButton( props: SignOutButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            variant="link"
            className="dark:bg-black dark:text-zinc-400"
            onClick={() => signOut({ callbackUrl: "/" })}
          >
            <ExitIcon />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          Log Out
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}