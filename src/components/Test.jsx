import React, { useEffect, useState } from "react";
import "./Test.css"; // Link to CSS file

export default function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "http://localhost:1337/api/spadvertising-blogs/?populate=coverImage"
        );
        const json = await res.json();
        setBlogs(json.data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };

    fetchData();
  }, []);

   const renderContent = (content) => {
    return content.map((block, index) => {
      switch (block.type) {
        case "heading":
          const level = block.level || 2;
          const HeadingTag = `h${level}`;
          return <HeadingTag key={index}>{block.children[0]?.text}</HeadingTag>;
        case "paragraph":
          return <p key={index}>{block.children.map((child, i) => child.text)}</p>;
        case "list":
          return (
            <ul key={index}>
              {block.children.map((item, i) => (
                <li key={i}>{item.children.map((child, j) => child.text)}</li>
              ))}
            </ul>
          );
        default:
          return null;
      }
    });
  };

  return (
    <div className="blog-container">
      
      {blogs.map((blog) => {
        const { blogTitle, publishedDate, coverImage } = blog;

        return (
          <div className="blog-post" key={blog.id}>
            <p className="blog-date">{publishedDate}</p>
            <h1 className="blog-title">{blogTitle}</h1>

            <img
              className="featured-image"
              src={`http://localhost:1337${coverImage.url}`}
              alt="Featured"
            />
            <div className="blog-content">
              <p>  {blog.blogContent ? renderContent(blog.blogContent) : <p>No content available.</p>}
        </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
