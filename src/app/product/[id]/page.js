
"use client";

import CartContext from "@/contexts/CartContext";
import ProductContext from "@/contexts/ProductContext";
import testimonialsData from "@/data/testimonialData";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";

const page = () => {

  const { dummyProducts } = useContext(ProductContext)
  const {handleCart} = useContext(CartContext)

  const [quantity, setQuantity] = useState(1)
  const [reviewData, setReviewData] = useState(testimonialsData.slice(0, 6))
  const [products, setProducts] = useState(dummyProducts.slice(0, 4));


  const params = useParams();

  const currentProduct = dummyProducts.find((e, i) => i == params.id - 1)

  const review = testimonialsData

  console.log(review);



  const handleLess = () => {
    if (quantity == 0) {
      return
    }

    setQuantity(prev => prev - 1)
  }


  return (
    <>
      <div className="mx-20 my-10">

        <div className="flex gap-30 mb-15">
          <div>
            <Image src={currentProduct.image} alt="image" width={400} height={100} />
          </div>

          <div className=" flex flex-col gap-5">

            <h3 className="text-4xl font-bold" >
              {currentProduct.name}
            </h3>

            <div className='flex items-center text-2xl' >
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={
                    index < Math.floor(currentProduct.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }
                />
              ))}

              <span className='mx-4 text-2xl' >
                {currentProduct.rating}/5
              </span>
            </div>

            <div className='flex gap-2 items-center'>
              <p className="font-bold text-3xl">${currentProduct.price}</p>

              {currentProduct.oldPrice && (
                <strike className="text-gray-400">
                  ${currentProduct.oldPrice}
                </strike>
              )}

              {currentProduct.discount && (
                <span className="bg-red-100 text-red-500 rounded-xl p-1">
                  -{currentProduct.discount}%
                </span>
              )}
            </div>

            {/* desc */}

            <div className="border-b-2 border-gray-400 pb-5">
              <p className="text-gray-500 w-200">
                Upgrade your wardrobe with this stylish and comfortable outfit, designed for everyday wear.
                Pair it with your favorite jeans, trousers, or sneakers to create a timeless and effortless look.
              </p>
            </div>

            {/* selectcolor */}

            <div className="flex flex-col gap-5 pb-5  border-b-2 border-gray-400">

              <div>
                <p className="text-lg text-gray-500">Select Color</p>
              </div>
              <div className="flex gap-4">
                {
                  currentProduct?.color.map((e, i) => (
                    <button className='p-4 rounded-full border-1' style={{ backgroundColor: e }} key={i + 1}></button>
                  ))
                }
              </div>

            </div>

            {/* Choose size */}

            <div className="flex flex-col gap-5 pb-5 border-b-2 border-gray-400">

              <div>
                <p className="text-lg text-gray-500">Choose Size</p>
              </div>

              <div className="flex gap-4">
                {
                  currentProduct?.size.map((e, i) => (
                    <button key={i + 1} className='px-5 py-2 bg-gray-100 text-gray-500 rounded-4xl w-30'>{e}</button>

                  ))
                }
              </div>

            </div>

            {/* quantity & add to cart */}

            <div className="flex gap-4">

              <div className="flex items-center w-70 bg-gray-200 rounded-2xl justify-evenly">
                <button className="text-4xl" onClick={handleLess}>-</button>
                <p>{quantity}</p>
                <button className="text-2xl" onClick={() => setQuantity(prev => prev + 1)}>+</button>
              </div>

              <div>
                <button className="bg-black w-100 justify-center p-2 text-white text-xl  rounded-4xl" onClick={()=>handleCart({id : params.id,quantity : quantity})}>Add to Cart</button>
              </div>


            </div>

          </div>
        </div>


        <div>
          <div className="flex text-xl  justify-evenly border-b-2 border-gray-400 pb-5">
            <h1 className="text-gray-400">Product Detail</h1>
            <h1 className="text-black ">Rating & Review</h1>
            <h1 className="text-gray-400">FAQs</h1>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-10 ">

            {
              reviewData?.map((review) => (
                <div
                  key={review.id}
                  className="border rounded-2xl p-6 flex flex-col gap-4 w-100"
                >
                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, index) => (
                      <FaStar
                        key={index}
                        className={
                          index < Math.floor(review.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                  </div>

                  {/* Name */}
                  <div className="flex items-center gap-2">
                    <h2 className="font-bold text-lg">{review.name}</h2>
                    <IoCheckmarkCircle className="text-green-500" />
                  </div>

                  {/* Review */}
                  <p className="text-gray-500 leading-7">
                    "{review.review}"
                  </p>
                </div>
              ))
            }

          </div>

          <div className=" flex justify-center ">
            <button onClick={() => setReviewData(testimonialsData)} className="mt-12 border border-gray-300 px-8 md:px-12 py-3 rounded-full hover:bg-black hover:text-white transition"
            >View more</button>
          </div>

        </div>

        {/* recommended products */}

        <div className="mt-25">

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-center">
            YOU MIGHT ALSO LIKE
          </h1>

          <div className="flex  p-10 mt-5 gap-10">
            {products.map((product) => (
            <Link  key={product.id} href={`/product/${product.id}`} className="group">

              <div key={product.id} className="flex flex-col gap-3 md:gap-4 cursor-pointer transition-all duration-300 hover:scale-105 ">
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
              </Link>
            ))}
          </div>





        </div>





      </div>
    </>
  )
}

export default page;