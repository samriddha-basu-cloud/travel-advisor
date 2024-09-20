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
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-lg mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 p-6 rounded-lg shadow-lg">
        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleChange}
          className="w-full border p-2"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full border p-2"
        />
        <input
          name="people"
          type="number"
          placeholder="No. of People"
          onChange={handleChange}
          className="w-full border p-2"
        />
        <input
          name="days"
          type="number"
          placeholder="No. of Days"
          onChange={handleChange}
          className="w-full border p-2"
        />
        <input
          name="budget"
          type="number"
          placeholder="Budget"
          onChange={handleChange}
          className="w-full border p-2"
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactPage;