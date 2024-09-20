const BlogCard = ({ blog }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2">{blog.title}</h2>
        <p className="text-gray-700 text-base">{blog.excerpt}</p>
      </div>
    </div>
  );
};

export default BlogCard;