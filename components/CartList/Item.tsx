"use client";
import useCart from "@/hooks/useCart";
import useProduct from "@/hooks/useProduct";
import { Product } from "@/types/product";
import Image from "next/image";
import QtyGroup from "../QtyGroup";

interface CartItemProps extends Product {

}
const CartItem: React.FC<CartItemProps> = (props) => {
  const { id, imageUrl, name } = props;
  return (
    <div key={id} className="w-full h-fit flex justify-between">
      <Image
        src={imageUrl}
        height={100}
        width={100}
        className="w-[100px] h-auto aspect-square"
        alt={name}
      />
      <QtyGroup {...props}/>
    </div>
  );
};

export default CartItem;
