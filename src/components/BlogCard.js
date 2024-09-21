import React from 'react';

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {blog.image && (
        <div className="relative h-48 bg-blue-50">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-blue-600 text-white px-3 py-1 text-sm">
            {blog.category}
          </div>
        </div>
      )}
      <div className="p-6">
        <h2 className="font-bold text-2xl mb-2 text-blue-700">{blog.title}</h2>
        <p className="text-gray-600 mb-4">{blog.excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{blog.date}</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;