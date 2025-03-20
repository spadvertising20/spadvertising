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
    document.title =
      "Best Outdoor Advertising company in Raipur | Outdoor Advertising services";

    document
      .querySelector("meta[name='description']")
      ?.setAttribute(
        "content",
        "Boost your brand with expert outdoor advertising. From billboards to hoardings, we create impactful campaigns that drive results. Contact us today!"
      );

    document
      .querySelector("meta[name='keywords']")
      ?.setAttribute(
        "content",
        "outdoor advertising agency, Outdoor advertising services, Outdoor advertising agency in Raipur, Billboard advertising solutions, outdoor advertising companies, billboard advertising companies, outdoor billboard companies, billboard ad companies, out of home advertising companies"
      );
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
              <h1>
                Boost Your Brand with High-Impact Mobile Hoarding Advertising
              </h1>
              <div className="service-para">
                Looking for <a href="">Mobile Hoarding solutions</a> that grab
                attention? Our outdoor hoarding services ensure maximum
                visibility for your brand, delivering high engagement and
                recall.
              </div>
              <h2>Why Choose Our Mobile Hoarding Services?</h2>
              <ul>
                <li>
                  <strong>Affordable Advertisement Hoarding Cost –</strong> Get
                  premium advertising at competitive rates.
                </li>
                <li>
                  <strong>Billboard and Hoarding Options –</strong> Choose from
                  a variety of advertising formats.
                </li>
                <li>
                  <strong>Strategic Placement –</strong> We ensure your
                  billboard hoarding reaches the right audience.
                </li>
                <li>
                  <strong>Flexible Hoarding Advertising Price –</strong>{" "}
                  Customizable packages to fit your budget.
                </li>
                <li>
                  <strong>Outdoor Hoarding Advertising –</strong> Target
                  high-traffic areas for better impact.
                </li>
              </ul>
              <div className="service-btn">
                <a href="https://spadvertising.in/Contact">
                  <div className="service-btn1">Get Quote</div>
                </a>
                <a href="https://wa.me/918085354646">
                  <div className="service-btn2">Chat with Us</div>
                </a>
              </div>
            </div>
            <img
              loading="lazy"
              src={showcase1}
              alt=" Outdoor advertising services"
              data-aos="zoom-in"
            />
          </div>

          <div className="topic-align1">
            <img
              loading="lazy"
              src={outdoor_img2}
              alt="Outdoor advertising near me"
              data-aos="zoom-in"
            />
            <div className="topic-left" data-aos="fade-right">
              <h1>
                High-Impact Hoarding Advertising for Maximum Brand Exposure
              </h1>
              <div className="service-para">
                Looking for the <a href="">best advertising hoardings</a> to
                promote your brand? Our ad hoarding solutions provide high
                visibility and ensure your message reaches a vast audience. With
                strategically placed outdoor hoarding, you can make a lasting
                impression in high-traffic areas.
              </div>
              <h2>Why Invest in Hoarding Advertising?</h2>
              <ul>
                <li>
                  <strong>Cost-Effective Advertisement Hoarding –</strong> Get
                  the best advertisement hoarding cost with flexible pricing
                  options.
                </li>
                <li>
                  <strong>Billboard and Hoarding Solutions – </strong> We offer
                  premium billboard hoarding placements for ultimate exposure.
                </li>
                <li>
                  <strong>Affordable Hoarding Advertising Cost –</strong>{" "}
                  Competitive rates to fit your marketing budget.
                </li>
                <li>
                  <strong>Transparent Hoarding Advertising Price –</strong> No
                  hidden fees, just effective advertising.
                </li>
                <li>
                  <strong>Outdoor Hoarding Advertising – </strong> Target busy
                  streets, commercial hubs, and prime locations.
                </li>
              </ul>
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
                High-Impact Gantries Advertising for Maximum Brand Exposure
              </h1>
              <div className="service-para">
                Looking for premium <a href="">Gantries Advertising</a> to boost
                your brand visibility? Gantry billboards are strategically
                placed on highways and major roads, ensuring high engagement and
                maximum reach. With large, eye-catching displays, Gantries
                Advertising guarantees that your message stands out in
                high-traffic areas.
              </div>
              <h2>Why Choose Gantries Advertising?</h2>
              <ul>
                <li>
                  <strong>Maximum Visibility –</strong> Placed on highways and
                  busy roads for continuous exposure.
                </li>
                <li>
                  <strong> 24/7 Brand Promotion – </strong> Your ad is always
                  visible, day and night.
                </li>
                <li>
                  <strong> Cost-Effective Marketing –</strong> High ROI compared
                  to other advertising mediums.
                </li>
                <li>
                  <strong>Targeted Reach – </strong> Engage thousands of daily
                  commuters and travelers.
                </li>
                <li>
                  <strong> Premium Locations – </strong> Select from prime spots
                  to get the best audience engagement.
                </li>
              </ul>
              <div className="service-btn">
                <a href="https://spadvertising.in/Contact">
                  <div className="service-btn1">Get Quote</div>
                </a>
                <a href="https://wa.me/918085354646">
                  <div className="service-btn2">Chat with Us</div>
                </a>
              </div>
            </div>
            <img
              loading="lazy"
              src={gantry}
              alt="Billboard advertising solutions"
              data-aos="zoom-in"
            />
          </div>

          <div className="topic-align1">
            <img
              loading="lazy"
              src={showcase2}
              alt="Outdoor Advertising agency"
              data-aos="zoom-in"
            />
            <div className="topic-left" data-aos="fade-right">
              <h1>Boost Your Brand with Pole Kiosk Branding & Advertising</h1>
              <div className="service-para">
                Looking for <a href="">pole kiosk branding</a> that guarantees
                high visibility and engagement? Our pole kiosks advertising
                solutions help your brand stand out in high-traffic areas,
                ensuring maximum exposure. With strategically placed outdoor
                pole kiosks, you can capture the attention of pedestrians and
                motorists alike.
              </div>
              <h2>Why Choose Pole Kiosks Advertising?</h2>
              <ul>
                <li>
                  <strong> High-Impact Visibility – </strong> Get noticed with
                  street pole kiosks in prime locations.
                </li>
                <li>
                  <strong>LED Pole Kiosks – </strong> Bright, attractive, and
                  eye-catching advertisements for 24/7 promotion.
                </li>
                <li>
                  <strong>Best Pole Kiosk Advertising Services –</strong>{" "}
                  Premium-quality branding for strong audience engagement.
                </li>
                <li>
                  <strong>Affordable Pole Kiosk Branding Solutions – </strong>{" "}
                  Cost-effective advertising that fits your budget.
                </li>
                <li>
                  <strong> High Visibility Pole Kiosks for Marketing – </strong>{" "}
                  Target thousands of daily commuters effortlessly.
                </li>
              </ul>
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
        </div>
      </div>
    </div>
  );
}

export default OutdoorAdvertising;
