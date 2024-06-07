"use client"

import { signIn } from "next-auth/react"
import { Button } from "flowbite-react"

interface SignInButtonProps {
  signInProvider: string,
  signInText: string,
  icon: JSX.Element
}

export default function SignInButton( props : SignInButtonProps) {
  return (
    <Button
      pill
      className="bg-grey enabled:hover:bg-grey-dark"
      onClick={() => signIn(props.signInProvider, { callbackUrl: "/dashboard" })}
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