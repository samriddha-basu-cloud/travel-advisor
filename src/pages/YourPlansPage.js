import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // Hook to get the authenticated user
import { db } from '../services/firebase'; // Firestore instance
import { collection, query, where, getDocs } from 'firebase/firestore';

const YourPlansPage = () => {
  const { user } = useAuth(); // Get the logged-in user
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      // If user is not logged in, redirect to the homepage
      navigate('/');
      return;
    }

    const fetchPlans = async () => {
      try {
        const plansRef = collection(db, 'contactForms');
        const q = query(plansRef, where('email', '==', user.email)); // Get the user's plans by email
        const querySnapshot = await getDocs(q);

        const userPlans = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPlans(userPlans);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching plans:', error);
        setError('Failed to load your plans. Please try again later.');
        setLoading(false);
      }
    };

    fetchPlans();
  }, [user, navigate]);

  // Loading state
  if (loading) {
    return <div className="text-center text-white mt-8">Loading your plans...</div>;
  }

  // Error state
  if (error) {
    return <div className="text-center text-red-500 mt-8">{error}</div>;
  }

  // No plans found
  if (plans.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center mt-12">
        {/* H1 Header when no plans */}
        <h1 className="text-4xl font-bold text-red-700 mb-8">No Plans Yet?</h1>
        <p className="text-white text-lg mb-4">Looks like you haven't made any plans yet!</p>

        {/* Bouncing Red Button to redirect to Home */}
        <button
          onClick={() => navigate('/')}
          className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition duration-300 animate-bounce"
        >
          Enquire Now!
        </button>

        {/* Back Button */}
        <div className="mt-8">
          <button
            onClick={() => navigate('/')}
            className="bg-gray-300 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-400 transition duration-300"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  // If plans exist, render the list of plans
  return (
    <div className="container mx-auto px-4 py-16 mt-12">
      <h2 className="text-4xl font-extrabold text-center text-red-700 mb-12">Your Plans</h2>

      {/* Plan cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map(plan => (
          <div key={plan.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-red-700 mb-2">{plan.name}</h3>
            <p><strong>Email:</strong> {plan.email}</p>
            <p><strong>No. of People:</strong> {plan.people}</p>
            <p><strong>Days:</strong> {plan.days}</p>
            <p><strong>Budget:</strong> ₹{plan.budget}</p>
          </div>
        ))}
      </div>

      {/* Back Button */}
      <div className="mt-8 text-center">
        <button
          onClick={() => navigate('/')}
          className="bg-gray-300 text-gray-800 px-6 py-2 rounded-md hover:bg-gray-400 transition duration-300"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default YourPlansPage;