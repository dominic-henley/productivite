import { auth } from "@/auth";
import SignInButton from "@/components/SignInButton";
import { FaGoogle } from "react-icons/fa";

export default async function Home() {

  const buttons = [
    { provider: "google", text: "Google", icon: <FaGoogle />}
  ]

  return (
    <div
      className="w-full h-full flex justify-center border-black border-solid"
      >
        <div
          className="flex flex-col justify-center gap-y-4"
          >
          <div
            className="flex justify-center text-7xl font-bold"
            >
              Productivité
          </div>
          <div
            className="flex justify-center content-center"
          >
            { buttons.map((button, idx) => (
              <SignInButton
                key={idx}
                icon={ button.icon }
                signInProvider={ button.provider }
                signInText={ button.text }
              />
            ))}
          </div>
        </div>
    </div>
  );
}
