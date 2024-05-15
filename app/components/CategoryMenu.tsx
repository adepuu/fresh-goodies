"use client";

import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";

export default function CategoryMenu() {
  const { activeCategory, changeCategory } = useContext(CategoryContext);

  const menuCategories = ["All", "Spicy", "Dressings", "Sweet", "Roots"];

  return (
    <>
      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide">
        <ul className="inline-flex space-x-4 p-2">
          {menuCategories.map((item) => (
            <li
              key={item}
              className={`cursor-pointer inline-block px-4 py-2 ${
                activeCategory === item ? "border-b-2 border-black" : ""
              }`}
              onClick={() => changeCategory(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
