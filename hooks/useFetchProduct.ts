import { config } from "@/constants/url"
import ShoppingCartContext from "@/context/ShoppingCartContext"
import { Product } from "@/types/product"
import { useContext, useEffect, useState } from "react"

const useFetchProduct = () => {
  // const [products, setProducts] = useState<Product[]>([])
  const [category, setCategory] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<unknown>(null)
  const { setProducts: setProductsGlobal } = useContext(ShoppingCartContext)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const response = await fetch(
          config.BASE_URL + config.endpoints.products
        )
        if (!response.ok) {
          throw new Error("Failed to fetch products.")
        }
        const data = await response.json()
        // console.log("Products:", data)

        setProductsGlobal(data)
        const category: string[] = [
          data.map((e: Product) => {
            return e.category
          }),
        ]
        const uniqueCategory: string[] = Array.from(new Set(...category))
        setCategory(uniqueCategory)
        // console.log("Categories:", uniqueCategory)

        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return { category, loading, error }
}

export default useFetchProduct
