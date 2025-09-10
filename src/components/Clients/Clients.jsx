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
                 <img loading="lazy" src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482869/client1_eperoe.png"} alt="outdoor advertising companies" />

          <img loading="lazy" src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482870/client2_dgj1fr.png"} alt="social media marketing agency near me" />

          <img loading="lazy" src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482872/client3_jvsa0m.jpg"} alt="digital marketing ads" />

          <img loading="lazy" src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482873/client4_rjmawq.png"} alt="digital marketing advertising" />
          <img loading="lazy"
            className="img-visible"
            src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482879/client7_yaipke.png"}
            alt="billboard advertising companies"
          />
          <img loading="lazy" src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482875/client5_kujipr.svg"} alt="best advertising" />
          <img loading="lazy" className="img-visible" src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482877/client6_djuwum.webp"} alt="ad makers" />

          <img loading="lazy" src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482880/client8_migh3c.jpg"} alt="outdoor billboard companies" />

          <img loading="lazy" src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482883/client9_ci5bbw.png"} alt="advertising and marketing companies" />

          <img loading="lazy" src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482853/client10_n1xmxs.svg"} alt="advertising on billboards" />

          <img loading="lazy" src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482884/client11_f335i2.png"} alt="top ad agencies" />

          <img loading="lazy" src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482887/client12_ntduvd.jpg"} alt="advertising firms near me" />

          <img loading="lazy" src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482889/client13_d5gb6q.png"} alt="construction advertisement" />

          <img loading="lazy" src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482890/client14_xrxfr1.png"} alt="ad marketing agency" />

          <img loading="lazy" className="img-visible" src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482893/client15_kokywc.webp"} alt="agency google ads" />

          <img loading="lazy" src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482895/client16_nahaov.jpg"} alt="brand advertising" />

          <img loading="lazy" src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482868/client17_cukctw.webp"} alt="linkedin ads management" />
     
            </Slider>
          </div>
        </div>
      </div>
    );
  }

  export default WelcomePage;
