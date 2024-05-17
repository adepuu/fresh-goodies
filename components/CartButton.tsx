import ShoppingCartContext from "@/context/ShoppingCartContext"
import React, { useContext } from "react"
import DrawerCart from "./DrawerCart"

const CartButton = () => {
  const { openCart, setOpenCart } = useContext(ShoppingCartContext)

  return (
    <>
      <button
        className='fixed mx-4 bottom-14 left-0 right-0'
        title='open cart button'
        onClick={() => setOpenCart(!openCart)}
      >
        <div className='flex items-center justify-between px-6 py-3.5 bg-black rounded-full'>
          <div>
            <p className='text-white'>Cart</p>
          </div>
          <>
            <p className='text-white'>$0</p>
          </>
        </div>
      </button>
      {openCart ? <DrawerCart /> : null}
    </>
  )
}

export default CartButton
