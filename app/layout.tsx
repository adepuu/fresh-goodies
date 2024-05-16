import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "@/utils/providers/ReactQueryProvider";
import { CategoryProvider } from "@/context/CategoryContext";


export const metadata: Metadata = {
  title: "Fresh Goodies ;)",
  description: "Go Eat Some Fresh Goodies ;)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactQueryProvider>
        <CategoryProvider>
          <body className="font-sf-pro-display">{children}</body>
        </CategoryProvider>
      </ReactQueryProvider>
    </html>
  );
}
