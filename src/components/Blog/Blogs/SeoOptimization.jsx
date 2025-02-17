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
import digital_marketing_img1 from "../../../assets/Blog/digital-marketing-img2.jpg";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { StoreContext } from "../../Context Provider/StoreProvider";

const Articles = [
  {
    date: `December 21, 2024`,
    category: `DIGITAL MARKETING`,
    title: `How to Conduct Effective Keyword Research for 2025`,
    link: `/Keyword-Research`,
    writer: `BY ADMIN`,
    facebook: <CiFacebook className="blog-icon" />,
    instagram: <IoLogoInstagram className="blog-icon" />,
    linkedin: <CiLinkedin className="blog-icon" />,
  },
  {
    date: `December 28, 2024`,
    category: `DIGITAL MARKETING`,
    title: `The Ultimate Guide to On-Page SEO: Best Practices and Tips`,
    link: `/SEO-Optimization`,
    facebook: <CiFacebook className="blog-icon" />,
    instagram: <IoLogoInstagram className="blog-icon" />,
    linkedin: <CiLinkedin className="blog-icon" />,
    writer: `BY ADMIN`,
  },
];

const Contents = [
  {
    heading: `Introduction`,
    description: `
        Search Engine Optimization (SEO) is a crucial component of any digital marketing strategy, and on-page SEO serves as its foundation. On-page SEO refers to the optimization techniques applied directly to your website’s content and HTML source code to improve its visibility in search engine results. Mastering on-page SEO ensures that your site is not only appealing to search engines but also provides an excellent user experience. In this guide, we’ll explore the best practices and actionable tips to optimize your website effectively.
    `,
  },
  {
    heading: `1. Keyword Research and Optimization`,
    description: `Why It Matters: Keywords are the backbone of on-page SEO. They connect your content with users’ search queries, helping search engines understand the relevance of your pages.
Best Practices:
Perform Thorough Keyword Research: Use tools like Google Keyword Planner, SEMrush, or Ahrefs to identify high-traffic, low-competition keywords.

Use Primary Keywords Strategically: Place your main keyword in the title tag, headings, first 100 words, and throughout the content naturally.

Include Long-Tail Keywords: These are more specific and less competitive, helping you target niche audiences.

Avoid Keyword Stuffing: Overusing keywords can harm readability and lead to penalties from search engines.
`,
  },
  {
    heading: `2. Crafting High-Quality Content`,
    description: `Why It Matters: Content is king in SEO. High-quality, relevant content keeps users engaged and encourages them to spend more time on your site.
Best Practices:
Provide Value: Address your audience’s questions, pain points, or interests with in-depth and actionable information.

Maintain Originality: Avoid duplicate content as it can confuse search engines and reduce your rankings.

Optimize Content Length: Aim for a balance; longer content often ranks better but ensure it’s comprehensive and not padded.

Use Visuals: Incorporate images, videos, and infographics to break up text and make content engaging.
`,
  },
  {
    heading: `3. Title Tags and Meta Descriptions`,
    description: `Why They Matter: Title tags and meta descriptions are the first impressions of your page in search results. They significantly influence click-through rates (CTR).
Best Practices:
Write Compelling Titles: Include primary keywords, keep it under 60 characters, and make it engaging.

Optimize Meta Descriptions: Summarize the page content in under 160 characters with a clear call-to-action (CTA).

Avoid Duplication: Ensure every page has unique title tags and meta descriptions.
`,
  },
  {
    heading: `4. Header Tags (H1, H2, H3)`,
    description: `Why They Matter: Header tags organize your content, making it easier for users to read and for search engines to crawl.
Best Practices:
Use One H1 Tag Per Page: This should contain the main keyword and represent the page’s primary topic.

Structure Content with H2 and H3 Tags: Break down sections logically and include secondary keywords where relevant.

Ensure Consistency: Follow a hierarchical structure without skipping levels.
`,
  },
  {
    heading: `5. Mobile-Friendliness`,
    description: `Why It Matters: With the majority of users accessing the web on mobile devices, search engines prioritize mobile-friendly websites.
Best Practices:
Use Responsive Design: Ensure your site adjusts seamlessly across devices.

Optimize Touch Elements: Buttons and links should be easily clickable.

Test on Mobile Devices: Use Google’s Mobile-Friendly Test tool to identify issues.
`,
  },
  {
    heading: `Conclusion`,
    description: `On-page SEO is a critical aspect of improving your website’s search engine rankings and user experience. By implementing the best practices outlined in this guide—from keyword optimization and content creation to technical enhancements like page speed and schema markup—you can ensure that your website stands out in search results. Remember, SEO is an ongoing process, so stay updated with trends and continuously refine your strategies. With consistent effort, your website will attract more traffic and convert visitors into loyal customers.`,
  },
];

export default function SeoOptimization() {
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
          <p>{blogData[1]?.date}</p>

          <h1>{blogData[1]?.title}</h1>
          <img loading="lazy" src={digital_marketing_img1} alt="" />
          <div className="keyword-research-content">
            <div className="">
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
