import React, { useEffect, useState } from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import digital_marketing_img from "../../assets/Services/DigitalMarketing/digital-marketing-img.jpg";
import digital_marketing_img1 from "../../assets/Services/DigitalMarketing/digital-marketing-img1.jpg";
import digital_marketing_img2 from "../../assets/Services/DigitalMarketing/digital-marketing-img2.jpg";
import digital_marketing_img3 from "../../assets/Services/DigitalMarketing/digital-marketing-img3.jpg";
import digital_marketing_img4 from "../../assets/Services/DigitalMarketing/digital-marketing-img4.jpg";
import digital_marketing_img11 from "../../assets/Services/DigitalMarketing/digital-marketing-img11.jpg";

import loading from "../../assets/components/loading-image.png";
import ImageLoader from "../../elements/ImageLoader";
// Import images
import outdoor_ad1 from "../../assets/WhatWeDo/outdoor_ad1.png";
import digital_marketing from "../../assets/WhatWeDo/bullhorn.png";
import design_thinking from "../../assets/WhatWeDo/design-thinking.png";
import print_media from "../../assets/WhatWeDo/flyer.png";
import analysis from "../../assets/WhatWeDo/analysis.png";
import audio_visual from "../../assets/WhatWeDo/audio-visual.png";

// Import tick icons
import blue_tick from "../../assets/WhatWeDo/approved.png";
import red_tick from "../../assets/WhatWeDo/approved-red.png";
import yellow_tick from "../../assets/WhatWeDo/approved-yellow.png";
import orange_tick from "../../assets/WhatWeDo/approved-orange.png";
import purple_tick from "../../assets/WhatWeDo/approved-purple.png";
import lightblue_tick from "../../assets/WhatWeDo/approved-light-blue.png";
import WhyTrustUs from "../../elements/WhyTrustUs";

import web_development_icon from "../../assets/Services/DigitalMarketing/web_development_icon.png";
import sem_icon from "../../assets/Services/DigitalMarketing/sem_icon.png";
import socialmedia_marketing_icon from "../../assets/Services/DigitalMarketing/socialmedia_marketing_icon.png";
import mobile_app_development_icon from "../../assets/Services/DigitalMarketing/mobile_app_development_icon.png";

const services = [
  {
    img: web_development_icon,
    title: "Web Development",
    desc: (
      <>
        We build secure, scalable, and user-friendly websites designed for
        performance and engagement. With a focus on custom UI designs.
      </>
    ),
    link: "https://spadvertising.in/Outdoor-Advertising-in-Raipur",
    points: [
      "Mobile Hoarding",
      "Hoardings",
      "Gantry",
      "Pole Kiosk",
      "Society Branding",
    ],
    tick: blue_tick,
  },
  {
    img: sem_icon,
    title: "SEO and SEM",
    desc: (
      <>
        Improve your search engine rankings and attract organic traffic with our
        expert SEO services. From keyword targeting to advanced search engine
        positioning
      </>
    ),
    link: "https://spadvertising.in/Digital-Marketing-Agency-in-Raipur",
    points: [
      "Website Development",
      "SEO / SEM Optimization",
      "Social Media Marketing",
      "Application Development",
    ],
    tick: purple_tick,
  },
  {
    img: socialmedia_marketing_icon,
    title: "Social Media Marketing",
    desc: (
      <>
        Our customized social media strategies and Facebook advertising
        campaigns increase brand awareness and drive real engagement.
      </>
    ),
    link: "https://spadvertising.in/Designing-Services-in-Raipur",
    points: ["Packaging", "Creative Concepts", "Design & Artwork"],
    tick: yellow_tick,
  },
  {
    img: mobile_app_development_icon,
    title: "Mobile Applications",
    desc: (
      <>
        From concept to launch, our expert mobile app developers create
        intuitive and feature-rich apps for Android and iOS that deliver
        seamless user experiences.
      </>
    ),
    link: "https://spadvertising.in/Audio-Visuals-in-Raipur",
    points: [
      "Video Presentations",
      "Short Films / Documentary",
      "Radio & TV Commercials",
      "Photography & Videography",
    ],
    tick: lightblue_tick,
  },
];

