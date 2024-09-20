import React from 'react';
import BlogCard from '../components/BlogCard';

// Example blog data
const blogs = [
  {
    title: 'Exploring the Beauty of Darjeeling',
    excerpt: 'Darjeeling is a beautiful hill station known for its lush tea gardens...',
  },
  {
    title: '5 Must-Visit Places in Kalimpong',
    excerpt: 'Kalimpong is a lesser-known gem in North Bengal. Discover its stunning landscapes...',
  },
  {
    title: 'Best Time to Visit North Bengal',
    excerpt: 'Wondering when to plan your trip? Here’s a guide to the best seasons for visiting...',
  },
];

const BlogPage = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Our Travel Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;