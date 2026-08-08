import React from 'react'
import banner from '../../../public/images/banner.png'
import versace from '../../../public/images/versace.png'
import zara from '../../../public/images/zara.png'
import gucci from '../../../public/images/gucci.png'
import prada from '../../../public/images/prada.png'
import calvin from '../../../public/images/calvin.png'
import Image from 'next/image'

const BrandLogo = () => {

     const BrandsLogo = [ versace, zara, gucci ,prada,calvin ]

  return (
   <>
   {/* carousel */}
      <div className='marquee bg-black h-30 pt-8'>
        <div className='marquee__content gap-20 justify-center items-center'>
          {[...BrandsLogo, ...BrandsLogo].map((logo, i) => (
            <div key={`${logo.src}-${i}`} className='flex w-40'>
              <Image
                src={logo}
                alt={`brand logo ${i + 1}`}
                className='object-contain'
              />
            </div>
          ))}
        </div>
      </div>
   </>
  )
}

export default BrandLogo