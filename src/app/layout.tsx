import type { Metadata } from "next";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "material-symbols";

import Header from "@/components/header";
import { typography } from "@/styles/typography";
import Footer from "@/components/footer";
export const metadata: Metadata = {
  title:
    "Discover Cannabis Brands, Earn Cash Rewards for Your Honest Reviews | Moodi Day",
  description:
    "Compare reviews and ratings for the best cannabis brands near you. Share your honest reviews so no one has to have another disappointing experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={typography.body}>
        <Header />
        <main className="max-w-6xl mx-auto pt-[10em] lg:pt-[7em] px-6 pb-[5em]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
