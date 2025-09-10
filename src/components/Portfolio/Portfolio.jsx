import React from "react";
import "./Portfolio.css";
import portfolio_heading_img from "../../assets/Portfolio/heading-img.jpg";
import homepage1 from "../../assets/Portfolio/homepage1.png";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import loading from "../../assets/components/loading-image.png";
import ImageLoader from "../../elements/ImageLoader";

import outdoor_img1 from "../../assets/Services/OutdoorAdvertising/outdoor-img1.png";
import outdoor_img2 from "../../assets/Services/OutdoorAdvertising/hoarding.jpg";
import showcase1 from "../../assets/Services/OutdoorAdvertising/showcase1.webp";
import showcase2 from "../../assets/Services/OutdoorAdvertising/showcase2.webp";
import gantry from "../../assets/Services/OutdoorAdvertising/gantry.jpg";
import outdoor1 from "../../assets/Services/OutdoorAdvertising/outdoor-advertising12.jpg";
import outdoor2 from "../../assets/Services/OutdoorAdvertising/outdoor-advertising22.jpg";
// import outdoor3 from "../../assets/Services/OutdoorAdvertising/outdoor-advertising3.jpg";
// import outdoor4 from "../../assets/Services/OutdoorAdvertising/outdoor-advertising4.jpg";
import outdoor5 from "../../assets/Services/OutdoorAdvertising/outdoor-advertising5.jpg";
import outdoor6 from "../../assets/Services/OutdoorAdvertising/outdoor-advertising6.jpg";
import outdoor7 from "../../assets/Services/OutdoorAdvertising/outdoor-advertising7.jpg";
// import outdoor8 from "../../assets/Services/OutdoorAdvertising/outdoor-advertising8.jpg";
import outdoor9 from "../../assets/Services/OutdoorAdvertising/outdoor-advertising9.jpg";
import outdoor10 from "../../assets/Services/OutdoorAdvertising/outdoor-advertising10.jpg";
import outdoor11 from "../../assets/Services/OutdoorAdvertising/outdoor-advertising11.jpg";

import digital_marketing_img from "../../assets/Services/DigitalMarketing/digital-marketing-img.jpg";
import digital_marketing_img1 from "../../assets/Services/DigitalMarketing/digital-marketing-img1.jpg";
import digital_marketing_img2 from "../../assets/Services/DigitalMarketing/digital-marketing-img2.jpg";
import digital_marketing_img3 from "../../assets/Services/DigitalMarketing/digital-marketing-img3.jpg";
import digital_marketing_img4 from "../../assets/Services/DigitalMarketing/digital-marketing-img4.jpg";
import digital_marketing_img5 from "../../assets/Services/DigitalMarketing/digital-marketing-img5.jpg";
import digital_marketing_img6 from "../../assets/Services/DigitalMarketing/digital-marketing-img6.jpg";
import digital_marketing_img7 from "../../assets/Services/DigitalMarketing/digital-marketing-img7.jpg";
import digital_marketing_img8 from "../../assets/Services/DigitalMarketing/digital-marketing-img8.jpg";
import digital_marketing_img9 from "../../assets/Services/DigitalMarketing/digital-marketing-img9.jpg";
import digital_marketing_img10 from "../../assets/Services/DigitalMarketing/digital-marketing-img10.jpg";
import digital_marketing_img12 from "../../assets/Services/DigitalMarketing/digital-marketing-img12.jpg";
import digital_marketing_img13 from "../../assets/Services/DigitalMarketing/digital-marketing-img13.jpg";

import packaging_img from "../../assets/Services/DesigningServices/packaging-img.jpg";
import packaging_img1 from "../../assets/Services/DesigningServices/packaging-img2.jpg";
import packaging_img2 from "../../assets/Services/DesigningServices/packaging-img3.jpg";
import design1 from "../../assets/Services/DesigningServices/creative-design1.jpg";
import design2 from "../../assets/Services/DesigningServices/creative-design2.jpg";
import design3 from "../../assets/Services/DesigningServices/creative-design3.jpg";
import design4 from "../../assets/Services/DesigningServices/creative-design4.jpg";
import design5 from "../../assets/Services/DesigningServices/creative-design5.jpg";
import design6 from "../../assets/Services/DesigningServices/creative-design6.jpg";
import design7 from "../../assets/Services/DesigningServices/creative-design7.jpg";
import design8 from "../../assets/Services/DesigningServices/creative-design8.jpg";
import design9 from "../../assets/Services/DesigningServices/creative-design9.jpg";
import design10 from "../../assets/Services/DesigningServices/creative-design10.jpg";

