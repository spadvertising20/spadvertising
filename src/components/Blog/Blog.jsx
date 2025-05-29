import React, { useContext, useEffect, useState } from "react";
import "./Blog.css";
import { Link, Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";
import update_image from "../../assets/Services/DigitalMarketing/digital-marketing-img.jpg";
import img3 from "../../assets/Blog/img3.webp";
import img4 from "../../assets/Blog/img4.webp";
import img5 from "../../assets/Blog/img5.webp";
import img6 from "../../assets/Blog/img6.webp";
import outdoor_img1 from "../../assets/Blog/outdoor-img1.jpg";
import digital_marketing_img1 from "../../assets/Blog/digital-marketing-img1.png";
import digital_marketing_img2 from "../../assets/Blog/digital-marketing-img2.jpg";
import digital_marketing_img3 from "../../assets/Blog/digital-marketing-img3.jpg";
import digital_marketing_img4 from "../../assets/Blog/digital-marketing-img4.jpg";
import digital_marketing_img5 from "../../assets/Blog/digital-marketing-img5.jpg";
import digital_marketing_img6 from "../../assets/Blog/digital-marketing-img6.jpg";
import digital_marketing_img7 from "../../assets/Blog/digital-marketing-img7.jpg";
import digital_marketing_img8 from "../../assets/Blog/digital-marketing-img8.jpg";
import digital_marketing_img9 from "../../assets/Blog/digital-marketing-img9.jpg";
import digital_marketing_img10 from "../../assets/Blog/digital-marketing-img10.jpg";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";

import { SlCalender } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "./blogsSlice";

const Blog = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blogs);

  const [query, setQuery] = useState(""); // State for user input

  // Handle input change
  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setQuery(userInput);
  };

  useEffect(() => {
    document.title =
      "Best Digital Marketing Blog by SP Advertising Agency in Raipur";

    document
      .querySelector("meta[name='description']")
      ?.setAttribute(
        "content",
        "Explore the best digital marketing blog by SP Advertising Agency in Raipur! Get expert tips on SEO, social media, PPC, and content marketing to grow your business online."
      );

    document
      .querySelector("meta[name='keywords']")
      ?.setAttribute(
        "content",
        "Digital Marketing Blog, Social Media Marketing, digital marketer, best digital marketing agency, types of digital marketing, types of digital marketing, content marketers, performance marketers, digital marketing examples"
      );

    dispatch(fetchBlogs());
  }, [dispatch]);

  return (
    <div className="blog">
      <div className="new-update">
        <div className="headline-up">
          <h3>Blog</h3>

          <div className="blog-item">
            <div className="headline">
              <div className="headline-con">
                <h1>
                  The Ultimate Guide to <br /> on-page SEO: Best Practices and Tips
                </h1>
                <p>
                  Search Engine Optimization (SEO) is a crucial component of any
                  digital marketing strategy, and on-page SEO serves as its
                  foundation. On-page SEO refers to the optimization techniques
                  applied directly to your website’s content and HTML source
                  code to improve its visibility in search engine results.
                  Mastering on-page SEO ensures that your site is not only
                  appealing to search engines but also provides an excellent
                  user experience. In this guide, we’ll explore the best
                  actionable tips to optimize your website effectively.
                </p>
                <Link className="read-full-article" to="/Blog/SEO-Optimization">
                  Read Full Article
                </Link>
              </div>
            </div>

            <div className="update-image">
              <img src={update_image} alt="Digital Marketing Blog" />
            </div>
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <div className="articles-con">
        <div className="articles">
          <div className="latest-article">
            {blogs
              .slice(4, 10) // Limit to the first 6 items
              .reverse() // Reverse the order of objects
              .map((article, index) => (
                <div className="article-box" key={index}>
                  <Link to={article.link} className="img-text">
                    <img src={`http://localhost:1337${article.coverImage.url}`} alt={article.altTag} />
                    <div className="text-cal">
                      <SlCalender />
                      <div className="date-category">{article.publishedDate}</div>
                    </div>
                    <h3>{article.blogTitle}</h3>
                    <div>
                      <p className="blog-arrow-con">Read more</p>
                    </div>
                    <div className="social-writer">
                      <div className="blog-icon-con">
                        <div className="blog-icon">
                          <Link
                            to={`https://www.instagram.com/spadvertisingrpr/`}
                          >
                            {article.instagram}
                          </Link>
                          <Link
                            to={`https://www.facebook.com/spadvertisingraipur`}
                          >
                            {article.facebook}
                          </Link>
                          <Link
                            to={`https://www.linkedin.com/company/sp-advertising20/posts/?feedView=all`}
                          >
                            {article.linkedin}
                          </Link>
                        </div>
                        <p>{article.writer}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}

            <div className="blog-pages">
              <Link to={"/Blog"}>
                <button>1</button>
              </Link>
              <Link to={"/Blog/2"}>
                <button>2</button>
              </Link>
              ...
              <Link to={"/Blog/2"}>
                <button>2</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Search Section */}
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
            : blogs.filter((article) =>
                article.blogTitle.toLowerCase().includes(query.toLowerCase())
              ).map((filteredArticle, index) => (
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
    </div>
  );
};

export default Blog;
