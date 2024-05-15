"use client";

import { useState } from "react";

export default function CategoryMenu() {
  const [activeItem, setActiveItem] = useState<string>("All");

  const menuItems = ["All", "Spicy", "Dressings", "Sweet", "Roots"];

  return (
    <>
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
        <ul className="inline-flex space-x-4 p-2">
          {menuItems.map((item) => (
            <li
              key={item}
              className={`inline-block px-4 py-2 ${
                activeItem === item ? "border-b-2 border-black" : ""
              }`}
              onClick={() => setActiveItem(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
