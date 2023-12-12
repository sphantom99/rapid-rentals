import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RapidRentals",
  description: "Generated by create next app",
  themeColor: "#fde047",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth" lang="en">
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/favicon-512x512.png" />
      <body className={`${inter.className} scroll-smooth`}>
        <>
          <NavBar /> {children} <Footer />
        </>
      </body>
    </html>
  );
}
