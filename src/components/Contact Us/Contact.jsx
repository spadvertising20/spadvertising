import React, { useState } from "react";
import "./Contact.css";
import { Helmet } from "react-helmet";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", import.meta.env.VITE_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Fetch error: ", error);
      setResult("There was an error submitting the form.");
    }
  };

  return (
    <div className="contact" id="contact">
     
      <Helmet>
        <title>Contact SP Advertising | Leading Advertising Agency in Raipur</title>
        <meta
          name="description"
          content="Reach out to SP Advertising in Raipur, including Outdoor Advertising, digital marketing, web development, Designing services, and SEO."
        />
        <meta
          name="keywords"
          content="contact us, Contact SP Advertising, Raipur best services, Digital Marketing in Raipur, Digital solutions Raipur, Web development Raipur, Mobile app development Raipur, Digital marketing Raipur, SEO services Raipur"/>
      </Helmet>
      <div className="contact-con">
        <div className="contact-box">
          <div className="contact-details-left">
            <h1 className="contact-heading">Contact Us</h1>
            <p data-aos="fade-up" data-aos-duration="300">
              Feel free to get in touch with us through any of the following
              means. Whether you have inquiries, collaboration opportunities, or
              just want to say hello, we're here to listen.
            </p>
            <h2>Get In Touch</h2>
            <p>+91-8085354646</p>
            <p>spadvertising@live.com</p>
          </div>
          <div className="contact-details-right">
            <form onSubmit={onSubmit}>
              <h1>Get In Touch</h1>
              <div className="input">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                />
                <select name="service" required>
                  <option value="Select Your Service">
                    Select Your Service
                  </option>
                  <option value="Outdoor Advertising">
                    Outdoor Advertising
                  </option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Designing Services">Designing Services</option>
                  <option value="Print Media">Print Media</option>
                  <option value="Branding & Strategy">
                    Branding & Strategy
                  </option>
                  <option value="Event Promotion">Event Promotion</option>
                </select>
              </div>
              <div className="desc">
                <textarea
                  name="message"
                  className="description"
                  placeholder="Describe Your Project..."
                  required
                />
                <button type="submit">Massage Us</button>
                <span>{result}</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
