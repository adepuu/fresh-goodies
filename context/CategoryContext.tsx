"use client";
import { createContext, ReactNode, useContext, useState } from "react";

interface CategoryContextType {
  activeCategory: string | undefined;
  setActiveCategory: (category: string | undefined) => void;
}

const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

const useCategoryContext = () => {
  const ctx = useContext(CategoryContext);
  if (!ctx) {
    throw new Error("Context usage out of provider");
  }
  return ctx;
};

export const CategoryProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [activeCategory, setActiveCategory] = useState<string | undefined>();

  const updateActiveCategory = (category: string | undefined) => {
    setActiveCategory(category);
  };

  return (
    <CategoryContext.Provider
      value={{ activeCategory, setActiveCategory: updateActiveCategory }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export default useCategoryContext;
