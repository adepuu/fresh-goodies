import { ShoppingCart } from "@/types/cart"
import { Product } from "@/types/product"
import { createContext } from "react"

const defaultValue = {
  items: [],
  products: [],
  openCart: false,
  setItems: () => {},
  setOpenCart: () => {},
  setProducts: () => {},
  addItem: (product: Product, quantity: number) => {},
  removeItem: (productId: number) => {},
  updateItemQuantity: (productId: number, quantity: number) => {},
  getTotalPrice: () => 0,
}

const ShoppingCartContext = createContext<ShoppingCart>(defaultValue)
export default ShoppingCartContext