function DigitalMarketing() {
  useEffect(() => {
    document.title =
      "Best Digital Marketing agency in Raipur | Digital Marketing services";

    document
      .querySelector("meta[name='description']")
      ?.setAttribute(
        "content",
        "Top digital marketing agency in Raipur (C.G.) offering expert services in SEO, social media marketing, website development and digital solutions in Chhattisgarh"
      );

    document
      .querySelector("meta[name='keywords']")
      ?.setAttribute(
        "content",
        "digital marketing services, digital marketing agency, marketing digital marketing, digital agency marketing, digital marketing company in raipur, digital marketing course in raipur, digital marketing in raipur, digital marketing agency in raipur, best digital marketing course in raipur"
      );
  }, []);
  const wcsservices = [
    "WEB DEVELOPMENT",
    "SEO AND SEM",
    "SOCIAL MEDIA PROMOTION",
    "MOBILE APPLICATIONS",
  ];

  return (
    <div className="service">
      <div className="service-box-con">
        <div className="service-box">
          <div className="service-left">
            <h1>Digital Marketing</h1>
            <p>
              Connecting Brands with Audiences: Digital Marketing Strategies for
              Enhanced Engagement
            </p>
            <Link to={"/Contact"}>
              <button>Enquire Now</button>
            </Link>
          </div>
          <div className="service-right">
            <ImageLoader
              src={loading}
              data-src={digital_marketing_img}
              alt="digital marketers"
              data-aos="zoom-in"
            />
          </div>
        </div>
      </div>
      <div className="service-con">
        <div className="ul">
          <div className="topic-align1" id="topic-align2">
            <div className="topic-left" data-aos="fade-right">
              <h1>
                Digital Marketing Services to Accelerate Your Online Growth
              </h1>
              <div className="service-para">
                {/* Looking for top-notch{" "}
                <a href="" aria-label="web development services">
                  web development services
                </a> */}
                At SP Advertising, we offer comprehensive digital marketing
                services designed to help your brand thrive in the digital
                landscape. Whether you're a startup looking to build visibility
                or an established business aiming to scale, our expert team
                crafts data-driven strategies that deliver real results.
              </div>
              <div className="service-para">
                We are one of the{" "}
                <a href="/Digital-Marketing-Agency-in-Raipur">
                  best digital marketing agency in Raipur
                </a>
                , We help you to grow your business and build your brand through
                SEO (Search Engine Optimization), Social Media Marketing, Paid
                Advertising, and Content Marketing. As a leading{" "}
                <a href="/Digital-Marketing-Agency-in-Raipur">
                  digital marketing agency in Chhattisgarh
                </a>
                , we help businesses establish a strong online presence, drive
                traffic to their websites, and generate leads.
              </div>
              {/* <h2>Why Choose Us?</h2>
              <ul>
                <li>
                  <strong> Top-Rated Web Development Company –</strong> We build
                  powerful, scalable, and secure websites.
                </li>
                <li>
                  <strong> Expert Web Developers Near You –</strong> Our skilled
                  professionals turn your vision into reality.
                </li>
                <li>
                  <strong> Custom UI Designs –</strong> Elevate your brand with
                  sleek, intuitive, and user-friendly interfaces.
                </li>
                <li>
                  <strong> End-to-End Web Solutions –</strong> From concept to
                  launch, we cover everything in website development.
                </li>
              </ul>
              <div className="service-para">
                Whether you need a web dev company for your startup or an
                experienced web site developer for your business, we’ve got you
                covered!
              </div>
              <div className="service-para">
                📩 Contact us today to transform your online presence with
                cutting-edge web site development services! 🚀
              </div> */}
              {/* <div className="service-btn">
                <a href="https://spadvertising.in/Contact">
                  <div className="service-btn1">Get Quote</div>
                </a>
                <a href="https://wa.me/918085354646">
                  <div className="service-btn2">Chat with Us</div>
                </a>
              </div> */}
            </div>

            <ImageLoader
              src={loading}
              data-src={digital_marketing_img11}
              alt="digital marketing agency"
              data-aos="zoom-in"
            />
          </div>

          {/* <div className="topic-align1">
            <ImageLoader
              src={loading}
              data-src={digital_marketing_img2}
              alt="digital marketing company"
              data-aos="zoom-in"
            />
            <div className="topic-left" data-aos="fade-right">
              <h1>Increase Online Visibility with Skilled SEO Services!</h1>
              <div className="service-para">
                Looking to rank higher on search engines and attract more
                customers? Your search ends here! We are a leading SEO agency
                specializing in SEO Engine Optimization to drive organic traffic
                and maximize your online success.
              </div>
              <h2>Why Choose Us?</h2>
              <ul>
                <li>
                  <strong> Top-Rated SEO Services –</strong> We implement
                  powerful strategies to improve your website’s search rankings.
                </li>
                <li>
                  <strong> Expert SEO Optimization Service –</strong> Our
                  specialists use cutting-edge techniques for maximum
                  visibility.
                </li>
                <li>
                  <strong> Search Engine Positioning SEO –</strong> Get ahead of
                  your competitors with strategic keyword targeting.
                </li>
                <li>
                  <strong> Advanced SEO Search Engine Tools –</strong> We
                  leverage the latest tools to track, analyze, and enhance
                  performance.
                </li>
                <li>
                  <strong> Customized Search Optimization –</strong> Tailored
                  solutions to boost your brand’s online authority.
                </li>
              </ul>
              <div className="service-para">
                Whether you need SEO Search Optimization for a new website or
                want to improve your current Search Engine Optimisation SEO,
                we’ve got you covered!
              </div>
              <div className="service-para">
                📩 Contact us today and let’s take your website to the top of
                search results! 🚀
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
          </div>

          <div className="topic-align1" id="topic-align2">
            <div className="topic-left" data-aos="fade-right">
              <h1>
                Increase the Visibility of Your Brand with Skilled Social Media
                Promotion!
              </h1>
              <div className="service-para">
                Struggling to get noticed online? Our Facebook Advertising
                Management and Social Media Marketing services help businesses
                like yours stand out, engage audiences, and drive real results.
              </div>
              <h2>Why Choose Us?</h2>
              <ul>
                <li>
                  <strong> Top-Tier SMM Marketing –</strong> We craft targeted
                  campaigns that convert.
                </li>
                <li>
                  <strong>
                    Expert Social Media and Marketing Strategies –
                  </strong>{" "}
                  Grow your brand with data-driven insights.
                </li>
                <li>
                  <strong> SNS Marketing Solutions –</strong> Reach the right
                  audience on Facebook, Instagram, and more.
                </li>
                <li>
                  <strong> Marketing Through Social Media –</strong> Boost
                  engagement and brand awareness effectively.
                </li>
                <li>
                  <strong> Comprehensive SMM Social Media Marketing –</strong>{" "}
                  From strategy to execution, we handle it all.
                </li>
                <li>
                  <strong> Proven Media in Marketing Techniques –</strong>{" "}
                  Leverage high-performing content to increase conversions.
                </li>
                <li>
                  <strong> Leading Social Media Marketing Agency –</strong>{" "}
                  Trusted by businesses to deliver measurable success.
                </li>
              </ul>
              <div className="service-para">
                Whether you're a startup or an established brand, our Social
                Media Mar experts create customized campaigns to elevate your
                online presence and drive sales.
              </div>
              <div className="service-para">
                📩 Contact us today and take your social media marketing to the
                next level! 🚀
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

            <ImageLoader
              src={loading}
              data-src={digital_marketing_img3}
              alt="digital marketing services"
              data-aos="zoom-in"
            />
          </div>

          <div className="topic-align1">
            <ImageLoader
              src={loading}
              data-src={digital_marketing_img4}
              alt="digital marketing near me"
              data-aos="zoom-in"
            />
            <div className="topic-left" data-aos="fade-right">
              <h1>Convert Your Concepts into Effective Mobile Applications!</h1>
              <div className="service-para">
                Looking for top-notch{" "}
                <strong>Mobile Application Development</strong> services? Your
                search ends here! We are a leading{" "}
                <strong>Mobile App Development Company</strong> dedicated to
                crafting high-performance, user-friendly, and innovative mobile
                solutions tailored to your business needs.
              </div>
              <h2>Why Choose Us?</h2>
              <ul>
                <li>
                  <strong> Expert App Development –</strong> We create
                  feature-rich and scalable mobile applications.
                </li>
                <li>
                  <strong> Skilled Mobile App Developers –</strong> Our team
                  turns your vision into a seamless digital experience.
                </li>
                <li>
                  <strong> Custom Mobile Phone App Development –</strong>{" "}
                  Tailored solutions for Android & iOS platforms.
                </li>
                <li>
                  <strong> End-to-End Mobile App Dev –</strong> From concept to
                  deployment, we handle everything.
                </li>
                <li>
                  <strong>Experienced Mobile Application Developers –</strong>{" "}
                  We build cutting-edge apps with the latest technology.
                </li>
                <li>
                  <strong>
                    Complete Mobile Application and Development Services –
                  </strong>{" "}
                  UX/UI design, coding, testing & launch.
                </li>
                <li>
                  <strong> Innovative Apps to Develop –</strong> We bring your
                  app ideas to life with creativity and expertise.
                </li>
              </ul>
              <div className="service-para">
                Whether you need a business app, eCommerce platform, or custom
                software solution, we’re here to help!
              </div>
              <div className="service-para">
                📩{" "}
                <strong>
                  Contact us today to build a high-quality mobile app and take
                  your business to the next level! 🚀
                </strong>
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
          </div> */}

          <div className="whatwedo-box1">
            {services.map((service, index) => (
              <div key={index} className="wwd-box1">
                <img
                  loading="lazy"
                  src={service.img}
                  alt={service.title}
                  className="outdoor-image"
                />
                <h2>{service.title}</h2>
                <p className="desc1">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="shadow">
        <a href="/portfolio">
          <button>Explore Our Work</button>
        </a>
      </div>
      <WhyTrustUs services={wcsservices} />
    </div>
  );
}

export default DigitalMarketing;
