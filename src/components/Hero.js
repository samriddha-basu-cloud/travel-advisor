import React from 'react';
import rent1 from '../assets/images/rent1.png';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <img src={rent1} alt="North Bengal" className="absolute inset-0 w-full h-full object-cover" />
      {/* <div className="absolute inset-0 bg-black bg-opacity-10 flex flex-col justify-center items-center text-white"> */}
        {/* <h1 className="text-5xl font-bold mb-4">Explore the Beauty of North Bengal</h1>
        <p className="text-xl mb-8">Discover breathtaking landscapes and unforgettable experiences</p>
        <button className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition duration-300">
          Plan Your Trip
        </button> */}
      {/* </div> */}
    </div>
  );
};

export default Hero;