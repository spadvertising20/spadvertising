import React from "react";
import "./WhyTrustUs.css";
import trust_image from "../assets/elements/team.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import affordable from "../assets/elements/affordable.gif";
// import team from "../assets/elements/team.gif";
// import exprience from "../assets/elements/exprience.gif";
// import fast_delivery from "../assets/elements/fast-delivery.gif";

const WhyTrustUs = ({services}) => {
  
  const settings1 = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    rtl: true,
  };
  const settings2 = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    rtl: false,
  };

  return (
    <section className="trust-section">
      <div className="marquee-container">
        <Slider {...settings1}>
          {services.map((service, index) => (
            <div key={index} className="marquee-slide">
              <p>{service}</p>
            </div>
          ))}
        </Slider>
      </div>
      <div className="trust-section-con">
        <div className="trust-header">
          <div className="trust-header-con">
            <p className="sub-title">Why Choose Us</p>
            <h1>What Makes Us Special?</h1>
          </div>
          <div className="shadow-digital-marketing">
            <a href="/contact">
              <button>Get a Quote</button>
            </a>
          </div>
        </div>

        <div className="trust-content">
          <div className="trust-image">
            <img src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757415922/team_i6bc4s.jpg"} alt="Team discussing project" />
          </div>

          <div className="trust-benefits">
            <div className="benefit">
              <div className="icon">
                <img src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757415923/affordable_hqkhhe.gif"} alt="" />
              </div>
              <h4>Affordable Price</h4>
              <p>
                High-quality service delivered at a price that suits everyone.
              </p>
            </div>
            <div className="benefit">
              <div className="icon">
                <img src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757415922/team_kdleeh.gif"} alt="" />
              </div>
              <h4>Professional Team</h4>
              <p>
                Experienced, reliable, and skilled team committed to your
                success.
              </p>
            </div>
            <div className="benefit">
              <div className="icon">
                <img src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757415924/exprience_zoyaxw.gif"} alt="" />
              </div>
              <h4>Experience</h4>
              <p>
                Delivering reliable results that clients trust, backed by proven
                expertise and success.
              </p>
            </div>
            <div className="benefit">
              <div className="icon">
                <img src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757415923/fast-delivery_sm9noz.gif"} alt="" />
              </div>
              <h4>Fast Delivery</h4>
              <p>
                Speedy service without compromising on quality or project goals.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="marquee-container">
        <Slider {...settings2}>
          {services.map((service, index) => (
            <div key={index} className="marquee-slide">
              <p>{service}</p>
            </div>
          ))}
        </Slider>
      </div>
   
    </section>
  );
};

export default WhyTrustUs;
