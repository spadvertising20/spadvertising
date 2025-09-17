import React from "react";
import "./Sp_about.css";
import Sp_services from "./Sp_services";


export default function AboutAI() {
  return (
    <div className="about-ai-section">
      <div className="about-ai-image">
        <img src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1758024526/ai2_yrn9uc.png"} alt="AI Illustration" />
      </div>

      <div className="about-ai-content">
        <h2>AI-Powered Branding and Marketing Solutions for the Digital Age</h2>
        <p>
          We specialize in AI-powered branding and marketing solutions. Our
          technology creates unique brand identities with precision. We design
          hyper-personalized campaigns for every audience. Data-driven insights
          guide impactful strategies. We help brands grow in the digital age.
        </p>
        {/* <ul>
          <li>
            {" "}
            Generate logos, colors, and typography aligned with brand
            personality
          </li>
          <li> Predict campaign performance and avoid wasted ad spend</li>
          <li> Deliver hyper-personalized ad creatives to micro-audiences</li>
          <li> Monitor brand mentions and competitors in real time</li>
          <li> Automate content creation with consistent brand tone</li>
          <li> Create dynamic video experiences for each viewer</li>
          <li> Gain neuro-marketing insights with heatmaps & eye-tracking</li>
          <li> Find influencers with the right audience match</li>
        </ul> */}
        <p className="about-ai-closing">
          AI isn’t just shaping the future of branding — it <b>is the future</b>
          .
        </p>
        <a href="https://spadvertising.in/contact" className="get-quote-btn12">
          Contact Us
        </a>
      </div>
    </div>
  );
}
