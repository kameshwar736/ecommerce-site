import Link from 'next/link'
import React from 'react'

const TopBanner = () => {
  return (
    <>
      <div className="bg-black text-white py-2">
        <div className="max-w-7xl mx-auto flex justify-center items-center">
          <p className="text-xs md:text-sm">
            Sign up and get 20% off to your first order.{" "}
            <Link href="#" className="underline font-medium">
              Sign Up Now
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default TopBanner