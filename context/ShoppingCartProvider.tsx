"use client"
import React, { useState } from "react"
import ShoppingCartContext from "./ShoppingCartContext"
import { CartItem, ShoppingCart } from "@/types/cart"
import { Product } from "@/types/product"

const ShoppingCartProvider: React.FC<{ children: JSX.Element }> = ({
  children,
}) => {
  let [items, setItems] = useState<CartItem[]>([])
  let [products, setProducts] = useState<Product[]>([])

  const addItem = (product: Product, quantity: number) => {
    setItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.productId.id === product.id
      )

      if (existingItem) {
        return prevItems.map((item) =>
          item.productId.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      } else {
        return [
          ...prevItems,
          {
            productId: product,
            quantity: quantity,
          },
        ]
      }
    })
  }

  const removeItem = (productId: number) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.productId.id === productId)
    )
  }

  const updateItemQuantity = (productId: number, quantity: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.productId.id === productId ? { ...item, quantity: quantity } : item
      )
    )
  }

  const getTotalPrice = () => {
    return items.reduce(
      (total, item) => total + item.productId.price * item.quantity,
      0
    )
  }

  const value: ShoppingCart = {
    items,
    products,
    setProducts,
    addItem,
    removeItem,
    updateItemQuantity,
    getTotalPrice,
  }

  return (
    <ShoppingCartContext.Provider value={value}>
      {children}~
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartProvider
