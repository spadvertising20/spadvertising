import React, { useContext, useState } from "react";

import "./Blogs.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import update_image from "../../../assets/Services/DigitalMarketing/digital-marketing-img.jpg";
import img3 from "../../../assets/Blog/img3.webp";
import img4 from "../../../assets/Blog/img4.webp";
import img5 from "../../../assets/Blog/img5.webp";
import img6 from "../../../assets/Blog/img6.webp";
import outdoor_img1 from "../../../assets/Blog/outdoor-img1.jpg";
import digital_marketing_img1 from "../../../assets/Blog/digital-marketing-img1.png";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { StoreContext } from "../../Context Provider/StoreProvider";

const Contents = [
  {
    heading: `Introduction`,
    description: `In the ever-evolving landscape of digital marketing, one thing remains constant: Content is still king. The foundation of every successful SEO strategy lies in the quality and relevance of the content you create. Search engines prioritize value-driven, engaging content that meets the needs of users. But how do you ensure your content stands out in a sea of competitors? This guide will explore why content reigns supreme and how you can craft high-quality, search-friendly pieces that capture attention and drive traffic.
`,
  },
  {
    description: `"Engage. Optimize. Dominate. Master the art of creating content that rules the search engines and wins your audience’s hearts."
`,
  },
  {
    heading: `1. Content as the Cornerstone of SEO: `,

    description: `
      Content is the primary bridge between search engines and users. Without it, your website is merely an empty vessel. High-quality content provides the foundation for keywords, backlinks, and user engagement—key factors in SEO success.



     
    `,
  },
  {
    heading: `2. Understanding Search-Friendly`,
    description: `Content: What makes content search-friendly? It’s about striking a balance between creativity and optimization. Content must resonate with your audience while adhering to SEO best practices, such as proper keyword placement, meta descriptions, and readability.
`,
  },
  {
    heading: `3. The Anatomy of High-Quality Content`,
    description: ` Relevance: Address your audience’s questions and concerns.
Originality: Avoid duplication and bring fresh insights.
Clarity: Simplify complex topics for easy understanding.
Engagement: Use storytelling, visuals, and compelling CTAs to keep readers hooked.
`,
  },
  {
    heading: `4. Steps to Create Winning SEO `,
  },
  {
    sub_heading: `Research Your Audience:`,
    description: ` Understand their needs, preferences, and search behaviors.`,
  },
  {
    sub_heading: `Keyword Strategy:`,
    description: `Identify primary and secondary keywords that align with your content goals.`,
  },
  {
    sub_heading: `Structure Effectively:`,
    description: `Use headers, bullet points, and short paragraphs for readability.`,
  },
  {
    sub_heading: `Optimize for Search Engines:`,
    description: ` Incorporate keywords naturally, optimize images, and write descriptive meta tags.`,
  },
  {
    heading: `5. Tools and Techniques for Content Success: `,
    description: `Leverage tools like Google Analytics, SEMrush, and Grammarly to enhance your content’s performance. Use these resources to identify trends, analyze your competition, and ensure grammatical precision.
`,
  },
  {
    heading: `Conclusion: `,
    description: `By prioritizing quality, relevance, and optimization, you can create content that not only ranks high but also delivers value to your audience. As search algorithms continue to evolve, staying committed to producing exceptional content will ensure your digital presence thrives in the long run.
`,
  },
  {
    description: `"Great content doesn’t just drive traffic; it builds relationships, earns trust, and fosters brand loyalty. Invest in your content, and the results will speak for themselves."`,
  },
];

export default function HighQualityContent() {
  const { blogData } = useContext(StoreContext);

  const [query, setQuery] = useState(""); // State for user input

  // Handle input change
  const handleInputChange = (e) => {
    const userInput = e.target.value;
    setQuery(userInput);
    // Filter suggestions
  };

  return (
    <section className="keyword-research">
      <div className="keyword-research-con">
        <div className="keyword-research-box">
          <p>{blogData[2]?.date}</p>

          <h1>{blogData[2]?.title}</h1>
          <img loading="lazy" src={blogData[2]?.img} alt="" />
          <div className="keyword-research-content">
            <div className="blog-content">
              {Contents.map((content, index) => (
                <div className="">
                  <h1>{content.heading}</h1>
                  <h2>{content.sub_heading}</h2>
                  <p>{content.description}</p>
                </div>
              ))}
            </div>
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
            ? blogData.map((article, index) => (
                <div className="title-gap">
                  <Link to={`${article.link}`} key={index}>
                    {article.title}
                  </Link>
                </div>
              ))
            : blogData
                .filter((article) =>
                  article.title.toLowerCase().includes(query.toLowerCase())
                )
                .map((filteredArticle, index) => (
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
    </section>
  );
}
