import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

const ItineraryCard = ({ name, description, images, duration, location }) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const trimmedDescription = description.length > 150 
    ? `${description.substring(0, 150)}...`
    : description;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm mx-auto transition-all duration-300 hover:shadow-xl">
      <div className="relative h-48">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        {images.map((image, index) => (
          <img 
            key={index}
            src={image} 
            alt={`${name} - view ${index + 1}`} 
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute bottom-4 left-4 z-20">
          <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
          {/* <div className="flex items-center text-white/80 text-sm">
            <MapPin size={16} className="mr-1" />
            <span>{location}</span>
          </div> */}
        </div>
        <div className="absolute bottom-4 right-4 z-20 flex space-x-1">
          {images.map((_, index) => (
            <div
              key={index}
              // className={`w-2 h-2 rounded-full ${
              //   index === currentImageIndex ? 'bg-white' : 'bg-white/50'
              // }`}
            />
          ))}
        </div>
      </div>
      <div className="p-4">
        {/* <div className="flex items-center text-gray-600 text-sm mb-2">
          <Calendar size={16} className="mr-1" />
          <span>{duration} days</span>
        </div> */}
        <p className="text-gray-700 mb-4">
          {trimmedDescription}
        </p>
        <button 
          onClick={() => navigate('/itinerary')}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg flex items-center justify-center transition-colors duration-300 hover:bg-blue-700"
        >
          View Itinerary
          <ChevronRight size={20} className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default ItineraryCard;