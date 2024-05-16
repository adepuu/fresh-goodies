"use client";

import useCategoryContext from "@/context/CategoryContext";
import useProduct from "@/hooks/useProduct";
import cn from "classnames";

const CategoryList: React.FC = () => {
  const { categories } = useProduct();
  const { activeCategory, setActiveCategory } = useCategoryContext();

  const defaultClassName = "text-nowrap text-2xl px-[14px] py-[10px]";
  return (
    <nav className="w-full max-h-screen h-auto">
      <div className="overflow-x-scroll flex gap-1">
        <div
          onClick={() => setActiveCategory(undefined)}
          className={cn(
            defaultClassName,
            !activeCategory && "border-black border-b-2"
          )}
        >
          All
        </div>
        {categories.map((item) => (
          <div
            onClick={() => setActiveCategory(item)}
            className={cn(
              defaultClassName,
              activeCategory === item && "border-black border-b-2"
            )}
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default CategoryList;
