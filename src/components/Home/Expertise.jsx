import React from "react";
import "./Expertise.css";
import img3 from "../../assets/WhatWeDo/img3.webp";
import img4 from "../../assets/WhatWeDo/img4.webp";
import img5 from "../../assets/WhatWeDo/img5.webp";
import img6 from "../../assets/WhatWeDo/img6.webp";
import outdoor_img1 from "../../assets/WhatWeDo/outdoor-img1.jpg";
import outdoor_ad1 from "../../assets/WhatWeDo/outdoor_ad1.png";
import digital_marketing from "../../assets/WhatWeDo/bullhorn.png";
import design_thinking from "../../assets/WhatWeDo/design-thinking.png";
import print_media from "../../assets/WhatWeDo/flyer.png";
import analysis from "../../assets/WhatWeDo/analysis.png";
import marketing from "../../assets/WhatWeDo/marketing.png";

import digital_marketing_img from "../../assets/WhatWeDo/digital-marketing-img.jpg";
import blue_tick from "../../assets/WhatWeDo/approved.png";
import red_tick from "../../assets/WhatWeDo/approved-red.png";
import yellow_tick from "../../assets/WhatWeDo/approved-yellow.png";
import orange_tick from "../../assets/WhatWeDo/approved-orange.png";
import purple_tick from "../../assets/WhatWeDo/approved-purple.png";
import lightblue_tick from "../../assets/WhatWeDo/approved-light-blue.png";
import audio_visual from "../../assets/WhatWeDo/audio-visual.png";

