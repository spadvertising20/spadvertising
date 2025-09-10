import React from "react";
import "./OurTeam.css";

function OurTeam() {
  return (
    <div className="our-team-con">
      <div className="our-images">
        <div className="our-mission our-mission2">
          <div className="our-mission-con" data-aos="fade-up">
            <h1>We strive to help our clients have a Global impact.</h1>
            <p>
              We are dedicated to empowering our clients to make a global impact
              by providing innovative strategies and tailored solutions. Our
              goal is to help them expand their reach, build meaningful
              connections, and achieve success across diverse markets, fostering
              growth and establishing a strong presence on the international
              stage.
            </p>
          </div>
          <img
            
            src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757483907/vision_ycw1kj.jpg"}
            alt="Branding & Stradegy in Raipur"
            data-aos="fade-up"
          />
        </div>

        <div className="our-mission ">
          <img
            
            src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757483904/promise_losrqw.png"}
            alt="Print Media in Raipur"
            data-aos="fade-up"
          />
          <div className="our-mission-con" data-aos="fade-up">
            <h1>Our Promise</h1>
            <p>
              We are committed to delivering exceptional quality, fostering
              creativity, and driving impactful results. With a focus on your
              goals, we ensure every solution aligns with your vision. Your
              success fuels our passion, as we work together to create lasting
              achievements and build a foundation for mutual growth and
              excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
