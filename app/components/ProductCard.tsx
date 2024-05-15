import Image from "next/image";

interface ProductCardProps {
  image: string;
  price: number;
  name: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, price, name }) => {
  return (
    <div className="p-4 h-[242px] rounded-lg bg-[#F9F8F6]">
      <div className="flex justify-center items-center overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={145}
          height={113}
          className="object-cover object-center mix-blend-multiply "
        />
      </div>
      <div className=" text-xl text-gray-700 font-bold">
        ${price.toFixed(1)}
      </div>
      <div className="text-base">{name}</div>
      <div className="flex justify-between items-center mt-2">
        <div className=" text-gray-400">1 kg</div>
        <div className=" border-[1px] rounded-[50%] w-[40px] h-[40px] text-2xl text-center align-middle leading-[35px] ">+</div>
      </div>
    </div>
  );
};

export default ProductCard;
