"use client";

import { Drawer, DrawerContent } from "@/components/ui/drawer";
import useActiveProductContext from "@/context/ActiveProductContext";
import useProduct from "@/hooks/useProduct";
import Image from "next/image";
import PrevProductIcon from "@/public/icons/prev-product.png";
import NextProductIcon from "@/public/icons/next-product.png";
import Favorite from "@/components/Icons/Favorite";
import QtyGroup from "@/components/QtyGroup";
import cn from "classnames";
import AddToCartButton from "@/components/AddToCartButton";

interface ProductDetailProps {}

const ProductDetail: React.FC<ProductDetailProps> = () => {
  const {
    activeProduct,
    nextProduct,
    prevProduct,
    hasNext,
    hasPrev,
    resetActiveProduct,
  } = useActiveProductContext();
  const { productMap } = useProduct();

  const currentProduct = productMap[activeProduct || 0];

  return (
    <Drawer onClose={() => resetActiveProduct()} open={activeProduct !== undefined}>
      <DrawerContent className="h-[95%]">
        <div className="flex flex-col h-full justify-between">
          {currentProduct ? (
            <>
              <div className="flex items-center grow">
                <div className="w-full h-fit flex justify-between items-center">
                  <Image
                    onClick={prevProduct}
                    src={PrevProductIcon}
                    alt="prev btn"
                    className={cn(
                      "w-[45px] object-cover object-center h-[150px] overflow-visible",
                      hasPrev
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    )}
                  />
                  <Image
                    height={250}
                    width={250}
                    src={currentProduct.imageUrl}
                    alt={currentProduct.name}
                    className="max-w-3/4 aspect-square object-contain"
                  />
                  <Image
                    onClick={nextProduct}
                    src={NextProductIcon}
                    alt="prev btn"
                    className={cn(
                      "w-[45px] object-cover object-center h-[150px] overflow-visible",
                      hasNext
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    )}
                  />
                </div>
              </div>
              <div className="px-4 mb-4">
                <div className="font-bold text-3xl mb-6">
                  {currentProduct.name}
                </div>
                <div className="text-base font-semibold mb-4">
                  in {currentProduct.metadata.weight} grams
                </div>
                <div className="flex rounded-lg border border-weathered-stone mb-4">
                  <div className="p-5 flex flex-col text-center">
                    <div className="font-semibold text-base">
                      {currentProduct.metadata.calorie}
                    </div>
                    <div className="text-weathered-stone text-sm">calorie</div>
                  </div>
                  <div className="p-5 flex flex-col text-center">
                    <div className="font-semibold text-base">
                      {currentProduct.metadata.calorie}
                    </div>
                    <div className="text-weathered-stone text-sm">calorie</div>
                  </div>
                  <div className="p-5 flex flex-col text-center">
                    <div className="font-semibold text-base">
                      {currentProduct.metadata.calorie}
                    </div>
                    <div className="text-weathered-stone text-sm">calorie</div>
                  </div>
                  <div className="p-5 flex flex-col text-center">
                    <div className="font-semibold text-base">
                      {currentProduct.metadata.calorie}
                    </div>
                    <div className="text-weathered-stone text-sm">calorie</div>
                  </div>
                </div>
                <div className="flex gap-[10px]">
                  <div className="flex-grow">
                    <QtyGroup block {...currentProduct} />
                  </div>
                  <div className="basis-[54px]">
                    <div className="h-full w-full rounded-full bg-whitest-white flex justify-center items-center p-[18px]">
                      <Favorite active />
                    </div>
                  </div>
                </div>
                <AddToCartButton />
              </div>
            </>
          ) : null}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ProductDetail;
