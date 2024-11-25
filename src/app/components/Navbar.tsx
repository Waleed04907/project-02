'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-green-900 shadow-md fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="text-2xl font-bold text-green-600">
          <Link href="/">WBS</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
  <li>
    <Link href="/buy" className="hover:text-gray-400">Buy</Link>
  </li>
  <li>
    <Link href="/sell" className="hover:text-green-400">Sell</Link>
  </li>
  <li>
    <Link href="/rent" className="hover:text-green-400">Rent</Link>
  </li>
  <li>
    <Link href="/contact" className="hover:text-green-400">Contact</Link>
  </li>
</ul>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <ul className="md:hidden bg-white shadow-md text-gray-700 font-medium space-y-4 px-6 py-4">
          <li>
            <Link href="/buy" className="block hover:text-green-600">Buy</Link>
          </li>
          <li>
            <Link href="/sell" className="block hover:text-green-600">Sell</Link>
          </li>
          <li>
            <Link href="/rent" className="block hover:text-green-600">Rent</Link>
          </li>
          <li>
            <Link href="/contact" className="block hover:text-green-600">Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
