"use client";

import allProducts from '@/data/products'
import Image from 'next/image'
import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";

const TopSelling = () => {

    const [products,setProducts] = useState( allProducts.slice(0,4))
    

    const TopSelling = products.filter((e) => e.section === "top-selling")

    


    return (
        <>

        <div id='newArrival' className='flex flex-col justify-center items-center py-20 gap-20'>
            <div>
                <h1 className='text-black font-black text-4xl'>TOP SELLING</h1>
            </div>

            <div className="grid grid-cols-4 gap-5 px-30  gap-25">
                {products.map((product) => (
                    <div key={product.id} className="rounded-lg flex flex-col gap-5">
                        <div >
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={250}
                                height={100}

                                className="rounded-2xl object-cover w-100 h-80"
                            />
                        </div>

                        <h3 className='font-bold text-xl'>{product.name}</h3>

                        <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, index) => (
                                <FaStar
                                    key={index}
                                    className={
                                        index < product.rating
                                            ? "text-yellow-400"
                                            : "text-gray-300"
                                    }
                                />
                            ))}

                            <span>{product.rating}/5</span>
                        </div>

                        <div className='flex gap-5 items-center'>
                            <p className='font-bold text-lg' >${product?.price}</p>
                            {
                                product?.oldPrice && <strike style={{ color: "gray" }} >${product?.oldPrice}</strike>
                            }
                            {
                                product?.discount && <p className='bg-red-300 text-red-600 p-1 rounded-xl'>-{product.discount}%</p>
                            }
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <button className='px-13 py-2 border rounded-2xl' onClick={()=>(setProducts(allProducts))}>View more</button>
            </div>
        </div>


        </>
    )
}

export default TopSelling