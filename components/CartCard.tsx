import React from "react"

const CartCard = () => {
  return (
    <div className='fixed mx-4 bottom-14 left-0 right-0'>
      <div className='flex items-center justify-between px-6 py-3.5 bg-black rounded-full'>
        <div>
          <p className='text-white'>Cart</p>
        </div>
        <>
          <p className='text-white'>$0</p>
        </>
      </div>
    </div>
  )
}

export default CartCard
