import { useState, lazy, Suspense } from "react";
import AboutMe from "./components/AboutUs/AboutUs.jsx";

import Contact from "./components/Contact Us/Contact.jsx";
import Footer from "./elements/Footer/Footer.jsx";
import BrandingStrategy from "./components/Services/BrandingStrategy.jsx";
import DigitalMarketing from "./components/Services/DigitalMarketing.jsx";
import DesigningServices from "./components/Services/DesigningServices.jsx";
import EventPromotion from "./components/Services/EventPromotion.jsx";
import OutdoorAdvertising from "./components/Services/OutdoorAdvertising.jsx";
import PrintMedia from "./components/Services/PrintMedia.jsx";
import RecentWork from "./components/Home/RecentWork.jsx";
import WhatWeDo from "./components/Home/Expertise.jsx";
import Clients from "./components/Clients/Clients.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./elements/Navbar/Navbar.jsx";
import ScrollToTop from "./elements/ScrollToTop.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import Homepage from "./components/Home/Homepage.jsx";
import Whatsapp from "./elements/Whatsapp.jsx";
import NeedHelp from "./components/Needhelp/NeedHelp.jsx";
import ConsultingPopup from "./components/Home/ConsultingPopup.jsx";
import AudioVisuals from "./components/Services/AudioVisuals.jsx";
import KeywordResearch from "./components/Blog/Blogs/KeywordResearch.jsx";
import UnderWorking from "./elements/UnderWorking.jsx";
import SeoOptimization from "./components/Blog/Blogs/SeoOptimization.jsx";
import HighQualityContent from "./components/Blog/Blogs/HighQualityContent.jsx";
import ImproveOnlineAdvertising from "./components/Blog/Blogs/ImproveOnlineAdvertising.jsx";
import Blog2 from "./components/Blog/Blog2.jsx";
import WhatIsDigitalMarketing from "./components/Blog/Blogs/WhatIsDigitalMarketing.jsx";
import InfluencerMarketing from "./components/Blog/Blogs/InfluencerMarketing.jsx";
import LoadScrollTop from "./elements/LoadScrollTop.jsx";
import SocialMediaMarketing from "./components/Blog/Blogs/SocialMediaMarketing.jsx";
import SocietyBranding from "./components/Services/SocietyBranding.jsx";
import BenefitsOutdoorAdvertising from "./components/Blog/Blogs/BenefitsOutdoorAdvertising.jsx";
import { HelmetProvider } from "react-helmet-async";
import Blog from "./components/Blog/Blog.jsx";
import Career from "./components/Career/Career.jsx";
import Test from "./components/Test.jsx";
import CTA from "./elements/CTA.jsx";


// Lazy loaded components
const HolidaySalesStrategies = lazy(() => import("./components/Blog/Blogs/HolidaySalesStrategies.jsx"));
const BusinessesPrepare = lazy(() => import("./components/Blog/Blogs/BusinessesPrepare.jsx"));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <CTA/>
        {/* Consulting Popup */}
        {/* <ConsultingPopup /> */}
        <LoadScrollTop />
        <ScrollToTop />
        <Whatsapp />
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/About" element={<AboutMe />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Showcase" element={<RecentWork />} />
            <Route path="/Clients" element={<Clients />} />

            {/* Services Routes */}
            <Route path="/Services" element={<WhatWeDo />} />
            <Route path="/Outdoor-Advertising-in-Raipur" element={<OutdoorAdvertising />} />
            <Route path="/Outdoor-Advertising" element={<OutdoorAdvertising />} />
            <Route path="/Digital-Marketing-in-Raipur" element={<DigitalMarketing />} />
            <Route path="/Designing-Services-in-Raipur" element={<DesigningServices />} />
            <Route path="/Print-Media-in-Raipur" element={<PrintMedia />} />
            <Route path="/Branding-Strategy-in-Raipur" element={<BrandingStrategy />} />
            <Route path="/Event-Promotion-in-Raipur" element={<EventPromotion />} />
            <Route path="/Audio-Visuals-in-Raipur" element={<AudioVisuals />} />
            <Route path="/Society-Branding-in-Raipur" element={<SocietyBranding />} />

            {/* Blog Routes */}
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Blog/2" element={<Blog2 />} />
            <Route path="/Blog/Keyword-Research" element={<KeywordResearch />} />
            <Route path="/Blog/SEO-Optimization" element={<SeoOptimization />} />
            <Route path="/Blog/High-Quality-Content" element={<HighQualityContent />} />
            <Route path="/Blog/Businesses-Prepare-for-Emerging-Trends" element={<BusinessesPrepare />} />
            <Route path="/Blog/Holiday-Sales-Strategies" element={<HolidaySalesStrategies />} />
            <Route path="/Blog/Advertising-Tools-and-Techniques" element={<ImproveOnlineAdvertising />} />
            <Route path="/Blog/What-is-Digital-Marketing" element={<WhatIsDigitalMarketing />} />
            <Route path="/Blog/Influencer-Marketing" element={<InfluencerMarketing />} />
            <Route path="/Blog/Social-Media-Marketing" element={<SocialMediaMarketing />} />
            <Route path="/Blog/Benefits-of-Outdoor-Advertising" element={<BenefitsOutdoorAdvertising />} />

            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="*" element={<UnderWorking />} />

            <Route path="/career" element={<Career/>}/>

            <Route path="/test" element={<Test/>}/>
          </Routes>
        </Suspense>
        <NeedHelp />
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;
