import Navbar from "@/components/Navbar";
import SidebarMenu from "@/components/SidebarMenu";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Productivité | Dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className="h-screen w-full flex flex-col"
    >
      <Navbar />
      <div
        className="flex flex-row h-full my-12 mx-32 gap-x-12"
        >
        <SidebarMenu />
        <div
          className="grow h-full"
          >
          { children }
        </div>
      </div>
    </div>
  )
}
