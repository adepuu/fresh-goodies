"use client"
import useFetchCart from "@/hooks/useFetchCart"
import useFetchFavProd from "@/hooks/useFetchFavProd"
import Image from "next/image"

export default function Home() {
  const { favProd } = useFetchFavProd()
  const { cartList } = useFetchCart()

  console.log(favProd)
  return <main className='min-h-screen'></main>
}
