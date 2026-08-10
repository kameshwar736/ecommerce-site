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
        <div className='mx-25 my-15'>

            <div>
                <h1 className='text-3xl font-black'>YOUR CART</h1>
            </div>

            <div className='flex'>
                <div className='w-190' >
                    {/* cartItems */}
                    <div>
                        {
                            cart.length == 0 ? <div className='flex justify-center items-center relative top-40'>No items at Cart</div> :
                                cart.map((e) => (
                                    <div key={e.id} className='flex p-10 gap-6 border-b-2 border-gray-400 w-190 '>
                                        <div>
                                            <Image src={e.image} width={150} height={100} alt='image' />
                                        </div>
                                        <div className='flex gap-50'>
                                            <div className='flex flex-col gap-5'>
                                                <div className='flex flex-col gap-1'>
                                                    <h1 className='text-lg font-semibold'>{e.name}</h1>
                                                    <p><span className='text-md font-medium'>Size : </span>{e.size[1]}</p>
                                                    <p><span className='text-md font-medium'>Color : </span> {e.color[0]} </p>
                                                </div>
                                                <div>
                                                    <h1 className='font-bold text-lg'>$ {e.price}</h1>
                                                </div>
                                            </div>
                                            <div className='flex flex-col justify-between'>
                                                <button className='flex justify-end mr-3' onClick={() => handleDelete(e.id)}><Image src={del} alt="" width={25} /></button>
                                                <div className="flex items-center w-30 bg-gray-200 rounded-2xl justify-evenly">
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
                <div className='h-'>
                    <OrderSummary/>
                   
                </div>
            </div>


        </div>
    )
}

export default CartItems