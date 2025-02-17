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
    heading: `1. Understand SEO Trends for 2025`,
  },
  {
    sub_heading: `Voice search and AI-driven queries dominate:`,
    description: `
      Voice search and
      AI-driven queries are reshaping SEO in 2025, focusing on
      conversational, long-tail keywords. As voice assistants like
      Siri and Google Assistant gain popularity, users search more
      naturally, using full sentences. AI models prioritize context
      and user intent, offering personalized results. Optimize your
      content for these changes to stay ahead in rankings.

     
    `,
  },
  {
    sub_heading: `Focus on user intent:`,
    description: `Focusing on user intent means understanding the
      purpose behind a search query—whether users are looking for
      information, making a purchase, or comparing options. In 2025,
      search engines prioritize content that aligns with the user's
      needs. Tailor your content to answer specific questions or solve
      problems. This ensures higher relevance and better rankings in
      search results.`,
  },
  {
    sub_heading: ` Long-tail keywords:`,
    description: ` They are longer, more
      specific search phrases that capture targeted user intent. They
      typically have lower competition and higher conversion rates,
      making them valuable for SEO. For example, instead of "SEO
      services," a long-tail keyword might be "affordable SEO services
      for small businesses." Optimizing for long-tail keywords helps
      attract more qualified traffic and improve rankings (e.g., "best
      SEO tools for small businesses").`,
  },
  {
    heading: `2. Use Advanced Keyword Research Tools`,
    description: ` 
                  `,
  },
  {
    sub_heading: `Google Keyword Planner:`,
    description: `It is a free tool that helps identify
                relevant keywords for your SEO strategy. It provides insights
                into search volume, competition, and cost-per-click data for
                different keywords. You can use it to discover new keywords and
                assess their potential for driving traffic. It’s ideal for
                planning and optimizing both SEO and paid search campaigns.`,
  },
  {
    sub_heading: `SEMrush:`,
    description: `It is a comprehensive SEO tool that offers keyword
                research, competitive analysis, and backlink tracking. It helps
                you discover high-performing keywords, analyze competitors’
                strategies, and track your website’s rankings. With features
                like site audits and content recommendations, SEMrush is
                essential for optimizing your SEO efforts. It’s a powerful tool
                for improving visibility and driving organic traffic.`,
  },
  {
    sub_heading: `Google Trends:`,
    description: ` It is a free tool that allows you to explore the
                popularity of search queries over time. It shows real-time data
                on trending topics, keyword search volume, and regional
                interest. You can compare multiple keywords to identify emerging
                trends and seasonal variations. Google Trends helps you stay
                ahead of the curve and optimize content based on current search
                behaviors.`,
  },

  {
    heading: `3. Categorize Keywords by Search Intent`,
  },
  {
    description: `How to optimize for SEO.” Commercial: “Best SEO
                services 2025.” Transactional: “Buy SEO tools with discounts.`,
  },
  {
    heading: `4. Optimize for Long-Tail Keywords`,
    description: `It means targeting more specific, multi-word phrases that
                reflect user intent. These keywords have lower competition,
                making it easier to rank for them. They attract highly targeted
                traffic, often leading to higher conversion rates. Focusing on
                long-tail keywords ensures your content meets the needs of users
                searching for detailed, niche information.`,
  },
  {
    heading: `5. Analyze Competitors`,
  },
  {
    sub_heading: `SEMrush:`,
    description: `It is an all-in-one SEO tool that offers in-depth
                keyword research, competitor analysis, and site audit features.
                It helps identify high-ranking keywords, track your website's
                performance, and discover new opportunities for organic growth.
                With tools for backlink analysis, content optimization, and
                ranking tracking, SEMrush is essential for improving SEO
                strategies. It’s a powerful tool for enhancing visibility and
                driving more targeted traffic.`,
  },
  {
    sub_heading: `Skyscraper Technique:`,
    description: `Improve
                content with the Skyscraper Technique and create better versions
                of their top-performing content. The Skyscraper Technique
                involves finding top-performing content in your niche, and then
                creating a more valuable, in-depth version. By improving on what
                already works—adding new data, insights, or formats—you increase
                your chances of outranking competitors. Once your content is
                superior, you promote it through outreach to gain backlinks.
                This technique boosts both traffic and authority.`,
  },
  {
    heading: `Conclusion`,
    description: `Effective keyword research requires a strategic approach that
                focuses on user intent, long-tail keywords, and emerging trends
                like voice search and AI-driven queries. By using powerful tools
                such as Google Keyword Planner, SEMrush, and Google Trends, you
                can identify the right keywords to optimize your content and
                stay ahead of the competition. Continually adapting to SEO
                shifts and prioritizing relevant, high-converting keywords will
                ensure your website ranks higher and attracts targeted traffic.
                Start implementing these strategies today to secure
                long-term SEO success.`,
  },
];

export default function KeywordResearch() {
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
          <p>{blogData[0]?.date}</p>

          <h1>{blogData[0]?.title}</h1>
          <img loading="lazy" src={digital_marketing_img1} alt="" />
          <div className="keyword-research-content">
            <div className="blog-content">
              {Contents.map((content, index) => (
                <div className="">
                  <h1>{content.heading}</h1>
                  <h2>{content.sub_heading}</h2>
                  <p
                    dangerouslySetInnerHTML={{ __html: content.description }}
                  ></p>
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