import print_img2 from "../../assets/Services/PrintMedia/prini-img2.jpeg";
import Newspaper_Ads from "../../assets/Services/PrintMedia/Newspaper-Ads.jpg";
import Pamphlet from "../../assets/Services/PrintMedia/Pamphlet.jpg";

import inshop1 from "../../assets/Services/BrandingStrategy/inshop1.jpg";
import inshop2 from "../../assets/Services/BrandingStrategy/inshop2.jpg";
import inshop3 from "../../assets/Services/BrandingStrategy/inshop3.jpg";
import inshop4 from "../../assets/Services/BrandingStrategy/inshop4.jpg";
import inshop5 from "../../assets/Services/BrandingStrategy/inshop5.jpg";
import inshop6 from "../../assets/Services/BrandingStrategy/inshop6.jpg";
import inshop7 from "../../assets/Services/BrandingStrategy/inshop7.jpg";
import inshop8 from "../../assets/Services/BrandingStrategy/inshop8.jpg";
import inshop9 from "../../assets/Services/BrandingStrategy/inshop9.jpg";

import Corporate_Event from "../../assets/Services/EventPromotion/Corporate-Event.jpg";
import mall from "../../assets/Services/EventPromotion/mall.png";
import event_promotion1 from "../../assets/Services/EventPromotion/event-promotion1.jpg";
import event_promotion2 from "../../assets/Services/EventPromotion/event-promotion2.jpg";
import event_promotion3 from "../../assets/Services/EventPromotion/event-promotion3.jpg";
import event_promotion4 from "../../assets/Services/EventPromotion/event-promotion4.jpg";

import homepageImage1 from "../../assets/Portfolio/homepage1.png";
import homepageImage2 from "../../assets/Portfolio/homepage2.png";
import homepageImage3 from "../../assets/Portfolio/homepage3.png";
import homepageImage4 from "../../assets/Portfolio/homepage4.png";
import homepageImage5 from "../../assets/Portfolio/homepage5.png";
import homepageImage6 from "../../assets/Portfolio/homepage6.png";
import homepageImage7 from "../../assets/Portfolio/homepage7.png";

import external_link from "../../assets/Portfolio/external-link.png";

