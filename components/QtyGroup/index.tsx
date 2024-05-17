import { Product } from "@/types/product";
import Add from "../Icons/Add";
import Deduct from "../Icons/Deduct";

interface QtyGroupProps extends Product {
  
}

const QtyGroup: React.FC<QtyGroupProps> = ({  }) => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="rounded-full bg-black p-2">
        <Deduct type="light" />
      </div>
      <div className="font-normal text-base text-center align-middle h-fit">
        1.2 kg
      </div>
      <div className="rounded-full bg-black p-2">
        <Add type="light" />
      </div>
    </div>
  );
};

export default QtyGroup;
