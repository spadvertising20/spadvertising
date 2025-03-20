import React, { useEffect } from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import digital_marketing_img from "../../assets/Services/DigitalMarketing/digital-marketing-img.jpg";
import digital_marketing_img1 from "../../assets/Services/DigitalMarketing/digital-marketing-img1.jpg";
import digital_marketing_img2 from "../../assets/Services/DigitalMarketing/digital-marketing-img2.jpg";
import digital_marketing_img3 from "../../assets/Services/DigitalMarketing/digital-marketing-img3.jpg";
import digital_marketing_img4 from "../../assets/Services/DigitalMarketing/digital-marketing-img4.jpg";
import { Helmet } from "react-helmet";

function DigitalMarketing() {
  useEffect(() => {
    document.title =
      "Best Digital Marketing agency in Raipur | Digital Marketing services";

    document
      .querySelector("meta[name='description']")
      ?.setAttribute(
        "content",
        "Top digital marketing agency in Raipur offering expert services in SEO, social media marketing, website development and digital solutions in Chhattisgarh"
      );

    document
      .querySelector("meta[name='keywords']")
      ?.setAttribute(
        "content",
        "digital marketing agency, digital marketing company, best digital marketing agency, digital marketing agency near me, digital marketing company, digital marketing services, digital marketing near me, digital marketing agency near me, best digital marketing agencies"
      );
  }, []);

  return (
    <div className="service">
      <div className="service-box-con">
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
              <h1>
                Unlock Your Digital Potential with Our Expert Web Development
                Services
              </h1>
              <div className="service-para">
                Looking for top-notch <a href="" aria-label="web development services">web development services</a>?
                Your search ends here! We are a leading website development
                company dedicated to crafting innovative, user-friendly, and
                high-performance websites that drive success.
              </div>
              <h2>Why Choose Us?</h2>
              <ul>
                <li>
                  <strong> Top-Rated Web Development Company –</strong> We build
                  powerful, scalable, and secure websites.
                </li>
                <li>
                  <strong> Expert Web Developers Near You –</strong> Our skilled
                  professionals turn your vision into reality.
                </li>
                <li>
                  <strong> Custom UI Designs –</strong> Elevate your brand with
                  sleek, intuitive, and user-friendly interfaces.
                </li>
                <li>
                  <strong> End-to-End Web Solutions –</strong> From concept to
                  launch, we cover everything in website development.
                </li>
              </ul>
              <div className="service-para">
                Whether you need a web dev company for your startup or an
                experienced web site developer for your business, we’ve got you
                covered!
              </div>
              <div className="service-para">
                📩 Contact us today to transform your online presence with
                cutting-edge web site development services! 🚀
              </div>
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
              src={digital_marketing_img1}
              alt="digital marketing agency"
              data-aos="zoom-in"
            />
          </div>

          <div className="topic-align1">
            <img
              loading="lazy"
              src={digital_marketing_img2}
              alt="digital marketing company"
              data-aos="zoom-in"
            />
            <div className="topic-left" data-aos="fade-right">
              <h1>Boost Your Online Presence with Our Expert SEO Services</h1>
              <div className="service-para">
                Want to rank higher on Google and drive more traffic? Our
                professional <a href="" aria-label="SEO / SEM Optimization services">SEO / SEM Optimization services</a> are designed to help businesses
                dominate search results and attract the right audience.
              </div>
              <h2>What We Offer:</h2>
              <ul>
                <li>
                  <strong> SEO Engine Optimization –</strong> Improve your
                  website’s visibility with cutting-edge strategies.
                </li>
                <li>
                  <strong> SEO Search Optimization –</strong> Optimize your site
                  for top rankings on major search engines.
                </li>
                <li>
                  <strong> Search Engine Positioning SEO –</strong> Stay ahead
                  of the competition with smart keyword targeting.
                </li>
                <li>
                  <strong> SEO Optimization Service –</strong> Get tailored
                  solutions for your business growth.
                </li>
                <li>
                  <strong> Search Engine Optimisation SEO –</strong> Enhance
                  your brand’s online credibility.
                </li>
                <li>
                  <strong> Search Engine Optimization Tool –</strong> Leverage
                  powerful tools to track and improve performance.
                </li>
                <li>
                  <strong> Internet Search Optimization –</strong> Expand your
                  reach and connect with more potential customers.
                </li>
              </ul>
              <div className="service-para">
                🚀 Let’s take your business to the next level! Contact us today
                for top-notch search optimization services!
              </div>
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
              <h1>Powerful Social Media Marketing to Grow Your Brand 🚀</h1>
              <div className="service-para">
                Looking to expand your online presence and boost engagement? Our
                expert <a href="" aria-label="social media marketing agency">social media marketing agency</a> helps businesses thrive
                through strategic SMM marketing and targeted campaigns.
              </div>
              <h2>Our Social Media Marketing Services Include:</h2>
              <ul>
                <li>
                  <strong> Facebook Advertising Management –</strong> Maximize
                  ROI with data-driven Facebook ad strategies.
                </li>
                <li>
                  <strong> Social Media Marketing (SMM) –</strong> Increase
                  brand awareness and customer engagement.
                </li>
                <li>
                  <strong> Marketing Through Social Media –</strong> Reach the
                  right audience with effective content marketing.
                </li>
                <li>
                  <strong> SNS Marketing –</strong> Optimize your brand’s
                  visibility across all social networks.
                </li>
                <li>
                  <strong> Social Media and Marketing –</strong> Build strong
                  connections and grow your community.
                </li>
                <li>
                  <strong> SMM Social Media Marketing –</strong> Generate leads
                  and boost conversions with smart campaigns.
                </li>
                <li>
                  <strong> Social Media Mar & Media in Marketing –</strong>{" "}
                  Utilize multimedia strategies for better reach.
                </li>
              </ul>
              <h2>Why Choose Us?</h2>
              <ul>
                <li>
                  Expert social media marketing agency with proven results
                </li>
                <li> Custom strategies tailored to your business goals</li>
                <li> Advanced analytics and performance tracking</li>
                <li> Engaging content and audience-focused campaigns</li>
              </ul>
              <div className="service-para">
                🚀 Let’s take your brand to the next level!
              </div>
              <div className="service-para">
                📩 Contact us today for high-impact social media marketing
                solutions!
              </div>
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
              src={digital_marketing_img3}
              alt="digital marketing services"
              data-aos="zoom-in"
            />
          </div>

          <div className="topic-align1">
            <img
              loading="lazy"
              src={digital_marketing_img4}
              alt="digital marketing near me"
              data-aos="zoom-in"
            />
            <div className="topic-left" data-aos="fade-right">
              <h1>
                Transform Your Business with Expert Mobile App Development 🚀
              </h1>
              <div className="service-para">
                Looking for a reliable <a href="" aria-label="mobile app development company">mobile app development company</a> to turn
                your idea into a powerful application? We specialize in mobile
                application development, creating high-performance apps that
                enhance user experience and drive business growth.
              </div>
              <h2>Our Mobile App Development Services Include:</h2>
              <ul>
                <li>
                  <strong> App Development –</strong> Custom mobile apps
                  designed for scalability and efficiency.
                </li>
                <li>
                  <strong> Mobile App Development –</strong> Cutting-edge
                  solutions for Android & iOS platforms.
                </li>
                <li>
                  <strong> Mobile App Developers –</strong> A team of experts
                  crafting seamless and feature-rich applications.
                </li>
                <li>
                  <strong> Mobile Application Developers –</strong> Skilled
                  professionals to bring your vision to life.
                </li>
                <li>
                  <strong> Mobile Phone App Development –</strong> High-quality
                  apps tailored to your business needs.
                </li>
                <li>
                  <strong> Mobile App Dev –</strong> Robust development
                  solutions for all industries.
                </li>
                <li>
                  <strong> Mobile Application and Development –</strong>{" "}
                  End-to-end services from planning to deployment.
                </li>
                <li>
                  <strong> Apps to Develop –</strong> Innovative and
                  user-friendly applications for startups & enterprises.
                </li>
              </ul>
              <h2>Why Choose Us?</h2>
              <ul>
                <li>
                   Experienced mobile app developers with proven success
                </li>
                <li> User-friendly & performance-driven app solutions</li>
                <li>
                   Custom features tailored to your business requirements
                </li>
                <li>
                   Secure, scalable, and high-quality mobile applications
                </li>
              </ul>
              <div className="service-para">
                🚀 Let’s build your next big app!
              </div>
              <div className="service-para">
                📩 Contact us today for top-notch mobile application development
                services!
              </div>
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

export default DigitalMarketing;
