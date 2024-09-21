import React from 'react';
import darjeeling from '../assets/images/darjeeling.webp';
import kalimpong from '../assets/images/kalimpong.jpg';
import sandakphu from '../assets/images/sandakphu.webp';

// Example images (you can replace these with real image URLs)
const galleryImages = [
  { src: darjeeling, alt: 'Darjeeling' },
  { src: kalimpong, alt: 'Kalimpong' },
  { src: sandakphu, alt: 'Sandakphu' },
  { src: darjeeling, alt: 'Darjeeling' },
  { src: kalimpong, alt: 'Kalimpong' },
  { src: sandakphu, alt: 'Sandakphu' },
  { src: darjeeling, alt: 'Darjeeling' },
  { src: kalimpong, alt: 'Kalimpong' },
  { src: sandakphu, alt: 'Sandakphu' },
];

const GalleryPage = () => {
  return (
    <div className="mt-20 p-8 bg-gray-100 min-h-screen">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-8 text-center text-red-700">Photo Gallery</h1>

      {/* Inline Style for Contiguous Hover Effect */}
      <style>{`
        .gallery-card:hover ~ .gallery-card .gallery-image,
        .gallery-card:hover .gallery-image {
          transform: scale(1.05); /* Scale the hovered card */
        }

        .gallery-card:hover ~ .gallery-card,
        .gallery-card:hover {
          transform: translateY(-5px); /* Slight shift for neighbor cards */
        }

        .gallery-card {
          transition: transform 0.5s ease-in-out;
        }

        .gallery-card:hover {
          z-index: 10; /* Bring the hovered card to the front */
        }
      `}</style>

      {/* Image Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="gallery-card relative overflow-hidden rounded-lg shadow-lg transition duration-500 hover:z-10"
          >
            <img
              className="gallery-image w-full h-64 object-cover transition-transform duration-500 ease-in-out"
              src={image.src}
              alt={image.alt}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;