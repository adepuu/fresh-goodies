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
  addItem(product: Product, quantity: number): void;
  cart: CartItem[] | undefined;
  error: Error | null;
  getTotalPrice(): number;
  isLoading: boolean;
  lastTwoItems: Product[] | undefined;
  productCartMap: ProductCartMap;
  removeItem(productId: number): void;
  updateItemQuantity(productId: number, quantity: number): void;
}
