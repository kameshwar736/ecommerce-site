import Image from 'next/image'
import React from 'react'
import banner from '../../../public/images/banner.png'

const TopBanner = () => {

  const BrandsLogo = [
    Versace , Zara , Gucci ,
  ]


  return (
    <>
    <Image src={banner} className='w-full'/>

      {/* courosel */}
    <div>
      
    </div>
    </>
  )
}

export default TopBanner