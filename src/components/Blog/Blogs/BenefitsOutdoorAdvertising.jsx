import React, { useEffect, useState } from "react";
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
import digital_marketing_img10 from "../../../assets/Blog/digital-marketing-img10.jpg";

const blogData = [
  {
    img: digital_marketing_img10,
    date: "January 31, 2025",
    title: "Outdoor Advertising: What It Is, Benefits, and Why It Matters",
    link: "/Blog/Benefits-of-Outdoor-Advertising",
    facebook: <CiFacebook className="blog-icon" />,
    instagram: <IoLogoInstagram className="blog-icon" />,
    linkedin: <CiLinkedin className="blog-icon" />,
    writer: "BY ADMIN",
    altTag: "hubspot digital marketing course",
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
    description: `In an era dominated by digital marketing, outdoor advertising remains a powerhouse for brand visibility. From billboards to transit ads, it reaches audiences where they live, work, and travel. But why is outdoor advertising still so effective? Let’s explore its importance, benefits, and why your business should leverage it.

`,
  },

  {
    heading: `1. What is Outdoor Advertising?`,
    description: `Outdoor advertising, also known as out-of-home (OOH) advertising, includes various formats designed to engage audiences in public spaces. These include:

`,
  },
  {
    description: (
      <>
        <ul>
          <li>
            <h3>Billboards:</h3> Large, high-visibility ads placed along
            highways and urban centers.
          </li>
          <li>
            <h3>Transit Advertising:</h3> Ads on buses, taxis, and trains that
            reach commuters daily.
          </li>
          <li>
            <h3>Street Furniture Ads:</h3> Posters on bus stops, benches, and
            kiosks in high-traffic areas.
          </li>
          <li>
            <h3>Digital OOH:</h3> LED and digital billboards displaying dynamic,
            eye-catching content.
          </li>
         
        </ul>
      </>
    ),
  },

  {
    heading: `2. The Importance of Outdoor Advertising
`,
    description: `Unlike digital ads that can be skipped, outdoor ads are always on and cannot be ignored. Here’s why it matters:

`,
  },
  {
    description: (
      <>
        <ul>
        <li><h3>Massive Reach: </h3>Targets a broad audience, from pedestrians to drivers and public transport users.</li>
        <li><h3>Brand Credibility:</h3> Increases trust by showcasing a brand in real-world spaces.</li>
          
        </ul>
      </>
    ),
  },

  {
    heading: `3. Benefits of Outdoor Advertising`,
  },
  
  {
    description: `Outdoor advertising offers a range of advantages that digital marketing alone cannot achieve.
`,
  },
   {
    description: (
      <>
        <ul>
        <li><h3>High Visibility:</h3>  Large-scale ads capture attention 24/7.</li>
        <li><h3>Cost-Effective:</h3>  Long-lasting exposure compared to pay-per-click models.</li>
        <li><h3>Localized Targeting:</h3>  Perfect for businesses wanting to attract customers in specific areas.</li>
        <li><h3>Increases Brand Recall:</h3>  Repeated exposure reinforces brand messaging in consumers’ minds.</li>
          
        </ul>
      </>
    ),
  },

  {
    heading: `4. Why Your Business Should Invest in Outdoor Advertising
`,
    description: `If you’re looking to boost brand awareness and customer engagement, outdoor advertising is a smart investment.

`,
  },

  {
    description: (
      <>
        <ul>
        <li><h3>Enhances Local Marketing:</h3>  Ideal for businesses targeting specific geographic locations.</li>
        <li><h3>Boosts Offline Conversions:</h3>  Encourages in-store visits and direct purchases.</li>
        <li><h3>Maximizes ROI:</h3>  Delivers lasting impressions without continuous spending on clicks or impressions.</li>
          
        </ul>
      </>
    ),
  },

  {
    description: `

 `,
  },
  {
    description: `

 `,
  },

  {
    description: `

`,
  },

  {
    heading: `Conclusion`,
    description: `Outdoor advertising remains a vital tool in modern marketing, offering high-impact visibility and brand recognition. Whether through billboards, transit ads, or digital displays, it ensures your message reaches a massive audience effectively.
`,
  },
  {
    description: `Are you ready to elevate your brand with outdoor advertising? Start leveraging OOH strategies today and watch your visibility soar!`,
  },
];

export default function BenefitsOutdoorAdvertising() {
  useEffect(() => {
    document.title =
      "Outdoor Advertising: Benefits, Basics, and Why It Matters";
    document
      .querySelector("meta[name='description']")
      ?.setAttribute(
        "content",
        "Explore outdoor advertising: its basics, benefits, and why it matters for boosting brand visibility!"
      );
    document
      .querySelector("meta[name='keywords']")
      ?.setAttribute(
        "content",
        "benefits of ooh advertising, advantages of outdoor advertising, merits of outdoor advertising, out of home advertising benefits, outdoor advertising agency, Outdoor advertising services, Outdoor advertising agency in Raipur, Billboard advertising solutions, outdoor advertising companies"
      );
  }, []);

  const [query, setQuery] = useState(""); // State for user input

  // Handle input change
  const handleInputChange = (e) => {
    setQuery(e.target.value);
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
