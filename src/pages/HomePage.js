import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import ItineraryCard from '../components/ItineraryCard'; // Assuming this is in PlaceCard folder
import useAuth from '../hooks/useAuth';  // Import useAuth hook
import { db } from '../services/firebase';
import { addDoc, collection, getDocs } from 'firebase/firestore';

const inputClasses = "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 bg-white bg-opacity-80";
const labelClasses = "text-sm font-medium text-white mb-1";

const HomePage = () => {
  const { user } = useAuth();  // Access the user from Firebase Auth
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    people: '',
    days: '',
    notes: '',  // Add notes field
  });
  const [showAlert, setShowAlert] = useState(false);
  const [places, setPlaces] = useState([]); // State for fetched itinerary data

  // Prefill the form when the user data is available
  useEffect(() => {
    if (user) {
      setFormData({
        ...formData,
        name: user.displayName || '',
      });
    }
  }, [user]);

  // Fetch itinerary data from Firestore
  useEffect(() => {
    const fetchItineraryData = async () => {
      try {
        const itineraryCollection = collection(db, 'itinerary');
        const itinerarySnapshot = await getDocs(itineraryCollection);
        const itineraryData = itinerarySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setPlaces(itineraryData);
      } catch (error) {
        console.error("Error fetching itinerary data:", error);
      }
    };

    fetchItineraryData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formWithEmail = {
      ...formData,
      email: user.email,
      createdAt: new Date().toISOString(),
      status: 'pending',
    };

    try {
      await addDoc(collection(db, 'contactForms'), formWithEmail);
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 3000);  // Hide alert after 3 seconds
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-800 min-h-screen">
      <div className="relative">
        <Hero />
        
        {/* Tour Planning Form */}
        <div className="absolute inset-0 flex items-center justify-center">
          <form 
            onSubmit={handleSubmit} 
            className="bg-black bg-opacity-20 p-8 rounded-lg shadow-xl max-w-4xl mx-auto w-full"
          >
            <h2 className="text-3xl font-bold text-center text-white mt-4 mb-8">Plan Your Dream Tour</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className={labelClasses}>Name</label>
                <input 
                  id="name"
                  name="name" 
                  type="text" 
                  placeholder="Your full name" 
                  value={formData.name}  // Prefill the name field
                  onChange={handleChange} 
                  className={inputClasses}
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className={labelClasses}>Phone Number</label>
                <input 
                  id="phone"
                  name="phone" 
                  type="tel" 
                  placeholder="Your phone number" 
                  value={formData.phone}
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

              <div className="col-span-1 md:col-span-2">
                <label htmlFor="notes" className={labelClasses}>Notes</label>
                <textarea 
                  id="notes"
                  name="notes" 
                  placeholder="Leave a note regarding cabs and destinations" 
                  value={formData.notes}
                  onChange={handleChange} 
                  className={`${inputClasses} h-28`}  // Adds height for textarea
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full mt-8 bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-300 font-semibold text-lg"
            >
              Start Planning
            </button>
          </form>
        </div>
      </div>

      {/* Itinerary Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Itinerary</h2>

        {/* Carousel for small screens */}
        <div className="md:hidden overflow-x-auto whitespace-nowrap py-4">
          {places.map((place, index) => (
            <div 
              key={index} 
              className="inline-block px-4"
              style={{ minWidth: '280px', maxWidth: '300px' }}
            >
              <ItineraryCard 
                id={place.id}  // Pass the id for navigation
                name={place.title}  // Fix naming to "title" for consistency
                description={place.description} 
                images={place.images} 
              />
            </div>
          ))}
        </div>

        {/* Grid layout for medium and larger screens */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {places.map((place, index) => (
            <ItineraryCard 
              key={index}
              id={place.id}  // Pass the id for navigation
              name={place.title}  // Fix naming to "title" for consistency
              description={place.description} 
              images={place.images} 
            />
          ))}
        </div>
      </section>

      {/* Custom Alert */}
      {showAlert && (
        <div className="fixed bottom-4 right-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-md">
          <p className="font-bold">Success</p>
          <p>Your tour planning request has been submitted successfully!</p>
          <p>You will be contacted shortly.</p>
        </div>
      )}
    </div>
  );
};

export default HomePage;