
'use client';

import React from 'react';

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen"
      style={{
        backgroundImage: "url('/herosection-1.jpeg')", // Replace with your image path
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div> {/* Transparent Overlay */}

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-right text-white px-4">
        <h1 className="text-2xl md:text-2xl font-bold mb-2">
          Find Your Dream Home
        </h1>
        <p className="text-lg md:text-1xl mb-2">
          Luxury real estate properties in Pakistan
        </p>
        <div className="flex space-x-4">
          <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg">
            Explore Properties
          </button>
          <button className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
