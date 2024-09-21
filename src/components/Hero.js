import React from 'react';
import { useNavigate } from 'react-router-dom';
import rent1 from '../assets/images/rent1.png';
import useAuth from '../hooks/useAuth'; // Import the authentication hook

const Hero = () => {
  const { user } = useAuth(); // Get the logged-in user
  const navigate = useNavigate();

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <img src={rent1} alt="North Bengal" className="absolute inset-0 w-full h-full object-cover" />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-center items-center text-white">
        {/* <h1 className="text-5xl font-bold mb-4">Explore the Beauty of North Bengal</h1>
        <p className="text-xl mb-8">Discover breathtaking landscapes and unforgettable experiences</p>
        <button className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition duration-300">
          Plan Your Trip
        </button> */}
      </div>

      {/* Conditionally Render the Button */}
      {user && (
        <button
          onClick={() => navigate('/your-plans')}
          className="absolute bottom-8 right-8 bg-red-600 text-white rounded-full p-4 flex items-center justify-center hover:bg-red-700 transition duration-300 animate-bounce cursor-pointer z-50"
          style={{ width: '120px', height: '50px' }}
        >
          <span>Your Plans</span> 
        </button>
      )}
    </div>
  );
};

export default Hero;