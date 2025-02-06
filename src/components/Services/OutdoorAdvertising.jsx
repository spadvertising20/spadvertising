import React, { useEffect } from "react";
import "./Services.css";
import outdoor_img1 from "../../assets/Services/OutdoorAdvertising/outdoor-img1.png";
import { Link } from "react-router-dom";
import showcase1 from "../../assets/Services/OutdoorAdvertising/showcase1.webp";
import showcase2 from "../../assets/Services/OutdoorAdvertising/showcase2.webp";
import outdoor_img2 from "../../assets/Services/OutdoorAdvertising/outdoor-advertising5.jpg";
import gantry from "../../assets/Services/OutdoorAdvertising/gantry.jpg";
import { Helmet } from "react-helmet-async";

function OutdoorAdvertising() {

    useEffect(() => {
      document.title = "Best Outdoor Advertising company in Raipur | Outdoor Advertising services";
  
      document
        .querySelector("meta[name='description']")
        ?.setAttribute("content", "Boost your brand with expert outdoor advertising. From billboards to hoardings, we create impactful campaigns that drive results. Contact us today!");
  
      document
        .querySelector("meta[name='keywords']")
        ?.setAttribute("content", "outdoor advertising agency, Outdoor advertising services, Outdoor advertising agency in Raipur, Billboard advertising solutions, outdoor advertising companies, billboard advertising companies, outdoor billboard companies, billboard ad companies, out of home advertising companies");
    }, []);

  return (
    <div className="service">
      

      <div className="service-box-con">
        <div className="service-box">
          <div className="service-left">
            <h1>Outdoor Advertising</h1>
            <p data-aos="fade-right">
              Capturing Attention On-the-Go: The Power of Outdoor Advertising in
              Public Spaces
            </p>
            <Link to={"/Contact"}>
              <button>Enquire Now</button>
            </Link>
          </div>
          <div className="service-right">
            <img
              src={outdoor_img1}
              alt="Outdoor Advertising agency in Raipur"
            />
          </div>
        </div>
      </div>

      <div className="service-con">
        <div className="ul">
          <div className="topic-align1" id="topic-align2">
            <div className="topic-left" data-aos="fade-right">
              <h1>Mobile Hoarding</h1>
              <p>
                Mobile Hoarding Advertising features large, movable panels on
                vehicles, offering flexible campaigns that reach high-traffic
                areas, events, or neighborhoods for dynamic exposure. SP
                Advertising provides top-notch Best Mobile Hoarding Advertising
                services, ensuring your brand gains maximum visibility and
                impact on the go.
              </p>
            </div>
            <img
              src={showcase1}
              alt=" Outdoor advertising services"
              data-aos="zoom-in"
            />
          </div>

          <div className="topic-align1">
            <img
              src={outdoor_img2}
              alt="Outdoor advertising near me"
              data-aos="zoom-in"
            />
            <div className="topic-left" data-aos="fade-right">
              <h1>Hoardings</h1>
              <p>
                Hoarding Advertising involves large, stationary boards placed in
                prominent locations to capture attention and deliver high-impact
                campaigns to both pedestrians and drivers. SP Advertising excels
                in providing Best Hoarding Advertising services, ensuring your
                brand achieves maximum visibility in key locations.
              </p>
            </div>
          </div>

          <div className="topic-align1" id="topic-align2">
            <div className="topic-left" data-aos="fade-right">
              <h1>Gantry</h1>
              <p>
                Gantries Advertising utilizes large, elevated structures that
                hold advertising panels or digital screens above roadways,
                highways, or busy intersections. Designed for maximum visibility
                from a distance, SP Advertising offers top-tier Best Gantries
                Advertising services to ensure your brand captures the attention
                of both drivers and pedestrians in high-traffic areas.
              </p>
            </div>
            <img
              src={gantry}
              alt="Billboard advertising solutions"
              data-aos="zoom-in"
            />
          </div>

          <div className="topic-align1">
            <img
              src={showcase2}
              alt="Outdoor Advertising agency"
              data-aos="zoom-in"
            />
            <div className="topic-left" data-aos="fade-right">
              <h1>Pole Kiosk</h1>
              <p>
                Pole kiosks Advertising features small vertical panels mounted
                on street poles, ideal for displaying posters or digital content
                in urban and high-traffic areas. SP Advertising specializes in
                Best Pole kiosks Advertising, providing strategic placements to
                maximize brand visibility and reach in key locations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutdoorAdvertising;
