"use client";

import useCategoryContext from "@/context/CategoryContext";
import useProduct from "@/hooks/useProduct";

const ProductList: React.FC = () => {
  const {
    products,
    isLoading,
    error,
    categories,
    productCategoryGroup,
  } = useProduct();

  const { activeCategory } = useCategoryContext();

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
    return categories.map((category) => (
      <div key={category} className="flex flex-col">
        <h1>{category}</h1>
        <div className="grid grid-cols-2 gap-2 mt-10">
          {productCategoryGroup[category].map((item, index) => (
            <div className="border border-black p-4" key={index}>
              <div>Category: {item.category}</div>
              <div>Name: {item.name}</div>
            </div>
          ))}
        </div>
      </div>
    ));
  }

  return (
    <div className="grid-cols-2 gap-[10px]">
      {products.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
};

export default ProductList;
