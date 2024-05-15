import { createContext } from "react";

export interface Product {
  name: string;
  url: string;
}
export interface ProductContextType {
  productList: Product[];
  loading: boolean;
  error: unknown;
  setSearchQuery: (query: string) => void;
  searchQuery: string;
}

const productContext = createContext<ProductContextType | undefined>(undefined);

export default productContext;
