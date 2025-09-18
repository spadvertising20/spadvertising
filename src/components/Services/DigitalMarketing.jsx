import React, { useEffect, useState } from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import loading from "../../assets/components/loading-image.png";
import ImageLoader from "../../elements/ImageLoader";
import WhyTrustUs from "../../elements/WhyTrustUs";



const services = [
  {
    img: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757484728/web_development_icon_wry9m5.png",
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

  },
  {
    img: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757484754/sem_icon_wlchyj.png",
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

  },
  {
    img: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757484757/socialmedia_marketing_icon_ziohyx.png",
    title: "Social Media Marketing",
    desc: (
      <>
        Our customized social media strategies and Facebook advertising
        campaigns increase brand awareness and drive real engagement.
      </>
    ),
    link: "https://spadvertising.in/Designing-Services-in-Raipur",
    points: ["Packaging", "Creative Concepts", "Design & Artwork"],

  },
  {
    img: "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757484751/mobile_app_development_icon_gjrypr.png",
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
              data-src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757484730/digital-marketing-img_ssfn0j.png"}
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
            </div>

            <ImageLoader
              src={loading}
              data-src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757484744/digital-marketing-img11_ijltbh.jpg"}
              alt="digital marketing agency"
              data-aos="zoom-in"
            />
          </div>



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
