import React, { useEffect } from "react";
import "./Services.css";
import design from "../../assets/Services/DesigningServices/design.png";
import { Link } from "react-router-dom";
import packaging_img from "../../assets/Services/DesigningServices/packaging-img.jpg";
import packaging_img2 from "../../assets/Services/DesigningServices/creative-design3.jpg";
import packaging_img1 from "../../assets/Services/DesigningServices/creative-design8.jpg";
import { Helmet } from "react-helmet";

function DesigningServices() {
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
            <img loading="lazy" src={design} alt="creative logo design" />
          </div>
        </div>
      </div>
      <div className="service-con">
        <div className="ul">
          <div className="topic-align1" id="topic-align2">
            <div className="topic-left" data-aos="fade-right">
              <h1>Packaging</h1>
              <p>
                In today's competitive market, having the Best Packaging Design
                Service is essential to capture consumer attention. Our creative
                solutions ensure your packaging is not only visually stunning
                but also functional and aligned with your brand's identity. With
                the Best Packaging Design Service, you can make a memorable
                impact that drives sales and brand loyalty.
              </p>
            </div>
            {/* <div className="topic-left" data-aos="fade-right">
  <h1>Creative Packaging Design to Elevate Your Brand 🚀</h1>
  <div className="service-para">
    Looking for stunning packaging and design solutions that make your products stand out? 
    Our expert packaging design agency specializes in creating eye-catching, functional, and 
    brand-driven packaging that captures attention and boosts sales.
  </div>
  <h2>Our Packaging Design Services Include:</h2>
  <ul>
    <li>
      <strong>✔ Design in Packaging –</strong> Unique and creative designs tailored to your brand identity.
    </li>
    <li>
      <strong>✔ Mock-Up Packaging –</strong> High-quality mock-ups to visualize your final product before production.
    </li>
    <li>
      <strong>✔ Design a Packaging Box –</strong> Custom box designs that enhance product appeal.
    </li>
    <li>
      <strong>✔ Design Packaging for Food –</strong> Attractive and compliant food packaging solutions.
    </li>
    <li>
      <strong>✔ Design for Packaging Box –</strong> Functional and stylish box packaging for all industries.
    </li>
    <li>
      <strong>✔ Packaging Design Services –</strong> From concept to final product, we handle everything.
    </li>
    <li>
      <strong>✔ Design Packaging –</strong> Innovative and sustainable packaging solutions.
    </li>
    <li>
      <strong>✔ Packaging Design Companies –</strong> We are a trusted name in the industry for premium designs.
    </li>
  </ul>
  <h2>Why Choose Us?</h2>
  <ul>
    <li>✅ Expert packaging design agency with years of experience</li>
    <li>✅ Custom and visually stunning designs that enhance brand recognition</li>
    <li>✅ High-quality packaging solutions for various industries</li>
    <li>✅ Affordable and innovative packaging strategies</li>
  </ul>
  <div className="service-para">
    🚀 Let’s bring your packaging vision to life!
  </div>
  <div className="service-para">
    📩 Contact us today for premium packaging design services!
  </div>
  <div className="service-btn">
    <a href="https://spadvertising.in/Contact">
      <div className="service-btn1">Get Quote</div>
    </a>
    <a href="https://wa.me/918085354646">
      <div className="service-btn2">Chat with Us</div>
    </a>
  </div>
</div>
 */}
            <img
              loading="lazy"
              src={packaging_img}
              alt="creative web design"
              data-aos="zoom-in"
            />
          </div>

          <div className="topic-align1">
            <img
              loading="lazy"
              src={packaging_img1}
              alt="creative flyer design"
              data-aos="zoom-in"
            />
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
            <img
              loading="lazy"
              src={packaging_img2}
              alt="creative brochure design"
              data-aos="zoom-in"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesigningServices;
