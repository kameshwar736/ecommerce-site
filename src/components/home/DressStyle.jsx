import React from 'react'
import casual from '../../../public/images/casual.png'
import formal from '../../../public/images/formal.png'
import party from '../../../public/images/party.png'
import gym from '../../../public/images/gym.png'
import Image from 'next/image'


const DressStyle = () => {
    return (
        <>
             
        <div className='flex flex-col justify-center items-center py-15 bg-gray-100 mx-20 rounded-4xl'>
            <div>
                <h1 className='text-black  text-4xl font-bold'>BROWSE BY DRESS STYLE</h1>
            </div>
            <div className='mt-10 flex flex-col gap-5'>
                <div className='flex gap-5 h-70'>
                    <Image src={casual} width={450} alt='casual' className='rounded-2xl'/>
                    <Image src={formal} width={650} alt='formal' className='rounded-2xl'/>
                </div>
                 <div className='flex gap-5 h-70'>
                    <Image src={party} width={650} alt='party'  className='rounded-2xl'/>
                    <Image src={gym} width={450} alt='gym'  className='rounded-2xl'/>
                </div>
            </div>
        </div>
    
        </>
    )
}

export default DressStyle