import { signIn } from "@/auth"
import { Button } from "flowbite-react"

interface SignInButtonProps {
  signInProvider: string,
  signInText: string,
  icon: JSX.Element
}

export default function SignInButton( props : SignInButtonProps) {
  return (
    <form
      action={async () => {
        "use server"
        await signIn(props.signInProvider)
      }}
      >
        <button
          type="submit"
          className="flex flex-row justify-center content-center gap-x-2 border-2 rounded-full p-2 border-grey-light"
        >
          <div
            className="flex self-center"
          >
            { props.icon }
          </div>
          Sign in with {props.signInText}
        </button>
    </form>
  )
}