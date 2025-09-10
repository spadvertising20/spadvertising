import React, { useEffect, useState } from "react";
import "./Services.css";
import print from "../../assets/Services/PrintMedia/print.png";
import { Link } from "react-router-dom";
import print_img2 from "../../assets/Services/PrintMedia/prini-img2.jpeg";
import Newspaper_Ads from "../../assets/Services/PrintMedia/Newspaper-Ads.jpg";
import Pamphlet from "../../assets/Services/PrintMedia/Pamphlet.jpg";
import inshop3 from "../../assets/Services/BrandingStrategy/inshop3.jpg";
import loading from "../../assets/components/loading-image.png";
import ImageLoader from "../../elements/ImageLoader";
import WhyTrustUs from "../../elements/WhyTrustUs";

function PrintMedia() {
  const wcsservices = [
    "Newspaper Ads",
    "Brochure",
    "Pamphlet",
    "In-Shop Branding",
  ];
  useEffect(() => {
    document.title =
      "Best Print Media company in Raipur | Print Media services";

    document
      .querySelector("meta[name='description']")
      ?.setAttribute(
        "content",
        "Boost your brand with our print media agency. Offering brochure printing, custom posters, and high-quality print ads for impactful campaigns. Contact us today!"
      );

    document
      .querySelector("meta[name='keywords']")
      ?.setAttribute(
        "content",
        "Print Media agency,	Print Advertising Services, Custom Print Media Solutions, Professional Printing Agency,	Brochure Printing Services in Raipur, Flyer Design and Printing in Raipur, High-Quality Print Ads, Custom Poster Printing, Corporate Printing Solutions"
      );
  }, []);

  return (
    <div className="service">
      <div className="service-box-con">
        <div className="service-box">
          <div className="service-left">
            <h1>Print Media</h1>
            <p>
              Tangible Impact: The Enduring Power of Print Media in Advertising
            </p>
            <Link to={"/Contact"}>
              <button>Enquire Now</button>
            </Link>
          </div>
          <div className="service-right">
            <ImageLoader src={loading}
              data-src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757487949/print_r4sojb.png"}
              alt="Print Media in in Raipur"
              data-aos="zoom-in"
            />
          </div>
        </div>
      </div>
      <div className="service-con">
        <div className="ul">
          <div className="topic-align1" id="topic-align2">
            <div className="topic-left" data-aos="fade-right">
              <h1>Newspaper Ads</h1>
              <p>
                <a href="https://spadvertising.in/Print-Media-in-Raipur">
                  Newspaper ads
                </a>{" "}
                are print advertisements placed in newspapers to reach a broad,
                local audience. They use compelling visuals and text to promote
                products or services, leveraging the newspaper’s daily
                readership for targeted exposure.
              </p>
            </div>

            <ImageLoader src={loading}
              data-src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757487965/Newspaper-Ads_yyx1dg.jpg"}
              alt="Newspaper Ads in Raipur"
              data-aos="zoom-in"
            />
          </div>

          <div className="topic-align1">
            <ImageLoader src={loading}
              data-src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757487993/prini-img2_cioi9u.jpg"}
              alt="Brochure in Raipur"
              data-aos="zoom-in"
            />
            <div className="topic-left" data-aos="fade-right">
              <h1>Brochure</h1>
              <p className="">
                A{" "}
                <a href="https://spadvertising.in/Print-Media-in-Raipur">
                  brochure
                </a>{" "}
                is a printed booklet that provides detailed information about
                products, services, or organizations. It uses high-quality
                graphics and structured content to inform and persuade potential
                customers, often distributed in public places or direct mail.
              </p>
            </div>
          </div>

          <div className="topic-align1" id="topic-align2">
            <div className="topic-left" data-aos="fade-right">
              <h1>Pamphlet</h1>
              <p>
                A{" "}
                <a href="https://spadvertising.in/Print-Media-in-Raipur">
                  pamphlet
                </a>{" "}
                is a small, folded booklet or flyer designed to offer concise
                information about a specific topic, product, or service. It aims
                to educate and engage readers through clear, straightforward
                content and appealing design.
              </p>
            </div>

            <ImageLoader src={loading}
              data-src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757487971/Pamphlet_ltrkjx.jpg"}
              alt="Pamphlet in Raipur"
              data-aos="zoom-in"
            />
          </div>

          <div className="topic-align1">
            <ImageLoader src={loading}
              data-src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757487375/inshop3_lk940f.jpg"}
              alt="In-Shop Branding in Raipur"
              data-aos="zoom-in"
            />
            <div className="topic-left" data-aos="fade-right">
              <h1>In-Shop Branding</h1>
              <p>
                In-shop branding includes print materials like posters, banners,
                and point-of-sale displays used within retail environments. It
                enhances the shopping experience by reinforcing brand identity,
                promoting products, and guiding customer behavior at the point
                of purchase.
              </p>
            </div>
          </div>
        </div>
      </div>
      <WhyTrustUs services={wcsservices}/>
    </div>
  );
}

export default PrintMedia;
