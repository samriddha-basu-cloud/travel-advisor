import React from 'react';

const PlaceCard = ({ place }) => {
  return (
    <div className="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      {/* Image */}
      <img className="w-full h-48 object-cover" src={place.image} alt={place.name} />

      {/* Content */}
      <div className="px-6 py-4">
        <h2 className="font-bold text-2xl text-red-700 mb-3">{place.name}</h2>
        <p className="text-gray-600 text-base mb-4">{place.description}</p>
        <a
          href="#"
          className="inline-block text-red-600 font-semibold hover:text-red-700 transition duration-300"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default PlaceCard;