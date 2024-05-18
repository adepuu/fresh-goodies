"use client";
import { createContext, ReactNode, useContext, useState, useEffect } from "react";

interface ActiveProductContextType {
  activeProduct: number | undefined;
  setActiveProduct: (productId: number | undefined) => void;
  updateProductNavigation: (data: number[], productId: number) => void;
  productNavigation: number[];
  nextProduct: () => void;
  prevProduct: () => void;
  hasNext: boolean;
  hasPrev: boolean;
  resetActiveProduct: () => void;
}

const ActiveProductContext = createContext<ActiveProductContextType | undefined>(undefined);

const useActiveProductContext = () => {
  const ctx = useContext(ActiveProductContext);
  if (!ctx) {
    throw new Error("Context usage out of provider");
  }
  return ctx;
};

export const ActiveProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeProduct, setActiveProduct] = useState<number | undefined>();
  const [productNavigation, setProductNavigation] = useState<number[]>([]);
  const [hasNext, setHasNext] = useState<boolean>(false);
  const [hasPrev, setHasPrev] = useState<boolean>(false);

  const updateActiveProduct = (productId: number | undefined) => {
    setActiveProduct(productId);
  };

  const updateProductNavigation = (data: number[], productId: number) => {
    setProductNavigation(data);
    const currentProductIndex = data.indexOf(productId);

    if (currentProductIndex === -1) {
      setActiveProduct(undefined);
      setHasNext(false);
      setHasPrev(false);
    } else {
      setActiveProduct(productId);
      setHasNext(currentProductIndex < data.length - 1);
      setHasPrev(currentProductIndex > 0);
    }
  };

  const nextProduct = () => {
    if (activeProduct !== undefined) {
      const currentIndex = productNavigation.indexOf(activeProduct);
      const nextIndex = currentIndex + 1;

      if (nextIndex < productNavigation.length) {
        setActiveProduct(productNavigation[nextIndex]);
        setHasNext(nextIndex < productNavigation.length - 1);
        setHasPrev(true);
      }
    }
  };

  const prevProduct = () => {
    if (activeProduct !== undefined) {
      const currentIndex = productNavigation.indexOf(activeProduct);
      const prevIndex = currentIndex - 1;

      if (prevIndex >= 0) {
        setActiveProduct(productNavigation[prevIndex]);
        setHasPrev(prevIndex > 0);
        setHasNext(true);
      }
    }
  };

  const resetActiveProduct = () => {
    setActiveProduct(undefined);
    setProductNavigation([]);
    setHasNext(false);
    setHasPrev(false);
  };

  useEffect(() => {
    if (activeProduct !== undefined) {
      const currentIndex = productNavigation.indexOf(activeProduct);
      setHasNext(currentIndex < productNavigation.length - 1);
      setHasPrev(currentIndex > 0);
    }
  }, [activeProduct, productNavigation]);

  return (
    <ActiveProductContext.Provider
      value={{
        activeProduct,
        setActiveProduct: updateActiveProduct,
        updateProductNavigation,
        productNavigation,
        prevProduct,
        nextProduct,
        hasNext,
        hasPrev,
        resetActiveProduct,
      }}
    >
      {children}
    </ActiveProductContext.Provider>
  );
};

export default useActiveProductContext;
