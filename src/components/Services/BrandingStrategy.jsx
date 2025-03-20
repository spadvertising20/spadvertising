import React, { useEffect } from "react";
import "./Services.css";
import { Helmet } from "react-helmet";
import brand from "../../assets/Services/BrandingStrategy/brand.png";
import { Link } from "react-router-dom";
import Communications_Strategy from "../../assets/Services/BrandingStrategy/Communications-Strategy.jpg";
import Creative_Campaigns from "../../assets/Services/BrandingStrategy/Creative_Campaigns.jpg";
import Corporate from "../../assets/Services/BrandingStrategy/Corporate.jpg";

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
            <img src={brand} alt="Branding Strategy in Raipur" />
          </div>
        </div>
      </div>
      <div className="service-con">
        <div className="ul">
          <div className="topic-align1">
            <img
              loading="lazy"
              src={Communications_Strategy}
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
            <img
              loading="lazy"
              src={Creative_Campaigns}
              alt="Creative 360 Campaigns in Raipur"
              data-aos="zoom-in"
            />
          </div>

          <div className="topic-align1">
            <img
              loading="lazy"
              src={Corporate}
              alt="Corporate and Brand Identity in Raipur"
              data-aos="zoom-in"
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
    </div>
  );
}

export default BrandingStrategy;
