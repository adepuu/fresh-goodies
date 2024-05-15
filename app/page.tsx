"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import SearchSort from "./components/SearchSort";
import CategoryMenu from "./components/CategoryMenu";
import ProductShowcase from "./components/ProductShowcase";
import { useState } from "react";
import { CategoryProvider } from "./context/CategoryContext";

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <CategoryProvider>
        <Navbar onOpenSearch={() => setIsSearchOpen(true)} />
        <CategoryMenu />
        <SearchSort
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />
        <div
          className="max-h-screen overflow-y-scroll"
          style={{ scrollbarWidth: "none" }}
        >
          <ProductShowcase />
        </div>
      </CategoryProvider>
    </>
  );
}
