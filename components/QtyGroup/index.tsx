import { Product } from "@/types/product";
import Add from "../Icons/Add";
import Deduct from "../Icons/Deduct";
import useCart from "@/hooks/useCart";
import { useMemo } from "react";
import cn from "classnames";

interface QtyGroupProps extends Product {
  block?: boolean;
}

const QtyGroup: React.FC<QtyGroupProps> = ({ block, ...product }) => {
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
    <div
      className={cn(
        "w-full flex justify-between items-center",
        block ? "h-full bg-whitest-white rounded-full px-[10px]" : "h-10"
      )}
    >
      {cartItem && cartItem.quantity > 0 ? (
        <>
          <div
            onClick={handleDeductQuantity}
            className={cn(
              "rounded-full p-2",
              block ? "bg-transparent" : "bg-black"
            )}
          >
            <Deduct type={block ? "dark" : "light"} />
          </div>
          <div className="font-normal text-base text-center align-middle h-fit">
            {cartQuantityString}
          </div>
          <div
            onClick={handleAddQuantity}
            className={cn(
              "rounded-full p-2",
              block ? "bg-transparent" : "bg-black"
            )}
          >
            <Add type={block ? "dark" : "light"} />
          </div>
        </>
      ) : (
        <>
          {block ? (
            <div className="rounded-full p-2 bg-transparent pointer-events-none opacity-0">
              <Deduct type={block ? "dark" : "light"} />
            </div>
          ) : null}
          <div className="font-normal text-base text-center align-middle h-fit">
            {cartQuantityString}
          </div>
          <div
            onClick={handleAddItem}
            className={cn(
              "rounded-full bg-transparent border-weathered-stone p-2",
              block ? "border-none" : "border"
            )}
          >
            <Add type="dark" />
          </div>
        </>
      )}
    </div>
  );
};

export default QtyGroup;
