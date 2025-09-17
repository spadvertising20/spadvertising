import React from "react";
import "./Expertise.css";

// Import images
import outdoor_ad1 from "../../assets/WhatWeDo/outdoor_ad1.png";
import { Link } from "react-router-dom";

const services = [
  {
    img: outdoor_ad1,
    title: "Outdoor Advertising",
    desc: (
      <>
        Grow your brand with the{" "}
        <a
          href="https://spadvertising.in/Outdoor-Advertising-in-Raipur"
          aria-label="best outdoor advertising agency in Raipur"
        >
          best outdoor advertising agency in Raipur
        </a>
        , offering hoardings, gantry, and mobile advertising solutions.
      </>
    ),
    link: "https://spadvertising.in/Outdoor-Advertising-in-Raipur",
    points: [
      "Mobile Hoarding",
      "Hoardings",
      "Gantry",
      "Pole Kiosk",
      "Society Branding",
    ],
    tick: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482398/blue-tick_upnauo.svg",
  },
  {
    img: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482373/bullhorn_cvjwfw.png",
    title: "Digital Marketing",
    desc: (
      <>
        Boost your business with a{" "}
        <a
          href="https://spadvertising.in/Digital-Marketing-Agency-in-Raipur"
          aria-label="leading digital marketing company in Raipur"
        >
          leading digital marketing company in Raipur
        </a>
        , offering SEO, social media, and advertising solutions.
      </>
    ),
    link: "https://spadvertising.in/Digital-Marketing-Agency-in-Raipur",
    points: [
      "Website Development",
      "SEO / SEM Optimization",
      "Social Media Marketing",
      "Application Development",
    ],
    tick: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482360/approved-purple_rqkhwy.png",
  },
  {
    img: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482373/design-thinking_eca0oe.png",
    title: "Designing Services",
    desc: (
      <>
        Elevate your brand with a{" "}
        <a
          href="https://spadvertising.in/Designing-Services-in-Raipur"
          aria-label="top design services company in Raipur"
        >
          top design services company in Raipur
        </a>
        , specializing in logos, graphics, and creative web designs.
      </>
    ),
    link: "https://spadvertising.in/Designing-Services-in-Raipur",
    points: ["Packaging", "Creative Concepts", "Design & Artwork"],
    tick: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482364/approved-yellow_cdmhca.png",
  },
  {
    img: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482371/audio-visual_rkbpde.png",
    title: "Audio Visual",
    desc: (
      <>
        Enhance your events with{" "}
        <a
          href="https://spadvertising.in/Audio-Visuals-in-Raipur"
          aria-label="top-notch audio-visual services in Raipur"
        >
          top-notch audio-visual services in Raipur
        </a>
        , offering sound systems, video setups, and seamless presentations.
      </>
    ),
    link: "https://spadvertising.in/Audio-Visuals-in-Raipur",
    points: [
      "Video Presentations",
      "Short Films / Documentary",
      "Radio & TV Commercials",
      "Photography & Videography",
    ],
    tick: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482353/approved-light-blue_duuxzi.png",
  },
  {
    img: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482351/analysis_str2jj.png",
    title: "Branding & Strategy",
    desc: (
      <>
        A{" "}
        <a
          href="https://spadvertising.in/Branding-Strategy-in-Raipur"
          aria-label="leading branding & strategy company in Raipur"
        >
          leading branding & strategy company in Raipur
        </a>
        , crafting impactful brand identities and growth-driven marketing
        strategies.
      </>
    ),
    link: "https://spadvertising.in/Branding-Strategy-in-Raipur",
    points: [
      "Communication Strategy",
      "Creative 360 Campaigns",
      "Corporate and Brand Identity",
    ],
    tick: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482354/approved-orange_vywzif.png",
  },
  {
    img: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482377/flyer_ecj9ug.png",
    title: "Print Media",
    desc: (
      <>
        Promote your brand with a{" "}
        <a
          href="https://spadvertising.in/Event-Promotion-in-Raipur"
          aria-label="trusted print media company in Raipur"
        >
          trusted print media company in Raipur,
        </a>
        that offers high-quality printing solutions for various needs.
      </>
    ),
    link: "https://spadvertising.in/Event-Promotion-in-Raipur",
    points: ["News Paper Ads", "Brochure", "Pamphlet", "In-Shop Branding"],
    tick: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482363/approved-red_fjm5l5.png",
  },
];

function WhatWeDo() {
  return (
    <div className="whatwedo" id="services">
      <div className="whatwedo-con">
        <div className="our-expertise">
          <h1>
            OUR EXPERTISE<p>OUR EXPERTISE</p>
          </h1>
        </div>
        <div className="service-heading">
          <h2>High-Impact Services to take your business to the next level</h2>
          <p>
            Accelerate your business growth with tailored, high-impact services
            to unlock new opportunities and maximize your brand's success.
          </p>
        </div>
        <div className="whatwedo-box">
          <div className="ai-service-main">
            <a href="https://spadvertising.in/ai-powered-marketing-services" className="ai-service-body">
              <div className="ai-service-con">
                <img
                  src="https://res.cloudinary.com/dxzxvhrhy/image/upload/v1758024526/ai2_yrn9uc.png"
                  alt="AI Marketing Services"
                />
                <div className="content">
                  <h1>AI Powered Marketing Services</h1>
                  <p>
                    Maximize ROI and unlock business potential with{" "}
                    <strong>SP Advertising</strong>. Harness cutting-edge AI
                    technology to create personalized campaigns that drive
                    growth and lasting impact.
                  </p>
                  <div className="content-services">
                    <ul>
                      <li>AI Chatbot</li>
                      <li>Predictive Analytics</li>
                      <li>Smart Targeting</li>
                    </ul>
                    <ul>
                      <li>Automated Content</li>
                      <li>Sentiment Analysis</li>
                      <li>Campaign Optimization</li>
                    </ul>
                    <ul>
                      <li>Automated Content</li>
                      <li>Sentiment Analysis</li>
                      <li>Campaign Optimization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {services.map((service, index) => (
            <a href={service.link} key={index} className="wwd-box" data-aos="fade-up">
              <img
                loading="lazy"
                src={service.img}
                alt={service.title}
                className="outdoor-image"
              />
              <h3>{service.title}</h3>
              <p className="desc1">{service.desc}</p>
              <div className="points">
                {service.points.map((point, i) => (
                  <div key={i} className="points-box">
                    <img loading="lazy" src={service.tick} alt={point} />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
