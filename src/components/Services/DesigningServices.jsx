import React, { useEffect, useState } from "react";
import "./Services.css";
import design from "../../assets/Services/DesigningServices/design.png";
import { Link } from "react-router-dom";
import packaging_img from "../../assets/Services/DesigningServices/packaging-img.jpg";
import packaging_img2 from "../../assets/Services/DesigningServices/creative-design3.jpg";
import packaging_img1 from "../../assets/Services/DesigningServices/creative-design8.jpg";
import loading from "../../assets/components/loading-image.png";
import ImageLoader from "../../elements/ImageLoader";
import WhyTrustUs from "../../elements/WhyTrustUs";

function DesigningServices() {
  const wcsservices = [
    "Packaging Design",
    "Creative Concepts",
    "Design & Artwork",
    "Photography & Videography",
  ];
  useEffect(() => {
    document.title = "Best Designing services in Raipur | Designing services";

    document
      .querySelector("meta[name='description']")
      ?.setAttribute(
        "content",
        "Elevate your business with top branding services! From creative solutions to tailored strategies, we help you grow and stand out. Contact us today!"
      );

    document
      .querySelector("meta[name='keywords']")
      ?.setAttribute(
        "content",
        "Creative Designing Services,Graphic Design Services in raipur, Creative Agency in raipur, Web Design Company in raipur, creative logo design, creative flyer design, creative brochure design, creative poster design, creative i logo design"
      );
  }, []);

  return (
    <div className="service">
      <div className="service-box-con">
        <div className="service-box">
          <div className="service-left">
            <h1>Designing Services</h1>
            <p>
              Visual Storytelling: Designing Services for Enhanced Brand
              Identity and User Experience
            </p>
            <Link to={"/Contact"}>
              <button>Enquire Now</button>
            </Link>
          </div>
          <div className="service-right">
            <div className="image-loading">
              <ImageLoader
                data-src={design}
                src={loading}
                alt="creative logo design"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="service-con">
        <div className="ul">
          <div className="topic-align1" id="topic-align2">
            <div className="topic-left" data-aos="fade-right">
              <h1> Packaging Design</h1>
              <p>
                In today's competitive market, having the Best Packaging Design
                Service is essential to capture consumer attention. Our creative
                solutions ensure your packaging is not only visually stunning
                but also functional and aligned with your brand's identity. With
                the Best Packaging Design Service, you can make a memorable
                impact that drives sales and brand loyalty.
              </p>
            </div>

            <div className="image-loading">
              <ImageLoader
                data-src={packaging_img}
                src={loading}
                alt="creative web design"
              />
            </div>
          </div>

          <div className="topic-align1">
            <div className="image-loading">
              <ImageLoader
                data-src={packaging_img1}
                src={loading}
                alt="creative flyer design"
              />
            </div>
            <div className="topic-left" data-aos="fade-right">
              <h1>Creative Concepts</h1>
              <p>
                Creative concepts companies involve generating original ideas
                and visual strategies to convey a brand’s message uniquely. This
                process includes brainstorming, sketching, and developing
                innovative themes that resonate with target audiences and
                differentiate the brand.
              </p>
            </div>
          </div>

          <div className="topic-align1" id="topic-align2">
            <div className="topic-left" data-aos="fade-right">
              <h1>Design & Artwork</h1>
              <p>
                Design & artwork agency encompasses the creation of visual
                elements for various media. This includes graphic design,
                illustrations, and layouts that effectively communicate ideas,
                enhance brand identity, and engage audiences through
                aesthetically pleasing and functional visuals.
              </p>
            </div>

            <div className="image-loading">
              <ImageLoader
                data-src={packaging_img2}
                src={loading}
                alt="creative brochure design"
              />
            </div>
          </div>
        </div>
      </div>
      <WhyTrustUs services={wcsservices}/>
    </div>
  );
}

export default DesigningServices;
