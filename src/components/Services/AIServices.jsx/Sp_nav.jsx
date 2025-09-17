import React, { useState } from "react";
import "./Sp_ad.css";
import "animate.css";
import logo from "https://res.cloudinary.com/dxzxvhrhy/image/upload/v1758024528/logo14_zd1rhw.webp"
import { FaHome, FaInfoCircle, FaCogs, FaPhone } from "react-icons/fa"; // Icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Left Side - Logo */}
      <div className="animate__animated animate__fadeInLeft navbar-logo">
        <img
          src={logo}
          alt="AI logo"
          style={{ width: "250px", height: "80px"}}
        />
      </div>

      {/* Right Side - Links */}
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#home">
            <FaHome className="mobile-icon" /> Home
          </a>
        </li>
        <li>
          <a href="#about">
            <FaInfoCircle className="mobile-icon" /> About
          </a>
        </li>
        <li>
          <a href="#services">
            <FaCogs className="mobile-icon" /> Services
          </a>
        </li>
        <li>
          <a href="#contact" className="contact-btn">
            <FaPhone className="mobile-icon" /> Contact Us
          </a>
        </li>
      </ul>

      {/* Mobile Toggle Button */}
      <div className="navbar-toggle" onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
