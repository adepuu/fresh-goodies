"use client";

import Image from "next/image";
import Navbar from "./components/Navbar";
import SearchSort from "./components/SearchSort";
import CategoryMenu from "./components/CategoryMenu";
import ProductShowcase from "./components/ProductShowcase";
import { useState } from "react";

export default function Home() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <>
      <Navbar onOpenSearch={() => setIsSearchOpen(true)} />
      <CategoryMenu />
      <SearchSort isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <ProductShowcase />
    </>
  );
}
