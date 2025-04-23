import React from "react";
import "./NeedHelp.css";
import { Link } from "react-router-dom";

export default function NeedHelp() {
  return (
    <div className="needhelp">
      <div className="needhelp-title">
        <h1>NEED HELP WITH A PROJECT?</h1>
        <p>Our team is here to assist you with any questions or concerns.</p>
      </div>

      <div className="needhelp-con">
        <div className="needhelp-contact">
          <h1>Get In Touch Today!</h1>
          <p>
            We’re here to help! Reach out to us today and take the first step
            toward reaching your goals. Let’s work together to turn your dreams
            into reality. Contact us now!
          </p>
          <div className="shadow-contact">
            <a href="/contact">
              <button>Contact Us</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
