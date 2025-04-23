import React from "react";
import { Link } from "react-router-dom";
import "./Hero.css";

import img_bg from "../../assets/Home/bg.png";
import hero_bg from "../../assets/Home/hero_bg.png";
import hero_outdoor from "../../assets/Home/hero_outdoor.png";
import hero_digital from "../../assets/Home/hero_digital.png";
import hero_design from "../../assets/Home/hero_design.png";
import hero_event from "../../assets/Home/hero_event.png";
import right_arrow from "../../assets/Home/right-arrow.png";

export default function AnimationHero() {
  return (
    <section className="hero">
      <div className="hero-con">
        <div className="shadow-effect"></div>

        <div className="hero-content">
          <h1>Empowering Your Brand with Strategic Advertising</h1>
          <h2 className="typing-effect"></h2>
          <p>
            Welcome to SP ADVERTISING, one of the most creative and
            well-established advertising agencies in Raipur, Chhattisgarh. With
            SP Advertising, make your brand live better.
          </p>
          <br />
          <a href="https://spadvertising.in/Services" target="_blank" rel="noopener noreferrer">
            <button className="hero-btn">
              Get Services
              <div className="btn-hover">
                <img src={right_arrow} alt="Digital Marketing in Raipur" />
              </div>
            </button>
          </a>
        </div>

        <div className="hero-anim-bg">
          <img
            src={img_bg}
            alt="Advertising in Raipur"
            className="services-con"
          />
          <img
            src={hero_bg}
            alt="Creatives Designing Services in Raipur"
            className="hero-anim-img"
          />
        </div>

        <div className="hero-images">
          <div className="round">
            <div className="round-con">
              <div className="round-ele1">
                <div className="hero-box">
                  <img
                    src={hero_outdoor}
                    alt="Advertising agency near me"
                    className="img-rotate1"
                  />
                </div>
                <div className="hero-box">
                  <img
                    src={hero_digital}
                    alt="Advertising agency jobs"
                    className="img-rotate2"
                  />
                </div>
              </div>

              <div className="round-ele2">
                <div className="hero-box">
                  <img
                    src={hero_design}
                    alt="Top Advertising agency in Raipur"
                    className="img-rotate3"
                  />
                </div>
                <div className="hero-box">
                  <img
                    src={hero_event}
                    alt="Advertising agency in Raipur"
                    className="img-rotate4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
