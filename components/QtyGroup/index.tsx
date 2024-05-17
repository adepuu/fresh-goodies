import { Product } from "@/types/product";
import Add from "../Icons/Add";
import Deduct from "../Icons/Deduct";
import useCart from "@/hooks/useCart";
import { useMemo } from "react";

interface QtyGroupProps extends Product {}

const QtyGroup: React.FC<QtyGroupProps> = (product) => {
  const { id, weight } = product;
  const {
    productCartMap,
    isLoading,
    error,
    addItem,
    updateItemQuantity,
    removeItem,
  } = useCart();
  const cartItem = productCartMap[id] || undefined;

  const cartQuantityString = useMemo(() => {
    const currentWeight = cartItem ? cartItem.quantity : weight;
    let postfix = "g";
    let weightString = currentWeight.toFixed(1);
    if (currentWeight >= 1000) {
      postfix = " kg";
      weightString = (currentWeight / 1000).toFixed(1);
    }
    return [weightString, postfix].join(" ");
  }, [cartItem, weight]);

  if (error) return <div>Ooops :(</div>;
  if (isLoading) return <div>Loading...</div>;

  const handleAddItem = () => {
    addItem(product, product.weight);
  };

  const handleAddQuantity = () => {
    if (cartItem) {
      updateItemQuantity(
        product.id,
        cartItem.quantity + product.metadata.increment
      );
    }
  };

  const handleDeductQuantity = () => {
    if (cartItem) {
      const newQty = cartItem.quantity - product.metadata.increment;
      if (newQty < product.weight) {
        removeItem(product.id);
        return;
      }
      updateItemQuantity(product.id, newQty);
    }
  };

  return (
    <div className="w-full flex justify-between items-center">
      {cartItem && cartItem.quantity > 0 ? (
        <>
          <div
            onClick={handleDeductQuantity}
            className="rounded-full bg-black p-2"
          >
            <Deduct type="light" />
          </div>
          <div className="font-normal text-base text-center align-middle h-fit">
            {cartQuantityString}
          </div>
          <div
            onClick={handleAddQuantity}
            className="rounded-full bg-black p-2"
          >
            <Add type="light" />
          </div>
        </>
      ) : (
        <>
          <div className="font-normal text-base text-center align-middle h-fit">
            {cartQuantityString}
          </div>
          <div
            onClick={handleAddItem}
            className="rounded-full bg-transparent border border-weathered-stone p-2"
          >
            <Add type="dark" />
          </div>
        </>
      )}
    </div>
  );
};

export default QtyGroup;
