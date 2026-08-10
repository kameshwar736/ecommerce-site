"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineMenu,
  HiOutlineX,
  HiOutlineSearch,
} from "react-icons/hi";

import cart from "../../../public/icons/cart.png";
import user from "../../../public/icons/user.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { name: "Shop", href: "/category" },
    { name: "On Sale", href: "/" },
    { name: "New Arrivals", href: "#newArrival" },
    { name: "Brands", href: "/" },
  ];

  return (
   <nav className="w-full px-4 md:px-8 lg:px-20 my-4 md:my-5 lg:mt-10 lg:mb-6">

      {/* Navbar */}

      <div className="flex items-center justify-between">

        {/* Left */}

        <div className="flex items-center gap-5">

          {/* Mobile Menu */}

          <button
            className="md:hidden text-3xl"
            onClick={() => {
              setMenuOpen(!menuOpen);
              setSearchOpen(false);
            }}
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>

          {/* Logo */}

          <h1 className="text-2xl lg:text-3xl font-black">
            SHOP.CO
          </h1>

          {/* Desktop Navigation */}

          <div className="hidden md:flex items-center gap-6 lg:gap-8 ml-6">

            {navLinks.map((link) => (
              <Link key={link.name} href={link.href}>
                {link.name}
              </Link>
            ))}

          </div>

        </div>

        {/* Desktop Search */}

        <div className="hidden lg:block flex-1 mx-10">

          <input
            type="text"
            placeholder="Search for products..."
            className="w-full rounded-full bg-gray-100 px-6 py-3 outline-none"
          />

        </div>

        {/* Right Icons */}

        <div className="flex items-center gap-4">

          {/* Mobile Search */}

          <button
            className="lg:hidden"
            onClick={() => {
              setSearchOpen(!searchOpen);
              setMenuOpen(false);
            }}
          >
            <HiOutlineSearch className="text-2xl" />
          </button>

          {/* Cart */}

          <Link href="/cart">
            <Image src={cart} alt="cart" width={24} height={24} />
          </Link>

          {/* User */}

          <Image src={user} alt="user" width={24} height={24} />

        </div>

      </div>

      {/* Mobile Search */}

      {searchOpen && (
        <div className="lg:hidden mt-5">
          <input
            type="text"
            placeholder="Search for products..."
            className="w-full rounded-full border bg-gray-100 px-5 py-3 outline-none"
          />
        </div>
      )}

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

        </div>
      )}

    </nav>
  );
};

export default Navbar;