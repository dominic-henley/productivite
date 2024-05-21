import { signIn } from "@/auth"

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
        await signIn(props.signInProvider, { redirectTo: "/dashboard"})
      }}
      >
        <button
          type="submit"
          className="flex flex-row justify-center content-center 
          gap-x-2 border-2 rounded-full py-2 px-4 border-grey bg-grey-light 
          transition-colors duration-300 ease-in-out hover:bg-grey"
        >
          <div
            className="flex self-center"
          >
            { props.icon }
          </div>
          <div
            className="text-md"
          >
            Sign in with {props.signInText}
          </div>
        </button>
    </form>
  )
}