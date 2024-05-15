import { FavoriteProduct, Product } from "./product";

export interface Root {
  favoriteProducts: FavoriteProduct[],
  products: Product[];
  cart: [];
}