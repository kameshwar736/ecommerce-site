"use client";

import React, { useState } from "react";
import testimonialsData from "@/data/testimonialData";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cardsPerView = 3;

  const nextSlide = () => {
    if (currentIndex + cardsPerView < testimonialsData.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="mx-20 my-20">

      {/* Heading */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-black">
          OUR HAPPY CUSTOMERS
        </h1>

        <div className="flex gap-5 text-xl">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="cursor-pointer disabled:opacity-40"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex + cardsPerView >= testimonialsData.length}
            className="cursor-pointer disabled:opacity-40"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-6">

        {testimonialsData
          .slice(currentIndex, currentIndex + cardsPerView)
          .map((review) => (

            <div
              key={review.id}
              className="border rounded-2xl p-6 flex flex-col gap-4"
            >

              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={
                      index < Math.floor(review.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }
                  />
                ))}
              </div>

              {/* Name */}
              <div className="flex items-center gap-2">
                <h2 className="font-bold text-lg">
                  {review.name}
                </h2>

                <IoCheckmarkCircle className="text-green-500" />
              </div>

              {/* Review */}
              <p className="text-gray-500">
                "{review.review}"
              </p>

            </div>

          ))}

      </div>
    </div>
  );
};

export default Testimonial;