import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RapidRentals",
  description: "Generated by create next app",
};
export const viewport: Viewport = {
  themeColor: "#fde047",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-smooth overflow-x-hidden" lang="en">
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
