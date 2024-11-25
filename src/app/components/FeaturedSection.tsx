// components/FeaturedSection.tsx
import React from 'react';

const FeaturedSection = () => {
  const features = [
    {
      id: 1,
      image: '/vella-0.jpeg',
      title: 'Luxury Villa',
      description: 'Modern villa with stunning sea views.',
      link: '/properties/1',
    },
    {
      id: 2,
      image: '/beach-1.jpeg',
      title: 'Beachfront Apartment',
      description: 'Cozy apartment right on the beach.',
      link: '/properties/2',
    },
    {
      id: 3,
      image: '/modren-011.jpeg',
      title: 'Modern Townhouse',
      description: 'Spacious townhouse in a quiet area.',
      link: '/properties/3',
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <a
                  href={feature.link}
                  className="inline-block px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
