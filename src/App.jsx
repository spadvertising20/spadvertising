import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

// ✅ Lazy imports
const AboutMe = lazy(() => import("./components/AboutUs/AboutUs.jsx"));
const Contact = lazy(() => import("./components/Contact Us/Contact.jsx"));
const Footer = lazy(() => import("./elements/Footer/Footer.jsx"));
const BrandingStrategy = lazy(() =>
  import("./components/Services/BrandingStrategy.jsx")
);
const DigitalMarketing = lazy(() =>
  import("./components/Services/DigitalMarketing.jsx")
);
const DesigningServices = lazy(() =>
  import("./components/Services/DesigningServices.jsx")
);
const EventPromotion = lazy(() =>
  import("./components/Services/EventPromotion.jsx")
);
const OutdoorAdvertising = lazy(() =>
  import("./components/Services/OutdoorAdvertising.jsx")
);
const PrintMedia = lazy(() => import("./components/Services/PrintMedia.jsx"));
const RecentWork = lazy(() => import("./components/Home/RecentWork.jsx"));
const WhatWeDo = lazy(() => import("./components/Home/Expertise.jsx"));
const Clients = lazy(() => import("./components/Clients/Clients.jsx"));
const Navbar = lazy(() => import("./elements/Navbar/Navbar.jsx"));
const ScrollToTop = lazy(() => import("./elements/ScrollToTop.jsx"));
import Portfolio from "./components/Portfolio/Portfolio.jsx";
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
import Sp_ad from "./components/Services/AIServices.jsx/Sp_ad.jsx";
const Homepage = lazy(() => import("./components/Home/Homepage.jsx"));
const Whatsapp = lazy(() => import("./elements/Whatsapp.jsx"));
const NeedHelp = lazy(() => import("./components/Needhelp/NeedHelp.jsx"));
const ConsultingPopup = lazy(() =>
  import("./components/Home/ConsultingPopup.jsx")
);
const AudioVisuals = lazy(() =>
  import("./components/Services/AudioVisuals.jsx")
);
const KeywordResearch = lazy(() =>
  import("./components/Blog/Blogs/KeywordResearch.jsx")
);
const UnderWorking = lazy(() => import("./elements/UnderWorking.jsx"));
const Blog = lazy(() => import("./components/Blog/Blog.jsx"));
const Career = lazy(() => import("./components/Career/Career.jsx"));
const Test = lazy(() => import("./components/Test.jsx"));
const AllBlogs = lazy(() =>
  import("./admin/blog/AllBlogs/AllBlogs.jsx").then((m) => ({
    default: m.AllBlogs,
  }))
);
const CreateBlog = lazy(() =>
  import("./admin/blog/CreateBlog/CreateBlog.jsx").then((m) => ({
    default: m.CreateBlog,
  }))
);
const BlogPage = lazy(() =>
  import("./admin/blog/BlogPage/BlogPage.jsx").then((m) => ({
    default: m.BlogPage,
  }))
);
const EditBlog = lazy(() =>
  import("./admin/blog/EditBlog/EditBlog.jsx").then((m) => ({
    default: m.EditBlog,
  }))
);
const Dashboard = lazy(() => import("./admin/auth/Dashboard.jsx"));
const SignIn = lazy(() => import("./admin/auth/SignIn.jsx"));
const ResetPassword = lazy(() => import("./admin/auth/ResetPassword.jsx"));
const ForgotPassword = lazy(() => import("./admin/auth/ForgotPassword.jsx"));
const SignUp = lazy(() => import("./admin/auth/SignUp.jsx"));
const ProtectedRoute = lazy(() => import("./admin/auth/ProtectedRoute.jsx"));

// Already lazy
const HolidaySalesStrategies = lazy(() =>
  import("./components/Blog/Blogs/HolidaySalesStrategies.jsx")
);
const BusinessesPrepare = lazy(() =>
  import("./components/Blog/Blogs/BusinessesPrepare.jsx")
);

