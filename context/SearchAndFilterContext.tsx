"use client";
import useProduct from "@/hooks/useProduct";
import { Product } from "@/types/product";
import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

interface SearchAndFilterContextType {
  searchTerm: string;
  handleSearch: (searchTerm: string) => void;
  handleSort: (sortType: string) => void;
  filteredProducts: Product[];
}

const SearchAndFilterContext = createContext<
  SearchAndFilterContextType | undefined
>(undefined);

const useSearchAndFilterContext = () => {
  const ctx = useContext(SearchAndFilterContext);
  if (!ctx) {
    throw new Error("Context usage out of provider");
  }
  return ctx;
};

export const SearchAndFilterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { products } = useProduct();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortType, setSortType] = useState<string>("");

  const handleSearch = useCallback((searchTerm: string) => {
    setSearchTerm(searchTerm);
  }, []);

  const filteredProducts = useMemo(() => {
    if (!products || !searchTerm) return [];
    return products.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  return (
    <SearchAndFilterContext.Provider
      value={{
        filteredProducts: !searchTerm ? [] : filteredProducts,
        searchTerm,
        handleSearch,
        handleSort: (sortType: string) => setSortType(sortType),
      }}
    >
      {children}
    </SearchAndFilterContext.Provider>
  );
};

export default useSearchAndFilterContext;
