import React from 'react';
import { Facebook, InstagramIcon, MessageCircle } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-12 text-center md:text-left">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">North Bengal Travels</h2>
            <p className="text-blue-200">Explore the beauty of North Bengal</p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" className="hover:text-blue-300 transition-colors duration-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors duration-300">
                <InstagramIcon size={24} />
              </a>
              <a href="#" className="hover:text-blue-300 transition-colors duration-300">
                <MessageCircle size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-300 transition-colors duration-300">Home</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors duration-300">Our Services</a></li>
              <li><a href="#" className="hover:text-blue-300 transition-colors duration-300">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <address className="not-italic space-y-2">
              <p className="flex justify-center md:justify-start items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                123 Hill Street, Darjeeling, West Bengal, India
              </p>
              <p className="flex justify-center md:justify-start items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@northbengaltravels.com" className="hover:text-blue-300 transition-colors duration-300">
                  info@northbengaltravels.com
                </a>
              </p>
              <p className="flex justify-center md:justify-start items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919876543210" className="hover:text-blue-300 transition-colors duration-300">
                  +91-9876543210
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-blue-700 text-center">
          <p className="text-blue-200">© {new Date().getFullYear()} North Bengal Travels. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;