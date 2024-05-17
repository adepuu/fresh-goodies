"use client";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import useActiveProductContext from "@/context/ActiveProductContext";
import useProduct from "@/hooks/useProduct";
import Image from "next/image";
import PrevProductIcon from "@/public/icons/prev-product.png";
import NextProductIcon from "@/public/icons/next-product.png";
import Favorite from "@/components/Icons/Favorite";
import QtyGroup from "@/components/QtyGroup";
import { useEffect } from "react";

interface ProductDetailProps {}

const ProductDetail: React.FC<ProductDetailProps> = () => {
  const { activeProduct, nextProduct, prevProduct, hasNext, hasPrev, productNavigation, resetActiveProduct } =
    useActiveProductContext();
  const { productMap } = useProduct();

  const currentProduct = productMap[activeProduct || 0];
  return (
    <Drawer open={activeProduct !== undefined}>
      <DrawerTrigger>Open</DrawerTrigger>
      <DrawerContent className="h-[95%]">
        <div className="flex flex-col h-full justify-between">
          {currentProduct ? (
            <>
              <div className="py-[18px] flex justify-between items-center grow">
                {hasPrev ? (
                  <Image
                    onClick={prevProduct}
                    src={PrevProductIcon}
                    alt="prev btn"
                    className="w-[45px] object-cover object-center h-[150px]"
                  />
                ) : null}
                <Image
                  height={250}
                  width={250}
                  src={currentProduct.imageUrl}
                  alt={currentProduct.name}
                  className="w-full aspect-square object-contain"
                />
                {hasNext ? (
                  <Image
                    onClick={nextProduct}
                    src={NextProductIcon}
                    alt="prev btn"
                    className="w-[45px] object-cover object-center h-[250px]"
                  />
                ) : null}
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
                <Button onClick={resetActiveProduct} className="mt-4 w-full px-6 py-[14px] rounded-full flex justify-between h-fit">
                  <div className="font-medium text-xl">Submit</div>
                  <div className="font-medium text-xl">Submit</div>
                </Button>
              </div>
            </>
          ) : null}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ProductDetail;
