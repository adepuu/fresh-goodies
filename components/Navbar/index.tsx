import Image from "next/image";
import React from "react";
import Filter from "@/public/Filter.svg";
import Search from "@/public/Search.svg";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center mb-3.5">
        <h2 className="font-semibold">Vegetables</h2>
        <div className="flex gap-7">
          <Image src={Filter} alt="Filter Icon" />
          <Image src={Search} alt="Search Icon" />
        </div>
      </div>
      <div className="flex justify-around gap-4 overflow-x-scroll mb-5">
        <button className="py-2.5 px-3 border-b-2 border-gray-700">All</button>
        <button className="py-2.5 px-3">Spicy</button>
        <button className="py-2.5 px-3">Dressings</button>
        <button className="py-2.5 px-3">Sweets</button>
        <button className="py-2.5 px-3">Roots</button>
      </div>
    </>
  );
}
