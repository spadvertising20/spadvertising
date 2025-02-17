import React from "react";
import "./Clients.css";
import client1 from "../../assets/WelcomePage/client1.png";
import client2 from "../../assets/WelcomePage/client2.png";
import client3 from "../../assets/WelcomePage/client3.jpeg";
import client4 from "../../assets/WelcomePage/client4.png";
import client5 from "../../assets/WelcomePage/client5.svg";
import client6 from "../../assets/WelcomePage/client6.webp";
import client7 from "../../assets/WelcomePage/client7.png";
import client8 from "../../assets/WelcomePage/client8.jpeg";
import client9 from "../../assets/WelcomePage/client9.png";
import client10 from "../../assets/WelcomePage/client10.svg";
import client11 from "../../assets/WelcomePage/client11.png";
import client12 from "../../assets/WelcomePage/client12.jpeg";
import client13 from "../../assets/WelcomePage/client13.png";
import client14 from "../../assets/WelcomePage/client14.png";
import client15 from "../../assets/WelcomePage/client15.webp";
import client16 from "../../assets/WelcomePage/client16.jpg";
import client17 from "../../assets/WelcomePage/client17.webp";
import { Link } from "react-router-dom";

export default function HomeClients() {
  return (
    <div className="home-clients">
      <div className="home-clients-con">
        <div className="home-clients-title">
          <h1>
            OUR CLIENTS<p>OUR CLIENTS</p>
          </h1>
        </div>

        <p className="home-clients-con-p">
          At SP Advertising, we create impactful ads that capture attention and
          deliver results. Our expert team is dedicated to ensuring every
          project’s success, whether for outdoor advertising or digital ads
          campaigns.
        </p>

        <div className="home-clients-images">
          <img
            loading="lazy"
            src={client1}
            alt="outdoor advertising companies"
          />

          <img
            loading="lazy"
            src={client2}
            alt="social media marketing agency near me"
          />

          <img loading="lazy" src={client3} alt="digital marketing ads" />

          <img
            loading="lazy"
            src={client4}
            alt="digital marketing advertising"
          />
          <img
            loading="lazy"
            className="img-visible"
            src={client7}
            alt="billboard advertising companies"
          />
          <img loading="lazy" src={client5} alt="best advertising" />
          <img
            loading="lazy"
            className="img-visible"
            src={client6}
            alt="ad makers"
          />

          <img loading="lazy" src={client8} alt="outdoor billboard companies" />

          <img
            loading="lazy"
            src={client9}
            alt="advertising and marketing companies"
          />

          <img loading="lazy" src={client10} alt="advertising on billboards" />

          <img loading="lazy" src={client11} alt="top ad agencies" />

          <img loading="lazy" src={client12} alt="advertising firms near me" />

          <img loading="lazy" src={client13} alt="construction advertisement" />

          <img loading="lazy" src={client14} alt="ad marketing agency" />

          <img
            loading="lazy"
            className="img-visible"
            src={client15}
            alt="agency google ads"
          />

          <img loading="lazy" src={client16} alt="brand advertising" />

          <img loading="lazy" src={client17} alt="linkedin ads management" />
        </div>
        <Link to={"https://spadvertising.in/Clients"}>
          <button type="button" aria-label="Go to Portfolio">
            Explore more...
          </button>
        </Link>
      </div>
    </div>
  );
}
