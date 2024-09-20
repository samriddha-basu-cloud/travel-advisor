import React, { createContext, useState, useEffect } from 'react';
import { auth, provider } from '../services/firebase';
import { signInWithPopup, signInWithRedirect, onAuthStateChanged, signOut } from 'firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authError, setAuthError] = useState(null); // Store any authentication errors

  // Function to sign in with Google using popup
  const loginWithGooglePopup = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        setUser(result.user);
        setAuthError(null); // Clear any existing errors
      })
      .catch(error => {
        console.error('Popup Sign-In Error:', error);
        setAuthError(error.message); // Store the error for displaying to the user
        alert(`Popup sign-in failed: ${error.message}. Attempting redirect...`);
        // Fallback to redirect sign-in in case of error
        loginWithGoogleRedirect();
      });
  };

  // Function to sign in with Google using redirect
  const loginWithGoogleRedirect = () => {
    signInWithRedirect(auth, provider)
      .catch(error => {
        console.error('Redirect Sign-In Error:', error);
        setAuthError(error.message); // Store the error for displaying to the user
        alert(`Redirect sign-in failed: ${error.message}`);
      });
  };

  // Function to log out
  const logout = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        setAuthError(null); // Clear any errors on logout
      })
      .catch(error => {
        console.error('Error during logout:', error);
        setAuthError(error.message); // Store the error
      });
  };

  // Listen for changes in authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthError(null); // Clear any existing errors when the user state changes
    });
    return () => unsubscribe(); // Cleanup the subscription on unmount
  }, []);

  return (
    <AuthContext.Provider value={{ user, loginWithGooglePopup, loginWithGoogleRedirect, logout, authError }}>
      {children}
    </AuthContext.Provider>
  );
};