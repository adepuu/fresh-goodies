"use client";

import { useState } from "react";
import Image from "next/image";
import search from "@/public/utilities/search.svg";
import filter from "@/public/utilities/filter.svg";

interface NavbarProps {
  onOpenSearch: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenSearch }) => {

  return (
    <>
      <div className="sticky top-0 bg-white flex justify-between items-center pt-8 pb-4 px-4">
        <div className="text-2xl">Vegetables</div>
        <div>
          <button onClick={onOpenSearch} className="">
            <Image src={filter} alt="Sort" />
          </button>
          <button onClick={onOpenSearch} className="ml-8">
            <Image src={search} alt="Search" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;