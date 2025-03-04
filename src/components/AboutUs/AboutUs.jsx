import React from "react";
import "./AboutUs.css";
import { Helmet } from "react-helmet";
import OurTeam from "./OurTeam";
import team_img1 from "../../assets/AboutMe/about-imge1.jpg";
import team_img2 from "../../assets/AboutMe/about-imge2.jpg";
import team_img3 from "../../assets/AboutMe/about-imge3.jpg";
import NeedHelp from "../Needhelp/NeedHelp";
import OurValues from "./OurValues";

function AboutMe() {
  return (
    <div className="global">
      <Helmet>
        <title>About Us | SP Advertising</title>
        <meta
          name="description"
          content="Discover how SP Advertising, a top advertising agency, delivers innovative strategies and measurable results to grow your brand. Learn more today!"
        />
        <meta
          name="keywords"
          content="About SP Advertising, Digital marketing in Raipur, Creative advertising agency, Outdoor Advertising in Raipur, Branding & Stradegy in Raipur, Print Media in Raipur, Event Promotion in Raipur, Audio and Visuals in Raipur "
        />
      </Helmet>

      <div className="global-box">
        <div className="about-me" id="about">
          <br />
          <br />

          <div className="about-me-con">
            <div className="about-me-box">
              <div className="about-details">
                <h3>ABOUT US</h3>
                <h1 data-aos="fade-up" data-aos-duration="1000">
                  "SP Advertising is not just a marketing agency, we’re your
                  partners in growth. We believe in transforming your vision
                  into reality."
                </h1>
                {/* <Link to={"/welcome-page"}><button>READ MORE</button></Link> */}
              </div>
            </div>
          </div>
          <div className="team-image">
            <div className="team-image-con">
              <img
                
                className="team-1"
                src={team_img1}
                alt="Digital marketing in Raipur"
              />
              <img
                
                className="team-2"
                src={team_img2}
                alt="Outdoor Advertising in Raipur"
              />
              <img
                
                className="team-3"
                src={team_img3}
                alt="Creative advertising agency"
              />
            </div>
          </div>
        </div>
      </div>
      <OurTeam />
      <OurValues />
    </div>
  );
}

export default AboutMe;
