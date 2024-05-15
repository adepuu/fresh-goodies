"use client"
import { BiSearch } from "react-icons/bi"
import { BiSort } from "react-icons/bi"
import useFetchCart from "@/hooks/useFetchCart"
import useFetchFavProd from "@/hooks/useFetchFavProd"
import useFetchProduct from "@/hooks/useFetchProduct"
import "./globals.css"
import { useState } from "react"
import { ProductCard } from "@/components"

export default function Home() {
  const { favProd } = useFetchFavProd()
  const { cartList } = useFetchCart()
  const { products, category } = useFetchProduct()
  const [categoryId, setCategoryId] = useState<number>(0)

  return (
    <main className='min-h-screen'>
      <div className='flex justify-between items-center'>
        <p className='text-xl font-semibold'>Vegetables</p>
        <div className='flex items-center gap-x-4'>
          <button type='button' title='sort'>
            <BiSort size={24} />
          </button>
          <button type='button' title='search'>
            <BiSearch size={24} />
          </button>
        </div>
      </div>
      <div className='custom-scrollbar overflow-x-auto whitespace-nowrap w-full h-fit'>
        {["All", ...category].map((e, i) => {
          return (
            <button
              key={i}
              type='button'
              onClick={() => setCategoryId(i)}
              className={`inline-block px-3.5 py-2.5 ${
                i == categoryId ? "border-b-2 border-black" : ""
              }`}
            >
              {e}
            </button>
          )
        })}
      </div>
      <div className='grid grid-cols-2 gap-2.5'>
        {products.map((e, i) => {
          return (
            <ProductCard
              key={i}
              name={e.name}
              image={e.imageUrl}
              price={e.price}
              weight={e.weight}
              increment={e.metadata.increment}
            />
          )
        })}
      </div>
    </main>
  )
}
