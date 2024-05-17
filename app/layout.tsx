import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ShoppingCartProvider from "@/context/ShoppingCartProvider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Fresh Goodies",
  description: "Selling fresh brunette",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ShoppingCartProvider>{children}</ShoppingCartProvider>
      </body>
    </html>
  )
}
