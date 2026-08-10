"use client"
import ProductContext from '@/contexts/ProductContext'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { FaStar } from 'react-icons/fa'


const ProductGrid = () => {

  const [currentPage, setCurrentPage] = useState(1);

  const { filteredProducts } = useContext(ProductContext)

  const PRODUCTS_PER_PAGE = 9;
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;

  const currentProducts = filteredProducts.slice(startIndex, endIndex);




  return (
    <>
      <div className='w-full  mr-27'>

        <div className='flex justify-between  items-center p-2  '>
          <div>
            <h1 className='text-3xl font-bold'>Casual</h1>
          </div>
          <div className='flex gap-3 text-gray-400'>
            <p>
              Showing {filteredProducts.length === 0 ? 0 : startIndex + 1} to{" "}
              {Math.min(endIndex, filteredProducts.length)} of{" "}
              {filteredProducts.length} products
            </p>
            <p>Sort by :</p>
            <select className='text-black'>
              <option>most relevant</option>
              <option>Date by</option>
            </select>
          </div>

        </div>

        {/* Products */}

        <div className='grid grid-cols-3 gap-10 py-5 gap-y-15'>

          {filteredProducts.length === 0 && (
            <div className='col-span-3 text-center py-10 text-gray-500'>No products matched the selected filters.</div>
          )}

          {currentProducts.map((product) => (
            <Link  key={product.id} href={`/product/${product.id}`} className="group">

              <div key={product.id} className='flex flex-col gap-2  cursor-pointer transition-all duration-300 hover:scale-105 '>
                <div >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={350}
                    className='w-150 h-80 rounded-2xl'
                  />
                </div>

                <h3 >
                  {product.name}
                </h3>

                <div className='flex items-center' >
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={
                        index < Math.floor(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}

                  <span className='mx-4' >
                    {product.rating}/5
                  </span>
                </div>

                <div className='flex gap-2 items-center'>
                  <p className="font-bold text-lg">${product.price}</p>

                  {product.oldPrice && (
                    <strike className="text-gray-400">
                      ${product.oldPrice}
                    </strike>
                  )}

                  {product.discount && (
                    <span className="bg-red-100 text-red-500 rounded-xl p-1">
                      -{product.discount}%
                    </span>
                  )}
                </div>
              </div>

            </Link>
          ))}

        </div>

        {/* next & prev */}

        <div className="flex justify-between items-center mt-10">

          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            disabled={currentPage === 1}
            className="border px-5 py-2 rounded disabled:opacity-50"
          >
            Previous
          </button>

          <div className='flex  w-200 justify-center gap-3'>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-10 h-10 rounded-lg ${currentPage === index + 1
                  ? "bg-gray-300 text-black"
                  : "border"
                  }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            disabled={currentPage === totalPages}
            className="border px-5 py-2 rounded disabled:opacity-50"
          >
            Next
          </button>

        </div>

        {/* page no */}

        {/* <div className="flex justify-center gap-2 mt-8">

        

        </div> */}
      </div>
    </>
  )
}

export default ProductGrid