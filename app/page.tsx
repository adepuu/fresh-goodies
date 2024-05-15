"use client"
import useFetchCart from "@/hooks/useFetchCart"
import useFetchFavProd from "@/hooks/useFetchFavProd"
import useFetchProduct from "@/hooks/useFetchProduct"
import Image from "next/image"

export default function Home() {
  const { favProd } = useFetchFavProd()
  const { cartList } = useFetchCart()
  const { products } = useFetchProduct()

  return <main className='min-h-screen'></main>
}
