"use client";
import React, { useEffect, useState } from "react";
import {
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { IoMdShare } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";


import "./CTA.css"; // Import CSS file

export default function CTA() {
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    setShareUrl(encodeURIComponent(window.location.href));
  }, []);

  return (
    <div className="cta-container">
     <a
        href="tel:918085354646"
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button call"
        aria-label="Book appointment via email"
      >
        <FiPhoneCall size={22} />
      </a>

      <a
        href="mailto:live@contact.com"
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button email"
        aria-label="Book appointment via email"
      >
        <MdOutlineMailOutline size={22} />
      </a>

      <div className="cta-share-group">
        <div className="cta-button share-icon" aria-label="Share this page">
          <IoMdShare size={20} />
        </div>

        <div className="share-options">
          {shareUrl && (
            <>
              <a
                href={`https://www.facebook.com/spadvertisingraipur`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-option facebook"
                aria-label="Share on Facebook"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href={`https://www.instagram.com/spadvertisingrpr/`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-option twitter"
                aria-label="Share on Twitter"
              >
                 <FaInstagram size={20} />
              </a>
              <a
                href={`https://www.linkedin.com/company/sp-advertising20/posts/?feedView=all`}
                target="_blank"
                rel="noopener noreferrer"
                className="share-option linkedin"
                aria-label="Share on LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </>
          )}
          <a
            href="https://www.youtube.com/@spadvertising530"
            target="_blank"
            rel="noopener noreferrer"
            className="share-option youtube"
            aria-label="Share on Instagram"
          >
           <FaYoutube size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