function WhatWeDo() {
  return (
    <div className="whatwedo" id="services">
      <div className="whatwedo-con">
        <div className="our-expertise">
          <h1>
            OUR EXPERTISE<p>OUR EXPERTISE</p>
          </h1>
        </div>

        <div className="service-heading">
          <h2>High-Impact Services to take your business to the next level</h2>
          <p>
            Accelerate your business growth with tailored, high-impact services
            to unlock new opportunities and maximize your brand's success.
          </p>
        </div>
        <div className="whatwedo-box">
          <div className="wwd-box" data-aos="fade-up">
            <img
              loading="lazy"
              src={outdoor_ad1}
              alt="best digital marketing agencies"
              className="outdoor-image"
            />
            <h3>Outdoor Advertising</h3>
            <p className="desc1">
              Grow your brand with the best{" "}
              <a href="https://spadvertising.in/Outdoor-Advertising-in-Raipur">
                {" "}
                outdoor advertising agency
              </a>{" "}
              in Raipur, offering hoardings, gantry, and mobile advertising
              solutions.
            </p>
            <div className="points">
              <div className="points-box">
                <img
                  loading="lazy"
                  src={blue_tick}
                  alt="social marketing agency"
                />
                <p>Mobile Hoarding</p>
              </div>
              <div className="points-box">
                <img
                  loading="lazy"
                  src={blue_tick}
                  alt="top digital marketing agency"
                />
                <p>Hoardings</p>
              </div>
              <div className="points-box">
                <img
                  loading="lazy"
                  src={blue_tick}
                  alt="marketing agency digital"
                />
                <p>Gantry</p>
              </div>
              <div className="points-box">
                <img
                  loading="lazy"
                  src={blue_tick}
                  alt="digital agency marketing"
                />
                <p>Pole Kiosk</p>
              </div>
            </div>
          </div>
          <div className="wwd-box" data-aos="fade-up">
            <img
              loading="lazy"
              src={digital_marketing}
              alt="best digital marketing firms"
              className="outdoor-image"
            />
            <h3>Digital Marketing</h3>
            <p className="desc1">
              Boost your business with a leading{" "}
              <a href="https://spadvertising.in/Digital-Marketing-in-Raipur">
                digital marketing company
              </a>{" "}
              in Raipur, that offers SEO, social media, and advertising
              solutions.
            </p>
            <div className="points">
              <div className="points-box">
                <img
                  loading="lazy"
                  src={purple_tick}
                  alt="digital marketing advertising agency"
                />
                <p>Website Development</p>
              </div>
              <div className="points-box">
                <img
                  loading="lazy"
                  src={purple_tick}
                  alt="digital marketing and advertising agency"
                />
                <p>SEO / SEM Optimization</p>
              </div>
              <div className="points-box">
                <img
                  loading="lazy"
                  src={purple_tick}
                  alt="biggest digital marketing agencies"
                />
                <p>Social Media Marketing</p>
              </div>
              <div className="points-box">
                <img
                  loading="lazy"
                  src={purple_tick}
                  alt="top digital advertising agencies"
                />
                <p>Application Development</p>
              </div>
            </div>
          </div>
          <div
            to={"/Designing-Services-in-Raipur"}
            className="wwd-box"
            data-aos="fade-up"
          >
            <img
              loading="lazy"
              src={design_thinking}
              alt="top digital ad agencies"
              className="outdoor-image"
            />
            <h3>Designing Services</h3>
            <p className="desc1">
              Elevate your brand with a top{" "}
              <a href="https://spadvertising.in/Designing-Services-in-Raipur">
                design services company
              </a>{" "}
              in Raipur, specializing in logos, graphics, and creative web
              designs.
            </p>
            <div className="points">
              <div className="points-box">
                <img loading="lazy" src={yellow_tick} alt="google ads agency" />
                <p>Packaging</p>
              </div>
              <div className="points-box">
                <img
                  loading="lazy"
                  src={yellow_tick}
                  alt="digital advertising"
                />
                <p>Creative Concepts</p>
              </div>
              <div className="points-box">
                <img
                  loading="lazy"
                  src={yellow_tick}
                  alt="marketing agency near me"
                />
                <p>Design & Artwork</p>
              </div>
            </div>
          </div>
          <div
            to={"/Audio-Visuals-in-Raipur"}
            className="wwd-box"
            data-aos="fade-up"
          >
            <img
              loading="lazy"
              src={audio_visual}
              alt="advertising on linkedin"
              className="outdoor-image"
            />
            <h3>Audio Visual</h3>
            <p className="desc1">
              Enhance your events with top-notch{" "}
              <a href="https://spadvertising.in/Designing-Services-in-Raipur">
                audio-visual services
              </a>{" "}
              in Raipur, offering sound systems, video setups, and seamless
              presentations.
            </p>
            <div className="points">
              <div className="points-box">
                <img loading="lazy" src={lightblue_tick} alt="ad agency" />
                <p>Video Presentations</p>
              </div>
              <div className="points-box">
                <img
                  loading="lazy"
                  src={lightblue_tick}
                  alt="add business to google maps"
                />
                <p>Short Films / Documentary</p>
              </div>
              <div className="points-box">
                <img loading="lazy" src={lightblue_tick} alt="ad network" />
                <p>Radio & TV Commercials</p>
              </div>
              <div className="points-box">
                <img
                  loading="lazy"
                  src={lightblue_tick}
                  alt="advertising agency near me"
                />
                <p>Photography & Videography</p>
              </div>
            </div>
          </div>

          <div
            to={"/Branding-Strategy-in-Raipur"}
            className="wwd-box"
            data-aos="fade-up"
          >
            <img
              loading="lazy"
              src={analysis}
              alt="creative agencies"
              className="outdoor-image"
            />
            <h3>Branding & Strategy</h3>
            <p className="desc1">
              Leading{" "}
              <a href="https://spadvertising.in/Branding-Strategy-in-Raipur">
                branding & strategy company
              </a>{" "}
              in Raipur, crafting impactful brand identities and growth-driven
              marketing strategies.
            </p>
            <div className="points">
              <div className="points-box">
                <img
                  loading="lazy"
                  src={orange_tick}
                  alt="billboard companies"
                />
                <p>Communication Strategy</p>
              </div>
              <div className="points-box">
                <img
                  loading="lazy"
                  src={orange_tick}
                  alt="digital marketing agency website"
                />
                <p>Creative 360 Campaigns</p>
              </div>
              <div className="points-box">
                <img
                  loading="lazy"
                  src={orange_tick}
                  alt="advertisement video maker"
                />
                <p>Corporate and Brand Identity</p>
              </div>
            </div>
          </div>
          <div
            to={"/Print-Media-in-Raipur"}
            className="wwd-box"
            data-aos="fade-up"
          >
            <img
              loading="lazy"
              src={print_media}
              alt="ad agencies near me"
              className="outdoor-image"
            />
            <h3>Print Media</h3>
            <p className="desc1">
              Promote your brand with a trusted{" "}
              <a href="https://spadvertising.in/Event-Promotion-in-Raipur">
                print media company
              </a>{" "}
              in Raipur that offers high-quality printing solutions for various
              needs.
            </p>
            <div className="points">
              <div className="points-box">
                <img
                  loading="lazy"
                  src={red_tick}
                  alt="best advertising agencies"
                />
                <p>News Paper Ads</p>
              </div>
              <div className="points-box">
                <img loading="lazy" src={red_tick} alt="ad company" />
                <p>Brochure</p>
              </div>
              <div className="points-box">
                <img loading="lazy" src={red_tick} alt="brand agencies" />
                <p>Pamphlet</p>
              </div>
              <div className="points-box">
                <img
                  loading="lazy"
                  src={red_tick}
                  alt="top advertising agencies"
                />
                <p>In-Shop Branding</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
