import React, { useContext, useState } from "react";

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
import { StoreContext } from "../../Context Provider/StoreProvider";

const Contents = [
  {
    heading:  `Introduction`,
    description: `In an era dominated by digital marketing, outdoor advertising remains a powerhouse for brand visibility. From billboards to transit ads, it reaches audiences where they live, work, and travel. But why is outdoor advertising still so effective? Let’s explore its importance, benefits, and why your business should leverage it.

`,
  },

  {
    heading:  `1. What is Outdoor Advertising?`,
    description: `Outdoor advertising, also known as out-of-home (OOH) advertising, includes various formats designed to engage audiences in public spaces. These include:

`,
  },
  {
    description: `  Billboards: Large, high-visibility ads placed along highways and urban centers.

`,
  },
  {
    description: `Transit Advertising: Ads on buses, taxis, and trains that reach commuters daily.
`,
  },
  {
    description: `Street Furniture Ads: Posters on bus stops, benches, and kiosks in high-traffic areas.
`,
  },
  {
    description: `Digital OOH: LED and digital billboards displaying dynamic, eye-catching content.

`,
  },
  
  {
    heading:  `2. The Importance of Outdoor Advertising
`,
    description: `Unlike digital ads that can be skipped, outdoor ads are always on and cannot be ignored. Here’s why it matters:

`,
  },
  {
    description: `Massive Reach: Targets a broad audience, from pedestrians to drivers and public transport users.
`,
  },
  {
    description: `Brand Credibility: Increases trust by showcasing a brand in real-world spaces.
`,
  },
  {
    heading:  `3. Benefits of Outdoor Advertising`,
  },
  {

    description: `Outdoor advertising offers a range of advantages that digital marketing alone cannot achieve.
`,
  },
  {
    description: `High Visibility: Large-scale ads capture attention 24/7.
`,
  },
  {
    description: `Cost-Effective: Long-lasting exposure compared to pay-per-click models.
`,
  },

  {
    description: `Localized Targeting: Perfect for businesses wanting to attract customers in specific areas.

`,
  },
  {
    description: `Increases Brand Recall: Repeated exposure reinforces brand messaging in consumers’ minds.
`,
  },
 

  {
    heading:  `4. Why Your Business Should Invest in Outdoor Advertising
`,
    description: `If you’re looking to boost brand awareness and customer engagement, outdoor advertising is a smart investment.

`,
  },
  {
    description: `Enhances Local Marketing: Ideal for businesses targeting specific geographic locations.

 `,
  },
  {
    description: `Boosts Offline Conversions: Encourages in-store visits and direct purchases.

 `,
  },


  {
    description: `Maximizes ROI: Delivers lasting impressions without continuous spending on clicks or impressions.

`,
  },

  {
    heading:  `Conclusion`,
    description: `Outdoor advertising remains a vital tool in modern marketing, offering high-impact visibility and brand recognition. Whether through billboards, transit ads, or digital displays, it ensures your message reaches a massive audience effectively.
`,
  },
  {
    description: `Are you ready to elevate your brand with outdoor advertising? Start leveraging OOH strategies today and watch your visibility soar!`,
  },
];

export default function BenefitsOutdoorAdvertising() {
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
          <p>{blogData[9]?.date}</p>

          <h1>{blogData[9]?.title}</h1>
          <img src={blogData[9]?.img} alt="" />

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
