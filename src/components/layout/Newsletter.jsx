import React from 'react'

const Newsletter = () => {
  return (
    <>
    <div className='bg-black flex p-18 mx-20 px-20 py-25 rounded-2xl h-35 justify-between items-center mb-10'>
      <div>
        <h1 className='text-white text-4xl font-extrabold  w-130'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
      </div>
      <div className='flex flex-col gap-5 w-100 '>
        <input type="text" placeholder='Enter your email address' className='bg-white p-3 rounded-4xl '/>
        <button className='bg-white p-3 rounded-4xl'>Subscribe to Newsletter</button>
      </div>
    </div>
    </>
  )
}

export default Newsletter