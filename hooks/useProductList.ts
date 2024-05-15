import { useContext } from "react";

const useProductList = () => {
  const context = useContext();
  if (context === undefined) {
    throw new Error(`UseProductList must be used within a ProductProvider`);
  }
  return context;
};

export default useProductList;
