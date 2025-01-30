import React, { useContext, useState } from "react";
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
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { StoreContext } from "../Context Provider/StoreProvider";
import FloatingBalloons from "../Home/FloatingBalloons";

const Articles = [
  {
    img: digital_marketing_img1,
    date: "December 21, 2024",

    title: "How to Conduct Effective Keyword Research for 2025-26",
    link: "/Blog/Keyword-Research",
    writer: "BY ADMIN",
    facebook: <CiFacebook className="blog-icon" />,
    instagram: <IoLogoInstagram className="blog-icon" />,
    linkedin: <CiLinkedin className="blog-icon" />,
  },
  {
    img: digital_marketing_img2,
    date: "December 28, 2024",

    title: "The Ultimate Guide to On-Page SEO: Best Practices and Tips",
    link: "/Blog/SEO-Optimization",
    facebook: <CiFacebook className="blog-icon" />,
    instagram: <IoLogoInstagram className="blog-icon" />,
    linkedin: <CiLinkedin className="blog-icon" />,
    writer: "BY ADMIN",
  },
  {
    img: digital_marketing_img3,
    date: "January 03, 2025",

    title: "Why Content is Still King in SEO: How to Create High-Quality, Search-Friendly Content",
    link: "/Blog/High-Quality-Content",
    facebook: <CiFacebook className="blog-icon" />,
    instagram: <IoLogoInstagram className="blog-icon" />,
    linkedin: <CiLinkedin className="blog-icon" />,
    writer: "BY ADMIN",
  },
  {
    img: digital_marketing_img4,
    date: "January 06, 2025",

    title: "How Can Businesses Prepare for Emerging Trends in the Next Decade of Digital Marketing?",
    link: "/Blog/Businesses-Prepare-for-Emerging-Trends",
    facebook: <CiFacebook className="blog-icon" />,
    instagram: <IoLogoInstagram className="blog-icon" />,
    linkedin: <CiLinkedin className="blog-icon" />,
    writer: "BY ADMIN",
  },
  {
    img: digital_marketing_img5,
    date: "January 08, 2025",

    title: "Holiday Sales Strategies: Essential Tips to Increase Business Sales",
    link: "/Blog/Holiday-Sales-Strategies",
    facebook: <CiFacebook className="blog-icon" />,
    instagram: <IoLogoInstagram className="blog-icon" />,
    linkedin: <CiLinkedin className="blog-icon" />,
    writer: "BY ADMIN",
  },
  {
    img: digital_marketing_img6,
    date: "January 08, 2025",
    title: "Improve Online Advertising Efforts with Free Tools and Techniques",
    link: "/Blog/Advertising-Tools-and-Techniques",
    facebook: <CiFacebook className="blog-icon" />,
    instagram: <IoLogoInstagram className="blog-icon" />,
    linkedin: <CiLinkedin className="blog-icon" />,
    writer: "BY ADMIN",
  },
  {
    img: digital_marketing_img7,
    date: "January 17, 2025",
    title: "What is Digital Marketing? Types, Examples and Benefits.",
    link: "/Blog/What-is-Digital-Marketing",
    facebook: <CiFacebook className="blog-icon" />,
    instagram: <IoLogoInstagram className="blog-icon" />,
    linkedin: <CiLinkedin className="blog-icon" />,
    writer: "BY ADMIN",
  },
  {
    img: digital_marketing_img8,
    date: "January 17, 2025",
    title: "Influencer Marketing: Driving Success and Growth in 2025.",
    link: "/Blog/Influencer-Marketing",
    facebook: <CiFacebook className="blog-icon" />,
    instagram: <IoLogoInstagram className="blog-icon" />,
    linkedin: <CiLinkedin className="blog-icon" />,
    writer: "BY ADMIN",
  },
  {
    img: digital_marketing_img9,
    date: "January 28, 2025",
    title: "Social Media Marketing: Best Practices for Engaging Your Audience.",
    link: "/Blog/Social-Media-Marketing",
    facebook: <CiFacebook className="blog-icon" />,
    instagram: <IoLogoInstagram className="blog-icon" />,
    linkedin: <CiLinkedin className="blog-icon" />,
    writer: "BY ADMIN",
  },
  
];

const Blog = () => {
  const { updateState } = useContext(StoreContext);

  const [query, setQuery] = useState(""); // State for user input

  // Handle input change
  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setQuery(userInput);
    // Filter suggestions
  };

  return (
    <div className="blog">
  
      <Helmet>
        <title>Blog: SP Advertising</title>
        <meta name="description" content="" />
        <meta name="keywords" content="" />
      </Helmet>

      
    
      <div className="new-update">
      <FloatingBalloons />
        <div className="headline-up">
          <h3>Blog</h3>
          
          <div className="blog-item">
            <div className="headline">
              <div className="headline-con">
                <h1>
                  The Ultimate Guide to Onpage SEO: Best Practices and Tips
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
              <img src={update_image} alt="Branding" />
            </div>
          </div>
        </div>
      </div>

      {/* Articles Section */}
      <div className="articles-con">
        <div className="articles">
          <div className="latest-article">
            {Articles.slice(3, 10) // Limit to the first 6 items
              .reverse() // Reverse the order of objects
              .map((article, index) => (
                <div className="article-box" key={index}>
                  <Link
                    onClick={() => updateState(Articles)}
                    to={article.link}
                    className="img-text"
                  >
                    <img src={article.img} alt={article.title} />
                    <div className="date-category">{article.date}</div>
                    <h3>{article.title}</h3>
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
              <Link to={"/Blog/2"} onClick={() => updateState(Articles)}>
                <button>2</button>
              </Link>
              ...
              <Link to={"/Blog/2"} onClick={() => updateState(Articles)}>
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
            ? Articles.map((article, index) => (
                <div className="title-gap">
                  <Link to={`${article.link}`} key={index}>
                    {article.title}
                  </Link>
                </div>
              ))
            : Articles.filter((article) =>
                article.title.toLowerCase().includes(query.toLowerCase())
              ).map((filteredArticle, index) => (
                <div className="title-gap2">
                  <Link to={`${filteredArticle.link}`}>
                    {filteredArticle.title}
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
