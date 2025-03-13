import type { Metadata } from "next";
import "./globals.css";
import ReactQueryProvider from "@/utils/providers/ReactQueryProvider";
import { CategoryProvider } from "@/context/CategoryContext";
import { ActiveProductProvider } from "@/context/ActiveProductContext";
import { SearchAndFilterProvider } from "@/context/SearchAndFilterContext";

export const metadata: Metadata = {
  title: "Fresh Goodies 🥦",
  description: "Go Eat Some Fresh Goodies 🥦",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReactQueryProvider>
        <ActiveProductProvider>
          <CategoryProvider>
            <SearchAndFilterProvider>
              <body className="font-sf-pro-display">{children}</body>
            </SearchAndFilterProvider>
          </CategoryProvider>
        </ActiveProductProvider>
      </ReactQueryProvider>
    </html>
  );
}
