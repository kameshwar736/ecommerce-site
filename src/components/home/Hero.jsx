import Image from 'next/image'
import banner from '../../../public/images/banner.png'


const Hero = () => {

 


  return (
    <>
      <Image src={banner} alt='img' className='w-full h-180'/>
     
    </>
  )
}

export default Hero