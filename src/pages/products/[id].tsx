import Image from 'next/image';
// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';
import { ProductProps } from '../../../type';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/nextSlice';

export default function ProductDetails({productData}: ProductProps) {
    const dispatch = useDispatch()

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 p-6 max-w-7xl mx-auto">
     
     <div className="w-full lg:w-1/2 p-4 border rounded-lg">
        <Image src={productData.image} alt={productData.title} width={200} height={200} className="w-full h-auto rounded-lg" />
      </div>

      <div className="w-full lg:w-1/2 p-4 space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">{productData.title}</h1>
  
        <div className="flex items-center space-x-1 text-yellow-500">
          {Array.from({ length: 5 }, (_, i) => (
            <svg
              key={i}
              className={`h-5 w-5 ${i < productData.rating.rate ? 'fill-current' : 'text-gray-300'}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 15l-5.878 3.09L5.647 10.58 1 6.473l6.045-.555L10 1l2.955 4.918 6.045.555-4.647 4.107 1.525 7.51L10 15z" />
            </svg>
          ))}
          <span className="text-gray-600 text-sm">({productData.rating.count} reviews)</span>
        </div>
         
       
        <p className="text-3xl font-semibold text-gray-900">₹{productData.price*10}</p>
        
        <p className="text-gray-700">{productData.description}</p>

        <p className="text-gray-700">{}</p>

        <button
          onClick={() => dispatch(
            addToCart({
              id: productData.id,
              title: productData.title,
              price: productData.price,
              image: productData.image,
              description: productData.description,
              quantity: 1
            })
          )}
          className="w-full lg:w-auto bg-yellow-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-4 focus:ring-yellow-300"
        >
          Add to Cart
        </button>
      </div>  
    </div>
  )
}

export const getServerSideProps = async (context: any)=>{
    const {id} = context.params as {id: string}
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const productData = await res.json()
    return {props: {productData}}
  }
