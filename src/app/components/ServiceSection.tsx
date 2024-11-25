import React from 'react';

const ServiceSection = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-200 py-16">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
          Our Exceptional Services
        </h2>
        <p className="text-gray-600 mb-12">
          Explore our range of tailored services designed to meet your needs.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service Card 1 */}
          <div className="bg-white shadow-lg rounded-xl p-6 transform transition-transform hover:scale-105">
            <div className="flex justify-center items-center mb-6">
              {/* Larger Picture Box */}
              <div className="bg-green-100 p-6 rounded-full">
                <img
                  src="/consulting-01.jpeg"
                  alt="Consulting"
                  className="h-16 w-16"
                />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Expert Consulting
            </h3>
            <p className="text-gray-600">
              Receive professional advice from our experienced team to achieve your goals.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-white shadow-lg rounded-xl p-6 transform transition-transform hover:scale-105">
            <div className="flex justify-center items-center mb-6">
              {/* Larger Picture Box */}
              <div className="bg-blue-100 p-6 rounded-full">
                <img
                  src="/property-1.jpeg"
                  alt="Property Management"
                  className="h-16 w-16"
                />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Property Management
            </h3>
            <p className="text-gray-600">
              Reliable and efficient solutions for all your property needs.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-white shadow-lg rounded-xl p-6 transform transition-transform hover:scale-105">
            <div className="flex justify-center items-center mb-6">
              {/* Larger Picture Box */}
              <div className="bg-yellow-100 p-6 rounded-full">
                <img
                  src="/Marketing-01.jpeg"
                  alt="Marketing Strategies"
                  className="h-16 w-16"
                />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Marketing Strategies
            </h3>
            <p className="text-gray-600">
              Boost your property’s visibility with our proven marketing strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