// ✅ Canonical
function CanonicalLink() {
  const location = useLocation();
  const canonicalUrl = `https://www.spadvertising.in${location.pathname}`;
  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <CanonicalLink />

        <Suspense
          fallback={
            <div
              id="preloading"
              style={{
                width: "100%",
                height: "100vh",
                position: "fixed",
                zIndex: 101,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "#fff", // optional: clean background
              }}
            >
              <img
                style={{
                  width: "100px",
                  height: "100px",
                  position: "relative",
                  top: "50px",
                  left: "10px",
                }}
                src="/favicon.png"
                alt="SP Advertising Logo"
              />
              <img
                style={{ width: "150px", height: "150px" }}
                src="/circle.gif"
                alt="SP Advertising Loading Animation"
              />
            </div>
          }
        >
          <LoadScrollTop />
          <ScrollToTop />
          <Whatsapp />
          <Navbar />

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/About" element={<AboutMe />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Showcase" element={<RecentWork />} />
            <Route path="/Clients" element={<Clients />} />

            {/* Services */}
            <Route path="/Services" element={<WhatWeDo />} />
            <Route
              path="/Outdoor-Advertising-in-Raipur"
              element={<OutdoorAdvertising />}
            />
            <Route
              path="/Outdoor-Advertising"
              element={<OutdoorAdvertising />}
            />
            <Route
              path="/Digital-Marketing-Agency-in-Raipur"
              element={<DigitalMarketing />}
            />
            <Route
              path="/Designing-Services-in-Raipur"
              element={<DesigningServices />}
            />
            <Route path="/Print-Media-in-Raipur" element={<PrintMedia />} />
            <Route
              path="/Branding-Strategy-in-Raipur"
              element={<BrandingStrategy />}
            />
            <Route
              path="/Event-Promotion-in-Raipur"
              element={<EventPromotion />}
            />
            <Route path="/Audio-Visuals-in-Raipur" element={<AudioVisuals />} />
            <Route
              path="/Society-Branding-in-Raipur"
              element={<SocietyBranding />}
            />
            <Route path="/ai-powered-marketing-services" element={<Sp_ad />}></Route>

            {/* Blogs */}
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Blog/2" element={<Blog2 />} />
            <Route
              path="/Blog/Keyword-Research"
              element={<KeywordResearch />}
            />
            <Route
              path="/Blog/SEO-Optimization"
              element={<SeoOptimization />}
            />
            <Route
              path="/Blog/High-Quality-Content"
              element={<HighQualityContent />}
            />
            <Route
              path="/Blog/Businesses-Prepare-for-Emerging-Trends"
              element={<BusinessesPrepare />}
            />
            <Route
              path="/Blog/Holiday-Sales-Strategies"
              element={<HolidaySalesStrategies />}
            />
            <Route
              path="/Blog/Advertising-Tools-and-Techniques"
              element={<ImproveOnlineAdvertising />}
            />
            <Route
              path="/Blog/What-is-Digital-Marketing"
              element={<WhatIsDigitalMarketing />}
            />
            <Route
              path="/Blog/Influencer-Marketing"
              element={<InfluencerMarketing />}
            />
            <Route
              path="/Blog/Social-Media-Marketing"
              element={<SocialMediaMarketing />}
            />
            <Route
              path="/Blog/Benefits-of-Outdoor-Advertising"
              element={<BenefitsOutdoorAdvertising />}
            />

            {/* Others */}
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/career" element={<Career />} />
            <Route path="/test" element={<Test />} />
            <Route path="*" element={<UnderWorking />} />

            {/* Admin */}
            <Route
              path="/blogs"
              element={
                <ProtectedRoute>
                  <AllBlogs />
                </ProtectedRoute>
              }
            />
            <Route
              path="/create"
              element={
                <ProtectedRoute>
                  <CreateBlog />
                </ProtectedRoute>
              }
            />
            <Route path="/blog/:slug" element={<BlogPage />} />
            <Route
              path="/edit/:id"
              element={
                <ProtectedRoute>
                  <EditBlog />
                </ProtectedRoute>
              }
            />
            <Route path="/admin" element={<SignIn />} />
            {/* <Route path="/signup" element={<SignUp />} /> */}
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Routes>

          <NeedHelp />
          <Footer />
        </Suspense>
      </Router>
    </HelmetProvider>
  );
}

export default App;
