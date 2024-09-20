import React, { useState } from 'react';
import Hero from '../components/Hero';
import PlaceCard from '../components/PlaceCard';
import { db } from '../services/firebase';
import { addDoc, collection } from 'firebase/firestore';

const places = [
  { name: 'Darjeeling', description: 'Beautiful hill station', image: '/images/darjeeling.jpg' },
  { name: 'Kalimpong', description: 'Stunning landscape', image: '/images/kalimpong.jpg' },
];

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    people: '',
    days: '',
    budget: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'contactForms'), formData);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 bg-gray-100 rounded mb-8">
        <h2 className="text-2xl font-bold mb-4">Plan Your Dream Tour</h2>
        <input name="name" type="text" placeholder="Name" onChange={handleChange} className="w-full border p-2 mb-4" />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="w-full border p-2 mb-4" />
        <input name="people" type="number" placeholder="No. of People" onChange={handleChange} className="w-full border p-2 mb-4" />
        <input name="days" type="number" placeholder="No. of Days" onChange={handleChange} className="w-full border p-2 mb-4" />
        <input name="budget" type="number" placeholder="Budget" onChange={handleChange} className="w-full border p-2 mb-4" />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Submit</button>
      </form>
      
      <Hero />

      <section className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {places.map((place, index) => (
          <PlaceCard key={index} place={place} />
        ))}
      </section>
    </div>
  );
};

export default HomePage;