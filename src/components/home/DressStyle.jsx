import React from "react";
import Image from "next/image";

import casual from "../../../public/images/casual.png";
import formal from "../../../public/images/formal.png";
import party from "../../../public/images/party.png";
import gym from "../../../public/images/gym.png";

const DressStyle = () => {
  return (
    <section className="bg-gray-100 rounded-3xl mx-4 md:mx-10 lg:mx-20 py-10 md:py-14 lg:py-16">

      {/* Heading */}
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-black">
        BROWSE BY DRESS STYLE
      </h1>

      {/* Images */}
      <div className="mt-10 px-4 md:px-8 lg:px-12 flex flex-col gap-5">

        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div className="lg:col-span-1">
            <Image
              src={casual}
              alt="Casual"
              className="w-full h-56 md:h-72 lg:h-80 rounded-2xl object-cover"
            />
          </div>

          <div className="lg:col-span-1">
            <Image
              src={formal}
              alt="Formal"
              className="w-full h-56 md:h-72 lg:h-80 rounded-2xl object-cover"
            />
          </div>

        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <div className="lg:col-span-1">
            <Image
              src={party}
              alt="Party"
              className="w-full h-56 md:h-72 lg:h-80 rounded-2xl object-cover"
            />
          </div>

          <div className="lg:col-span-1">
            <Image
              src={gym}
              alt="Gym"
              className="w-full h-56 md:h-72 lg:h-80 rounded-2xl object-cover"
            />
          </div>

        </div>

      </div>

    </section>
  );
};

export default DressStyle;