import React from "react";
import Image from "next/image";
import Link from "next/link";

import twitter from "../../../public/icons/twitter.png";
import facebook from "../../../public/icons/facebook.png";
import insta from "../../../public/icons/insta.png";
import github from "../../../public/icons/github.png";

import visa from "../../../public/icons/visa.png";
import mastercard from "../../../public/icons/mastercard.png";
import paypal from "../../../public/icons/paypal.png";
import applepay from "../../../public/icons/applepay.png";
import gpay from "../../../public/icons/gpay.png";

const Footer = () => {
  const icons = [twitter, facebook, insta, github];
  const paymentLogo = [visa, mastercard, paypal, applepay, gpay];

  return (
    <footer className="bg-[#F0F0F0] pt-12">

      {/* Top Section */}
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Logo */}
          <div className="lg:col-span-1">

            <h1 className="text-3xl font-black">SHOP.CO</h1>

            <p className="text-gray-500 mt-5 leading-7">
              We have clothes that suit your style and which you're proud to wear.
              From women to men.
            </p>

            <div className="flex gap-3 mt-6">
              {icons.map((icon, index) => (
                <Image
                  key={index}
                  src={icon}
                  alt="social"
                  className="w-9 h-9 cursor-pointer hover:scale-110 transition"
                />
              ))}
            </div>

          </div>

          {/* Company */}
          <div>
            <h2 className="font-bold tracking-widest uppercase mb-5">
              Company
            </h2>

            <div className="flex flex-col gap-3 text-gray-500">
              <Link href="/">About</Link>
              <Link href="/">Features</Link>
              <Link href="/">Works</Link>
              <Link href="/">Career</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <h2 className="font-bold tracking-widest uppercase mb-5">
              Help
            </h2>

            <div className="flex flex-col gap-3 text-gray-500">
              <Link href="/">Customer Support</Link>
              <Link href="/">Delivery Details</Link>
              <Link href="/">Terms & Conditions</Link>
              <Link href="/">Privacy Policy</Link>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-bold tracking-widest uppercase mb-5">
              FAQ
            </h2>

            <div className="flex flex-col gap-3 text-gray-500">
              <Link href="/">Account</Link>
              <Link href="/">Manage Deliveries</Link>
              <Link href="/">Orders</Link>
              <Link href="/">Payments</Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h2 className="font-bold tracking-widest uppercase mb-5">
              Resources
            </h2>

            <div className="flex flex-col gap-3 text-gray-500">
              <Link href="/">Free eBooks</Link>
              <Link href="/">Development Tutorials</Link>
              <Link href="/">How-To Blog</Link>
              <Link href="/">YouTube Playlist</Link>
            </div>
          </div>

        </div>

        {/* Bottom Section */}

        <div className="border-t border-gray-300 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-500 text-center md:text-left">
            Shop.co © 2026–2027. All Rights Reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            {paymentLogo.map((logo, index) => (
              <Image
                key={index}
                src={logo}
                
                alt="payment"
                className="w-12 h-8 sm:w-14 sm:h-9 md:w-16 md:h-auto lg:w-20 lg:h-10 object-contain"
              />
            ))}
          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;