import React, { useEffect, useState } from "react";
import "./Blog.css";
import digital_marketing_img1 from "../../assets/Blog/digital-marketing-img9.jpg";
import digital_marketing_img2 from "../../assets/Blog/digital-marketing-img8.jpg";
import digital_marketing_img3 from "../../assets/Blog/digital-marketing-img7.jpg";
import { Link } from "react-router-dom";
import { SlCalender } from "react-icons/sl";
import { FaArrowRight } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs, renderContent } from "../Blog/blogsSlice";

export default function HomeBlog() {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blogs);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

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
            .reverse()
            .slice(0, 3)
            .map((blog) => (
              <article key={blog.id} className="homeblog-main-con">
                <div>
                  <span className="category-tag">{blog.category}</span>
                  <img
                    src={`http://localhost:1337${blog.coverImage.url}`}
                    alt={blog.title}
                    loading="lazy"
                  />
                </div>
                <div className="homeblog-main-details">
                  <p>
                    <SlCalender /> {blog.publishedDate}
                  </p>
                  <h3>{blog.blogTitle}</h3>

                  <Link
                    className="Link"
                    to={blog.link}
                    aria-label={`Read more about ${blog.blogTitle}`}
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
