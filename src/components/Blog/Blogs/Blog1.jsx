import { useParams } from "react-router-dom"; // or getStaticProps in Next.js
import { blogPosts } from "../BlogData";


const Blog1 = () => {
  const { slug } = useParams();
  const post = blogPosts.find((b) => b.slug === slug);

  if (!post) return <div>Post not found.</div>; 

  return (
    <div className="max-w-3xl mx-auto p-6">
        <br /><br /><br />
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-2">{post.date} | By {post.author}</p>
      <img src={post.image} className="mb-4 rounded" />
{post.content}
    </div>
  );
};

export default Blog1;