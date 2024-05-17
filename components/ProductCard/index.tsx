import { Product } from "@/types/product";
import Image from "next/image";
import QtyGroup from "../QtyGroup";

interface ProductCardProps extends Product {}

const ProductCard: React.FC<ProductCardProps> = props => {
  const {
    name,
    imageUrl,
    weight,
    category,
    price,
    metadata,
  } = props;

  const displayPrice = price * weight;
  return (
    <div className="rounded-lg p-3 bg-whitest-white">
      <Image
        src={imageUrl}
        width={150}
        height={150}
        className="h-auto w-full aspect-square mix-blend-multiply"
        alt={category}
      />
      <div className="mb-2">
        <div className="font-semibold text-3xl">${displayPrice.toFixed(1)}</div>
        <div className="font-regular text-base">{name}</div>
      </div>
      <QtyGroup {...props} />
    </div>
  );
};

export default ProductCard;
