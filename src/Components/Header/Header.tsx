// Next
import Link from "next/link";
// Next

// React
import React, { Suspense } from "react";
// React

// Icons
import { FaShoppingCart, FaUser } from "react-icons/fa";
// Icons

// Search Input
import HeaderSearchInput from "./HeaderSearchInput/HeaderSearchInput";
// Search Input

const Header = () => {
  return (
    <>
      <header className="bg-black text-white py-3 text-center text-sm">
        Sign up and get 20% off your first order.{" "}
        <a href="#" className="underline">
          Sign Up Now
        </a>
      </header>

      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center px-8">
        <h1 className="text-2xl font-bold">SHOP.CO</h1>
        <div className="flex items-center gap-6">
          <Link href="#" className="text-gray-600 hover:text-black">
            Shop
          </Link>
          <Link href="#" className="text-gray-600 hover:text-black">
            On Sale
          </Link>
          <Link href="#" className="text-gray-600 hover:text-black">
            New Arrivals
          </Link>
          <Link href="#" className="text-gray-600 hover:text-black">
            Brands
          </Link>
        </div>
        <Suspense fallback="loading...">
          <HeaderSearchInput />
        </Suspense>
        <div className="flex gap-4 items-center">
          <FaShoppingCart className="text-xl cursor-pointer" />
          <FaUser className="text-xl cursor-pointer" />
        </div>
      </nav>
    </>
  );
};

export default Header;
