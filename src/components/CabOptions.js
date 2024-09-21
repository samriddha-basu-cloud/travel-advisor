import React from 'react';

const CabOptions = ({ options }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {options.map((option, index) => (
        <div key={index} className="bg-transparent rounded-lg sm:rounded-xl shadow-md sm:shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl sm:hover:shadow-2xl hover:-translate-y-1">
          <div className="p-8 sm:p-12 bg-white">
            <img src={option.image} alt={option.name} className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-md sm:rounded-lg" />
          </div>
          <div className="p-4 sm:p-6">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-red-700 mb-1 sm:mb-2">{option.name}</h3>
            <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-4">{option.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-600">₹{option.price}</span>
              <button className="bg-red-600 text-white text-sm sm:text-base px-4 sm:px-6 py-1 sm:py-2 rounded-full hover:bg-red-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50">
                Book Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CabOptions;