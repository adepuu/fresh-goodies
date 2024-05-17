import { Dispatch, SetStateAction } from "react"
import { Product } from "./product"

export interface CartItem {
  productId: Product
  quantity: number
}

export interface ShoppingCart {
  items: CartItem[]
  products: Product[]
  openCart: boolean
  setOpenCart: Dispatch<SetStateAction<boolean>>
  setProducts: Dispatch<SetStateAction<Product[]>>
  addItem(product: Product, quantity: number): void
  removeItem(productId: number): void
  updateItemQuantity(productId: number, quantity: number): void
  getTotalPrice(): number
}
