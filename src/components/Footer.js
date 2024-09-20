import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left: Company Name */}
        <div className="text-lg font-bold">
          North Bengal Travels
        </div>

        {/* Right: Company Details */}
        <div className="text-sm space-y-2 text-right">
          <p>Address: 123 Hill Street, Darjeeling, West Bengal, India</p>
          <p>Email: info@northbengaltravels.com</p>
          <p>Phone: +91-9876543210</p>
          <p>© {new Date().getFullYear()} North Bengal Travels. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;