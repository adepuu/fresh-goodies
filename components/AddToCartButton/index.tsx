import { Button } from "../ui/button";

const AddToCartButton: React.FC = () => {
  return (
    <Button className="mt-4 w-full px-6 py-[14px] rounded-full flex justify-between h-fit">
      <div className="font-medium text-xl">To Cart</div>
      <div className="font-medium text-xl">$27.3</div>
    </Button>
  );
};

export default AddToCartButton;
