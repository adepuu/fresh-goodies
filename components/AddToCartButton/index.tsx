"use client";
import useCart from "@/hooks/useCart";
import { Button } from "../ui/button";

const AddToCartButton: React.FC = () => {
  const { getTotalPrice } = useCart();
  const totalPrice = getTotalPrice();
  return (
    <Button className="mt-4 w-full px-6 py-[14px] rounded-full flex justify-between h-fit !bg-black">
      <div className="font-medium text-xl">To Cart</div>
      <div className="font-medium text-xl">${totalPrice.toFixed(1)}</div>
    </Button>
  );
};

export default AddToCartButton;
