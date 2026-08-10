"use client"

import ProductContext from '@/contexts/ProductContext'
import Image from 'next/image'
import React, { useContext, useEffect, useMemo, useState } from 'react'

const FilterSidebar = () => {

    const [products, setProducts] = useState([])
    const [type, setType] = useState([])
    const [category,setCategory] = useState([])
    const [min, setMin] = useState(50);
    const [max, setMax] = useState(200);


    const MIN = 0;
    const MAX = 300;


    const { dummyProducts } = useContext(ProductContext)

    useEffect(() => {
        setProducts(dummyProducts)

        const uniqueType = [...new Set(dummyProducts.map((e) => e.type))]
        const uniqueCategory =  [...new Set(dummyProducts.map((e) => e.category))]

        setType(uniqueType)

        setCategory(uniqueCategory)
    }, [])


    

    const colors = [
        "bg-green-500",
        "bg-red-500",
        "bg-yellow-400",
        "bg-orange-500",
        "bg-sky-400",
        "bg-blue-600",
        "bg-purple-600",
        "bg-pink-500",
        "bg-white",
        "bg-black",
    ];

    const sizes = [
        "XX-Small",
        "X-Small",
        "Small",
        "Medium",
        "Large",
        "X-Large",
        "XX-Large",
        "3X-Large",
        "4X-Large",
    ];







    return (
        <>
            <div className='w-120 border rounded-xl px-5 ml-23 mb-10 h-330'>
                <div className='flex justify-between py-5 border-b-2 border-gray-400  '>
                    <h1 className='font-bold text-xl'>Filters</h1>
                    <Image src={'/icons/filter.png'} width={20} height={5} alt='filterlogo' className='rotate-90' />
                </div>

                {/* dress type */}

                <div className='flex flex-col gap-3  text-gray-500 border-b-2 py-5 border-gray-400 '>


                    {
                        type?.map((e, i) => (
                            <div key={i + 1} className='flex justify-between'>
                                <button className='text-start text-lg' >{e}</button>
                                <span>{">"}</span>
                            </div>
                        ))
                    }
                </div>



                {/* Price Filter */}
                <div className="border-b-2 py-5 border-gray-400 ">

                    <div className="flex justify-between items-center mb-6">
                        <h1 className="font-bold text-xl">Price</h1>
                        <button className="rotate-270">{">"}</button>
                    </div>

                    <div className="w-full">

                        <div className="relative w-full h-8">

                            {/* Background Track */}
                            <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-300 rounded-full -translate-y-1/2"></div>

                            {/* Active Track */}
                            <div
                                className="absolute top-1/2 h-1 bg-black rounded-full -translate-y-1/2"
                                style={{
                                    left: `${(min / 300) * 100}%`,
                                    width: `${((max - min) / 300) * 100}%`,
                                }}
                            ></div>

                            {/* Left Slider */}
                            <input
                                type="range"
                                min="0"
                                max="300"
                                value={min}
                                onChange={(e) =>
                                    setMin(Math.min(Number(e.target.value), max - 1))
                                }
                                className="absolute w-full appearance-none bg-transparent pointer-events-none"
                            />

                            {/* Right Slider */}
                            <input
                                type="range"
                                min="0"
                                max="300"
                                value={max}
                                onChange={(e) =>
                                    setMax(Math.max(Number(e.target.value), min + 1))
                                }
                                className="absolute w-full appearance-none bg-transparent pointer-events-none"
                            />

                        </div>

                        <div className="flex justify-between mt-4 text-sm font-semibold">
                            <span>${min}</span>
                            <span>${max}</span>
                        </div>

                    </div>

                </div>

                {/* color */}

                <div className="border-b-2 py-5 border-gray-400 ">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="font-bold text-xl">Colors</h1>
                        <button className="rotate-270">{">"}</button>
                    </div>

                    <div className='flex flex-wrap gap-4'>
                        {
                            colors?.map((e, i) => (
                                <button className={`p-4 rounded-full ${e} border-gray-900 `} key={i + 1}></button>
                            ))
                        }
                    </div>
                </div>


                {/* size */}

                <div className="border-b-2 py-5 border-gray-400 ">

                    <div className="flex justify-between items-center mb-6">
                        <h1 className="font-bold text-xl">Size</h1>
                        <button className="rotate-270">{">"}</button>
                    </div>

                    <div className='flex flex-wrap gap-4  '>
                        {
                            sizes?.map((e,i)=>(
                                <button key={i+1} className='px-5 py-2 bg-gray-100 text-gray-500 rounded-4xl'>{e}</button>
                            ))
                        }
                    </div>

                </div>

                {/* dress Style */}

                <div className="py-5  ">
                    <div className='flex justify-start   '>
                        <h1 className='font-bold text-xl'>Dress Style</h1>
                       
                    </div>

                    <div className='flex flex-col gap-3  text-gray-500 py-5 '>
                        {category?.map((e, i) => (
                            <div key={i + 1} className='flex justify-between'>
                                <button className='text-start text-lg' >{e}</button>
                                <span>{">"}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* apply filter btn */}

                <button className='bg-black px-7 py-2 rounded-4xl w-full text-lg text-white mb-10'>
                    Apply Filter
                </button>
            </div>
        </>
    )
}

export default FilterSidebar