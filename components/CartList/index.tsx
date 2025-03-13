"use client";
import useCart from "@/hooks/useCart";
import useProduct from "@/hooks/useProduct";
import Image from "next/image";
import CartItem from "./Item";
import AddToCartButton from "../AddToCartButton";

const CartList: React.FC = () => {
  const { cart, getTotalPrice } = useCart();
  const { isLoading, error, productMap } = useProduct();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="w-full flex flex-col">
      {cart?.map((item) => {
        const currentProduct = productMap[item.id];
        const subtotal = item.quantity * currentProduct.price;
        return (
          <CartItem
            key={currentProduct.id}
            {...currentProduct}
            subtotal={subtotal}
          />
        );
      })}
      <AddToCartButton />
    </div>
  );
};

export default CartList;
