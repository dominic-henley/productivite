import SidebarMenu from "@/components/SidebarMenu";
import SignOutButton from "@/components/SignOutButton";
import { Navbar, NavbarBrand, NavbarToggle, NavbarCollapse, NavbarLink, Sidebar } from "flowbite-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Productivité | Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar
        fluid
        rounded
        className="mb-8"
      > 
        <NavbarBrand
          as={Link}
          href="/"
        >
          logo here lol
        </NavbarBrand>
        <SignOutButton />
      </Navbar>
      <div
        className="flex flex-row mx-24"
      >
        <SidebarMenu />
        <div
          className="w-2/3"
        >
          { children }
        </div>
      </div>
    </>
  )
}
