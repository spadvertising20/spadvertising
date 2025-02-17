import React from "react";
import "./Clients.css";
import Slider from "react-slick";
import { Helmet } from "react-helmet";
import "react-slideshow-image/dist/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import client1 from "../../assets/WelcomePage/client1.png";
import client2 from "../../assets/WelcomePage/client2.png";
import client3 from "../../assets/WelcomePage/client3.jpeg";
import client4 from "../../assets/WelcomePage/client4.png";
import client5 from "../../assets/WelcomePage/client5.svg";
import client6 from "../../assets/WelcomePage/client6.webp";
import client7 from "../../assets/WelcomePage/client7.png";
import client8 from "../../assets/WelcomePage/client8.jpeg";
import client9 from "../../assets/WelcomePage/client9.png";
import client10 from "../../assets/WelcomePage/client10.svg";
import client11 from "../../assets/WelcomePage/client11.png";
import client12 from "../../assets/WelcomePage/client12.jpeg";
import client13 from "../../assets/WelcomePage/client13.png";
import client14 from "../../assets/WelcomePage/client14.png";
import client15 from "../../assets/WelcomePage/client15.webp";
import client16 from "../../assets/WelcomePage/client16.jpg";
import client17 from "../../assets/WelcomePage/client17.webp";

function WelcomePage() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    centerPadding: "60px",
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 100,
    speed: 5000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          pauseOnHover: true,
          speed: 2000,
          cssEase: "linear",
        },
      },
    ],
  };

  return (
    <div className="welcome" id="welcome">
      <Helmet>
        <title>Our Clients in Raipur: Success Stories and Testimonials</title>

        <meta
          name="description"
          content="Discover our clients' success stories in Raipur. Read testimonials and case studies showcasing our partnerships and the positive experiences we've created together."
        />
        <meta
          name="keywords"
          content=" Our clients, client testimonials Raipur, client portfolio Raipur, client success stories Raipur, satisfied clients Raipur, client feedback Raipur, client case studies Raipur, client partnerships Raipur, client experiences Raipur"
        />
      </Helmet>

      <h1>WELCOME TO SP ADVERTISING</h1>

      <br />
      <div className="welcome-con">
        <div className="welcome-box">
          <div className="logo2"></div>
          <div className="welcome-sentence">
            <div className="sentence-center">
              <p>
                At SP Advertising, we are dedicated to providing top-notch
                advertising services to our clients. We specialize in creating
                eye-catching ads that grab the attention of your target audience
                and deliver results. Our team of experts is passionate about
                what we do, and we work tirelessly to ensure that every project
                we take on is a success. From print ads to digital campaigns,
                we've got you covered.
              </p>

              <p>
                We are committed to delivering exceptional advertising solutions
                tailored to our clients' needs. We excel in crafting compelling
                ads that captivate target audiences and drive impactful results.
                Our dedicated team of professionals brings a wealth of
                experience and creativity to every project, ensuring that each
                campaign—whether print or digital—achieves its objectives. Our
                passion for advertising fuels our relentless pursuit of
                excellence, making us a trusted partner for businesses looking
                to enhance their brand presence and achieve their marketing
                goals.
              </p>
            </div>
          </div>
        </div>
        <div className="client-logo">
          <h2>Our Clients</h2>
          <Slider {...settings} className="logo-slider">
            <div>
              <img loading="lazy" src={client1} alt="" />
            </div>
            <div>
              <img loading="lazy" src={client2} alt="" />
            </div>
            <div>
              <img loading="lazy" src={client3} alt="" />
            </div>
            <div>
              <img loading="lazy" src={client4} alt="" />
            </div>
            <div>
              <img loading="lazy" src={client5} alt="" />
            </div>
            <div>
              <img
                loading="lazy"
                className="img-visible"
                src={client6}
                alt=""
              />
            </div>
            <div>
              <img
                loading="lazy"
                className="img-visible"
                src={client7}
                alt=""
              />
            </div>
            <div>
              <img loading="lazy" src={client8} alt="" />
            </div>
            <div>
              <img loading="lazy" src={client9} alt="" />
            </div>
            <div>
              <img loading="lazy" src={client10} alt="" />
            </div>
            <div>
              <img loading="lazy" src={client11} alt="" />
            </div>
            <div>
              <img loading="lazy" src={client12} alt="" />
            </div>
            <div>
              <img loading="lazy" src={client13} alt="" />
            </div>
            <div>
              <img loading="lazy" src={client14} alt="" />
            </div>
            <div>
              <img
                loading="lazy"
                className="img-visible"
                src={client15}
                alt=""
              />
            </div>
            <div>
              <img loading="lazy" src={client16} alt="" />
            </div>
            <div>
              <img loading="lazy" src={client17} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
