import { FavoriteProduct } from "@/types/product"
import { useEffect, useState } from "react"

type favProd = {
  productId: number
  id: string
}

const useFetchFavProd = () => {
  const [favProd, setfavProd] = useState<FavoriteProduct[]>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<unknown>(null)

  useEffect(() => {
    const handleFetchFavProd = async () => {
      try {
        setLoading(true)
        const response = await fetch("http://localhost:2000/favorite-products")

        if (!response.ok) {
          throw new Error("Failed to get favorite products.")
        }

        const data = await response.json()
        const result = data.map((e: favProd) => {
          return e.productId
        })
        // console.log("Favorite products:", result)

        setfavProd(result)
        setLoading(false)
        return true
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    handleFetchFavProd()
  }, [])

  return { favProd, loading, error }
}

export default useFetchFavProd
