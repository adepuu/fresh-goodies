import { config } from "@/constants/url"
import ShoppingCartContext from "@/context/ShoppingCartContext"
import { Product } from "@/types/product"
import { useContext, useEffect, useState } from "react"

type cart = {
  productId: Product
  quantity: number
}

const useFetchCart = () => {
  const [cartList, setCartList] = useState<cart[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<unknown>(null)
  const { addItem: setAddItems } = useContext(ShoppingCartContext)

  const handleAddToCart = async (cart: cart) => {
    try {
      setLoading(true)
      const response = await fetch(config.BASE_URL + config.endpoints.cart, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cart),
      })
      if (!response.ok) {
        throw new Error("Failed to add item to cart.")
      }

      const data = await response.json()
      console.log("Cart added:", data)
      setLoading(false)
      return true
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    const fetchCart = async () => {
      try {
        setLoading(true)
        const response = await fetch(config.BASE_URL + config.endpoints.cart)
        if (!response.ok) {
          throw new Error("Failed to fetch cart.")
        }
        const data = await response.json()
        // console.log("Cart product:", data)

        setCartList(data)

        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    fetchCart()
  }, [])

  return { cartList, loading, error, handleAddToCart }
}

export default useFetchCart
