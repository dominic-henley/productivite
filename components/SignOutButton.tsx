import { signOut } from "@/auth";

interface SignOutButtonProps {

}

// TODO: might redesign this
export default function SignOutButton( props: SignOutButtonProps) {
  return (
    <form
      action={async () => {
        "use server"
        await signOut()
      }}
      >
        <button
          type="submit"
          className="rounded-md border-2 py-2 px-4 border-grey bg-grey-light 
          transition-colors duration-300 ease-in-out hover:bg-grey"
        >
          <p
            className="text-sm"
          >
            Sign Out
          </p>
        </button>
    </form>
  )
}