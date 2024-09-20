import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Import the custom hook
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Import icons for the hamburger and close button

const Navbar = () => {
  const { user, loginWithGooglePopup, logout, authError } = useAuth(); // Destructure loginWithGooglePopup from useAuth
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility

  // Toggle the sidebar
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-blue-600 p-4 flex justify-between items-center">
        {/* Left - Company Name */}
        <h1 className="text-white text-lg font-bold">North Bengal Travels</h1>

        {/* Middle - Desktop Navigation Links */}
        <ul className="hidden md:flex space-x-4">
          <li><Link to="/" className="text-white">Home</Link></li>
          <li><Link to="/blog" className="text-white">Blog</Link></li>
          <li><Link to="/gallery" className="text-white">Gallery</Link></li>
          <li><Link to="/contact" className="text-white">Contact</Link></li>
        </ul>

        {/* Right - Hamburger Menu for mobile */}
        <div className="md:hidden">
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            <AiOutlineMenu size={28} /> {/* Hamburger Icon */}
          </button>
        </div>
      </nav>

      {/* Sidebar for mobile */}
      <div className={`fixed inset-y-0 left-0 w-64 bg-blue-600 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-4">
          <h2 className="text-lg font-bold">Navigation</h2>
          <button onClick={toggleSidebar} className="text-white focus:outline-none">
            <AiOutlineClose size={28} /> {/* Close Button */}
          </button>
        </div>

        {/* User Information */}
        <div className="p-4">
          {user ? (
            <div className="flex flex-col items-center">
              <img src={user.photoURL} alt="User profile" className="w-16 h-16 rounded-full border border-white" />
              <p className="mt-2 text-lg font-semibold">{user.displayName}</p>
            </div>
          ) : (
            <button
              onClick={loginWithGooglePopup}
              className="bg-green-500 text-white py-2 px-4 rounded-md w-full text-center"
            >
              Login with Google
            </button>
          )}
        </div>

        {/* Sidebar Navigation Links */}
        <div className="flex flex-col space-y-4 mt-8">
          <Link to="/" className="block px-4 py-2 text-white hover:bg-blue-700" onClick={toggleSidebar}>
            Home
          </Link>
          <Link to="/blog" className="block px-4 py-2 text-white hover:bg-blue-700" onClick={toggleSidebar}>
            Blog
          </Link>
          <Link to="/gallery" className="block px-4 py-2 text-white hover:bg-blue-700" onClick={toggleSidebar}>
            Gallery
          </Link>
          <Link to="/contact" className="block px-4 py-2 text-white hover:bg-blue-700" onClick={toggleSidebar}>
            Contact
          </Link>
        </div>

        {/* Logout Button */}
        {user && (
          <div className="absolute bottom-4 w-full flex justify-center">
            <button
              onClick={logout}
              className="bg-red-500 text-white py-2 px-4 rounded-md w-11/12 text-center"
            >
              Logout
            </button>
          </div>
        )}
      </div>

      {/* Optionally display the error */}
      {authError && <p className="text-red-500 mt-2">{authError}</p>}
    </>
  );
};

export default Navbar;