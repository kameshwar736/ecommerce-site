import React from 'react'
import cart from '../../../public/icons/cart.png'
import user from '../../../public/icons/user.png'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {

    const navLinks = [
        { name: "Shop", href: "/category" },
        { name: "On Sale", href: "#" },
        { name: "New Arrivals", href: "#" },
        { name: "Brands", href: "#" },
    ];

    return (
        <>
            <div className='flex p-5 px-4 justify-evenly items-center mt-5'>
                <div>
                    <h1 className='text-3xl font-bold'> SHOP.CO</h1>
                </div>
                <div className='flex gap-7 text-lg items-center'>
                  {
                    navLinks?.map((e,i)=>(
                        <Link href={e.href} key={i+1}>{e.name}</Link>
                    ))
                  }
                </div>
                <div>
                    <input className='w-130 border p-2 rounded-2xl px-8' type="text" placeholder='Search for products' />
                </div>
                <div className='flex gap-8 w-6'>
                    <Image src={cart} />
                    <Image src={user} />
                </div>
            </div>
        </>
    )
}

export default Navbar