"use client";
import { Product } from "@/types/product";
import Image from "next/image";
import QtyGroup from "../QtyGroup";

interface CartItemProps extends Product {
  subtotal: number;
}
const CartItem: React.FC<CartItemProps> = (props) => {
  const { id, imageUrl, name, subtotal } = props;
  return (
    <div key={id} className="w-full h-fit flex justify-between gap-2">
      <Image
        src={imageUrl}
        height={100}
        width={100}
        className="w-[100px] h-auto aspect-square"
        alt={name}
      />
      <div className="flex flex-col gap-3 flex-grow">
        <div className="font-semibold font-sf-pro-display">{name}</div>
        <div className="flex space-between gap-6 items-center">
          <QtyGroup {...props} />
          <span className="pl-6 text-gray-400">${subtotal.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
