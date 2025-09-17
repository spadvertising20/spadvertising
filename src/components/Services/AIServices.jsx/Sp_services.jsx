import React, { useRef, useEffect, useState } from "react";
import "./Sp_services.css";
import "animate.css";

const services = [
  {
    title: "AI Brand Identity Generator",
    description:
      "Generate a unique brand identity with AI-powered logos, typography, color palettes, and design elements customized for your business. Enhance your visual presence with consistent, professional branding across all platforms.",
    icon: (
      <img
        src={
          "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1758024525/788_l0zycu.jpg"
        }
      />
    ),
  },
  {
    title: "Predictive Campaign Analytics",
    description:
      "Leverage AI-driven insights to predict campaign performance with accuracy. Optimize strategies, maximize ROI, and stay ahead of market trends.",
    icon: (
      <img
        src={
          "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1758024527/analysis_pre_unflej.jpg"
        }
      />
    ),
  },
  {
    title: "Hyper-Personalized Ad Creatives",
    description:
      "Craft AI-powered ad creatives tailored to each micro-audience segment. Boost engagement, conversions, and brand impact with hyper-personalized messaging.",
    icon: (
      <img
        src={
          "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1758024526/5257_tkqnf3.jpg"
        }
      />
    ),
  },
  {
    title: "AI-Powered Social Listening",
    description:
      "Track conversations and trends with AI-powered social listening tools. Understand customer sentiment, gain competitor insights, and refine strategies in real time.",
    icon: (
      <img
        src={
          "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1758024527/aipic_hhgylq.jpg"
        }
      />
    ),
  },
  {
    title: "Content Automation Suite",
    description:
      "Automate content creation, scheduling, and distribution with AI-powered tools. Includes AI-assisted blog writing, social captions, and email sequences aligned with your brand tone in real time.",
    icon: (
      <img
        src={
          "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1758024525/aicontent_zqjv73.jpg"
        }
      />
    ),
  },
  {
    title: "Video Personalization ",
    description:
      "AI-generated videos that adapt text, voiceover, and visuals for each viewer segment. Boost engagement, conversions, and loyalty with real-time personalized storytelling.",
    icon: (
      <img
        src={
          "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1758024536/promo_fgphwh.jpg"
        }
      />
    ),
  },
  {
    title: "Neuro-Marketing Insights",
    description:
      "AI analysis of eye-tracking, heatmaps, and emotional responses. Unlock neuro-marketing insights to optimize campaigns and influence decisions.",
    icon: (
      <img
        src={
          "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1758024530/neuro_mr0sjv.jpg"
        }
      />
    ),
  },
  {
    title: "AI-Driven Influencer Matching ",
    description:
      "Match with the right influencers using AI-driven audience and engagement analysis. Boost brand reach, trust, and conversions through precise collaborations.",
    icon: (
      <img
        src={
          "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1758024529/influence_nt7jpo.jpg"
        }
      />
    ),
  },
  {
    title: "AI Chatbot Assistant",
    description:
      "Experience AI-powered conversations that simplify interactions and resolve queries instantly.With 24/7 support, engagement improves and services grow efficiently.",
    icon: (
      <img
        src={
          "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1758024526/aichat_ru3fhw.png"
        }
      />
    ),
  },
];

const Services = () => {
  const sectionRef = useRef(null); // 👈 reference banaya
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionPos = sectionRef.current.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
          setIsVisible(true); // 👈 jab visible ho jaye to state update
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="Services-main" id="Services" ref={sectionRef}>
      <div className="Services">
        <h2
  className={`Services-title animate__animated ${
    isVisible ? "animate__fadeInUp visible" : ""
  }`}
>
  <span className="first-line">Our AI-Powered</span>
  <br />
  <span className="second-line">Branding & Marketing Services</span>
</h2>

        {/* Service Cards */}
        <div className="Services-slider">
          {services.map((service, index) => (
            <div
              className={`Service-card ${
                service.title.includes("AI Chatbot Assistant")
                  ? "chatbot-card"
                  : service.title.includes("Video Personalization")
                  ? "video-card"
                  : ""
              }`}
              key={index}
            >
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
