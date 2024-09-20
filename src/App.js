import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';  // Import the AuthProvider
import Navbar from './components/Navbar';  // Import the Navbar component
import Footer from './components/Footer';  // Import the Footer component
import HomePage from './pages/HomePage';   // Import your page components
import BlogPage from './pages/BlogPage';
import GalleryPage from './pages/GalleryPage';
import CabPage from './pages/CabPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <AuthProvider>  {/* Wrap the app with AuthProvider */}
      <Router>
        {/* Flex container with min-h-screen to ensure the footer is pushed to the bottom */}
        <div className="flex flex-col min-h-screen">
          
          {/* Navbar at the top */}
          <Navbar />

          {/* Main content area for all routes */}
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/cabs" element={<CabPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>

          {/* Footer at the bottom */}
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;