import React from "react";
import "./Hero.css";


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
                <img src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757415832/right-arrow_tvq8vr.png"} alt="Digital Marketing in Raipur" />
              </div>
            </button>
          </a>
        </div>

        <div className="hero-anim-bg">
       
          <img
            src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757415833/hero_bg_bohbsv.png"}
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
                    src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757415836/hero_outdoor_dwhwaz.webp"}
                    alt="Advertising agency near me"
                    className="img-rotate1"
                  />
                </div>
                <div className="hero-box">
                  <img
                    src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757415834/hero_digital_awn9ce.webp"}
                    alt="Advertising agency jobs"
                    className="img-rotate2"
                  />
                </div>
              </div>

              <div className="round-ele2">
                <div className="hero-box">
                  <img
                    src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757415833/hero_design_v92til.webp"}
                    alt="Top Advertising agency in Raipur"
                    className="img-rotate3"
                  />
                </div>
                <div className="hero-box">
                  <img
                    src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757415834/hero_event_wayqdl.webp"}
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
