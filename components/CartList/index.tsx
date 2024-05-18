"use client";
import useCart from "@/hooks/useCart";
import useProduct from "@/hooks/useProduct";
import Image from "next/image";
import CartItem from "./Item";

const CartList: React.FC = () => {
  const { cart } = useCart();
  const { productMap } = useProduct();
  return (
    <div className="w-full flex flex-col">
      {cart?.map((item) => {
        const currentProduct = productMap[item.id];
        return (
          <CartItem key={currentProduct.id} {...currentProduct} />
        );
      })}
    </div>
  );
};

export default CartList;
