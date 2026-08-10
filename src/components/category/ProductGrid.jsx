"use client"
import ProductContext from '@/contexts/ProductContext'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import { FaStar } from 'react-icons/fa'


const ProductGrid = ({ setIsFilterOpen }) => {

  const [currentPage, setCurrentPage] = useState(1);

  const { filteredProducts } = useContext(ProductContext)

  const PRODUCTS_PER_PAGE = 9;
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;

  const currentProducts = filteredProducts.slice(startIndex, endIndex);




  return (
    <div className="px-4 lg:px-0">
      <div className='w-full  mr-27'>

        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-6">

          <div className="flex items-center justify-between mb-5">

            {/* Mobile Filter */}

            <button
              onClick={() => setIsFilterOpen(true)}
              className="lg:hidden border px-4 py-2 rounded-lg"
            >
              ☰ Filter
            </button>

            <h1 className="text-2xl lg:text-3xl font-bold">
              Casual
            </h1>

          </div>

          <div className="flex flex-wrap lg:flex-nowrap items-center gap-2 text-sm lg:text-base text-gray-500">

            <p>
              Showing {filteredProducts.length === 0 ? 0 : startIndex + 1}
              -
              {Math.min(endIndex, filteredProducts.length)}
              of {filteredProducts.length}
            </p>

            <p>Sort by</p>

            <select className="border rounded-md px-2 py-1">
              <option>Most Relevant</option>
              <option>Date</option>
            </select>

          </div>

        </div>

        {/* Products */}

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 py-5">

          {filteredProducts.length === 0 && (
            <div className='col-span-3 text-center py-10 text-gray-500'>No products matched the selected filters.</div>
          )}

          {currentProducts.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="group">

              <div
                key={product.id}
                className="flex flex-col gap-2 cursor-pointer transition duration-300 hover:scale-105"
              >
                <div >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={350}
                    className="
                        w-full
                        h-44
                        sm:h-52
                        md:h-64
                        lg:h-80
                        rounded-xl
                        lg:rounded-2xl
                        object-cover
                        "
                  />
                </div>

                <h3 className="font-semibold text-sm lg:text-base line-clamp-2">
                  {product.name}
                </h3>

                <div className="flex items-center text-xs lg:text-base">
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

                <div className="flex flex-wrap gap-2 items-center">
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
        <div className="flex flex-wrap justify-center  gap-2">
          <div className="flex flex-col lg:flex-row lg:justify-between items-center gap-4 mt-10">

            <button
              onClick={() => setCurrentPage((prev) => prev - 1)}
              disabled={currentPage === 1}
              className="border rounded-md px-3 py-2 text-sm lg:px-5 lg:py-2 lg:text-base disabled:opacity-50"
            >
              Previous
            </button>


            <div className="flex flex-wrap justify-center gap-2 max-w-full overflow-x-auto">
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`w-9 h-9 lg:w-10 lg:h-10 rounded-md text-sm ${currentPage === index + 1
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
                className="border rounded-md px-4 py-2 text-sm lg:px-5 lg:py-2 lg:text-base disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default ProductGrid