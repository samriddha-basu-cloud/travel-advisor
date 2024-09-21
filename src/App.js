// App.js
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'; // Firestore functions
import { AuthProvider } from './context/AuthContext';  
import Navbar from './components/Navbar';  
import Footer from './components/Footer';  
import HomePage from './pages/HomePage';   
import BlogPage from './pages/BlogPage';
import GalleryPage from './pages/GalleryPage';
import CabPage from './pages/CabPage';
import ContactPage from './pages/ContactPage';
import YourPlansPage from './pages/YourPlansPage';
import { db } from '../src/services/firebase';  // Import Firestore instance

function App() {

  useEffect(() => {
    // Log the access event to Firestore
    const logAccess = async () => {
      try {
        // Add a new document in 'site_access_logs' collection with the current timestamp
        await addDoc(collection(db, 'site_access_logs'), {
          timestamp: serverTimestamp(),  // Store the time from Firebase server
        });
        console.log('Access logged');
      } catch (error) {
        console.error('Error logging access: ', error);
      }
    };

    logAccess();
  }, []); // Empty dependency array ensures this runs once on component mount

  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/cabs" element={<CabPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/your-plans" element={<YourPlansPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;