function Portfolio() {
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
          boxShadow: "0px 0px 10px gray",
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
          boxShadow: "0px 0px 10px gray",
        }}
        onClick={onClick}
      />
    );
  }

  const settings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    centerPadding: "60px",
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 100,
    speed: 5000,
    cssEase: "linear",
    rtl: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          pauseOnHover: false,
          speed: 5000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          pauseOnHover: false,
          speed: 5000,
          cssEase: "linear",
        },
      },
    ],
  };

  const settings2 = {
    ...settings1,
    rtl: false,
  };

  const settings3 = {
    ...settings1,
    rtl: true,
  };

  const settings4 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    centerPadding: "60px",
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    speed: 5000,
    cssEase: "linear",
    rtl: false,
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
          pauseOnHover: false,
          speed: 5000,
          cssEase: "linear",
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

  const settings5 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    centerPadding: "60px",
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 100,
    speed: 5000,
    cssEase: "linear",
    rtl: true,
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
          pauseOnHover: false,
          speed: 5000,
          cssEase: "linear",
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
  const settings6 = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    centerPadding: "60px",
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    autoplaySpeed: 100,
    speed: 5000,
    cssEase: "linear",
    rtl: false,
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
          pauseOnHover: false,
          speed: 5000,
          cssEase: "linear",
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
    <div className="portfolio">
      <Helmet>
        <title>Portfolio | SP Advertising</title>
        <meta
          name="description"
          content="Explore SP Advertising’s portfolio to see our successful projects! From branding to digital marketing, our work showcases our expertise. Let it speak for itself!"
        />
        <meta
          name="keywords"
          content="Our portfolio, SP Advertising portfolio, Best design portfolio, Professional portfolio, Portfolio of work,"
        />
      </Helmet>

      <div className="img-back">
        <div className="img-back-con">
          <div className="portfolio-heading">
            <div className="port-text">
              <h3>Portfolio</h3>
              <h1 data-aos="fade-up" data-aos-duration="500">
                Explore Our Success Stories
              </h1>
              <p data-aos="fade-up" data-aos-duration="1000">
                "We take pride in showcasing our diverse range of projects that
                have driven success to many of our valued clients."
              </p>
            </div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757488264/heading-img_tlrqoj.jpg"
              }
              alt=""
              data-aos="fade-up"
              data-aos-duration="1500"
            />
          </div>
        </div>
      </div>
      <div className="port-slider">
        <div className="portfolio-title">
          <h1>
            OUTDOOR ADVERTISING<p>OUTDOOR ADVERTISING</p>
          </h1>
        </div>
        <Slider {...settings1} className="portfolio-slider">
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757484088/showcase1_ibken4.webp"
              }
              alt=""
            />
          </div>
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757484049/showcase2_dobyet.jpg"
              }
              alt=""
            />
          </div>
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757484053/gantry_lkz78t.jpg"
              }
              alt=""
            />
          </div>
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757484090/outdoor-advertising12_rguyfv.jpg"
              }
              alt=""
            />
          </div>
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757484094/outdoor-advertising22_w3rsb0.jpg"
              }
              alt=""
            />
          </div>

          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757484064/outdoor-advertising5_xnxegi.jpg"
              }
              alt=""
            />
          </div>
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757484067/outdoor-advertising6_xrjlo0.jpg"
              }
              alt=""
            />
          </div>
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757484070/outdoor-advertising7_ytwr4r.jpg"
              }
              alt=""
            />
          </div>

          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757484076/outdoor-advertising9_oq8taa.jpg"
              }
              alt=""
            />
          </div>
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757484079/outdoor-advertising10_syjgsy.jpg"
              }
              alt=""
            />
          </div>
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757484082/outdoor-advertising11_spee3x.jpg"
              }
              alt=""
            />
          </div>
        </Slider>
      </div>
      <div className="port-slider">
        <div className="portfolio-title">
          <h1>
            DIGITAL MARKETING<p>DIGITAL MARKETING</p>
          </h1>
        </div>

        <Slider {...settings2} className="portfolio-slider">
          <div className="portfolio-dm">
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757484760/digital-marketing-img5_ugqfzi.jpg"
              }
              alt="Digital Marketing in Raipur"
            />
          </div>
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757484747/digital-marketing-img6_srwm66.jpg"
              }
              alt="Digital Marketing in Raipur"
            />
          </div>
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757484764/digital-marketing-img7_pqua3m.jpg"
              }
              alt="Digital Marketing in Raipur"
            />
          </div>
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757484774/digital-marketing-img8_szaqgi.jpg"
              }
              alt="Digital Marketing in Raipur"
            />
          </div>
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757484767/digital-marketing-img9_ixorf0.jpg"
              }
              alt="Digital Marketing in Raipur"
            />
          </div>
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757484778/digital-marketing-img10_zpfqqg.jpg"
              }
              alt="Digital Marketing in Raipur"
            />
          </div>
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757484770/digital-marketing-img12_oywo3u.png"
              }
              alt="Digital Marketing in Raipur"
            />
          </div>
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757484781/digital-marketing-img13_pwiggj.jpg"
              }
              alt="Digital Marketing in Raipur"
            />
          </div>
        </Slider>
      </div>
      <div className="port-slider">
        <div className="portfolio-title">
          <h1>
            CREATIVE DESIGNS<p>CREATIVE DESIGNS</p>
          </h1>
        </div>

        <Slider {...settings3} className="portfolio-slider">
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757486639/creative-design1_pigpm3.jpg"
              }
              alt="Creative Concepts in Raipur"
            />
          </div>
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757486643/creative-design2_g1w218.jpg"
              }
              alt="Creative Concepts in Raipur"
            />
          </div>
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757486647/creative-design3_n3gwfu.jpg"
              }
              alt="Creative Concepts in Raipur"
            />
          </div>
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757486651/creative-design4_gpleok.jpg"
              }
              alt="Creative Concepts in Raipur"
            />
          </div>
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757486656/creative-design5_fpvzco.jpg"
              }
              alt="Creative Concepts in Raipur"
            />
          </div>
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757486661/creative-design6_a2izof.jpg"
              }
              alt="Creative Concepts in Raipur"
            />
          </div>
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757486666/creative-design7_nallsd.jpg"
              }
              alt="Creative Concepts in Raipur"
            />
          </div>
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757486671/creative-design8_rcyoqf.jpg"
              }
              alt="Creative Concepts in Raipur"
            />
          </div>

          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757486690/creative-design10_uamygi.jpg"
              }
              alt=""
            />
          </div>
        </Slider>
      </div>
      <div className="port-slider">
        <div className="portfolio-title">
          <h1>
            PRINT MEDIA<p>PRINT MEDIA</p>
          </h1>
        </div>

        <Slider {...settings4} className="portfolio-slider">
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757487993/prini-img2_cioi9u.jpg"
              }
              alt="Print Media in in Raipur"
            />
          </div>
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757487965/Newspaper-Ads_yyx1dg.jpg"
              }
              alt="Print Media in in Raipur"
            />
          </div>
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757487971/Pamphlet_ltrkjx.jpg"
              }
              alt="Print Media in in Raipur"
            />
          </div>
        </Slider>
      </div>
      <div className="port-slider">
        <div className="portfolio-title">
          <h1>
            IN-SHOP BRANDING<p>IN-SHOP BRANDING</p>
          </h1>
        </div>

        <Slider {...settings5} className="portfolio-slider">
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757487365/inshop1_hlntam.jpg"
              }
              alt="In-Shop Branding in Raipur"
            />
          </div>
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757487370/inshop2_jmrbf2.jpg"
              }
              alt="In-Shop Branding company in Raipur"
            />
          </div>
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757487375/inshop3_lk940f.jpg"
              }
              alt="In-Shop Branding agency in Raipur"
            />
          </div>
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757487381/inshop4_iemvnw.jpg"
              }
              alt="In-Shop Branding"
            />
          </div>
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757487422/inshop5_ea2nmb.jpg"
              }
              alt="In-Shop advertising in Raipur"
            />
          </div>

          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757487433/inshop7_i3yomm.jpg"
              }
              alt="In-Shop promotion in Raipur"
            />
          </div>
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757487439/inshop8_ntzuwp.jpg"
              }
              alt="In-Shop Branding company in chhattisgarh"
            />
          </div>
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757487340/inshop9_ggfzgy.jpg"
              }
              alt="In-Shop advertising company"
            />
          </div>
        </Slider>
      </div>
      <div className="port-slider">
        <div className="portfolio-title">
          <h1>
            EVENT PROMOTION<p>EVENT PROMOTION</p>
          </h1>
        </div>

        <Slider {...settings6} className="portfolio-slider">
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757487833/event-promotion1_hdngkd.jpg"
              }
              alt="Event Promotion in Raipur"
            />
          </div>
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757487843/event-promotion2_e0zkn4.jpg"
              }
              alt="Event Promotion in Raipur"
            />
          </div>
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757487865/event-promotion3_lnvce5.jpg"
              }
              alt="Event Promotion in Raipur"
            />
          </div>
          <div>
            <ImageLoader
              src={loading}
              data-src={
                "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757487790/event-promotion4_ebzq7a.jpg"
              }
              alt="Event Promotion in Raipur"
            />
          </div>
        </Slider>
      </div>
      <div className="port-slider">
        <div className="portfolio-title">
          <h1>
            WEBSITE DEVELOPMENT<p>WEBSITE DEVELOPMENT</p>
          </h1>
        </div>

        <Slider {...settings5} className="portfolio-slider-website">
          <div className="website-con">
            <a href="https://cleveryoungsters.in/">
              <div className="website-absolute">
                <ImageLoader
                  src={loading}
                  data-src={
                    "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757489607/homepage1_stn9hh.png"
                  }
                  alt=""
                />
                <div className="website-visit">
                  <p>visit website</p>
                </div>
              </div>
            </a>
          </div>
          <div className="website-con">
            <a href="https://www.nirmaantmt.com/">
              <div className="website-absolute">
                <ImageLoader
                  src={loading}
                  data-src={
                    "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757489615/homepage2_k5twkz.png"
                  }
                  alt=""
                />
                <div>
                  <p>visit website</p>
                </div>
              </div>
            </a>
          </div>
          <div className="website-con">
            <a href="https://sprn.in/">
              <div className="website-absolute">
                <ImageLoader
                  src={loading}
                  data-src={
                    "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757489624/homepage3_vrgmhb.png"
                  }
                  alt=""
                />
                <div>
                  <p>visit website</p>
                </div>
              </div>
            </a>
          </div>
          <div className="website-con">
            <a href="https://coldfistfitnessclub.in/">
              <div className="website-absolute">
                <ImageLoader
                  src={loading}
                  data-src={
                    "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757489632/homepage4_k86dtk.png"
                  }
                  alt=""
                />
                <div>
                  <p>visit website</p>
                </div>
              </div>
            </a>
          </div>
          <div className="website-con">
            <a href="https://drchitraendocare.com">
              <div className="website-absolute">
                <ImageLoader
                  src={loading}
                  data-src={
                    "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757489642/homepage5_o0ofjn.png"
                  }
                  alt=""
                />
                <div>
                  <p>visit website</p>
                </div>
              </div>
            </a>
          </div>
          <div className="website-con">
            <a href="https://muraadconstruction.com">
              <div className="website-absolute">
                <ImageLoader
                  src={loading}
                  data-src={
                    "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757489656/homepage6_xgdexz.png"
                  }
                  alt=""
                />
                <div>
                  <p>visit website</p>
                </div>
              </div>
            </a>
          </div>
          <div className="website-con">
            <a href="https://irefraipur.in/">
              <div className="website-absolute">
                <ImageLoader
                  src={loading}
                  data-src={
                    "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757489684/homepage7_egs0ov.png"
                  }
                  alt=""
                />
                <div>
                  <p>visit website</p>
                </div>
              </div>
            </a>
          </div>
        </Slider>
      </div>
      <div className="port-slider ">
        <div className="portfolio-title">
          <h1>
            VIDEOS PROMOTIONAL<p>VIDEOS PROMOTIONAL</p>
          </h1>
        </div>

        <Slider {...settings4} className="youtube-video">
          <div>
            <iframe
              loading="lazy"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/advdAc9T4t4?si=qQYkKMioC5eTPJh7"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              loading="lazy"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/x6krlcfwAu4?si=2LKIbHunn6T2HiBE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              loading="lazy"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/NhAMivemT74?si=2o-mpo5AgLuys5EL"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              loading="lazy"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ngh3UnPYdtA?si=DPVz_SvvBIbsHZ0F"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              loading="lazy"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/PYK6dejbeEw?si=74EuiYES1bJ-KJX9"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              loading="lazy"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Vr-AeBMXcsw?si=YS4vkiAb3wtGeFmC"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              loading="lazy"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/aZ-602v_lzI?si=wdNE5Bl9ipInf4Rq"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              loading="lazy"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/44wW3594gws?si=jpIkdJOxUx4gxek2"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <iframe
              loading="lazy"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/QoAE0WHyHA0?si=uBFNWlH3sjuMso-h"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </Slider>
      </div>
      <div className="fort-footer">
        <div className="fort-cover">
          <div className="fort-footer-con">
            <h1>Ready to elevate your brand </h1>
            <p>
              Ready to elevate your brand? SP Advertising in Raipur offers
              creative and strategic solutions to boost your brand's visibility,
              drive engagement, and achieve exceptional growth in today's
              competitive market.
            </p>
            <Link to={"/contact"}>
              <button>Let's Take Flight</button>
            </Link>
          </div>
          <iframe
            loading="lazy"
            className="video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Mcieg9x-nJk?si=Kh4KZGEKY7cQWX3j"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
