
"use client"

import products from '@/data/products'
import React, { createContext, useState } from 'react'

const CartContext = createContext()




export const CartProvider = ({ children }) => {


    const handleCart = (data) => {

        const searchProduct = products.find((_,i)=>i== data?.id-1)
        
        const addQuantity = {...searchProduct,quantity : data.quantity}
        
        const getLocal = JSON.parse(localStorage.getItem("CartItems")) || []

        getLocal.push(addQuantity)

        localStorage.setItem("CartItems",JSON.stringify(getLocal))

        alert("Added to Cart")

    }
    return (
        <>
            <CartContext.Provider value={{ handleCart}}>
                {children}
            </CartContext.Provider>
        </>
    )
}

export default CartContext