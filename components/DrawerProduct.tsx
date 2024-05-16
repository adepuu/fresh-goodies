"use client"
import { MdFavorite } from "react-icons/md"
import { GrFavorite } from "react-icons/gr"
import { FaAngleRight } from "react-icons/fa"
import { FaAngleLeft } from "react-icons/fa"
import { BsDashLg } from "react-icons/bs"
import React, { useContext, useEffect, useState } from "react"
import Image from "next/image"
import ShoppingCartContext from "@/context/ShoppingCartContext"
import { Product } from "@/types/product"
import { IoMdAdd, IoMdRemove } from "react-icons/io"
import CartCard from "./CartCard"

const DrawerProduct: React.FC<{ id: number; onClose: () => void }> = ({
  id,
  onClose,
}) => {
  const [productId, setProductId] = useState<number>(id)
  const { products } = useContext(ShoppingCartContext)
  const [activeProd, setActiveProd] = useState<Product>(products[id])
  const [weightActive, setWeightActive] = useState<number>(products[id].weight)
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    setActiveProd(products[productId])
  }, [productId])

  return (
    <div className='fixed top-0 bottom-0 left-0 right-0 pt-12 bg-black bg-opacity-50 z-50'>
      <div className='relative bg-white h-full  rounded-t-3xl'>
        <div>
          <BsDashLg size={25} className='text-light-grey mx-auto' />
        </div>
        <div className='px-20 pt-10'>
          <Image
            src={activeProd.imageUrl}
            height={500}
            width={500}
            alt={`${activeProd.name}-image`}
            className='h-64 object-contain'
          />
        </div>
        <div className='absolute flex top-1/4 -translate-y-1/4 justify-between w-full'>
          <button
            disabled={productId == 0 ? true : false}
            type='button'
            title='previous'
            onClick={() => setProductId(productId - 1)}
            className='bg-light-white px-4 py-10 rounded-r-full'
          >
            <FaAngleLeft />
          </button>
          <button
            disabled={productId == products.length - 1 ? true : false}
            type='button'
            title='previous'
            onClick={() => setProductId(productId + 1)}
            className='bg-light-white px-4 py-10 rounded-l-full'
          >
            <FaAngleRight />
          </button>
        </div>
        <div className='p-4'>
          <p className='font-bold text-3xl'>{activeProd.name}</p>
          <p className='font-semibold mt-7 mb-4'>
            In {activeProd.metadata.weight} grams
          </p>

          <div className='grid grid-cols-4 text-center border border-light-white rounded-xl '>
            <p className='font-semibold'>
              {activeProd.metadata.calorie}
              <br />
              <span className='text-light-grey font-normal'>calorie</span>
            </p>
            <p className='font-semibold'>
              {activeProd.metadata.proteins}
              <br />
              <span className='text-light-grey font-normal'>proteins</span>
            </p>
            <p className='font-semibold'>
              {activeProd.metadata.fats}
              <br />
              <span className='text-light-grey font-normal'>fats</span>
            </p>
            <p className='font-semibold'>
              {activeProd.metadata.carbs}
              <br />
              <span className='text-light-grey font-normal'>carbs</span>
            </p>
          </div>

          <div className='flex justify-between gap-x-3 mt-5'>
            <div className='flex items-center justify-between border border-light-white rounded-[37px] p-3 w-full'>
              <button
                disabled={
                  weightActive === activeProd.metadata.weight ? true : false
                }
                title='decrease weight'
                onClick={() =>
                  setWeightActive(weightActive - activeProd.metadata.increment)
                }
              >
                <IoMdRemove size={20} />
              </button>
              <p className='text-black font-semibold'>
                {weightActive / 1000} kg
              </p>
              <button
                title='increase weight'
                onClick={() =>
                  setWeightActive(weightActive + activeProd.metadata.increment)
                }
              >
                <IoMdAdd size={20} />
              </button>
            </div>
            <div>
              <button
                className='p-4 rounded-full bg-light-white'
                title='favorite button'
                onClick={() => setIsFavorite(!isFavorite)}
              >
                {!isFavorite ? (
                  <GrFavorite size={20} />
                ) : (
                  <MdFavorite size={20} color='#E6465A' />
                )}
              </button>
            </div>
          </div>
          <button type='button' title='cart button'>
            <CartCard />
          </button>
        </div>
      </div>
    </div>
  )
}

export default DrawerProduct
