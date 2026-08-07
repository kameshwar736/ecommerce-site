import React from 'react'
import twitter from '../../../public/icons/twitter.png'
import facebook from '../../../public/icons/facebook.png'
import insta from '../../../public/icons/insta.png'
import github from '../../../public/icons/github.png'
import visa from '../../../public/icons/visa.png'
import mastercard from '../../../public/icons/mastercard.png'
import paypal from '../../../public/icons/paypal.png'
import applepay from '../../../public/icons/applepay.png'
import gpay from '../../../public/icons/gpay.png'


import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {


  const icons = [twitter, facebook, insta, github]
  const paymentLogo = [visa,mastercard,paypal,applepay,gpay]

  return (
    <>
      <div className='flex px-20 p-5 gap-35 '>

        <div className='flex flex-col gap-4 w-70'>

          <div>
            <h1 className='text-3xl font-bold'>Shop.co</h1>
          </div>
          <div className='text-sm'>
            We have clothes that suits your style and which you're proud to wear.From women to men
          </div>
          <div className='flex gap-3 mt-3'>
            {
              icons?.map((e, i) => (
                <Image src={e} alt='img' key={i + 1} className='w-7' />
              ))
            }
          </div>

        </div>


        <div className='flex flex-col gap-6'>
          <h1 className='text-xl'>Company</h1>
          <div className='text-md flex flex-col gap-2'>
            <Link href={"/"}>About</Link>
             <Link href={"/"}>Feature</Link>
              <Link href={"/"}>Works</Link>
               <Link href={"/"}>Career</Link>

          </div>
        </div>


        <div className='flex flex-col gap-6'>
          <h1 className='text-xl'>Help</h1>
          <div className='text-md flex flex-col gap-2'>
            <Link href={"/"}>Customer Support</Link>
             <Link href={"/"}>Delivery Detail</Link>
              <Link href={"/"}>Terms & COnditions</Link>
               <Link href={"/"}>Privacy Policy</Link>

          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <h1 className='text-xl'>FAQ</h1>
          <div className='text-md flex flex-col gap-2'>
            <Link href={"/"}>Account</Link>
             <Link href={"/"}>Manage Delivery</Link>
              <Link href={"/"}>Orders</Link>
               <Link href={"/"}>Payments</Link>

          </div>
        </div>

        <div className='flex flex-col gap-6'>
          <h1 className='text-xl'>Resources</h1>
          <div className='text-md flex flex-col gap-2'>
            <Link href={"/"}>Free Ebook</Link>
             <Link href={"/"}>Developement Tutorial</Link>
              <Link href={"/"}>How To Blog</Link>
               <Link href={"/"}>Youtube Playlist</Link>

          </div>
        </div>


      </div>
      <div className='px-20 mt-6  ' >
           <div className='flex justify-between items-center border-t-2 border-gray-400 mt-1'>
             <div >
              <p>Shop.co <span>©</span> 2026-2027,All Rights Reserved</p>
            </div>
            <div className='flex gap-1'>
              {
                paymentLogo?.map((e,i)=>(
                  <Image src={e} key={i+1} alt='logo' className='w-20 p-4 h-15 '/>
                ))
              }

            </div>
           </div>

      </div>
    </>
  )
}

export default Footer