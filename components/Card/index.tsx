import Image from "next/image";
import React from "react";
import { Product } from "@/types/product";
import add from "@/public/add.svg";

export default function Card({
  id,
  price,
  weight,
  name,
  category,
  imageUrl,
  metadata,
}: Product) {
  return (
    <div className="p-3 flex flex-col gap-0.5">
      <Image src={imageUrl} alt={`${imageUrl} Image`} />
      <p className="font-semibold text-xl">${price}</p>
      <p>{name}</p>
      <div>
        <p>{weight}</p>
        <Image src={add} alt="Add Icon" />
      </div>
    </div>
  );
}
