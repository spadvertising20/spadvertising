import React, { useState } from "react";
import "./Sp_popup.css";

const Popup = ({ onClose }) => {
  const [open, setOpen] = useState(true);
  const [result, setResult] = useState(""); // success/error message

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult("Sending...");

    const formData = new FormData(e.target);
    formData.append("access_key", "ad930d98-be46-47ce-8e19-120de12bffb0"); // your Web3Forms access key
    formData.append("no_redirect", "true"); // 🚀 prevents redirect

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("✅ Message sent successfully!");
        e.target.reset();
      } else {
        setResult("❌ Something went wrong. Please try again!");
      }
    } catch (error) {
      setResult("❌ Network error. Please try later!");
    }
  };

  return (
    <div className="popup-overlay" role="dialog" aria-modal="true">
      <div className="popup-box animate-popup">
        {/* LEFT SIDE */}
        <div className="popup-left">
          <div className="left-content">
            <img src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1758024528/aitemp_gowxrf.png"} alt="AI Icon" className="top-image" />

            <h1>FREE AI BRAND AUDIT</h1>
            <p>Uncover AI Opportunities for Your Branding and Marketing</p>

            <ul>
              <li>Evaluate your brand's AI-readiness</li>
              <li>Identify areas for AI-driven improvement</li>
              <li>Discover personalization & automation strategies</li>
              <li>Receive strategic recommendations for the AI era</li>
            </ul>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="popup-right">
          {/* Close button */}
          <button
            className="close-btn"
            aria-label="Close popup"
            onClick={() => {
              setOpen(false);
              onClose?.();
            }}
          >
            ✖
          </button>

          <h2>Contact Us</h2>

          {/* FORM */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" id="name" placeholder=" " required />
              <label htmlFor="name">Name</label>
            </div>

            <div className="form-group">
              <input type="email" name="email" id="email" placeholder=" " required />
              <label htmlFor="email">Email</label>
            </div>

            <div className="form-group">
              <input type="tel" name="phone" id="phone" placeholder=" " required />
              <label htmlFor="phone">Phone</label>
            </div>

            <div className="form-group">
              <textarea
                name="message"
                id="message"
                rows="4"
                placeholder=" "
                required
              ></textarea>
              <label htmlFor="message">Message</label>
            </div>

            <button
              type="submit"
              className="submit-btn"
              disabled={result === "Sending..."}
            >
              {result === "Sending..." ? "Sending..." : "Send Message"}
            </button>

            {/* Status Message Below Button */}
            {result && <p className="form-result">{result}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Popup;
