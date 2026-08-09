"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import cart from "../../../public/icons/cart.png";
import user from "../../../public/icons/user.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Shop", href: "/category" },
    { name: "On Sale", href: "#" },
    { name: "New Arrivals", href: "#newArrival" },
    { name: "Brands", href: "#" },
  ];

  return (
    <>
      <nav className="px-5 md:px-10 lg:px-16 xl:px-28 py-6">

        <div className="flex items-center justify-between">

          {/* Left */}
          <div className="flex items-center gap-5">

            {/* Mobile Menu */}
            <button
              className="md:hidden text-3xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>

            <h1 className="text-2xl lg:text-3xl font-black">
              SHOP.CO
            </h1>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8 ml-6">
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  {link.name}
                </Link>
              ))}
            </div>

          </div>

          {/* Search */}
          <div className="hidden lg:block flex-1 mx-10">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full rounded-full bg-gray-100 px-6 py-3 outline-none"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-5">
            <Image src={cart} alt="cart" width={24} height={24} />
            <Image src={user} alt="user" width={24} height={24} />
          </div>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-5 flex flex-col gap-4 border-t pt-5">

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <input
              type="text"
              placeholder="Search..."
              className="rounded-full bg-gray-100 px-5 py-3 outline-none"
            />

          </div>
        )}

      </nav>
    </>
  );
};

export default Navbar;