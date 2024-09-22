// ItineraryPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const ItineraryPage = () => {
  const location = useLocation();
  const { name, description, images } = location.state; // Accessing passed data

  return (
    <div className="bg-gray-800 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl text-white font-bold mb-8">{name}</h1>
        <p className="text-gray-300 text-lg mb-8">{description}</p>

        {/* Image gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="rounded overflow-hidden shadow-lg">
              <img
                src={image}
                alt={`View ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItineraryPage;