import { CgCloseO } from "react-icons/cg"
import React, { useContext, useEffect, useState } from "react"
import ShoppingCartContext from "@/context/ShoppingCartContext"
import carIcon from "@/public/car-icon.png"
import Image from "next/image"
import CardCard from "./CardCard"
import CartButton from "./CartButton"
import { MIN_FREE_SHIPPING } from "@/constants/metadata"

const DrawerCart = () => {
  const { items, setItems, openCart, setOpenCart, getTotalPrice } =
    useContext(ShoppingCartContext)
  const [price, setPrice] = useState<number>(0)

  useEffect(() => {
    setPrice(getTotalPrice())
  }, [items])

  const handleCheckOut = () => {
    setItems([])
    setOpenCart(!openCart)
  }

  return (
    <div className='fixed inset-0 bg-white h-full z-50 px-4 pt-11'>
      <button onClick={() => setOpenCart(!openCart)} title='close cart button'>
        <CgCloseO size={24} />
      </button>
      <h1 className='text-4xl font-bold'>Cart</h1>
      <div className='flex items-center gap-x-8  px-1'>
        <Image src={carIcon} alt='car-icon' />
        <div className='w-full py-6'>
          <p>
            Before free shipping <span className='font-bold'>${price}</span>
          </p>
          <div className='h-1.5 bg-light-white rounded-md'>
            <div
              style={{ width: `${(price / MIN_FREE_SHIPPING) * 100}%` }}
              className='bg-gradient-to-r from-[#6CF0A1] to-[#2AE3B7] h-full rounded-md'
            />
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-y-2'>
        {items.map((e, i) => {
          return <CardCard key={i} {...e} />
        })}
      </div>
      <CartButton type={"Check out"} onClick={handleCheckOut} />
    </div>
  )
}

export default DrawerCart
