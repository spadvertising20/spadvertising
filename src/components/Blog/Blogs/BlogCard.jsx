import { Link } from "react-router-dom"; // or next/link if using Next.js

const BlogCard = ({ post }) => {
  return (
    <div className="border p-4 rounded-xl shadow-md">
        <br /><br /><br /><br /><br /><br />
      <img src={post.image} alt={post.title} className="rounded-md mb-3" />
      <h2 className="text-xl font-bold">{post.title}</h2>
      <p className="text-gray-600">{post.description}</p>
      <Link to={`/blog/${post.slug}`} className="text-blue-500 mt-2 inline-block">
        Read more →
      </Link>
    </div>
  );
};

export default BlogCard;
