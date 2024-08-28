import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";

const overpass = Overpass({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${overpass.className} bg-gradient-to-b from-custom-blue-start to-custom-blue-end`}>
        {children}
      </body>
    </html>
  );
}
