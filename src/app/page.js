import BrandLogo from '@/components/home/BrandLogo'
import DressStyle from '@/components/home/DressStyle'
import Hero from '@/components/home/Hero'
import NewArrival from '@/components/home/NewArrival'
import Testimonial from '@/components/home/Testimonial'
import TopSelling from '@/components/home/TopSelling'
import React from 'react'

const page = () => {
  return (
   <>
   <main>
    <Hero/>
    <BrandLogo/>
    <NewArrival/>
    <TopSelling/>
    <DressStyle/>
    <Testimonial/>
   </main>

   </>
  )
}

export default page