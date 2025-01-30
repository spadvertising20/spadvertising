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

function Homepage() {
  return (
    <div className="homepage-con">      
      <AnimationHero />
      <RecentWork />
      <WhatWeDo />
      <HomeAbout />
      <HomeClients />
      <HomeBlog />
    </div>
  );
}

export default Homepage;
