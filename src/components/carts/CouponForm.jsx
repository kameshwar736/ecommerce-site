import React from 'react'

const CouponForm = () => {
  return (
   
   <div className="flex flex-col sm:flex-row gap-3">

    <input
        type="text"
        placeholder="Add promo code"
        className="bg-gray-200 p-3 rounded-full w-full"
    />

    <button
        className="bg-black text-white rounded-full px-6 py-3 sm:w-40"
    >
        Apply
    </button>

</div>
  )
}

export default CouponForm