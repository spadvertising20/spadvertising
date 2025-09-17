// Sp_contact.jsx
import React from "react";
import "./Sp_contact.css";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const ContactForm = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="grid">
          {/* Left Gradient Section */}
          <div className="gradient-section">
            <h1 className="contact-title">Contact Us</h1>

            <div className="contact-info-box">
              <div className="contact-info">
                <div className="info-item">
                  <FiPhone className="info-icon" />
                  <span>+91-8085354646</span>
                </div>
                <div className="info-item">
                  <FiMail className="info-icon" />
                  <span>spadvertising@live.com</span>
                </div>
                <div className="info-item">
                  <FiMapPin className="info-icon location" />
                  <span>
                    A-5/3, Street Number 2, beside Canara bank, Sector 1,
                    Shankar Nagar, Raipur, Chhattisgarh 492004
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Section */}
          <div className="form-section">
            <h2>Send Us A Message</h2>

            <form
              className="contact-form"
              method="post"
            >
              <div className="form-group">
                <input type="text" name="name" placeholder=" " required />
                <label>Name</label>
              </div>

              <div className="form-group">
                <input type="email" name="email" placeholder=" " required />
                <label>Email</label>
              </div>

              <div className="form-group">
                <input type="tel" name="phone" placeholder=" " required />
                <label>Phone</label>
              </div>

              <div className="form-group">
                <textarea name="message" placeholder=" " rows="4" required />
                <label>Message</label>
              </div>

              <button type="submit" className="submit-btn1">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
