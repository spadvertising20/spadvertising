import React, { useContext, useEffect, useState } from "react";

import "../Blogs/Blogs.css";
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
import digital_marketing_img7 from "../../../assets/Blog/digital-marketing-img7.jpg";

const blogData = [
  {
    img: digital_marketing_img7,
    date: "January 17, 2025",
    title: "What is Digital Marketing? Types, Examples and Benefits.",
    link: "/Blog/Influencer-Marketing",
    facebook: <CiFacebook className="blog-icon" />,
    instagram: <IoLogoInstagram className="blog-icon" />,
    linkedin: <CiLinkedin className="blog-icon" />,
    writer: "BY ADMIN",
    altTag: "digital marketing examples",
  },
];

const titles = [
  "Outdoor Advertising: What It Is, Benefits, and Why It Matters",
  "Social Media Marketing: Best Practices for Engaging Your Audience.",
  "Influencer Marketing: Driving Success and Growth in 2025.",
  "What is Digital Marketing? Types, Examples and Benefits.",
  "Improve Online Advertising Efforts with Free Tools and Techniques",
  "Holiday Sales Strategies: Essential Tips to Increase Business Sales",
  "How Can Businesses Prepare for Emerging Trends in the Next Decade of Digital Marketing?",
  "Why Content is Still King in SEO: How to Create High-Quality, Search-Friendly Content",
  "The Ultimate Guide to On-Page SEO: Best Practices and Tips",
  "How to Conduct Effective Keyword Research for 2025-26",
];

const links = [
  "/Blog/Benefits-of-Outdoor-Advertising",
  "/Blog/Social-Media-Marketing",
  "/Blog/Influencer-Marketing",
  "/Blog/What-is-Digital-Marketing",
  "/Blog/Advertising-Tools-and-Techniques",
  "/Blog/Holiday-Sales-Strategies",
  "/Blog/Businesses-Prepare-for-Emerging-Trends",
  "/Blog/High-Quality-Content",
  "/Blog/SEO-Optimization",
  "/Blog/Keyword-Research",
];

