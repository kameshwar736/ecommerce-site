"use client"

import ProductContext from '@/contexts/ProductContext'
import Image from 'next/image'
import React, { useContext, useEffect, useMemo, useState } from 'react'

const FilterSidebar = ({ isFilterOpen = false, setIsFilterOpen = () => { }, }) => {

    const { dummyProducts, typeOptions, categoryOptions, priceRange, selectedTypes, selectedCategories, selectedColors, selectedSizes, toggleType, toggleCategory, toggleColor, toggleSize, setPriceRange } = useContext(ProductContext)

    const colors = [
        { className: "bg-green-500", name: "Green" },
        { className: "bg-red-500", name: "Red" },
        { className: "bg-yellow-400", name: "Yellow" },
        { className: "bg-orange-500", name: "Orange" },
        { className: "bg-sky-400", name: "Sky Blue" },
        { className: "bg-blue-600", name: "Blue" },
        { className: "bg-purple-600", name: "Purple" },
        { className: "bg-pink-500", name: "Pink" },
        { className: "bg-white", name: "White" },
        { className: "bg-black", name: "Black" },
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

    const clearFilter = () => {
        setPriceRange({ min: 0, max: 300 })
    }







    return (
        <>


            {/* Sidebar */}

            <div className="bg-white border rounded-2xl p-5 -ml-5 lg:w-[320px] lg:h-auto w-full">
                <div className="flex justify-between items-center py-5 border-b">

                    <h1 className="font-bold text-xl">
                        Filters
                    </h1>

                    <Image
                        src="/icons/filter.png"
                        width={20}
                        height={20}
                        alt=""
                        className="hidden lg:block rotate-90"
                    />

                    <button
                        className="text-2xl lg:hidden"
                        onClick={() => setIsFilterOpen?.(false)}
                    >
                        ✕
                    </button>

                </div>

                {/* dress type */}

                <div className='flex flex-col gap-3  text-gray-500 border-b-2 py-5 border-gray-400 '>


                    {
                        typeOptions?.map((e, i) => (
                            <div key={i + 1} className='flex justify-between'>
                                <button
                                    className={`text-start text-lg ${selectedTypes.includes(e) ? 'font-bold text-black' : ''}`}
                                    onClick={() => toggleType(e)}
                                >
                                    {e}
                                </button>
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
                                    left: `${(priceRange.min / 300) * 100}%`,
                                    width: `${((priceRange.max - priceRange.min) / 300) * 100}%`,
                                }}
                            ></div>

                            {/* Left Slider */}
                            <input
                                type="range"
                                min="0"
                                max="300"
                                value={priceRange.min}
                                onChange={(e) =>
                                    setPriceRange((current) => ({
                                        min: Math.min(Number(e.target.value), current.max - 1),
                                        max: current.max,
                                    }))
                                }
                                className="absolute w-full appearance-none bg-transparent pointer-events-none"
                            />

                            {/* Right Slider */}
                            <input
                                type="range"
                                min="0"
                                max="300"
                                value={priceRange.max}
                                onChange={(e) =>
                                    setPriceRange((current) => ({
                                        min: current.min,
                                        max: Math.max(Number(e.target.value), current.min + 1),
                                    }))
                                }
                                className="absolute w-full appearance-none bg-transparent pointer-events-none"
                            />

                        </div>

                        <div className="flex justify-between mt-4 text-sm font-semibold">
                            <span>${priceRange.min}</span>
                            <span>${priceRange.max}</span>
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
                                <button
                                    className={`p-4 rounded-full ${e.className} border ${selectedColors.includes(e.name) ? 'border-black border-4' : 'border-gray-900'}`}
                                    key={i + 1}
                                    onClick={() => toggleColor(e.name)}
                                ></button>
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
                            sizes?.map((e, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => toggleSize(e)}
                                    className={`px-5 py-2 rounded-4xl ${selectedSizes.includes(e) ? 'bg-black text-white' : 'bg-gray-100 text-gray-500'}`}
                                >
                                    {e}
                                </button>
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
                        {categoryOptions?.map((e, i) => (
                            <div key={i + 1} className='flex justify-between'>
                                <button
                                    className={`text-start text-lg ${selectedCategories.includes(e) ? 'font-bold text-black' : ''}`}
                                    onClick={() => toggleCategory(e)}
                                >
                                    {e}
                                </button>
                                <span>{">"}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* apply filter btn */}

                <button
                    onClick={() => {
                        if (setIsFilterOpen) {
                            setIsFilterOpen(false);
                        }
                    }}
                >
                    Apply Filter
                </button>
                <button
                    onClick={() => {
                        clearFilter();
                        setIsFilterOpen?.(false);
                    }}
                >
                    Reset Filters
                </button>
            </div>
        </>
    )
}

export default FilterSidebar