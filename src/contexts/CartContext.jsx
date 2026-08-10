
"use client"

import products from '@/data/products'
import React, { createContext, useState } from 'react'

const CartContext = createContext()




export const CartProvider = ({ children }) => {

    const [cartProducts,setCartProducts] = useState([])


    const handleCart = (data) => {

        const searchProduct = products.find((_,i)=>i== data?.id-1)
        
        const addQuantity = {...searchProduct,quantity : data.quantity}
        
        setCartProducts(addQuantity)

    }
    return (
        <>
            <CartContext.Provider value={{ handleCart ,cartProducts}}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export default CartContext