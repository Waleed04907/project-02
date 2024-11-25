// components/InformationSection.tsx
import React from 'react';

const InformationSection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Personalized Real Estate Services
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              We offer a tailor-made approach to buying and selling properties.
              Our team ensures a seamless and enjoyable experience for our
              clients.
            </p>
            <a
              href="/contact"
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Contact Us
            </a>
          </div>

          {/* Image or Graphic */}
          <div className="mt-8 md:mt-0 md:w-1/2">
            <img
              src="/personal-2.jpeg"
              alt="Real Estate Services"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationSection;
