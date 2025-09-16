import React from "react";
import "./Sp_services.css";
import img1 from "../../../assets/AIServices/788.jpg";
import img2 from "../../../assets/AIServices/analysis_pre.jpg";
import img3 from "../../../assets/AIServices/5257.jpg";
import img4 from "../../../assets/AIServices/aipic.jpg";
import img5 from "../../../assets/AIServices/aicontent.jpg";
import img6 from "../../../assets/AIServices/promo.jpg";
import img7 from "../../../assets/AIServices/neuro.jpg";
import img8 from "../../../assets/AIServices/influence.jpg";

const services = [
  {
    title: "AI Brand Identity Generator",
    description:
      "Generate a unique brand identity with AI-powered logos, typography, color palettes, and design elements customized for your business. Enhance your visual presence with consistent, professional branding across all platforms.",
    icon: <img src={img1} />,
  },
  {
    title: "Predictive Campaign Analytics",
    description:
      "Leverage AI-driven insights to predict campaign performance with accuracy. Optimize strategies, maximize ROI, and stay ahead of market trends.",
    icon: <img src={img2} />,
  },
  {
    title: "Hyper-Personalized Ad Creatives",
    description:
      "Craft AI-powered ad creatives tailored to each micro-audience segment. Boost engagement, conversions, and brand impact with hyper-personalized messaging.",
    icon: <img src={img3} />,
  },
  {
    title: "AI-Powered Social Listening",
    description:
      "Track conversations and trends with AI-powered social listening tools. Understand customer sentiment, gain competitor insights, and refine strategies in real time.",
    icon: <img src={img4} />,
  },
  {
    title: "Content Automation Suite",
    description:
      "Automate content creation, scheduling, and distribution with AI-powered tools. Includes AI-assisted blog writing, social captions, and email sequences aligned with your brand tone in real time.",
    icon: <img src={img5} />,
  },
  {
    title: "Video Personalization ",
    description:
      "AI-generated videos that adapt text, voiceover, and visuals for each viewer segment. Boost engagement, conversions, and loyalty with real-time personalized storytelling.",
    icon: <img src={img6} />,
  },
  {
    title: "Neuro-Marketing Insights",
    description:
      "AI analysis of eye-tracking, heatmaps, and emotional responses. Unlock neuro-marketing insights to optimize campaigns and influence decisions.",
    icon: <img src={img7} />,
  },
  {
    title: "AI-Driven Influencer Matching ",
    description:
      "Match with the right influencers using AI-driven audience and engagement analysis. Boost brand reach, trust, and conversions through precise collaborations.",
    icon: <img src={img8} />,
  },
];

const Services = () => {
  return (
    <div className="Services-main" id="Services">
      <div className="Services">
        <h2 className="Services-title">
          Our <span>AI-Powered Branding & Marketing</span> Services
        </h2>

        {/* Service Cards */}
        <div className="Services-slider">
          {services.map((service, index) => (
            <div className="Service-card" key={index}>
              <div className="Service-icon">
                <img src={service.icon.props.src} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p className="description">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Get Quote Button */}
        <div className="get-quote-wrapper">
          <button className="get-quote-btn">Get Quote</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
