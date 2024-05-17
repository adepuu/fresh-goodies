"use client";

import AddToCartButton from "@/components/AddToCartButton";
import ProductCard from "@/components/ProductCard";
import useActiveProductContext from "@/context/ActiveProductContext";
import useCategoryContext from "@/context/CategoryContext";
import useCart from "@/hooks/useCart";
import useProduct from "@/hooks/useProduct";
import cn from "classnames";
import { useCallback, useMemo } from "react";

const ProductList: React.FC = () => {
  const { products, isLoading, error, categories, productCategoryGroup } =
    useProduct();

  const { cart } = useCart();

  const isCartEmpty = useMemo(() => {
    return cart === undefined || cart.length === 0
  }, [cart])

  const { updateProductNavigation } = useActiveProductContext();
  const { activeCategory } = useCategoryContext();

  const filteredProducts = useMemo(() => {
    if (!products || !activeCategory) return [];
    return products.filter((item) => item.category === activeCategory);
  }, [activeCategory, products]);

  const handleOpenDetail = useCallback(
    (productId: number) => {
      const productIdList: number[] = [];
      if (!activeCategory) {
        categories.forEach((category) => {
          const innerList = productCategoryGroup[category].map(
            (item) => item.id
          );
          productIdList.push(...innerList);
        });
      } else {
        const innerList = filteredProducts.map((item) => item.id);
        productIdList.push(...innerList);
      }
      updateProductNavigation(productIdList, productId);
    },
    [
      activeCategory,
      categories,
      filteredProducts,
      productCategoryGroup,
      updateProductNavigation,
    ]
  );

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
      <div className={cn("py-5 px-4 flex flex-col gap-5", !isCartEmpty ? "pb-32" : "")}>
        {categories.map((category) => (
          <div key={category} className="flex flex-col">
            <h1 className="font-bold text-2xl">{category}</h1>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {productCategoryGroup[category].map((item, index) => (
                <ProductCard
                  onClick={handleOpenDetail}
                  key={item.id}
                  {...item}
                />
              ))}
            </div>
          </div>
        ))}
        {!isCartEmpty ? (
          <div className="fixed bottom-0 left-0 w-full h-fit px-4 pb-[56px]">
            <AddToCartButton withProductThumbnails />
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className={cn("py-5 px-4", !isCartEmpty ? "pb-32" : "")}>
      <div className="grid grid-cols-2 gap-[10px]">
        {filteredProducts.map((item, index) => (
          <ProductCard onClick={handleOpenDetail} key={item.id} {...item} />
        ))}
      </div>
      {!isCartEmpty ? (
        <div className="fixed bottom-0 left-0 w-full h-fit px-4 pb-[56px]">
          <AddToCartButton withProductThumbnails />
        </div>
      ) : null}
    </div>
  );
};

export default ProductList;
