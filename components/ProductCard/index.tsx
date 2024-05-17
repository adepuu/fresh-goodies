import { Product } from "@/types/product";
import Image from "next/image";
import QtyGroup from "../QtyGroup";
import useActiveProductContext from "@/context/ActiveProductContext";
import { useEffect } from "react";

interface ProductCardProps extends Product {
  onClick: (productId: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ onClick, ...props}) => {
  const { setActiveProduct } = useActiveProductContext();
  const { id, name, imageUrl, weight, category, price } = props;

  const displayPrice = price * weight;

  const handleShowProductDetail = () => {
    setActiveProduct(id);
    onClick(id);
  };

  return (
    <div className="rounded-lg p-3 bg-whitest-white">
      <Image
        onClick={handleShowProductDetail}
        src={imageUrl}
        width={150}
        height={150}
        className="h-auto w-full aspect-square mix-blend-multiply object-cover"
        alt={category}
      />
      <div className="mb-2" onClick={handleShowProductDetail}>
        <div className="font-semibold text-3xl">${displayPrice.toFixed(1)}</div>
        <div className="font-regular text-base">{name}</div>
      </div>
      <QtyGroup {...props} />
    </div>
  );
};

export default ProductCard;
