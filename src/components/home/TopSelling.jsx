"use client";

import allProducts from "@/data/products";
import Image from "next/image";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const TopSelling = () => {
  const topSellingProducts = allProducts.filter(
    (product) => product.section === "top-selling"
  );

  const [products, setProducts] = useState(topSellingProducts.slice(0, 4));

  return (
    <section className="flex flex-col items-center py-12 md:py-16 lg:py-20">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-center">
        TOP SELLING
      </h1>

      {/* Products */}
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-10 w-full px-5 md:px-10 lg:px-16 xl:px-28">
        {products.map((product) => (
          <div key={product.id} className="flex flex-col gap-3 md:gap-4">
            <div className="overflow-hidden rounded-2xl bg-[#F0EEED]">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={350}
                className="w-full h-52 md:h-72 lg:h-80 object-cover hover:scale-105 transition duration-300"
              />
            </div>

            <h3 className="font-bold text-base md:text-lg lg:text-xl">
              {product.name}
            </h3>

            <div className="flex items-center gap-1">
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

              <span className="text-sm text-gray-600 ml-2">
                {product.rating}/5
              </span>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <p className="font-bold text-lg">${product.price}</p>

              {product.oldPrice && (
                <strike className="text-gray-400">
                  ${product.oldPrice}
                </strike>
              )}

              {product.discount && (
                <span className="bg-red-100 text-red-500 text-xs px-2 py-1 rounded-full">
                  -{product.discount}%
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      {products.length < topSellingProducts.length && (
        <button
          onClick={() => setProducts(topSellingProducts)}
          className="mt-12 border border-gray-300 px-8 md:px-12 py-3 rounded-full hover:bg-black hover:text-white transition"
        >
          View More
        </button>
      )}
    </section>
  );
};

export default TopSelling;