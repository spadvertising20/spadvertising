import React from "react";
import "./About.css";
import about_team from "../../assets/AboutMe/about-imge1.jpg";
import { Link } from "react-router-dom";  

export default function HomeAbout() {
  return (
    <div className="home-about">
      <div className="about-title">
        <h1>
          ABOUT US<p>ABOUT US</p>
        </h1>
      </div>
      <div className="home-about-con">
        <div className="home-content">
          <h1>The great team of industry experts behind Growth</h1>
          <p>
            Behind every success is a team of seasoned professionals. Meet our
            industry experts, who bring unparalleled expertise, innovation, and
            dedication to driving sustainable growth and transformation.
          </p>
          <Link to={"/About"}>
            <button>About Us</button>
          </Link>
        </div>
        
          <img src={about_team} alt="media marketing agency" loading="lazy"/>
        
      </div>
    </div>
  );
}
