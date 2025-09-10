import React, { useEffect, useState } from "react";
import "./Services.css";
import outdoor_img1 from "../../assets/Services/AudioVisuals/AudioVisuals.png";
import { Link } from "react-router-dom";
import showcase1 from "../../assets/Services/AudioVisuals/AudioVisuals3.jpg";
import showcase2 from "../../assets/Services/AudioVisuals/AudioVisuals4.jpg";
import outdoor_img2 from "../../assets/Services/AudioVisuals/AudioVisuals1.jpg";
import gantry from "../../assets/Services/AudioVisuals/AudioVisuals2.jpg";
import loading from "../../assets/components/loading-image.png";
import ImageLoader from "../../elements/ImageLoader";
import WhyTrustUs from "../../elements/WhyTrustUs";

export default function AudioVisuals() {
  useEffect(() => {
    document.title =
      "Best Video Visuals service in Raipur | Video Visuals | SP Advertising";
  
    document
      .querySelector("meta[name='description']")
      ?.setAttribute(
        "content",
        "Experience the best video visuals service in Raipur, delivering stunning, high-quality visuals for events, promotions, and creative projects."
      );
  
    document
      .querySelector("meta[name='keywords']")
      ?.setAttribute(
        "content",
        "Video Visuals Service, High-Quality Visuals, Raipur Video Services, Event Visuals, Promotional Visuals, Creative Video Solutions, Video Production Raipur, Professional Visuals, Stunning Video Graphics,"
      );
    
  }, []);

  const wcsservices = [
    "Video Presentations",
    "Short Films / Documentary",
    "Radio & TV Commercials",
    "Photography & Videography",
  ];
  

  return (
    <div className="service">
      <div className="service-box-con">
        <div className="service-box">
          <div className="service-left">
            <h1>Audio Visuals</h1>
            <p data-aos="fade-right">
              Audiovisuals combine sound and imagery to convey information,
              enhance communication
            </p>
            <Link to={"/Contact"}>
              <button>Enquire Now</button>
            </Link>
          </div>
          <div className="service-right">
            <ImageLoader
              data-src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757487140/AudioVisuals_zpnh0z.png"}
              src={loading}
              alt="Audio "
              data-aos="zoom-in"
            />
          </div>
        </div>
      </div>

      <div className="service-con">
        <div className="ul">
          <div className="topic-align1">
            <div className="topic-left" data-aos="fade-right">
              <h1>Video Presentations</h1>
              <p>
                <a href="https://spadvertising.in/Designing-Services-in-Raipur">
                  Video presentations
                </a>{" "}
                are a powerful medium for delivering information, combining
                visuals, animations, audio, and text to effectively engage
                audiences. They are commonly used in education, marketing,
                business meetings, and tutorials to simplify complex ideas and
                enhance viewer understanding.
              </p>
            </div>{" "}
            <ImageLoader
              data-src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757487131/AudioVisuals3_swb3vi.jpg"}
              src={loading}
              alt="Audio "
              data-aos="zoom-in"
              
            />
          </div>
          <div className="topic-align1">
            <ImageLoader
              data-src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757487145/AudioVisuals1_zacdzw.jpg"}
              src={loading}
              alt="Hoardings in Raipur "
              data-aos="zoom-in"
              
            />
            <div className="topic-left" data-aos="fade-right">
              <h1>Short Films / Documentary</h1>
              <p>
                <a href="https://spadvertising.in/Designing-Services-in-Raipur">
                  Short films and documentaries{" "}
                </a>
                are concise visual storytelling formats that explore various
                subjects, from fictional narratives to real-life events. They
                aim to entertain, inform, or inspire audiences by capturing
                powerful moments, emotions, and experiences in a brief time
                frame.
              </p>
            </div>
          </div>

          <div className="topic-align1" id="topic-align2">
            <div className="topic-left" data-aos="fade-right">
              <h1>Radio & TV Commercials</h1>
              <p>
                <a href="https://spadvertising.in/Designing-Services-in-Raipur">
                  Radio and TV commercials{" "}
                </a>
                Radio and TV commercials are audio-visual advertisements
                designed to promote products, services, or brands. They use
                compelling storytelling, catchy visuals, and sound to capture
                attention, influence consumer behavior, and drive brand
                awareness across mass media platforms.
              </p>
            </div>
            <ImageLoader
              data-src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757487128/AudioVisuals2_c7ls65.jpg"}
              src={loading}
              alt=""
              data-aos="zoom-in"
              
            />
          </div>

          <div className="topic-align1">
            <ImageLoader
              data-src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757487135/AudioVisuals4_qsd3du.jpg"}
              src={loading}
              alt=""
              data-aos="zoom-in"
              
            />

            <div className="topic-left" data-aos="fade-right">
              <h1>Photography & Videography</h1>
              <p>
                <a href="https://spadvertising.in/Designing-Services-in-Raipur">
                  Photography and videography{" "}
                </a>{" "}
                are visual art forms capturing moments, scenes, or events
                through still images and moving visuals. They are used for
                storytelling, documentation, marketing, and personal expression,
                often combining technical skills with creativity to create
                impactful visuals.
              </p>
            </div>
          </div>
        </div>
      </div>
      <WhyTrustUs services={wcsservices}/>
    </div>
  );
}
