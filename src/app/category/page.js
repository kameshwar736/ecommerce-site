"use client";

import { useState } from "react";
import FilterSidebar from "@/components/category/FilterSidebar";
import ProductGrid from "@/components/category/ProductGrid";

const Page = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">

      <div className="flex gap-20">

        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-72 flex-shrink-0">
          <FilterSidebar />
        </div>

        {/* Products */}
        <div className="flex-1">
          <ProductGrid setIsFilterOpen={setIsFilterOpen} />
        </div>

      </div>

      {/* Mobile Drawer */}
      {isFilterOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsFilterOpen(false)}
          />

          <div className="fixed top-0 left-0 h-screen w-[70%] max-w-[350px] p-5  bg-white z-50 overflow-y-auto lg:hidden">
            <FilterSidebar
              isFilterOpen={isFilterOpen}
              setIsFilterOpen={setIsFilterOpen}
            />
          </div>
        </>
      )}

    </div>
  );
};

export default Page;