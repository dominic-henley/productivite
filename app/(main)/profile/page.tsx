import { auth } from "@/auth"

export default async function Profile() {
  
  const session = await auth()
  
  return (
    <>
      Hi { session?.user?.name }
    </>  
  )
}