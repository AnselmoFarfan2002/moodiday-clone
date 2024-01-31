import type { Metadata } from "next";
import "./globals.css";
import "material-symbols";

import Header from "@/components/header";

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
      <body>
        <Header />
        <main className="max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
