import React from 'react'

const CouponForm = () => {
  return (
   
    <div className='flex gap-2'>
        <input type="text" placeholder='Add promo code' className='bg-gray-200 p-2 rounded-4xl pl-5 w-70' />
        <button className='bg-black p-2  rounded-4xl text-white text-center w-40'>Apply</button>
   </div>
  )
}

export default CouponForm