import FilterSidebar from '@/components/category/FilterSidebar'
import ProductGrid from '@/components/category/ProductGrid'
import React from 'react'

const page = () => {
  return (
   <>
    <div className='flex gap-10 my-10'>
      <FilterSidebar/>
      <ProductGrid/>
    </div>
   </>
  )
}

export default page