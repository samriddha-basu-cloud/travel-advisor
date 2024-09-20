import React from 'react';
import CabOptions from '../components/CabOptions';

// Example cab options
const cabOptions = [
  { name: 'Standard Sedan', price: 1500 },
  { name: 'SUV', price: 2500 },
  { name: 'Luxury Car', price: 5000 },
];

const CabPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Available Cab Options</h1>
      <CabOptions options={cabOptions} />
    </div>
  );
};

export default CabPage;