import React, { useEffect } from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { FaArrowRight } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../Blog/blogsSlice";

// Slugify helper for SEO-friendly links
const slugify = (str = "") =>
  encodeURIComponent(
    str
      .toString()
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
  );

export default function HomeBlog() {
  const dispatch = useDispatch();
  const { blogs, loading, error } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  if (loading) {
    return <p className="loading-text">Loading blogs...</p>;
  }

  if (error) {
    return <p className="error-text">Failed to load blogs. Try again later.</p>;
  }

  return (
    <div className="homeblog">
      <div className="about-title">
        <h1>
          BLOGS <span>BLOGS</span>
        </h1>
      </div>

      <div className="homeblog-con">
        <section className="homeblog-article">
          <div className="homeblog-article-title">
            <h2>Latest Insights</h2>
            <p>
              Discover the latest trends, strategies, and insights in digital
              marketing to help grow your business.
            </p>
          </div>
        </section>

        <div className="homeblog-main">
          {[...blogs]
            .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) // latest first
            .slice(0, 3) // only 3 blogs
            .map((blog) => (
              <article key={blog._id} className="homeblog-main-con">
                <div>
                  <span className="category-tag">
                    {blog.category || "Marketing"}
                  </span>
                  <img
                    src={`https://spadvertising-l9xm.onrender.com/blog/image/${blog._id}`}
                    alt={blog.title}
                    loading="lazy"
                  />
                </div>
                <div className="homeblog-main-details">
                  <p>
                    <SlCalender />{" "}
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </p>
                  <h3>{blog.title}</h3>

                  <Link
                    className="Link"
                    to={`/blog/${slugify(blog.title)}`}
                    aria-label={`Read more about ${blog.title}`}
                  >
                    Read More <FaArrowRight />
                  </Link>
                </div>
              </article>
            ))}
        </div>
      </div>
    </div>
  );
}
