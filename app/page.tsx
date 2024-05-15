"use client"
import useFetchFavProd from "@/hooks/useFetchFavProd"
import Image from "next/image"

export default function Home() {
  const { favProd } = useFetchFavProd()

  console.log(favProd)
  return <main className='min-h-screen'></main>
}
