import React, { useEffect, useState } from "react";
import "./Services.css";
import { Helmet } from "react-helmet";
import brand from "../../assets/Services/BrandingStrategy/brand.png";
import { Link } from "react-router-dom";
import Communications_Strategy from "../../assets/Services/BrandingStrategy/Communications-Strategy.jpg";
import Creative_Campaigns from "../../assets/Services/BrandingStrategy/Creative_Campaigns.jpg";
import Corporate from "../../assets/Services/BrandingStrategy/Corporate.jpg";
import loading from "../../assets/components/loading-image.png";
import ImageLoader from "../../elements/ImageLoader";
import WhyTrustUs from "../../elements/WhyTrustUs";

function BrandingStrategy() {
  useEffect(() => {
    document.title =
      "Best Branding & Stradegy agency in Raipur | Branding & Stradegy services";

    document
      .querySelector("meta[name='description']")
      ?.setAttribute(
        "content",
        "Grow your brand with our branding and strategy agency. Offering corporate branding, rebranding, and strategic consulting to define and grow your identity."
      );

    document
      .querySelector("meta[name='keywords']")
      ?.setAttribute(
        "content",
        "Branding and strategy agency, Creative Branding Solutions, Strategic Marketing Agency, Brand Identity Development,	Corporate Branding Services in Raipur, Strategic Brand Consulting, Brand Positioning Agency in Raipur, Rebranding and Marketing Experts, Integrated Branding Strategies"
      );
  }, []);

  const wcsservices = [
    "Communications Strategy",
    "Creative 360 Campaigns",
    "Corporate and Brand Identity",
  ];

  return (
    <div className="service">
      <div className="service-box-con">
        <div className="service-box">
          <div className="service-left">
            <h1>Branding Strategy</h1>
            <p data-aos="fade-right">
              Crafting Unique Brand Identities: Strategic Planning for Long-Term
              Success
            </p>
            <Link to={"/Contact"}>
              <button>Enquire Now</button>
            </Link>
          </div>
          <div className="service-right">
            <ImageLoader src={loading}
              data-src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757487345/brand_oopzef.png"}
              alt="Branding Strategy in Raipur"
              data-aos="zoom-in"
              
            />
          </div>
        </div>
      </div>
      <div className="service-con">
        <div className="ul">
          <div className="topic-align1">
            <ImageLoader src={loading}
              data-src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757487350/Communications-Strategy_ckb54z.jpg"}
              alt="Communications Strategy in Raipur"
              data-aos="zoom-in"
              
            />
            <div className="topic-left" data-aos="fade-right">
              <h1>Communications Strategy</h1>
              <p>
                {" "}
                A{" "}
                <a href="https://spadvertising.in/Branding-Strategy-in-Raipur">
                  communications strategy{" "}
                </a>{" "}
                outlines how a brand will convey its messages to target
                audiences. It includes defining key messages, selecting
                communication channels, and establishing tactics to ensure
                clear, consistent, and effective engagement with stakeholders.
              </p>
            </div>
          </div>

          <div className="topic-align1" id="topic-align2">
            <div className="topic-left" data-aos="fade-right">
              <h1>Creative 360 Campaigns</h1>
              <p>
                <a href="https://spadvertising.in/Branding-Strategy-in-Raipur">
                  Creative 360 campaigns{" "}
                </a>{" "}
                deliver a unified brand message across all marketing channels.
                This approach integrates creative content and strategies into a
                comprehensive plan, ensuring consistent and impactful brand
                communication throughout various touchpoints.
              </p>
            </div>

            <ImageLoader src={loading}
              data-src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757487360/Creative_Campaigns_qgmt14.jpg"}
              alt="Creative 360 Campaigns in Raipur"
              data-aos="zoom-in"
              
            />
          </div>

          <div className="topic-align1">
            <ImageLoader src={loading}
              data-src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757487355/Corporate_jpeuht.jpg"}
              alt="Corporate and Brand Identity in Raipur"
              
            />
            <div className="topic-left" data-aos="fade-right">
              <h1>Corporate and Brand Identity</h1>
              <p>
                {" "}
                <a href="https://spadvertising.in/Branding-Strategy-in-Raipur">
                  Corporate and brand identity
                </a>{" "}
                encompasses the visual and thematic elements that represent a
                company’s image. This includes logos, color schemes, and design
                styles, which collectively establish a recognizable and cohesive
                brand presence.
              </p>
            </div>
          </div>
        </div>
      </div>
       <WhyTrustUs services={wcsservices}/>
    </div>
  );
}

export default BrandingStrategy;
