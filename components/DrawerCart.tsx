import { CgCloseO } from "react-icons/cg"
import React, { useContext } from "react"
import ShoppingCartContext from "@/context/ShoppingCartContext"
import carIcon from "@/public/car-icon.png"
import Image from "next/image"
import useFetchCart from "@/hooks/useFetchCart"
import CardCard from "./CardCard"

const DrawerCart = () => {
  const { openCart, setOpenCart } = useContext(ShoppingCartContext)
  const { cartList } = useFetchCart()
  console.log(cartList)
  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 bg-white h-full z-50 px-4 pt-11'>
      <button onClick={() => setOpenCart(!openCart)} title='close cart button'>
        <CgCloseO size={24} />
      </button>
      <h1 className='text-4xl font-bold'>Cart</h1>
      <div className='flex items-center gap-x-8  px-1'>
        <Image src={carIcon} alt='car-icon' objectFit='contain' />
        <div className='w-full py-6'>
          <p>
            Before free shipping <span className='font-bold'>${0}</span>
          </p>
          <div className='h-1.5 bg-light-white rounded-md'>
            <div
              style={{ width: `${50}%` }}
              className='bg-gradient-to-r from-[#6CF0A1] to-[#2AE3B7] h-full rounded-md'
            />
          </div>
        </div>
      </div>
      <div>
        {cartList.map((e, i) => {
          return <CardCard key={i} {...e} />
        })}
      </div>
    </div>
  )
}

export default DrawerCart
