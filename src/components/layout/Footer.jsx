import React from 'react'
import twitter from '../../../public/icons/twitter.png'
import facebook from '../../../public/icons/facebook.png'
import insta from '../../../public/icons/insta.png'
import github from '../../../public/icons/github.png'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {


  const icons = [twitter, facebook, insta, github]

  return (
    <>
      <div className='flex px-10 p-5 gap-35'>

        <div className='flex flex-col gap-4 w-70'>

          <div>
            <h1 className='text-3xl font-bold'>Shop.co</h1>
          </div>
          <div className='text-md'>
            We have clothes that suits your style and which you're proud to wear.From women to men
          </div>
          <div className='flex gap-3'>
            {
              icons?.map((e, i) => (
                <Image src={e} alt='img' key={i + 1} className='w-7' />
              ))
            }
          </div>

        </div>


        <div className='flex flex-col gap-4'>
          <h1 className='text-xl'>Company</h1>
          <div className='text-md flex flex-col gap-1'>
            <Link href={"/"}>About</Link>
             <Link href={"/"}>Feature</Link>
              <Link href={"/"}>Works</Link>
               <Link href={"/"}>Career</Link>

          </div>
        </div>


        <div className='flex flex-col gap-4'>
          <h1 className='text-xl'>Help</h1>
          <div className='text-md flex flex-col gap-1'>
            <Link href={"/"}>Customer Support</Link>
             <Link href={"/"}>Delivery Detail</Link>
              <Link href={"/"}>Terms & COnditions</Link>
               <Link href={"/"}>Privacy Policy</Link>

          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <h1 className='text-xl'>FAQ</h1>
          <div className='text-md flex flex-col gap-1'>
            <Link href={"/"}>Account</Link>
             <Link href={"/"}>Manage Delivery</Link>
              <Link href={"/"}>Orders</Link>
               <Link href={"/"}>Payments</Link>

          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <h1 className='text-xl'>Resources</h1>
          <div className='text-md flex flex-col gap-1'>
            <Link href={"/"}>Free Ebook</Link>
             <Link href={"/"}>Developement Tutorial</Link>
              <Link href={"/"}>How To Blog</Link>
               <Link href={"/"}>Youtube Playlist</Link>

          </div>
        </div>
      </div>
    </>
  )
}

export default Footer