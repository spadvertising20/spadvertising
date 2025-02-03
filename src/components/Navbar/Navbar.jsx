import React, { useEffect, useState } from "react";
import "./Navbar.css";
import bg_logo from "../../assets/Navbar/logo.webp";
import up_down from "../../assets/Navbar/up-down.svg";
import { Link } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { IoIosInformationCircle } from "react-icons/io";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { AiFillProfile } from "react-icons/ai";
import { RiArticleFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { AiFillHome } from "react-icons/ai";
import flag_banner from "../../assets/Navbar/flag-banner.png";

function Navbar() {
  const [menu, setMenu] = useState(
    () => localStorage.getItem("menu") || "Home"
  );

  useEffect(() => {
    localStorage.setItem("menu", menu);
  }, [menu]);

  const [menubtn, setMenubtn] = useState(true);
  const menuslider = () => {
    setMenubtn((prevState) => !prevState); // Toggle the state
  };

  const [services, setServices] = useState(true);
  const servicesdropdown = () => {
    setServices((prevState) => !prevState); // Toggle the state
  };

  return (
    <div className="navbar">
      {/* <div className="flag-banner">
    <img src={flag_banner} alt="" />
    <img src={flag_banner} alt="" />
    <img src={flag_banner} alt="" />
    <img src={flag_banner} alt="" />
    <img src={flag_banner} alt="" />
    <img src={flag_banner} alt="" />
    <img src={flag_banner} alt="" />
    <img src={flag_banner} alt="" />
    <img src={flag_banner} alt="" />
    <img src={flag_banner} alt="" />
    <img src={flag_banner} alt="" />
    <img src={flag_banner} alt="" />
    <img src={flag_banner} alt="" />

      
    </div> */}

      <div className="navbar-con">
        <div className="logo">
          <Link to={"/"}>
            <img src={bg_logo} alt="" />
          </Link>
        </div>

        <div className="menu">
          <ul className={`navbar-menu ${menubtn ? "active" : ""}`}>
            <Link to={"/"} className={menu === "Home" ? "active" : "deactive"}>
              <p>Home</p>
            </Link>
            <Link
              to={"/About"}
              className={menu === "About" ? "active" : "deactive"}
            >
              <p>About</p>
            </Link>
            <div className="services">
              <div className="up-down">
                <p className={menu === "Services" ? "active" : "deactive"}>
                  Services
                </p>
                <img src={up_down} alt="drop-down" />
              </div>
              <ul>
                <Link to={"/Outdoor-Advertising-in-Raipur"}>
                  <li>Outdoor Advertising</li>
                </Link>
                <Link to={"/Digital-Marketing-in-Raipur"}>
                  <li>Digital Marketing</li>
                </Link>
                <Link to={"/Society-Branding-in-Raipur"}>
                  <li>Society Branding</li>
                </Link>
                <Link to={"/Designing-Services-in-Raipur"}>
                  <li>Designing Services</li>
                </Link>
                <Link to={"/Audio-Visuals-in-Raipur"}>
                  <li>Audio Visuals</li>
                </Link>
                <Link to={"/Branding-Strategy-in-Raipur"}>
                  <li>Branding & Strategy</li>
                </Link>
                <Link to={"/Event-Promotion-in-Raipur"}>
                  <li>Event Promotion</li>
                </Link>
                <Link to={"/Print-Media-in-Raipur"}>
                  <li>Print Media</li>
                </Link>
              </ul>
            </div>
            <Link
              to={"/Clients"}
              className={menu === "Client" ? "active" : "deactive"}
            >
              <p>Clients</p>
            </Link>
            <Link
              to={"/Portfolio"}
              className={menu === "Portfolio" ? "active" : "deactive"}
            >
              <p>Portfolio</p>
            </Link>
            <Link
              to={"/Blog"}
              className={menu === "Blog" ? "active" : "deactive"}
            >
              <p>Blog</p>
            </Link>
          </ul>
        </div>

        <div className="cart">
          <Link to={"/Contact"} className={menu === "Contact" ? "active1" : ""}>
            <button>Contact Us</button>
          </Link>
        </div>

        <div className="menu-btn-con">
          <div
            className={`bg-menu ${menubtn ? "bg-menu1" : ""}`}
            onClick={menuslider}
          ></div>
          {menubtn ? (
            <LuMenu
              className={`menu-btn-img ${
                menubtn ? "menu-btn-img1" : "menu-btn-img2"
              }`}
              onClick={menuslider}
            />
          ) : (
            <IoCloseOutline className="IoClose" onClick={menuslider} />
          )}

          <div className={`menu-btn ${menubtn ? "show" : "hide"}`}>
            <div className="menu-btn-services">
              <Link to={"/"} onClick={menuslider}>
                <p>
                  <AiFillHome className="menuslider-icon" />
                  Home
                </p>
              </Link>
              <Link to={"/About"} onClick={menuslider}>
                <p>
                  <IoIosInformationCircle className="menuslider-icon" />
                  About
                </p>
              </Link>
              <div>
                <p onClick={servicesdropdown}>
                  <MdMiscellaneousServices className="menuslider-icon" />
                  <div className="menu-dropdown">
                    Services{" "}
                    <div>
                      {services ? (
                        <IoMdArrowDropdown className="menudropdown-icon" />
                      ) : (
                        <IoMdArrowDropup className="menudropdown-icon" />
                      )}
                    </div>
                  </div>
                </p>
                {services ? (
                  ""
                ) : (
                  <div className="services-dropdown">
                    <ul>
                      <Link
                        onClick={menuslider}
                        to={"/Outdoor-Advertising-in-Raipur"}
                      >
                        <p>Outdoor Advertising</p>
                      </Link>
                      <Link
                        onClick={menuslider}
                        to={"/Digital-Marketing-in-Raipur"}
                      >
                        <p>Digital Marketing</p>{" "}
                      </Link>
                      <Link
                        onClick={menuslider}
                        to={"/Society-Branding-in-Raipur"}
                      >
                        <p>Society Branding</p>{" "}
                      </Link>
                      <Link
                        onClick={menuslider}
                        to={"/Designing-Services-in-Raipur"}
                      >
                        <p>Designing Services</p>{" "}
                      </Link>
                      <Link
                        onClick={menuslider}
                        to={"/Audio-Visuals-in-Raipur"}
                      >
                        <p>Audio Visuals</p>{" "}
                      </Link>
                      <Link
                        onClick={menuslider}
                        to={"/Branding-Strategy-in-Raipur"}
                      >
                        <p>Branding & Strategy</p>
                      </Link>
                      <Link
                        onClick={menuslider}
                        to={"/Event-Promotion-in-Raipur"}
                      >
                        <p>Event Promotion</p>
                      </Link>
                      <Link onClick={menuslider} to={"/Print-Media-in-Raipur"}>
                        <p>Print Media</p>{" "}
                      </Link>
                    </ul>
                  </div>
                )}
              </div>
              <Link to={"/Clients"} onClick={menuslider}>
                <p>
                  <FaUsers className="menuslider-icon" />
                  Clients
                </p>
              </Link>
              <Link to={"/Portfolio"} onClick={menuslider}>
                <p>
                  <AiFillProfile className="menuslider-icon" />
                  Portfolio
                </p>
              </Link>
              <Link to={"/Blog"} onClick={menuslider}>
                <p>
                  <RiArticleFill className="menuslider-icon" />
                  Blog
                </p>
              </Link>
              <Link to={"/Contact"} onClick={menuslider}>
                <p>
                  <IoCall className="menuslider-icon" />
                  Contact Us
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
