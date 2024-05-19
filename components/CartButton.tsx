import ShoppingCartContext from "@/context/ShoppingCartContext"
import React, { useContext, useEffect, useState } from "react"
import DrawerCart from "./DrawerCart"
import Image from "next/image"
import { TYPE_CART_BUTTON } from "@/constants/metadata"

const CartButton: React.FC<{ type: string; onClick: () => void }> = ({
  type,
  onClick,
}) => {
  const { items, openCart, getTotalPrice } = useContext(ShoppingCartContext)
  const [price, setPrice] = useState<number>(0)

  useEffect(() => {
    setPrice(getTotalPrice())
  }, [items])

  return (
    <>
      <button
        className='fixed mx-4 bottom-14 left-0 right-0'
        title='open cart button'
        onClick={onClick}
      >
        <div className='flex items-center justify-between px-6 py-3.5 bg-black rounded-full'>
          <div className='flex gap-x-2'>
            <p className='text-white font-medium text-lg'>{type}</p>
            {type !== TYPE_CART_BUTTON.Checkout ? (
              <div className='flex'>
                {items.slice(items.length - 2, items.length).map((e, i) => {
                  return (
                    <Image
                      key={i}
                      className='h-8 w-8 p-1 bg-white rounded-full'
                      src={e.productId.imageUrl}
                      width={32}
                      height={32}
                      alt={`${e.productId.name}-image`}
                    />
                  )
                })}
              </div>
            ) : null}
          </div>
          <>
            <p className='text-white font-medium text-lg'>
              ${price.toFixed(2)}
            </p>
          </>
        </div>
      </button>
    </>
  )
}

export default CartButton
