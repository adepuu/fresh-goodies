"use client";

import ProductCard from "@/components/ProductCard";
import useCategoryContext from "@/context/CategoryContext";
import useProduct from "@/hooks/useProduct";
import { useMemo } from "react";

const ProductList: React.FC = () => {
  const { products, isLoading, error, categories, productCategoryGroup } =
    useProduct();

  const { activeCategory } = useCategoryContext();

  const filteredProducts = useMemo(() => {
    if (!products || !activeCategory) return [];
    return products.filter((item) => item.category === activeCategory);
  }, [activeCategory, products]);

  if (isLoading)
    return (
      <div className="h-full w-full flex justify-center items-center">
        <div className="text-2xl">Loading...</div>
      </div>
    );

  if (!products)
    return (
      <div className="h-full w-full flex justify-center items-center">
        <div className="text-2xl">No products</div>
      </div>
    );

  if (error)
    return (
      <div className="h-full w-full flex justify-center items-center">
        <div className="text-2xl">Something is wrong</div>
      </div>
    );

  if (!activeCategory) {
    return (
      <div className="py-5 px-4">
        {categories.map((category) => (
          <div key={category} className="flex flex-col">
            <h1>{category}</h1>
            <div className="grid grid-cols-2 gap-2 mt-10">
              {productCategoryGroup[category].map((item) => (
                <ProductCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="py-5 px-4">
      <div className="grid grid-cols-2 gap-[10px]">
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
