import Image from "next/image";

interface ProductCardProps {
  image: string;
  price: number;
  name: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, price, name }) => {
  return (
    <div className="p-4 h-60 rounded-lg bg-[#F9F8F6]">
        <div className="flex justify-center items-center w-[145px] h-[113px] overflow-hidden">
      <Image
        src={image}
        alt={name}
        width={145}
        height={113}
        className="object-cover"
      />
      </div>
      <p className="text-gray-700">${price.toFixed(1)}</p>

      <h2 className="text-lg font-bold mt-2">{name}</h2>
    </div>
  );
};

export default ProductCard;
