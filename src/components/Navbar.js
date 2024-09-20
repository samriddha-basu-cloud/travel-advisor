import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { AiOutlineMenu, AiOutlineClose, AiOutlineLogout } from 'react-icons/ai';

const Navbar = () => {
  const { user, loginWithGooglePopup, logout, authError } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-red-900 bg-opacity-0 p-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex justify-between items-center relative">
          {/* Left - Company Name */}
          <h1 className="text-white text-lg font-bold bg-red-700 px-3 py-1 rounded-full">My Travels Guru</h1>

          {/* Center - Desktop Navigation Links */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <ul className="flex space-x-1 justify-center bg-red-600 bg-opacity-80 rounded-full p-2">
              <li><Link to="/" className="text-white px-6 py-3 rounded-full hover:bg-red-500 transition-all duration-300">Home</Link></li>
              <li><Link to="/blog" className="text-white px-6 py-3 rounded-full hover:bg-red-500 transition-all duration-300">Blog</Link></li>
              <li><Link to="/gallery" className="text-white px-6 py-3 rounded-full hover:bg-red-500 transition-all duration-300">Gallery</Link></li>
              <li><Link to="/contact" className="text-white px-6 py-3 rounded-full hover:bg-red-500 transition-all duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Right - User Profile for large screens */}
          {user ? (
            <div className="hidden md:flex items-center ml-auto relative">
              <button onClick={toggleDropdown} className="flex items-center space-x-2 focus:outline-none bg-red-600 bg-opacity-80 rounded-full p-2 transition-all duration-300 hover:bg-opacity-100">
                <img
                  src={user.photoURL}
                  alt="User profile"
                  className="w-8 h-8 rounded-full border border-white"
                />
                <span className="text-white">{user.displayName}</span>
              </button>

              {/* Enhanced Dropdown Menu */}
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <p className="text-sm font-medium text-gray-900">{user.displayName}</p>
                    <p className="text-sm text-gray-500">{user.email}</p>
                  </div>
                  <button
                    onClick={logout}
                    className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-100 transition-all duration-300"
                  >
                    <AiOutlineLogout className="mr-2" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={loginWithGooglePopup}
              className="hidden md:inline bg-red-500 bg-opacity-80 text-white py-2 px-4 rounded-full ml-auto hover:bg-opacity-100 transition-all duration-300"
            >
              Login with Google
            </button>
          )}

          {/* Right - Hamburger Menu for mobile */}
          <div className="md:hidden">
            <button onClick={toggleSidebar} className="text-white focus:outline-none bg-red-600 bg-opacity-80 rounded-full p-2 transition-all duration-300 hover:bg-opacity-100">
              <AiOutlineMenu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar for mobile - Sliding in from the right */}
      <div className={`fixed inset-y-0 right-0 w-64 bg-red-900 bg-opacity-95 backdrop-blur-md text-white transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-50`}>
        {/* Sidebar Header */}
        <div className="flex justify-between items-center p-4">
          <h2 className="text-lg font-bold text-white"> </h2>
          <button onClick={toggleSidebar} className="text-white focus:outline-none bg-red-600 bg-opacity-80 rounded-full p-2 transition-all duration-300 hover:bg-opacity-100">
            <AiOutlineClose size={24} />
          </button>
        </div>

        {/* User Information */}
        <div className="p-4">
          {user ? (
            <div className="flex flex-col items-center">
              <img src={user.photoURL} alt="User profile" className="w-16 h-16 rounded-full border-2 border-white" />
              <p className="mt-2 text-lg font-semibold text-white">{user.displayName}</p>
              <p className="text-sm text-red-200">{user.email}</p>
            </div>
          ) : (
            <button
              onClick={loginWithGooglePopup}
              className="bg-red-500 bg-opacity-80 text-white py-2 px-4 rounded-full w-full text-center hover:bg-opacity-100 transition-all duration-300"
            >
              Login with Google
            </button>
          )}
        </div>

        {/* Sidebar Navigation Links */}
        <div className="flex flex-col space-y-2 mt-8">
          <Link to="/" className="block px-4 py-2 text-white hover:bg-red-600 hover:bg-opacity-50 rounded-full transition-all duration-300" onClick={toggleSidebar}>
            Home
          </Link>
          <Link to="/blog" className="block px-4 py-2 text-white hover:bg-red-600 hover:bg-opacity-50 rounded-full transition-all duration-300" onClick={toggleSidebar}>
            Blog
          </Link>
          <Link to="/gallery" className="block px-4 py-2 text-white hover:bg-red-600 hover:bg-opacity-50 rounded-full transition-all duration-300" onClick={toggleSidebar}>
            Gallery
          </Link>
          <Link to="/contact" className="block px-4 py-2 text-white hover:bg-red-600 hover:bg-opacity-50 rounded-full transition-all duration-300" onClick={toggleSidebar}>
            Contact
          </Link>
        </div>

        {/* Logout Button */}
        {user && (
          <div className="absolute bottom-4 w-full flex justify-center">
            <button
              onClick={logout}
              className="flex items-center justify-center bg-red-500 bg-opacity-80 text-white py-2 px-4 rounded-full w-11/12 text-center hover:bg-opacity-100 transition-all duration-300"
            >
              <AiOutlineLogout className="mr-2" />
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