const Contents = [
  {
    heading: `Introduction`,
    description: `In the fast-paced digital age, traditional marketing methods are no longer sufficient to capture audience attention. Enter digital marketing – a revolutionary way for businesses to connect with their target audience, enhance brand visibility, and drive sales. But what exactly is digital marketing, and why is it a game-changer in 2025?

`,
  },
  {
    description: `Digital marketing refers to the use of online platforms, tools, and strategies to promote products or services. From social media marketing strategies to SEO techniques, it encompasses a wide array of methods designed to engage customers in the digital realm. In this article, we’ll dive into the types of digital marketing, provide real-life examples, and explore the benefits of digital marketing in 2025.
 `,
  },

  {
    heading: `What is Digital Marketing?`,
    description: `Digital marketing is the practice of leveraging digital channels such as websites, search engines, social media, email, and mobile apps to promote products, services, or brands. Unlike traditional marketing, it allows businesses to measure real-time results and target specific demographics with precision.`,
  },

  {
    heading: `Types of Digital Marketing`,
    description: `Digital marketing consists of various strategies tailored to different goals and audiences. Below are some of the most impactful types:
`,
  },

  {
    sub_heading: `1. Search Engine Optimization (SEO)`,
    description: `Search Engine Optimization involves optimizing your website to rank higher on search engine results pages (SERPs). This improves visibility and drives organic traffic.

`,
  },
  {
    description: `Example: A fitness blog using keywords like "best exercises for weight loss" to rank on Google.`,
  },
  {
    description: `Benefits: Long-term visibility, higher traffic, and credibility.`,
  },

  {
    sub_heading: `2. Pay-Per-Click Advertising (PPC)`,
    description: `Pay-Per-Click Advertising is a paid strategy where advertisers pay a fee each time their ad is clicked.



`,
  },
  {
    description: `Example: Google Ads campaigns promoting an e-commerce store’s seasonal sale.`,
  },
  {
    description: `Benefits: Immediate results and highly targeted audience reach. `,
  },
  {
    sub_heading: `3. Social Media Marketing (SMM)`,
    description: `Social Media Marketing uses platforms like Instagram, Facebook, and LinkedIn to engage audiences and promote content.

`,
  },
  {
    description: `Example: A travel agency sharing Instagram reels showcasing exotic destinations.
`,
  },
  {
    description: `Benefits: Increased brand awareness and customer engagement.
`,
  },

  {
    sub_heading: `4. Content Marketing`,
    description: `Content Marketing focuses on creating valuable content to attract and retain an audience.

`,
  },
  {
    description: `Example: Publishing a blog post titled "Top 10 Tips for Successful Digital Marketing."
`,
  },
  {
    description: `Benefits: Builds trust and establishes thought leadership.`,
  },

  {
    sub_heading: `5. Email Marketing`,
    description: `Email Marketing involves sending newsletters, promotions, or personalized messages to a list of subscribers.

`,
  },
  {
    description: `Example: An online retailer emailing discount codes to loyal customers.

 `,
  },
  {
    description: `Benefits: Direct communication and higher conversion rates.

 `,
  },
  {
    sub_heading: `6. Affiliate Marketing`,
    description: `Affiliate Marketing rewards affiliates for driving traffic or sales through their promotional efforts.

`,
  },
  {
    description: `Example: Bloggers earning commissions by promoting tech gadgets.

 `,
  },
  {
    description: `Benefits: Cost-effective and performance-based.

 `,
  },
  {
    sub_heading: `7. Influencer Marketing strategy`,
    description: `Influencer Marketing strategy involves partnering with influencers to promote products or services.

`,
  },
  {
    description: `Example: A skincare brand collaborating with a beauty influencer.

 `,
  },
  {
    description: `Benefits: Authentic promotion and access to a niche audience.
 `,
  },

  {
    heading: `Examples of Digital Marketing`,
  },
  {
    sub_heading: `1.Nike's "You Can't Stop Us" Campaign: `,
    description: `Leveraging powerful storytelling through YouTube and social media.

`,
  },
  {
    sub_heading: `2.Coca-Cola’s Personalized Emails:  `,
    description: `Sending custom offers based on consumer behavior.

`,
  },

  {
    sub_heading: `3.Amazon’s Retargeting Ads: `,
    description: `Using PPC to re-engage customers who browsed but didn’t purchase.

`,
  },
  {
    sub_heading: `4.HubSpot’s Free Tools: `,
    description: `Offering free CRM tools to attract and retain users.`,
  },
  {
    sub_heading: `5.Airbnb’s Instagram Content:`,
    description: ` Sharing user-generated content to boost authenticity and engagement.`,
  },

  {
    heading: "Benefits of Digital Marketing",
  },
  {
    sub_heading: `1. Global Reach: `,
    description: ` Connect with audiences worldwide, breaking geographical barriers.`,
  },
  {
    sub_heading: `2. Cost-Effectiveness:  `,
    description: ` Achieve better results compared to traditional advertising methods. `,
  },
  {
    sub_heading: `3. Measurable Results: `,
    description: `Tools like Google Analytics provide insights into campaign performance.`,
  },
  {
    sub_heading: `4. Improved Targeting: `,
    description: `Use data to personalize campaigns for specific demographics. `,
  },

  {
    sub_heading: `5. Enhanced Engagement:`,
    description: `Interact with customers through comments, shares, and direct messages.`,
  },
  {
    sub_heading: `6. Scalability: `,
    description: `Adapt campaigns to fit businesses of any size.`,
  },
  {
    sub_heading: `7. Brand Authority:   `,
    description: `Establish credibility through content and consistent online presence.`,
  },

  {
    sub_heading: `8. Real-Time Performance Metrics:`,
    description: `  Optimize campaigns on the go based on live feedback.`,
  },
  {
    heading: `Conclusion`,
    description: `Digital marketing is no longer a luxury – it’s a necessity for businesses aiming to thrive in a highly competitive landscape. By understanding its types, leveraging real-life examples, and harnessing its benefits, businesses can achieve remarkable growth. Whether you’re a small business or a global enterprise, digital marketing opens doors to endless possibilities.`,
  },
  {
    description: `Are you ready to transform your business with digital marketing? Start today and unlock the future of success!`,
  },
];

export default function WhatIsDigitalMarketing() {
  useEffect(() => {
    document.title = "What is Digital Marketing? Types, Examples, and Benefits";

    document
      .querySelector("meta[name='description']")
      ?.setAttribute(
        "content",
        "What is digital marketing? Explore its types, examples, and benefits in this guide to understand its power!"
      );

    document
      .querySelector("meta[name='keywords']")
      ?.setAttribute(
        "content",
        "what is digital marketing, digital marketing is what, what includes digital marketing, what is seo in digital marketing, what is online marketing, what is ppc in digital marketing, what is digital marketing in hindi, what is internet marketing, what is search engine optimization in digital marketing"
      );
  }, []);

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
          <p>{blogData[0]?.date}</p>

          <h1>{blogData[0]?.title}</h1>
          <img
            loading="lazy"
            src={blogData[0]?.img}
            alt="what is digital marketing, digital marketing is what"
          />

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
                <div className="title-gap" key={index}>
                  {titles.map((title, i) => (
                    <div className="title-gap" key={i}>
                      <Link to={links[i]}>{title}</Link>
                      <br />
                    </div>
                  ))}
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
