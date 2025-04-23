import React from "react";
import { Helmet } from "react-helmet";
import RecentWork from "./RecentWork";
import WhatWeDo from "./Expertise";
import HomeAbout from "./About";
import NeedHelp from "../Needhelp/NeedHelp";
import AnimationHero from "./Hero";
import HomeBlog from "./Blog";
import HomeClients from "./Clients";
import './Homepage.css';
import FAQ from "./FAQ";
import WhyChooseUs from "./WhyChooseUs";
import WhyTrustUs from "../../elements/WhyTrustUs";



function Homepage() {
  const wcsservices = [
    "OUTDOOR ADVERTISING",
    "DIGITAL MARKETING",
    "DESIGNING SERVICES",
    "AUDIO VISUAL",
    "BRANDING & STRATEGY",
    "PRINT MEDIA",
  ];

  return (
    <div className="homepage-con">      
      <AnimationHero />
      <HomeAbout />
      <WhatWeDo />
      <WhyTrustUs services={wcsservices}/>
      <HomeClients />
      <RecentWork />
      <HomeBlog />
      {/* <FAQ/> */}
    </div>
  );
}

export default Homepage;
