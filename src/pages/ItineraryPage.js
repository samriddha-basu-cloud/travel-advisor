import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const ItineraryPage = () => {
  const location = useLocation();
  const { name, description, images } = location.state;

  // Splitting images into three groups for the three rows
  const group1 = images.slice(0, Math.ceil(images.length / 3));
  const group2 = images.slice(Math.ceil(images.length / 3), 2 * Math.ceil(images.length / 3));
  const group3 = images.slice(2 * Math.ceil(images.length / 3), images.length);

  // Each row carousel tracks the index of its first visible image (in groups of 3)
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(0);
  const [currentIndex3, setCurrentIndex3] = useState(0);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const imagesPerSlide = 3;

  // Auto sliding effect
  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentIndex1((prevIndex) => (prevIndex + imagesPerSlide) % group1.length);
    }, 3000);
    const interval2 = setInterval(() => {
      setCurrentIndex2((prevIndex) => (prevIndex + imagesPerSlide) % group2.length);
    }, 4500);
    const interval3 = setInterval(() => {
      setCurrentIndex3((prevIndex) => (prevIndex + imagesPerSlide) % group3.length);
    }, 2500);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, [group1.length, group2.length, group3.length]);

  const openModal = (index) => {
    setModalImageIndex(index);
    setModalOpen(true);
  };

  const handlePrevModalImage = () => {
    setModalImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextModalImage = () => {
    setModalImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const renderImages = (group, currentIndex) => {
    const startIndex = currentIndex % group.length;
    const endIndex = (startIndex + imagesPerSlide) % group.length;

    if (endIndex > startIndex) {
      return group.slice(startIndex, endIndex);
    } else {
      return [...group.slice(startIndex), ...group.slice(0, endIndex)];
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="h-[60vh] relative overflow-hidden">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentIndex1 ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-8 relative z-20">
          <h1 className="text-7xl font-bold text-white mb-6 animate-fade-in-up">{name}</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-lg p-10 mb-16 transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-4xl font-semibold mb-8 text-gray-800">Trip Overview</h2>
          <p className="text-gray-700 text-xl leading-relaxed mb-10">{description}</p>
        </div>

        {/* Trip Highlights Section */}
        <h2 className="text-4xl font-semibold mb-10 text-gray-800">Trip Highlights</h2>

        {/* Large screen: 3-row Carousel */}
        <div className="hidden md:block">
          {/* Row 1 Carousel */}
          <div className="mb-10">
            <div className="relative w-full">
              <button
                onClick={() =>
                  setCurrentIndex1((prevIndex) => (prevIndex - imagesPerSlide + group1.length) % group1.length)
                }
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 transition-all z-30 rounded-full p-2"
              >
                <ChevronLeft size={32} />
              </button>
              <div className="grid grid-cols-3 gap-4">
                {renderImages(group1, currentIndex1).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Highlight 1 - ${index}`}
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                    onClick={() => openModal(index)}
                  />
                ))}
              </div>
              <button
                onClick={() =>
                  setCurrentIndex1((prevIndex) => (prevIndex + imagesPerSlide) % group1.length)
                }
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 transition-all z-30 rounded-full p-2"
              >
                <ChevronRight size={32} />
              </button>
            </div>
          </div>

          {/* Row 2 Carousel */}
          <div className="mb-10">
            <div className="relative w-full">
              <button
                onClick={() =>
                  setCurrentIndex2((prevIndex) => (prevIndex + imagesPerSlide) % group2.length)
                }
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 transition-all z-30 rounded-full p-2"
              >
                <ChevronLeft size={32} />
              </button>
              <div className="grid grid-cols-3 gap-4">
                {renderImages(group2, currentIndex2).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Highlight 2 - ${index}`}
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                    onClick={() => openModal(index)}
                  />
                ))}
              </div>
              <button
                onClick={() =>
                  setCurrentIndex2((prevIndex) => (prevIndex - imagesPerSlide + group2.length) % group2.length)
                }
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 transition-all z-30 rounded-full p-2"
              >
                <ChevronRight size={32} />
              </button>
            </div>
          </div>

          {/* Row 3 Carousel */}
          <div className="mb-10">
            <div className="relative w-full">
              <button
                onClick={() =>
                  setCurrentIndex3((prevIndex) => (prevIndex - imagesPerSlide + group3.length) % group3.length)
                }
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 transition-all z-30 rounded-full p-2"
              >
                <ChevronLeft size={32} />
              </button>
              <div className="grid grid-cols-3 gap-4">
                {renderImages(group3, currentIndex3).map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Highlight 3 - ${index}`}
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                    onClick={() => openModal(index)}
                  />
                ))}
              </div>
              <button
                onClick={() =>
                  setCurrentIndex3((prevIndex) => (prevIndex + imagesPerSlide) % group3.length)
                }
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 transition-all z-30 rounded-full p-2"
              >
                <ChevronRight size={32} />
              </button>
            </div>
          </div>
        </div>

        {/* Small screen: Collage */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:hidden">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Collage Image ${index}`}
              className="w-full h-48 object-cover rounded-xl shadow-lg"
              onClick={() => openModal(index)}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full">
            <img
              src={images[modalImageIndex]}
              alt={`Full size ${modalImageIndex + 1}`}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            <button
              onClick={handlePrevModalImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 transition-all rounded-full p-2"
            >
              <ChevronLeft size={32} />
            </button>
            <button
              onClick={handleNextModalImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 transition-all rounded-full p-2"
            >
              <ChevronRight size={32} />
            </button>
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 rounded-full p-2 bg-white bg-opacity-50 hover:bg-opacity-75 transition-all"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItineraryPage;