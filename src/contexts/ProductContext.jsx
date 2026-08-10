"use client"

import products from '@/data/products'
import React, { createContext, useMemo, useState } from 'react'

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
    const dummyProducts = products

    const [selectedTypes, setSelectedTypes] = useState([])
    const [selectedCategories, setSelectedCategories] = useState([])
    const [selectedColors, setSelectedColors] = useState([])
    const [selectedSizes, setSelectedSizes] = useState([])
    const [priceRange, setPriceRange] = useState({ min: 0, max: 300 })

    const typeOptions = useMemo(
        () => [...new Set(dummyProducts.map((product) => product.type))],
        [dummyProducts]
    )

    const categoryOptions = useMemo(
        () => [...new Set(dummyProducts.map((product) => product.category))],
        [dummyProducts]
    )

    const toggleType = (type) => {
        setSelectedTypes((current) =>
            current.includes(type)
                ? current.filter((item) => item !== type)
                : [...current, type]
        )
    }

    const toggleCategory = (category) => {
        setSelectedCategories((current) =>
            current.includes(category)
                ? current.filter((item) => item !== category)
                : [...current, category]
        )
    }

    const toggleColor = (color) => {
        setSelectedColors((current) =>
            current.includes(color)
                ? current.filter((item) => item !== color)
                : [...current, color]
        )
    }

    const toggleSize = (size) => {
        setSelectedSizes((current) =>
            current.includes(size)
                ? current.filter((item) => item !== size)
                : [...current, size]
        )
    }

    const filteredProducts = useMemo(() => {
        return dummyProducts.filter((product) => {
            const matchesType =
                selectedTypes.length === 0 || selectedTypes.includes(product.type)

            const matchesCategory =
                selectedCategories.length === 0 || selectedCategories.includes(product.category)

            const matchesColor =
                selectedColors.length === 0 ||
                selectedColors.some((selectedColor) =>
                    product.color?.map((color) => color.toLowerCase()).includes(selectedColor.toLowerCase())
                )

            const matchesSize =
                selectedSizes.length === 0 ||
                selectedSizes.some((selectedSize) =>
                    product.size?.map((size) => size.toLowerCase()).includes(selectedSize.toLowerCase())
                )

            const matchesPrice =
                product.price >= priceRange.min && product.price <= priceRange.max

            return (
                matchesType &&
                matchesCategory &&
                matchesColor &&
                matchesSize &&
                matchesPrice
            )
        })
    }, [dummyProducts, priceRange, selectedCategories, selectedColors, selectedSizes, selectedTypes])

    return (
        <ProductContext.Provider
            value={{
                dummyProducts,
                filteredProducts,
                typeOptions,
                categoryOptions,
                selectedTypes,
                selectedCategories,
                selectedColors,
                selectedSizes,
                priceRange,
                toggleType,
                toggleCategory,
                toggleColor,
                toggleSize,
                setPriceRange,
            }}
        >
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext