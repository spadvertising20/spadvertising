import React, { useState, useRef } from "react";
import "./Contact.css";
import { Helmet } from "react-helmet";

function Contact() {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    setIsLoading(true);

    const formData = new FormData(formRef.current);
    formData.append("access_key", "ad930d98-be46-47ce-8e19-120de12bffb0");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();

      if (data.success) {
        setResult("✅ Form Submitted Successfully!");
        formRef.current.reset();
      } else {
        console.error("Error:", data);
        setResult("❌ " + data.message);
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setResult("❌ There was an error submitting the form.");
    } finally {
      setIsLoading(false);
      setTimeout(() => setResult(""), 5000);
    }
  };

  return (
    <div className="contact-section" id="contact">
      <Helmet>
        <title>Contact SP Advertising | Leading Advertising Agency in Raipur</title>
        <meta name="description" content="Reach out to SP Advertising in Raipur for Outdoor Advertising, digital marketing, web development, designing services, and SEO." />
        <meta name="keywords" content="contact us, Contact SP Advertising, Raipur best services, Digital Marketing in Raipur, Web development Raipur, SEO services Raipur" />
      </Helmet>

      <div className="contact-container">
        <div className="contact-content">
          {/* Left Contact Details */}
          <div className="contact-info">
            <h1 className="contact-title">Contact Us</h1>
            <p className="contact-text">
              Feel free to reach out for inquiries, collaborations, or just to say hello. We're here to help!
            </p>
            <h2>📞 Get In Touch</h2>
            <p className="contact-detail">+91-8085354646</p>
            <p className="contact-detail">✉️ spadvertising@live.com</p>
          </div>

          {/* Right Form Section */}
          <div className="contact-form-container">
            <form ref={formRef} onSubmit={onSubmit} className="contact-form">
              <h2 className="form-title">GET IN TOUCH</h2>

              <div className="form-group">
                <input type="text" name="name" placeholder="Full Name" required className="form-input" />
                <input type="tel" name="phone" placeholder="Phone Number" required className="form-input" />
                <select name="service" required className="form-select">
                  <option value="">Select Your Service</option>
                  <option value="Outdoor Advertising">Outdoor Advertising</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Society Branding">Society Branding</option>
                  <option value="Designing Services">Designing Services</option>
                  <option value="Audio Visuals">Audio Visuals</option>
                  <option value="Print Media">Print Media</option>
                  <option value="Branding & Strategy">Branding & Strategy</option>
                  <option value="Event Promotion">Event Promotion</option>
                </select>
              </div>

              <div className="form-group">
                <textarea name="message" placeholder="Describe Your Project..." required className="form-textarea"></textarea>
                <button type="submit" disabled={isLoading} className="form-button">
                  {isLoading ? "Sending..." : "Message Us"}
                </button>
                {result && <span className={`form-message ${result.includes("✅") ? "success" : "error"}`}>{result}</span>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
