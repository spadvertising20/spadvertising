import React, { useEffect, useState } from "react";
import "./Navbar.css";
import bg_logo from "../../assets/Navbar/logo.png";
import up_down from "../../assets/Navbar/up-down.svg";
import { Link } from "react-router-dom";
import { IoCloseOutline, IoCall } from "react-icons/io5";
import { IoIosInformationCircle } from "react-icons/io";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { AiFillProfile, AiFillHome } from "react-icons/ai";
import { RiArticleFill } from "react-icons/ri";
import { LuMenu } from "react-icons/lu";

function Navbar() {
  const [menu, setMenu] = useState(
    () => localStorage.getItem("menu") || "Home"
  );

  useEffect(() => {
    localStorage.setItem("menu", menu);
  }, [menu]);

  const [menubtn, setMenubtn] = useState(true);
  const menuslider = () => setMenubtn((prevState) => !prevState);

  const [services, setServices] = useState(true);
  const servicesdropdown = () => setServices((prevState) => !prevState);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const toggleServicesDropdown = () => setServicesDropdown((prev) => !prev);
  return (
    <nav className="navbar">
      <div className="navbar-con">
        <h1 className="logo">
          <a href="https://spadvertising.in/" title="SP Advertising Home">
            <img
              src={bg_logo}
              alt="SP Advertising Logo - Home"
              loading="lazy"
            />
          </a>
        </h1>

        <div className="menu">
          <ul className={`navbar-menu ${menubtn ? "active" : ""}`}>
            <li>
              <a
                href="/"
                className={menu === "Home" ? "active" : "deactive"}
                title="Home"
              >
                <p className="menu-hover-con">
                  Home <span className="menu-hover"></span>
                </p>
              </a>
            </li>

            <li>
              <a
                href="/About"
                className={menu === "About" ? "active" : "deactive"}
                title="About Us"
              >
                <p className="menu-hover-con">
                  About <span className="menu-hover"></span>
                </p>
              </a>
            </li>

            <li className="services">
              <div className="up-down menu-hover-con">
                <div>Services</div>
                <img src={up_down} alt="Toggle Services Menu" />
              </div>
              <ul>
                {[
                  {
                    to: "/Outdoor-Advertising-in-Raipur",
                    text: "Outdoor Advertising",
                  },
                  {
                    to: "/Digital-Marketing-Agency-in-Raipur",
                    text: "Digital Marketing",
                  },
                  {
                    to: "/Society-Branding-in-Raipur",
                    text: "Society Branding",
                  },
                  {
                    to: "/Designing-Services-in-Raipur",
                    text: "Designing Services",
                  },
                  { to: "/Audio-Visuals-in-Raipur", text: "Audio Visuals" },
                  {
                    to: "/Branding-Strategy-in-Raipur",
                    text: "Branding & Strategy",
                  },
                  { to: "/Event-Promotion-in-Raipur", text: "Event Promotion" },
                  { to: "/Print-Media-in-Raipur", text: "Print Media" },
                ].map(({ to, text }) => (
                  <li key={to}>
                    <a href={to} title={text}>
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <a
                href="/Clients"
                className={menu === "Client" ? "active" : "deactive"}
                title="Our Clients"
              >
                <p className="menu-hover-con">
                  Clients <span className="menu-hover"></span>
                </p>
              </a>
            </li>

            <li>
              <a
                href="/Portfolio"
                className={menu === "Portfolio" ? "active" : "deactive"}
                title="Our Portfolio"
              >
                <p className="menu-hover-con">
                  Portfolio <span className="menu-hover"></span>
                </p>
              </a>
            </li>

            <li>
              <a
                href="/Blog"
                className={menu === "Blog" ? "active" : "deactive"}
                title="Read Our Blog"
              >
                <p className="menu-hover-con">
                  Blog <span className="menu-hover"></span>
                </p>
              </a>
            </li>
          </ul>
        </div>

        <div className="shadow-contact">
          <a href="/contact">
            <button>Contact Us</button>
          </a>
        </div>

        <div className="menu-btn-con">
          <div
            className={`bg-menu ${menubtn ? "bg-menu1" : ""}`}
            onClick={menuslider}
          ></div>
          {menubtn ? (
            <LuMenu className="menu-btn-img" onClick={menuslider} />
          ) : (
            <IoCloseOutline className="IoClose" onClick={menuslider} />
          )}

          <div className={`menu-btn ${menubtn ? "show" : "hide"}`}>
            <div className="menu-btn-services">
              {[
                {
                  to: "/",
                  text: "Home",
                  icon: <AiFillHome className="menu-btn-services-icon" />,
                },
                {
                  to: "/About",
                  text: "About",
                  icon: (
                    <IoIosInformationCircle className="menu-btn-services-icon" />
                  ),
                },
                {
                  text: "Services",
                  icon: (
                    <MdMiscellaneousServices className="menu-btn-services-icon" />
                  ),
                  items: [
                    {
                      to: "/Outdoor-Advertising-in-Raipur",
                      text: "Outdoor Advertising",
                    },
                    {
                      to: "/Digital-Marketing-Agency-in-Raipur",
                      text: "Digital Marketing",
                    },
                    {
                      to: "/Society-Branding-in-Raipur",
                      text: "Society Branding",
                    },
                    {
                      to: "/Designing-Services-in-Raipur",
                      text: "Designing Services",
                    },
                    { to: "/Audio-Visuals-in-Raipur", text: "Audio Visuals" },
                    {
                      to: "/Branding-Strategy-in-Raipur",
                      text: "Branding & Strategy",
                    },
                    {
                      to: "/Event-Promotion-in-Raipur",
                      text: "Event Promotion",
                    },
                    { to: "/Print-Media-in-Raipur", text: "Print Media" },
                  ],
                },
                {
                  to: "/Clients",
                  text: "Clients",
                  icon: <FaUsers className="menu-btn-services-icon" />,
                },
                {
                  to: "/Portfolio",
                  text: "Portfolio",
                  icon: <AiFillProfile className="menu-btn-services-icon" />,
                },
                {
                  to: "/Blog",
                  text: "Blog",
                  icon: <RiArticleFill className="menu-btn-services-icon" />,
                },
                {
                  to: "/Contact",
                  text: "Contact Us",
                  icon: <IoCall className="menu-btn-services-icon" />,
                },
              ].map(({ to, text, icon, items }, index) => (
                <div key={index}>
                  {to ? (
                    <a href={to} onClick={menuslider} title={text}>
                      <p>
                        {icon} {text}
                      </p>
                    </a>
                  ) : (
                    <div className="dropdown">
                      <p onClick={toggleServicesDropdown}>
                     
                          {icon} {text}{" "}
                
                      </p>
                      {servicesDropdown && (
                        <ul className="dropdown-menu">
                          {items.map((item, idx) => (
                            <li key={idx}>
                              <a onClick={menuslider} href={item.to}>
                                {item.text}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
