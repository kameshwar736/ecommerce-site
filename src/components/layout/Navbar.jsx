import React from 'react'

const Navbar = () => {
  return (
   <>
   <div className='flex p-5 px-4 justify-evenly items-center mt-5'>
    <div>
       <h1 className='text-3xl font-bold'> SHOP.CO</h1>
    </div>
    <div className='flex gap-7 text-lg items-center'>
        <p>Shop</p>
        <p>On Sale</p>
        <p>New Arrival</p>
        <p>Brands</p>
    </div>
    <div>
        <input className='w-130 border p-2 rounded-2xl' type="text" placeholder='Search for products' />
    </div>
    <div className='flex gap-5'>
        <p>🛒</p>
        <p>😊</p>
    </div>
   </div>
   </>
  )
}

export default Navbar