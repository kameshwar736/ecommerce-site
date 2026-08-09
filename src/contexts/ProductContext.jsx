"use client"

import products from '@/data/products'
import React, { Children, createContext } from 'react'

const ProductContext = createContext()



export const ProductProvider = ({children})=>{

    const dummyProducts = products


    return(
        <>
        <ProductContext.Provider value={{dummyProducts}}>
            {children}
        </ProductContext.Provider>
        </>
    )
}

export default ProductContext