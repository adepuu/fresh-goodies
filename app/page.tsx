"use client";

import useProduct from "@/hooks/useProduct";
import { useState } from "react";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("");
  const { products, categories, productGroup } = useProduct();

  const finalProduct = products.filter((product) => {
    if (!activeCategory) return true;
    return product.category === activeCategory;
  });

  const allProductList =
    activeCategory || !productGroup
      ? null
      : categories.map((category) => (
          <div key={category} className="flex flex-col">
            <h1>{category}</h1>
            <div className="grid grid-cols-2 gap-2 mt-10">
              {productGroup[category].map((item, index) => (
                <div className="border border-black p-4" key={index}>
                  <div>Category: {item.category}</div>
                  <div>Name: {item.name}</div>
                </div>
              ))}
            </div>
          </div>
        ));

  return (
    <main className="flex min-h-screen flex-col items-start justify-start p-10">
      <div className="w-screen overflow-x-scroll">
        <div className="flex gap-2">
          <div
            onClick={() => setActiveCategory("")}
            className="px-4 text-nowrap"
          >
            All
          </div>
          {categories.map((item, index) => (
            <div
              onClick={() => setActiveCategory(item)}
              className="px-4 text-nowrap"
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      {activeCategory ? (
        <div className="grid grid-cols-2 gap-2 mt-10">
          {finalProduct.map((item, index) => (
            <div className="border border-black p-4" key={index}>
              <div>Category: {item.category}</div>
              <div>Name: {item.name}</div>
            </div>
          ))}
        </div>
      ) : (
        allProductList
      )}
    </main>
  );
}
