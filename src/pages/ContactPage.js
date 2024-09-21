import React, { useState } from 'react';
import { db } from '../services/firebase';
import { addDoc, collection } from 'firebase/firestore';

const ContactPage = () => {
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
      setFormData({ name: '', email: '', people: '', days: '', budget: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting the form. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="mt-20 min-h-screen bg-gradient-to-b from-red-100 to-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-red-700 mb-8 sm:mb-12">Contact Us</h1>
        
        <form 
          onSubmit={handleSubmit} 
          className="space-y-6 bg-white p-6 sm:p-8 rounded-xl shadow-lg"
        >
          {['name', 'email', 'people', 'days', 'budget'].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="block text-sm font-semibold text-gray-700 mb-1 capitalize">
                {field === 'people' ? 'No. of People' : field === 'days' ? 'No. of Days' : field}
              </label>
              <input
                id={field}
                name={field}
                type={field === 'email' ? 'email' : field === 'people' || field === 'days' || field === 'budget' ? 'number' : 'text'}
                placeholder={`Enter your ${field === 'people' ? 'number of people' : field === 'days' ? 'number of days' : field}`}
                value={formData[field]}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 transition duration-300"
                required
              />
            </div>
          ))}

          <button 
            type="submit" 
            className="w-full bg-red-600 text-white py-3 rounded-full font-semibold hover:bg-red-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;