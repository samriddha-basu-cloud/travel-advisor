import React, { useState } from 'react';
import Hero from '../components/Hero';
import PlaceCard from '../components/PlaceCard';
import { db } from '../services/firebase';
import { addDoc, collection } from 'firebase/firestore';

import darjeeling from '../assets/images/darjeeling.webp';
import kalimpong from '../assets/images/kalimpong.jpg';
import sandakphu from '../assets/images/sandakphu.webp';

const places = [
  { name: 'Darjeeling', description: 'Beautiful hill station', image: darjeeling },
  { name: 'Kalimpong', description: 'Stunning landscape', image: kalimpong },
  { name: 'Sandakphu', description: 'Good for trekking', image: sandakphu },
];

const inputClasses = "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-200 bg-white bg-opacity-80";
const labelClasses = "text-sm font-medium text-white mb-1";

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    people: '',
    days: '',
    budget: '',
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'contactForms'), formData);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="relative">
        <Hero />
        
        {/* Tour Planning Form */}
        <div className="absolute inset-0 flex items-center justify-center">
          <form 
            onSubmit={handleSubmit} 
            className="bg-black bg-opacity-50 p-8 rounded-lg shadow-xl max-w-4xl mx-auto w-full"
          >
            <h2 className="text-3xl font-bold text-center text-white  mt-4 mb-8">Plan Your Dream Tour</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className={labelClasses}>Name</label>
                <input 
                  id="name"
                  name="name" 
                  type="text" 
                  placeholder="Your full name" 
                  onChange={handleChange} 
                  className={inputClasses}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className={labelClasses}>Email</label>
                <input 
                  id="email"
                  name="email" 
                  type="email" 
                  placeholder="Your email address" 
                  onChange={handleChange} 
                  className={inputClasses}
                  required
                />
              </div>

              <div>
                <label htmlFor="people" className={labelClasses}>Number of People</label>
                <input 
                  id="people"
                  name="people" 
                  type="number" 
                  placeholder="How many travelers?" 
                  onChange={handleChange} 
                  className={inputClasses}
                  required
                />
              </div>
              
              <div>
                <label htmlFor="days" className={labelClasses}>Number of Days</label>
                <input 
                  id="days"
                  name="days" 
                  type="number" 
                  placeholder="Duration of your trip" 
                  onChange={handleChange} 
                  className={inputClasses}
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="budget" className={labelClasses}>Budget</label>
                <input 
                  id="budget"
                  name="budget" 
                  type="number" 
                  placeholder="Your estimated budget" 
                  onChange={handleChange} 
                  className={inputClasses}
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full mt-8 bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition duration-300 font-semibold text-lg"
            >
              Start Planning
            </button>
          </form>
        </div>
      </div>

      {/* Places Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {places.map((place, index) => (
            <PlaceCard key={index} place={place} />
          ))}
        </div>
      </section>

      {/* Custom Alert */}
      {showAlert && (
        <div className="fixed bottom-4 right-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-md">
          <p className="font-bold">Success</p>
          <p>Your tour planning request has been submitted successfully!</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;