import React from "react";

const Newsletter = () => {
  return (
    <section className="px-5 md:px-10 lg:px-20 mb-10">
      <div className="bg-black rounded-3xl px-6 py-8 md:px-10 md:py-10 lg:px-16 lg:py-12 flex flex-col lg:flex-row justify-between items-center gap-8">

        {/* Left */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-black leading-tight text-center lg:text-left">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h1>
        </div>

        {/* Right */}
        <div className="w-full lg:w-[420px] flex flex-col gap-4">

          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full bg-white rounded-full px-6 py-4 outline-none"
          />

          <button className="w-full bg-white rounded-full py-4 font-semibold hover:bg-gray-200 transition">
            Subscribe to Newsletter
          </button>

        </div>

      </div>
    </section>
  );
};

export default Newsletter;