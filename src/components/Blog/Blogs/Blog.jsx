import BlogCard from "./BlogCard";
import { blogPosts } from "../BlogData";
import Blog1 from "./Blog1";

const Blog = () => {
  return (
    <div className="p-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogPosts.map((post) => (
        <>
          <BlogCard key={post.id} post={post} />
          
        </>
      ))}
    </div>
  );
};

export default Blog;
