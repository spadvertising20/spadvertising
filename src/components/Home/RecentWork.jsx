import React from "react";
import "./RecentWork.css";
import showcase1 from "../../assets/Showcase/showcase1.webp";
import showcase2 from "../../assets/Showcase/showcase2.webp";
import showcase3 from "../../assets/Showcase/showcase3.webp";
import showcase4 from "../../assets/Showcase/showcase4.webp";
import showcase5 from "../../assets/Showcase/showcase5.webp";
import showcase6 from "../../assets/Showcase/Showcase6.webp";
import "react-slideshow-image/dist/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

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
            loading="lazy"
            src={showcase1}
            alt="Advertising agency in India"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src={showcase2}
            alt="Advertising agency near raipur chhattisgarh"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src={showcase3}
            alt="advertising and marketing agency in raipur"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src={showcase4}
            alt="social media marketing agency"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src={showcase5}
            alt="digital marketing agencies"
          />
        </div>
        <div>
          <img
            loading="lazy"
            src={showcase6}
            alt="digital marketing agency near me"
          />
        </div>
      </Slider>
      <Link to={"/Portfolio"}>
        <button type="button" aria-label="Go to Portfolio">
          See more...
        </button>
      </Link>
    </div>
  );
};
export default Showcase;
