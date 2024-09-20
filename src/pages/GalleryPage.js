import React from 'react';

// Example images (you can replace these with real image URLs)
const galleryImages = [
  { src: '/images/darjeeling.jpg', alt: 'Darjeeling' },
  { src: '/images/kalimpong.jpg', alt: 'Kalimpong' },
  { src: '/images/sandakphu.jpg', alt: 'Sandakphu' },
];

const GalleryPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Photo Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              className="w-full h-64 object-cover"
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