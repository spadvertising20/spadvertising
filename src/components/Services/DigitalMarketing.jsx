import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import digital_marketing_img from "../../assets/Services/DigitalMarketing/digital-marketing-img.jpg";
import digital_marketing_img1 from "../../assets/Services/DigitalMarketing/digital-marketing-img1.jpg";
import digital_marketing_img2 from "../../assets/Services/DigitalMarketing/digital-marketing-img2.jpg";
import digital_marketing_img3 from "../../assets/Services/DigitalMarketing/digital-marketing-img3.jpg";
import digital_marketing_img4 from "../../assets/Services/DigitalMarketing/digital-marketing-img4.jpg";
import FloatingBalloons from "../Home/FloatingBalloons";
import { Helmet } from "react-helmet";

function DigitalMarketing() {
  return (
    <div className="service">
       <Helmet>
      <title>
      Best Digital Marketing agency in Raipur | Digital Marketing services
        </title>
        <meta
          name="description"
          content="Top digital marketing agency in Raipur offering expert services in SEO, social media marketing, website development and digital solutions in Chhattisgarh"
        />
        <meta
          name="keywords"
          content="digital marketing agency, digital marketing company, best digital marketing agency, digital marketing agency near me, digital marketing company, digital marketing services, digital marketing near me, digital marketing agency near me, best digital marketing agencies"
        />
      </Helmet>
      
      <div className="service-box-con">
      <FloatingBalloons/>
        <div className="service-box">
          <div className="service-left">
            <h1>Digital Marketing</h1>
            <p>
              Connecting Brands with Audiences: Digital Marketing Strategies for
              Enhanced Engagement
            </p>
            <Link to={"/Contact"}>
              <button>Enquire Now</button>
            </Link>
          </div>
          <div className="service-right">
            <img src={digital_marketing_img} alt="digital marketers" />
          </div>
        </div>
      </div>
      <div className="service-con">
        <div className="ul">
          <div className="topic-align1" id="topic-align2">
            <div className="topic-left" data-aos="fade-right">
              <h1>Website Development</h1>
              <p>
                SP Advertising offers exceptional Website Development services
                to enhance your online presence. Our team specializes in
                creating user-friendly, visually appealing websites that drive
                engagement and conversions, ensuring your brand stands out in
                the digital landscape with top-notch Website Development
                services.
              </p>
            </div>
            <img
              src={digital_marketing_img1}
              alt="digital marketing agency"
              data-aos="zoom-in"
            />
          </div>

          <div className="topic-align1">
            <img
              src={digital_marketing_img2}
              alt="digital marketing company"
              data-aos="zoom-in"
            />
            <div className="topic-left" data-aos="fade-right">
              <h1>SEO / SEM Optimization</h1>
              <p>
                SP Advertising provides premier SEO / SEM Optimization Services
                to boost your online visibility and drive targeted traffic to
                your website. Our expert team focuses on strategic SEO / SEM
                Optimization Service to enhance your search engine rankings and
                optimize your online marketing efforts for maximum impact and
                growth.
              </p>
            </div>
          </div>

          <div className="topic-align1" id="topic-align2">
            <div className="topic-left" data-aos="fade-right">
              <h1>Social Media Marketing</h1>
              <p>
                SP Advertising provides the best Social Media Marketing Services
                to amplify your brand's presence across social media platforms.
                Our tailored approach ensures you receive the best Social Media
                Marketing Service, leveraging strategic content, targeted
                campaigns, and performance analytics to drive engagement and
                achieve your marketing objectives.
              </p>
            </div>
            <img
              src={digital_marketing_img3}
              alt="digital marketing services"
              data-aos="zoom-in"
            />
          </div>

          <div className="topic-align1">
            <img
              src={digital_marketing_img4}
              alt="digital marketing near me"
              data-aos="zoom-in"
            />
            <div className="topic-left" data-aos="fade-right">
              <h1>Application Development</h1>
              <p>
                SP Advertising delivers the best Application Development Services
                to create innovative, high-performance applications tailored to
                your business needs. Our commitment to excellence ensures you
                receive the best Application Development Service, with custom
                solutions that enhance functionality and user experience,
                driving your success in the digital landscape.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalMarketing;
