"use client";

import React, { useEffect, useState } from "react";
import testimonialsData from "@/data/testimonialData";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoCheckmarkCircle } from "react-icons/io5";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
    <section className="py-12 md:py-16 lg:py-20 px-5 md:px-10 lg:px-20">

      {/* Heading */}
      <div className="flex justify-between items-center mb-10">

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black">
          OUR HAPPY CUSTOMERS
        </h1>

        <div className="flex gap-5 text-xl">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="disabled:opacity-40"
          >
            <FaArrowLeft />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex + cardsPerView >= testimonialsData.length}
            className="disabled:opacity-40"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div
        className={`grid gap-6 ${
          cardsPerView === 1
            ? "grid-cols-1"
            : cardsPerView === 2
            ? "grid-cols-2"
            : "grid-cols-3"
        }`}
      >
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
                <h2 className="font-bold text-lg">{review.name}</h2>
                <IoCheckmarkCircle className="text-green-500" />
              </div>

              {/* Review */}
              <p className="text-gray-500 leading-7">
                "{review.review}"
              </p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Testimonial;