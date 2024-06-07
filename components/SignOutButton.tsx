"use client"

import { signOut } from "next-auth/react";
import { Button } from "flowbite-react";

interface SignOutButtonProps {

}

// TODO: might redesign this
export default function SignOutButton( props: SignOutButtonProps) {
  return (
    <Button 
      pill
      className="bg-grey enabled:hover:bg-grey-dark"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      Sign Out
    </Button>
  )
}