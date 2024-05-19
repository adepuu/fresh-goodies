import { CartItem } from "@/types/cart"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { IoMdAdd, IoMdRemove } from "react-icons/io"

const CardCard: React.FC<CartItem> = (props) => {
  const { productId, quantity } = props

  if (!productId || !productId.metadata) {
    throw new Error("Product data is missing or incomplete")
  }

  const [weightActive, setWeightActive] = useState<number>(quantity)
  const [priceActive, setPriceActive] = useState<number>(0)

  useEffect(() => {
    if (productId.price) {
      setPriceActive(weightActive * productId.price)
    }
  }, [weightActive, productId.price])

  const handleDecrease = () => {
    if (weightActive > 0) {
      setWeightActive(weightActive - productId.metadata.increment)
    }
  }

  const handleIncrease = () => {
    setWeightActive(weightActive + productId.metadata.increment)
  }

  return (
    <div className='flex gap-x-2'>
      <Image
        width={110}
        height={100}
        src={props.productId.imageUrl}
        alt={`${props.productId.name}-image`}
        className='h-20 w-20 object-cover'
      />
      <div className='flex flex-col justify-between w-full'>
        <p>{props.productId.name}</p>
        <div className='flex items-center justify-between'>
          <div className='flex items-center justify-between border border-light-white rounded-[37px] p-3 w-3/4'>
            <button
              disabled={weightActive === 0 ? true : false}
              title='decrease weight'
              onClick={handleDecrease}
            >
              <IoMdRemove size={20} />
            </button>
            <p className='text-black font-semibold'>{weightActive / 1000} kg</p>
            <button title='increase weight' onClick={handleIncrease}>
              <IoMdAdd size={20} />
            </button>
          </div>
          <p>{priceActive.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

export default CardCard
