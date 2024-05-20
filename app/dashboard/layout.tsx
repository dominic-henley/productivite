import type { Metadata } from "next";

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
      Dashboard
    </>
  );
}
