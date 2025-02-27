import React, { useContext, useEffect, useState } from "react";

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
       Social media isn’t just a platform; it’s the heartbeat of modern marketing. With billions of users scrolling daily, your business has the opportunity to connect, inspire, and convert. But how do you break through the noise and build a community that loves and shares your content? Let’s dive into the best practices for growing and engaging your social media audience.

    `,
  },
  {
    heading: `1. Know Your Audience Inside Out
`,
    description: `Your audience is the foundation of your social media strategy. Here’s how to get to know them better:

`,
  },
  {
    description: `Create Detailed Buyer Personas: Identify your audience's age, interests, challenges, and preferences.

`,
  },
  {
    description: `Engage Directly: Use polls, surveys, and Q&A sessions to gather insights.

`,
  },
  {
    description: `Analyze Data: Use analytics tools to understand what content resonates most.

`,
  },
  {
    description: `Pro Tip: Use tools like Google Analytics and native social platform insights to track demographics and user behavior.

`,
  },
  {
    heading: `2. Consistency is Key`,
    description: `Staying top-of-mind means showing up consistently. This doesn’t mean posting for the sake of it but delivering value with every post.
`,
  },
  {
    description: `Develop a Content Calendar: Plan posts ahead of time to ensure a steady flow of content.
`,
  },
  {
    description: `Use Scheduling Tools: Tools like Hootsuite or Buffer can help automate posts, so you never miss a beat.
`,
  },
  {
    description: `Stick to Your Brand Voice: Consistent tone, style, and messaging reinforce your brand identity.
`,
  },
  {
    heading: `3. Engage Authentically`,
    description: `Social media is a two-way street. Responding to comments, liking user-generated content, and showing genuine interest fosters a loyal community.
`,
  },
  {
    description: `Reply Promptly: Acknowledge comments, questions, and mentions quickly.`,
  },
  {
    description: `Celebrate Your Audience: Share user-generated content and give shoutouts.`,
  },
  {
    description: `Host Interactive Sessions: Live Q&As, webinars, or Instagram Lives create real-time connections.
`,
  },
  {
    heading: `4. Create High-Value Content`,
    description: `Content is king, but engagement is queen. Together, they rule your social strategy. Share posts that educate, entertain, and inspire.
`,
  },
  {
    description: `Visual Content: Use high-quality images, videos, and infographics.
`,
  },
  {
    description: `Storytelling: Share behind-the-scenes moments or customer success stories.
`,
  },
  {
    description: `Call-to-Action (CTA): Encourage followers to take action, whether it’s clicking a link, sharing a post, or commenting.
`,
  },
  {
    heading: `5. Leverage Hashtags and Trends
`,
    description: `Hashtags and trending topics boost visibility and help your content reach new audiences.
Use Relevant Hashtags: Combine niche-specific, branded, and popular hashtags.
`,
  },
  {
    description: `Jump on Trends: Participate in viral challenges or trending topics but stay authentic to your brand.
`,
  },
  {
    description: `Create Branded Hashtags: Encourage followers to use them when sharing content related to your business.
`,
  },
  {
    heading: `6. Measure, Adjust, and Optimize
`,
    description: `Your strategy should evolve based on performance metrics. Monitor, test, and refine for better results.
`,
  },
  {
    description: `Track Engagement Rates: Likes, comments, shares, and saves indicate content effectiveness.
`,
  },
  {
    description: `A/B Test Content: Experiment with different formats, captions, and posting times.
`,
  },
  {
    description: `Learn from Competitors: Analyze what’s working for others in your industry.
`,
  },
  {
    heading: `Conclusion:`,
    description: `Building and engaging a social media audience doesn’t happen overnight. It’s a mix of creativity, consistency, and connection. By following these best practices, you’ll not only grow your online presence but also foster a community that champions your brand.
`,
  },
  {
    description: `Ready to take your social media strategy to the next level? Implement these tips today and watch your audience engagement soar!`,
  },
];

export default function SocialMediaMarketing() {

useEffect(() => {
          document.title =
            "Social Media Marketing: Best Practices to Engage Your Audience";
      
          document
            .querySelector("meta[name='description']")
            ?.setAttribute(
              "content",
              "Master social media marketing with best practices to engage your audience and boost interaction!"
            );
      
          document
            .querySelector("meta[name='keywords']")
            ?.setAttribute(
              "content",
              "facebook advertising management, social media marketing, smm marketing, social media and marketing, sns marketing, marketing through social media, smm social media marketing, social media mar"
            );
        }, []);

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
          <p>{blogData[8]?.date}</p>

          <h1>{blogData[8]?.title}</h1>
          <img loading="lazy" src={blogData[8]?.img} alt="" />
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
