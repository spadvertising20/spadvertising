import React from "react";
import "./Clients.css";

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
          <img src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482869/client1_eperoe.png"} alt="outdoor advertising companies" />

          <img src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482870/client2_dgj1fr.png"} alt="social media marketing agency near me" />

          <img src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482872/client3_jvsa0m.jpg"} alt="digital marketing ads" />

          <img src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482873/client4_rjmawq.png"} alt="digital marketing advertising" />
          <img
            className="img-visible"
            src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482879/client7_yaipke.png"}
            alt="billboard advertising companies"
          />
          <img src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482875/client5_kujipr.svg"} alt="best advertising" />
          <img className="img-visible" src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482877/client6_djuwum.webp"} alt="ad makers" />

          <img src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482880/client8_migh3c.jpg"} alt="outdoor billboard companies" />

          <img src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482883/client9_ci5bbw.png"} alt="advertising and marketing companies" />

          <img src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482853/client10_n1xmxs.svg"} alt="advertising on billboards" />

          <img src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482884/client11_f335i2.png"} alt="top ad agencies" />

          <img src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482887/client12_ntduvd.jpg"} alt="advertising firms near me" />

          <img src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482889/client13_d5gb6q.png"} alt="construction advertisement" />

          <img src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482890/client14_xrxfr1.png"} alt="ad marketing agency" />

          <img className="img-visible" src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482893/client15_kokywc.webp"} alt="agency google ads" />

          <img src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482895/client16_nahaov.jpg"} alt="brand advertising" />

          <img src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757482868/client17_cukctw.webp"} alt="linkedin ads management" />
        </div>
        {/* <Link to={"https://spadvertising.in/Clients"}>
          <button type="button" aria-label="Go to Portfolio">
            Explore more...
          </button>
        </Link> */}
      </div>
    </div>
  );
}
