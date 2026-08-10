"use client"
import CartContext from '@/contexts/CartContext'
import Image from 'next/image'
import del from '../../../public/icons/del.png'
import React, { useContext, useEffect, useState } from 'react'
import OrderSummary from './OrderSummary'
import CouponForm from './CouponForm'

const CartItems = () => {

    const [cart, setCart] = useState([])
    const [quantity, setQuantity] = useState(1)




    const handleLess = () => {
        if (quantity == 0) {
            return
        }

        setQuantity(prev => prev + 1)
    }

    const handleDelete = (del) => {

        console.log(del);

        const id = del - 1

        const deleteItem = cart.filter((e, i) => i !== id)
        console.log(deleteItem);


        localStorage.setItem("CartItems", JSON.stringify(deleteItem))
        setCart(deleteItem)
    }


    useEffect(() => {

        const getCartItems = JSON.parse(localStorage.getItem("CartItems")) || []

        setCart(getCartItems)

    }, [])




    return (
        <div className='mx-4 md:mx-8 lg:mx-25 my-8 lg:my-15'>

            <div>
                <h1 className='text-2xl lg:text-3xl font-black'>YOUR CART</h1>
            </div>

            <div className='flex flex-col lg:flex-row gap-8 mt-8'>
                <div className='w-full lg:w-190'>
                    {/* cartItems */}
                    <div>
                        {
                            cart.length == 0 ? <div className='flex justify-center items-center relative top-'>No items at Cart</div> :
                                cart.map((e) => (
                                    <div key={e.id} className='flex gap-4 lg:gap-6 border-b-2 border-gray-300 py-5 w-full'>
                                        <div>
                                            <Image
                                                src={e.image}
                                                width={150}
                                                height={150}
                                                alt="image"
                                                className="w-28 h-28 lg:w-36 lg:h-36 rounded-xl object-cover"
                                            />
                                        </div>
                                        <div className='flex-1 flex justify-between'>
                                            <div className='flex flex-col justify-between'>
                                                <div className='flex flex-col gap-1'>
                                                    <h1 className='text-base lg:text-lg font-semibold'>{e.name}</h1>
                                                    <p><span className='text-md font-medium'>Size : </span>{e.size[1]}</p>
                                                    <p><span className='text-md font-medium'>Color : </span> {e.color[0]} </p>
                                                </div>
                                                <div>
                                                    <h1 className='font-bold text-lg'>$ {e.price}</h1>
                                                </div>
                                            </div>
                                            <div className='flex flex-col justify-between items-end'>
                                                <button className='self-end' onClick={() => handleDelete(e.id)}><Image src={del} alt="" width={25} /></button>
                                                <div className="flex items-center justify-evenly w-28 lg:w-30 h-10 bg-gray-200 rounded-full">
                                                    <button className="text-4xl" onClick={handleLess}>-</button>
                                                    <p className='font-bold'>{quantity}</p>
                                                    <button className="text-2xl" onClick={() => setQuantity(prev => prev + 1)}>+</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))

                        }
                    </div>
                </div>
                <div className="w-full lg:w-[420px]">
                    <OrderSummary />
                </div>
            </div>


        </div>
    )
}

export default CartItems