import { IoMdRemove } from "react-icons/io"
import { IoMdAdd } from "react-icons/io"
import Image from "next/image"
import React, { ReactNode } from "react"
import defImg from "@/public/products/white-onion.png"
import { useState } from "react"

interface ProductCardProps {
  name: string
  image: string
  price: number
  weight: number
  increment: number
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  image,
  price,
  weight,
  increment,
}) => {
  const [errorImage, setErrorImage] = useState(false)
  const [weightActive, setWeightActive] = useState<number>(weight)

  return (
    <>
      <button type='button' title={`${name}-product`}>
        <div className=' h-full w-fit bg-white p-3'>
          {!errorImage ? (
            <Image
              className='mix-blend-darken'
              width={300}
              height={300}
              src={image}
              alt={`${name}-image`}
              onError={() => setErrorImage(!errorImage)}
            />
          ) : (
            <Image
              className='mix-blend-darken'
              width={300}
              height={300}
              src={defImg}
              alt={`fallback-image`}
            />
          )}
          <div className='text-left'>
            <p className='text-[22px] font-semibold'>${price * 1000}</p>
            <p className='text-black'>{name}</p>
            <div className='flex items-center justify-between'>
              <button
                className='border border-light-white p-2 rounded-full hover:border-black'
                title='decrease weight'
              >
                <IoMdRemove size={20} />
              </button>
              <p className='text-light-white'>{weightActive / 1000} kg</p>
              <button
                className='border border-light-white p-2 rounded-full hover:border-black'
                title='increase weight'
              >
                <IoMdAdd size={20} />
              </button>
            </div>
          </div>
        </div>
      </button>
    </>
  )
}

export default ProductCard
