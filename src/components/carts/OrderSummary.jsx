import React from 'react'
import CouponForm from './CouponForm'

const OrderSummary = () => {
  return (
    <div className='p-5 flex flex-col gap-4 w-120 ml-10 border rounded-2xl'>
        <div>
            <h1 className='text-xl font-semibold'>Order Summary</h1>
        </div>
        <div className='flex flex-col gap-3 text-gray-500'>
            <div className='flex justify-between'>
                <p>SubTotal</p>
                <p className='text-black font-bold'>$562</p>
            </div>
            <div className='flex  justify-between'>
                <p>Discount(-20%)</p>
                <p className='text-red-600 font-bold'>-$113</p>
            </div>
            <div className='flex  justify-between'>
                <p>Delivery Fee</p>
                <p className='text-black font-bold'>$13</p>
            </div>
        </div>
        <div className='flex  justify-between border-t-2 border-gray-400 pt-6'>
            <p>Total</p>
            <p className='text-black font-bold text-lg'>$456</p>
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