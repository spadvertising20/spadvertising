import React from "react";
import "./Expertise.css";

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

const services = [
  {
    img: outdoor_ad1,
    title: "Outdoor Advertising",
    desc: (
      <>
        Grow your brand with the{" "}
        <a
          href="https://spadvertising.in/Outdoor-Advertising-in-Raipur"
          aria-label="best outdoor advertising agency in Raipur"
        >
          best outdoor advertising agency in Raipur
        </a>
        , offering hoardings, gantry, and mobile advertising solutions.
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
    img: digital_marketing,
    title: "Digital Marketing",
    desc: (
      <>
        Boost your business with a{" "}
        <a
          href="https://spadvertising.in/Digital-Marketing-Agency-in-Raipur"
          aria-label="leading digital marketing company in Raipur"
        >
          leading digital marketing company in Raipur
        </a>
        , offering SEO, social media, and advertising solutions.
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
    img: design_thinking,
    title: "Designing Services",
    desc: (
      <>
        Elevate your brand with a{" "}
        <a
          href="https://spadvertising.in/Designing-Services-in-Raipur"
          aria-label="top design services company in Raipur"
        >
          top design services company in Raipur
        </a>
        , specializing in logos, graphics, and creative web designs.
      </>
    ),
    link: "https://spadvertising.in/Designing-Services-in-Raipur",
    points: ["Packaging", "Creative Concepts", "Design & Artwork"],
    tick: yellow_tick,
  },
  {
    img: audio_visual,
    title: "Audio Visual",
    desc: (
      <>
        Enhance your events with{" "}
        <a
          href="https://spadvertising.in/Audio-Visuals-in-Raipur"
          aria-label="top-notch audio-visual services in Raipur"
        >
          top-notch audio-visual services in Raipur
        </a>
        , offering sound systems, video setups, and seamless presentations.
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
  {
    img: analysis,
    title: "Branding & Strategy",
    desc: (
      <>
        A{" "}
        <a
          href="https://spadvertising.in/Branding-Strategy-in-Raipur"
          aria-label="leading branding & strategy company in Raipur"
        >
          leading branding & strategy company in Raipur
        </a>
        , crafting impactful brand identities and growth-driven marketing
        strategies.
      </>
    ),
    link: "https://spadvertising.in/Branding-Strategy-in-Raipur",
    points: [
      "Communication Strategy",
      "Creative 360 Campaigns",
      "Corporate and Brand Identity",
    ],
    tick: orange_tick,
  },
  {
    img: print_media,
    title: "Print Media",
    desc: (
      <>
        Promote your brand with a{" "}
        <a
          href="https://spadvertising.in/Event-Promotion-in-Raipur"
          aria-label="trusted print media company in Raipur"
        >
          trusted print media company in Raipur,
        </a>
        that offers high-quality printing solutions for various needs.
      </>
    ),
    link: "https://spadvertising.in/Event-Promotion-in-Raipur",
    points: ["News Paper Ads", "Brochure", "Pamphlet", "In-Shop Branding"],
    tick: red_tick,
  },
];

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
          {services.map((service, index) => (
            <div key={index} className="wwd-box" data-aos="fade-up">
              <img
                loading="lazy"
                src={service.img}
                alt={service.title}
                className="outdoor-image"
              />
              <h3>{service.title}</h3>
              <p className="desc1">{service.desc}</p>
              <div className="points">
                {service.points.map((point, i) => (
                  <div key={i} className="points-box">
                    <img loading="lazy" src={service.tick} alt={point} />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
