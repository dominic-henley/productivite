"use client"

import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"

interface SignInButtonProps {
  signInProvider: string,
  signInText: string,
  icon: JSX.Element
}

export default function SignInButton( props : SignInButtonProps) {
  return (
    <Button
      className="bg-grey enabled:hover:bg-grey-dark"
      onClick={() => signIn(props.signInProvider, { callbackUrl: "/dashboard/api/login" })}
    >
      <div
        className="flex items-center gap-x-2"
      >
        { props.icon }
        Sign in with {props.signInText}
      </div>
    </Button>
  )
}