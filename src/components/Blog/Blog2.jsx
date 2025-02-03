import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { StoreContext } from "../Context Provider/StoreProvider";
import SnowfallEffect from "../Home/FloatingBalloons";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";

const Blog2 = () => {
  const { blogData } = useContext(StoreContext);
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => setQuery(e.target.value);

  return (
    <div className="blog">
      <SnowfallEffect />
      <Helmet>
        <title>Blog: SP Advertising</title>
        <meta
          name="description"
          content="Blog about advertising tips and updates"
        />
        <meta name="keywords" content="advertising, marketing, blogs" />
      </Helmet>

      <div className="articles-con blogs2-con">
        <div className="articles">
          <div className="latest-article">
            {blogData
              .slice(0, 4) // Limit to the first 6 items
              .reverse() // Reverse the order of objects
              .map((article, index) => (
                <div className="article-box" key={index}>
                  <Link to={article.link} className="img-text">
                    <img src={article.img} alt={article.title} />
                    <div className="date-category">{article.date}</div>
                    <h3>{article.title}</h3>
                    <p className="blog-arrow-con">Read more</p>
                    <div className="social-writer">
                      <div className="blog-icon-con">
                        <div className="blog-icon">
                          <Link
                            to={`https://www.instagram.com/spadvertisingrpr/`}
                          >
                            <CiFacebook className="blog-icon" />
                          </Link>
                          <Link
                            to={`https://www.facebook.com/spadvertisingraipur`}
                          >
                            <IoLogoInstagram className="blog-icon" />
                          </Link>
                          <Link
                            to={`https://www.linkedin.com/company/sp-advertising20/posts/?feedView=all`}
                          >
                            <CiLinkedin className="blog-icon" />
                          </Link>
                        </div>
                        <p>{article.writer}</p>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
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

        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={query}
            onChange={handleInputChange}
          />
          <p className="blog-post-heading">Recent Posts</p>
          {query.trim() === ""
            ? blogData?.map((article, index) => (
                <div className="title-gap" key={index}>
                  <Link to={article.link}>{article.title}</Link>
                </div>
              ))
            : blogData
                ?.filter((article) =>
                  article.title.toLowerCase().includes(query.toLowerCase())
                )
                .map((filteredArticle, index) => (
                  <div className="title-gap2" key={index}>
                    <Link to={filteredArticle.link}>
                      {filteredArticle.title}
                    </Link>
                  </div>
                ))}
          <div className="blog-icons2">
            <h2>Follow Us</h2>
            <div className="blog-icons2-con">
              <a
                href="https://www.instagram.com/spadvertisingrpr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrInstagram />
              </a>
              <a
                href="https://www.facebook.com/spadvertisingraipur"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/company/sp-advertising20/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.youtube.com/@spadvertising530"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog2;
