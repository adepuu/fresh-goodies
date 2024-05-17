import { Product } from "./product";

export interface CartItem {
  id: number;
  productId: number;
  quantity: number;
}


export interface ProductCartMap {
  // Hashmap product ID as its key,
  // Product as its value
  [key: number]: CartItem;
}

export interface ShoppingCart {
  cart: CartItem[] | undefined;
  productCartMap: ProductCartMap;
  isLoading: boolean;
  error: Error | null;
  addItem(product: Product, quantity: number): void;
  removeItem(productId: number): void;
  updateItemQuantity(productId: number, quantity: number): void;
  getTotalPrice(): number;
}
