"use client"
import CartContext from '@/contexts/CartContext'
import React, { useContext } from 'react'
import CouponForm from './CouponForm'

const OrderSummary = () => {
  const { cartTotals } = useContext(CartContext)

  return (
    <div className='p-5 flex flex-col gap-4 lg:w-120 md:w-60 lg:ml-10 border rounded-2xl'>
        <div>
            <h1 className='text-xl font-semibold'>Order Summary</h1>
        </div>
        <div className='flex flex-col gap-3 text-gray-500'>
            <div className='flex justify-between'>
                <p>SubTotal</p>
                <p className='text-black font-bold'>${cartTotals.subtotal}</p>
            </div>
            <div className='flex  justify-between'>
                <p>Discount(-20%)</p>
                <p className='text-red-600 font-bold'>-${cartTotals.discount}</p>
            </div>
            <div className='flex  justify-between'>
                <p>Delivery Fee</p>
                <p className='text-black font-bold'>${cartTotals.deliveryFee}</p>
            </div>
        </div>
        <div className='flex  justify-between border-t-2 border-gray-400 pt-6'>
            <p>Total</p>
            <p className='text-black font-bold text-lg'>${cartTotals.total}</p>
        </div>

        <div>
             <CouponForm/>
        </div>
        <div>
            <button className='bg-black p-2 w-full py-3 text-white rounded-4xl'>Go to Checkout</button>
        </div>
    </div>
  )
}

export default OrderSummary