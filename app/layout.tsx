import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Fresh Goodies",
  description: "Fresh Goodies delivered fresh everywhere you are",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sf-pro">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
