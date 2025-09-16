import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import "./Sp_footer.css";
import logo_footer from "../../../assets/AIServices/logo-footer.png"

function Sp_footer() {
  return (
    <div className="main_footer_container">
      <div className="main_footer">
        <div className="footer1">
          <div className="f1">
            <img src={logo_footer} alt="SP Advertising Logo" />
          </div>
          <p>
           SP Advertising is a 360-degree marketing and branding agency dedicated to delivering exceptional results. Our team of experts combines knowledge and passion to create impactful campaigns that drive business growth.
          </p>
        </div>

        

        <div className="footer2">
          <p>Quick Links</p>
          <ul type="none">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer15">
          <div className="footer-contact">
            <h4>Contact</h4>
            <div className="contact-item">
              <FiPhone className="contact-icon" />
              <span>+91-8085354646</span>
            </div>
            <div className="contact-item">
              <FiMail className="contact-icon" />
              <span>spadvertising@live.com</span>
            </div>
            <div className="contact-item">
             
              <span><FiMapPin className="contact-icon" /> A-5/3, Street Number 2, beside Canara bank, <br/>Sector 1, 
             Shankar Nagar, Raipur, Chhattisgarh 492004</span>
            </div>
          </div>
        </div>

        {/* <div className="footer3">
          <p>Newsletter</p>
          <p className="p1">Subscribe to our newsletter to get latest updates:</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div> */}
      </div>
      <div className="thin-footer">
      <span>© 2025 <a href="https://spadvertising.in/">SP Advertising</a>. All rights reserved.</span>  
      </div>
    </div>
  );
}

export default Sp_footer;
