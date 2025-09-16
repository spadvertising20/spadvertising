import React from "react";
import "./Sp_ad.css";
import Sp_about from "./Sp_about";
import Sp_services from "./Sp_services";
import Sp_nav from "./Sp_nav";
import Sp_contact from "./Sp_contact";
import Sp_footer from "./Sp_footer";
import Sp_popup from "./Sp_popup.jsx";

function Sp_ad() {
  return (
    <div className="app-wrapper">
      {/* Minimal internal CSS to fix horizontal scroll */}
      <style>{`
        html, body, .app-wrapper {
          overflow-x: hidden; /* Prevent left-right scroll */
          max-width: 100%;
        }
        section, .head, .head-content, .main_footer {
          max-width: 100%;
          overflow-x: hidden;
        }
        img, video {
          max-width: 100%;
          height: auto;
          display: block;
        }
      `}</style>

      {/* Navbar */}

      {/* <Sp_popup message="Welcome to SP Advertising!" duration={0} /> */}
      {/* <Sp_nav /> */}

      <div className="hero-section" id="home">
        <div className="hero-content">
          <div className="pill-btn">Welcome to SP Advertising →</div>

          <h1 className="hero-title">
            Revolutionize Your <br /> Marketing with <span>AI Power</span>
          </h1>

          <p className="hero-subtitle">
            Maximize ROI and unlock business potential with SP Advertising.
            Harness cutting-edge AI technology to create personalized campaigns
            that drive growth and lasting impact.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <a href="#contact">
              <button className="btn primary">Get Started</button>
            </a>
            <a href="https://wa.me/918085354646">
              <button className="btn secondary">Contact Us</button>
            </a>
            
          </div>
        </div>
      </div>

      <div id="about">
        <Sp_about />
      </div>

      <div id="services">
        <Sp_services />
      </div>

      <div id="contact">
        <Sp_contact />
      </div>

      {/* <Sp_footer /> */}
    </div>
  );
}

export default Sp_ad;
