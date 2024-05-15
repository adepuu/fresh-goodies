"use client";


import { createContext, useState } from "react";

interface ContextType {
  activeCategory: string;
  changeCategory: (category: string) => void;
}

const CategoryContext = createContext<ContextType>({
  activeCategory: "All",
  changeCategory: () => {},
});

const CategoryProvider = (props: any) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const changeCategory = (category: string) => {
    console.log(category)
    setActiveCategory(category);
  };

  return (
    <CategoryContext.Provider value={{ activeCategory, changeCategory }}>
      {props.children}
    </CategoryContext.Provider>
  );
};

export { CategoryContext, CategoryProvider };
