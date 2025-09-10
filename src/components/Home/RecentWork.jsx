import React from "react";
import "./RecentWork.css";
import "react-slideshow-image/dist/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Showcase = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "lightgray",
          borderRadius: "50px",
          boxShadow: "0px 0px 10px lightgray",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "lightgray",
          borderRadius: "50px",
          boxShadow: "0px 0px 10px lightgray",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    centerPadding: "60px",
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="slide">
      <div className="recent-work">
        <h1>
          RECENT WORK<p>RECENT WORK</p>
        </h1>
      </div>
      <div className="reacent-headline">
        <h1>Explore Our Recent Works and Innovations</h1>
        <p>
          Discover our latest projects and innovative solutions that showcase
          creativity, excellence, and forward-thinking ideas.
        </p>
      </div>
      <Slider {...settings} className="slide-con">
        <div>
          <img
            src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757483302/showcase1_n7a94c.webp"}
            alt="Advertising agency in India"
            loading="lazy"
          />
        </div>
        <div>
          <img
            src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757483303/showcase2_ul3xzk.jpg"}
            alt="Advertising agency near raipur chhattisgarh"
            loading="lazy"
          />
        </div>
        <div>
          <img
            src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757483296/showcase3_jdvz3y.webp"}
            alt="advertising and marketing agency in raipur"
            loading="lazy"
          />
        </div>
        <div>
          <img
            src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757483297/showcase4_od4rxg.webp"}
            alt="social media marketing agency"
            loading="lazy"
          />
        </div>
        <div>
          <img
            src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757483298/showcase5_ayvbkv.webp"}
            alt="digital marketing agencies"
            loading="lazy"
          />
        </div>
        <div>
          <img
            src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757483300/Showcase6_ytg0i7.webp"}
            alt="digital marketing agency near me"
            loading="lazy"
          />
        </div>
      </Slider>
      
        <div className="shadow">
          <a href="/portfolio">
            <button>Explore Our Work</button>
          </a>
        </div>
    
    </div>
  );
};
export default Showcase;
