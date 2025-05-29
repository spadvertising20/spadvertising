import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { GrInstagram } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";

import "./Blogs.css";
import { fetchBlogs } from "../blogsSlice";

// Example: Action to fetch blogs (you should have this defined in your Redux setup)

export default function InfluencerMarketing() {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blogs); // Assumes blogs is an array
  const [query, setQuery] = useState("");

  useEffect(() => {
    document.title = "How to Do Keyword Research for SEO: A Beginner's Guide";
    document
      .querySelector("meta[name='description']")
      ?.setAttribute(
        "content",
        "Learn how to do keyword research for SEO with this beginner’s guide. Simple steps to find keywords and boost your rankings!"
      );
    document
      .querySelector("meta[name='keywords']")
      ?.setAttribute(
        "content",
        "keyword research for SEO, how to do keyword research, SEO keyword research guide, beginner’s guide to keyword research, keyword research tutorial, SEO for beginners, find keywords for SEO, free keyword research tool, google keyword research tool, keyword research tool, semrush pricing, keyword search tool"
      );

    dispatch(fetchBlogs());
  }, [dispatch]);

  const renderContent = (content = []) => {
    return content.map((block, index) => {
      if (!block) return null;

      const key = `block-${index}`;

      const renderTextChildren = (children) =>
        children?.map((child, i) => {
          if (!child?.text) return null;

          const text = child.text;

          // Wrap with bold if needed
          if (child.bold) {
            return <strong key={i}>{text}</strong>;
          }

          return <span key={i}>{text}</span>;
        });

      switch (block.type) {
        case "heading": {
          const level = block.level >= 1 && block.level <= 6 ? block.level : 2;
          const HeadingTag = `h${level}`;
          return (
            <HeadingTag key={key}>
              {renderTextChildren(block.children)}
            </HeadingTag>
          );
        }

        case "paragraph": {
          return <p key={key}>{renderTextChildren(block.children)}</p>;
        }

        case "list": {
          const isOrdered = block.ordered || false;
          const ListTag = isOrdered ? "ol" : "ul";
          return (
            <ListTag key={key}>
              {block.children?.map((item, i) => (
                <li key={`li-${i}`}>{renderTextChildren(item.children)}</li>
              ))}
            </ListTag>
          );
        }

        case "image": {
          const url = block?.url || "";
          const alt = block?.alt || "Image";
          return <img key={key} src={url} alt={alt} loading="lazy" />;
        }

        case "quote": {
          return (
            <blockquote key={key}>
              {renderTextChildren(block.children)}
            </blockquote>
          );
        }

        default:
          return null;
      }
    });
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredBlogs =
    query.trim() === ""
      ? blogs
      : blogs.filter((article) =>
          article.title?.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <section className="keyword-research">
      <div className="keyword-research-con">
        {/* Left blog content */}
        <div className="keyword-research-box">
          {blogs.slice(7, 8).map((blog, index) => (
            <>
              <p className="blog-date">
                <SlCalender />
                {blog.publishedDate}
              </p>
              <h1>{blog.blogTitle}</h1>
              <img
                loading="lazy"
                src={`http://localhost:1337${blog.coverImage.url}`}
                alt={blog.blogTitle}
              />

              <div className="keyword-research-content">
                <p>
                  {blog.blogContent ? (
                    renderContent(blog.blogContent)
                  ) : (
                    <p>No content available.</p>
                  )}
                </p>
              </div>
            </>
          ))}
        </div>

        {/* Right sidebar: search and recent posts */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleInputChange}
          />
          <p className="blog-post-heading">Recent Posts</p>
          {query.trim() === ""
            ? blogs.map((article, index) => (
                <div className="title-gap">
                  <Link to={`${article.link}`} key={index}>
                    {article.blogTitle}
                  </Link>
                </div>
              ))
            : blogs
                .filter((article) =>
                  article.blogTitle.toLowerCase().includes(query.toLowerCase())
                )
                .map((filteredArticle, index) => (
                  <div className="title-gap2">
                    <Link to={`${filteredArticle.link}`}>
                      {filteredArticle.blogTitle}
                    </Link>
                  </div>
                ))}
          <br />

          <div className="blog-icons2">
            <h2>Follow Us</h2>
            <div className="blog-icons2-con">
              <Link to={"https://www.instagram.com/spadvertisingrpr/"}>
                <GrInstagram />
              </Link>
              <Link to={"https://www.facebook.com/spadvertisingraipur"}>
                <FaFacebookF />
              </Link>
              <Link
                to={
                  "https://www.linkedin.com/company/sp-advertising20/posts/?feedView=all"
                }
              >
                <FaLinkedinIn />
              </Link>
              <Link to={"https://www.youtube.com/@spadvertising530"}>
                <IoLogoYoutube />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
