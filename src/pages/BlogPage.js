import React from 'react';
import BlogCard from '../components/BlogCard';

import loc7 from '../assets/images/loc7.jpeg';
import loc8 from '../assets/images/loc8.jpeg';
import loc9 from '../assets/images/loc9.jpeg';

const sampleBlogs = [
  {
    title: "The Future of Electric Vehicles",
    excerpt: "Exploring the latest trends and innovations in the electric vehicle industry.",
    image: loc7,
    category: "Technology",
    date: "May 15, 2023"
  },
  {
    title: "Top 10 Road Trip Destinations",
    excerpt: "Discover the most scenic and exciting road trip routes for your next adventure.",
    image: loc8,
    category: "Travel",
    date: "June 2, 2023"
  },
  {
    title: "Maintenance Tips for Your Car",
    excerpt: "Essential tips to keep your vehicle running smoothly and extend its lifespan.",
    image: loc9,
    category: "Automotive",
    date: "April 28, 2023"
  }
];

const BlogPage = () => {
  return (
    <div className="mt-20 p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-blue-100 to-white min-h-screen">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-12 text-center text-blue-700">Our Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {sampleBlogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;