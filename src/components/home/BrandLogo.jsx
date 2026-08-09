import React from "react";
import Image from "next/image";

import versace from "../../../public/images/versace.png";
import zara from "../../../public/images/zara.png";
import gucci from "../../../public/images/gucci.png";
import prada from "../../../public/images/prada.png";
import calvin from "../../../public/images/calvin.png";

const BrandLogo = () => {
  const brands = [
    versace,
    zara,
    gucci,
    prada,
    calvin,
  ];

  return (
    <section className="bg-black overflow-hidden py-8">
      <div className="flex w-max animate-marquee gap-12 md:gap-20 lg:gap-28">

        {[...brands, ...brands].map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center min-w-fit"
          >
            <Image
              src={logo}
              alt="Brand Logo"
              className="h-6 md:h-8 lg:h-10 w-auto object-contain"
            />
          </div>
        ))}

      </div>
    </section>
  );
};

export default BrandLogo;