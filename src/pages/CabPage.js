import React from 'react';
import CabOptions from '../components/CabOptions';

import sedanImage from '../assets/images/rent3.png';
import suvImage from '../assets/images/rent4.png';
import hatchbackImage from '../assets/images/rent2.png';
import sedanImage1 from '../assets/images/rent6.png';
import suvImage1 from '../assets/images/rent5.png';
import suvImage2 from '../assets/images/rent7.png';

const cabOptions = [
  {
    name: 'Standard Sedan',
    price: 1500,
    image: sedanImage,
    description: 'Comfortable for 4 passengers, perfect for city travel.',
  },
  {
    name: 'SUV',
    price: 2500,
    image: suvImage,
    description: 'Spacious for families or groups, ideal for long journeys.',
  },
  {
    name: 'Hatchback',
    price: 5000,
    image: hatchbackImage,
    description: 'Hatchback with premium features for high-end travel.',
  },
  {
    name: 'SUV',
    price: 2500,
    image: suvImage1,
    description: 'Spacious for families or groups, ideal for long journeys.',
  },
  {
    name: 'Standard Sedan',
    price: 1500,
    image: sedanImage1,
    description: 'Comfortable for 4 passengers, perfect for city travel.',
  },
  {
    name: 'SUV',
    price: 2500,
    image: suvImage2,
    description: 'Spacious for families or groups, ideal for long journeys.',
  },
];

const CabPage = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-red-100 to-white min-h-screen mt-20">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-12 text-center text-red-700">Choose Your Ride</h1>
      <CabOptions options={cabOptions} />
    </div>
  );
};

export default CabPage;