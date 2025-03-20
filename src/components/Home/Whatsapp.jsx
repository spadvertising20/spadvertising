import React from "react";
import whatsapp from "../../assets/Navbar/watsapp.png";
import "./Whatsapp.css";

export default function Whatsapp() {
  return (
    <div className="whatsapp">
      <a
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
        href="https://wa.me/918085354646"
      >
        <img loading="lazy" src={whatsapp} alt="" />
      </a>
    </div>
  );
}
