import { IoMdRemove } from "react-icons/io"
import { IoMdAdd } from "react-icons/io"
import Image from "next/image"
import React, { ReactNode } from "react"
import defImg from "@/public/products/white-onion.png"
import { useState } from "react"
import { Product } from "@/types/product"
import DrawerProduct from "./DrawerProduct"

const ProductCard: React.FC<Product> = (props) => {
  const [errorImage, setErrorImage] = useState(false)
  const [weightActive, setWeightActive] = useState<number>(props.weight)
  const [openDetail, setOpenDetail] = useState(false)
  const [detailId, setDetailId] = useState<number>(0)

  const handleOpenDetail = (val: number) => {
    setOpenDetail(true)
    setDetailId(val)
  }

  return (
    <div
      className=' h-full w-full bg-light-white p-3 rounded-xl'
      onClick={() => handleOpenDetail(props.id)}
    >
      {!errorImage ? (
        <Image
          className='h-48 w-full object-fill mix-blend-darken'
          width={300}
          height={300}
          src={props.imageUrl}
          alt={`${name}-image`}
          priority={true}
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
        <p className='text-[22px] font-semibold line-clamp-1'>
          ${(props.price * 1000).toFixed(2)}
        </p>
        <p className='text-black'>{props.name}</p>
        <div className='flex items-center justify-between'>
          {weightActive > props.weight ? (
            <button
              className='border border-light-grey p-2 rounded-full hover:border-black'
              title='decrease weight'
              onClick={() =>
                setWeightActive(weightActive - props.metadata.weight)
              }
            >
              <IoMdRemove size={20} />
            </button>
          ) : null}

          <p className='text-light-grey'>{weightActive / 1000} kg</p>
          <button
            className='border border-light-grey p-2 rounded-full hover:border-black'
            title='increase weight'
            onClick={() =>
              setWeightActive(weightActive + props.metadata.weight)
            }
          >
            <IoMdAdd size={20} />
          </button>
        </div>
      </div>
      {openDetail ? (
        <DrawerProduct id={detailId} onClose={() => setOpenDetail(false)} />
      ) : null}
    </div>
  )
}

export default ProductCard
