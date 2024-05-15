import { config } from "@/constants/url"
import { useEffect, useState } from "react"

type cart = {
  productId: number
  quantity: number
  id: string
}

const useFetchCart = () => {
  const [cartList, setCartList] = useState<cart[]>()
  const [cartAdded, setCartAdded] = useState<number>(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<unknown>(null)

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
      setCartAdded(cartAdded + 1)
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
        setCartAdded(data.length)

        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    fetchCart()
  }, [cartAdded])

  return { cartList, loading, error, handleAddToCart }
}

export default useFetchCart
