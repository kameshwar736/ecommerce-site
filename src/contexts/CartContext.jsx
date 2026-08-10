
"use client"

import products from '@/data/products'
import React, { createContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("CartItems")) || []
        setCartItems(storedCart)
    }, [])

    const saveCart = (nextCart) => {
        setCartItems(nextCart)
        localStorage.setItem("CartItems", JSON.stringify(nextCart))
    }

    const handleCart = (data) => {
        const product = products.find((item) => item.id === Number(data?.id))

        if (!product) {
            return
        }

        const quantity = Number(data.quantity) || 1
        const existingCart = JSON.parse(localStorage.getItem("CartItems")) || []
        const existingProduct = existingCart.find((item) => item.id === product.id)

        if (existingProduct) {
            existingProduct.quantity += quantity
            saveCart(existingCart)
        } else {
            const addQuantity = { ...product, quantity }
            const nextCart = [...existingCart, addQuantity]
            saveCart(nextCart)
        }

        alert("Added to Cart")
    }

    const removeFromCart = (productId) => {
        const nextCart = cartItems.filter((item) => item.id !== productId)
        saveCart(nextCart)
    }

    const updateQuantity = (productId, nextQuantity) => {
        const normalizedQuantity = Math.max(1, Number(nextQuantity) || 1)
        const nextCart = cartItems.map((item) => {
            if (item.id !== productId) {
                return item
            }

            return {
                ...item,
                quantity: normalizedQuantity,
            }
        })

        saveCart(nextCart)
    }

    const cartTotals = useMemo(() => {
        const subtotal = cartItems.reduce((acc, item) => {
            return acc + Number(item.price) * Number(item.quantity)
        }, 0)

        const discount = Math.round(subtotal * 0.2)
        const deliveryFee = cartItems.length > 0 ? 13 : 0
        const total = subtotal - discount + deliveryFee

        return {
            subtotal,
            discount,
            deliveryFee,
            total,
        }
    }, [cartItems])

    return (
        <CartContext.Provider
            value={{
                cartItems,
                handleCart,
                removeFromCart,
                updateQuantity,
                cartTotals,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export default CartContext