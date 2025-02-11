import React, { useEffect } from "react";
import "./Services.css";
import outdoor_img1 from "../../assets/Services/OutdoorAdvertising/outdoor-img1.png";
import { Link } from "react-router-dom";
import showcase1 from "../../assets/Services/OutdoorAdvertising/showcase1.webp";
import showcase2 from "../../assets/Services/OutdoorAdvertising/showcase2.webp";
import outdoor_img2 from "../../assets/Services/OutdoorAdvertising/outdoor-advertising5.jpg";
import gantry from "../../assets/Services/OutdoorAdvertising/gantry.jpg";
import { Helmet } from "react-helmet";
import SocietyBrandingImg1 from "../../assets/Services/SocietyBranding/SHRISHTI PLAZO.jpg";
import SocietyBrandingImg2 from "../../assets/Services/SocietyBranding/ASHOKA HEIGHTS.jpg";
import SocietyBrandingImg3 from "../../assets/Services/SocietyBranding/GT NATURA.jpg";
import SocietyBrandingImg4 from "../../assets/Services/SocietyBranding/CG HEIGHTS.jpg";
import SocietyBrandingImg5 from "../../assets/Services/SocietyBranding/DIAMOND TREE 2.jpg";
import SocietyBrandingImg6 from "../../assets/Services/SocietyBranding/AASTHA GREEN 2.jpg";
import SocietyBrandingImg7 from "../../assets/Services/SocietyBranding/OM SHREE.jpg";
import SocietyBrandingImg8 from "../../assets/Services/SocietyBranding/RAJAT PRIME.jpg";
import SocietyBrandingImg9 from "../../assets/Services/SocietyBranding/VIP KARISHMA 3.jpg";
import SocietyBrandingImg10 from "../../assets/Services/SocietyBranding/GREEN MEADOWS.jpg";

function SocietyBranding() {

  useEffect(() => {
    document.title = "Best Society Branding company in Raipur | Society Branding services";

    document
      .querySelector("meta[name='description']")
      ?.setAttribute("content", "Improve your brand visibility with our society branding services in Raipur. We cover all prime societies to help promote your business effectively.");

    document
      .querySelector("meta[name='keywords']")
      ?.setAttribute("content", "society branding, society branding in raipur, society branding company in raipur, society branding agency in raipur, outdoor company in chhattisgarh, society advertising in raipur, society promotion in raipur, society advertising, society promotion company in raipur");
  }, []);

  return (
    <div className="service">

      <div className="service-box-con">

        <div className="service-box">
          <div className="service-left">
            <h1>Society Branding</h1>
            <p data-aos="fade-right">
              Creating a unique identity that resonates with and influences
              societal values and perceptions.
            </p>
            <Link to={"/Contact"}>
              <button>Enquire Now</button>
            </Link>
          </div>
          <div className="service-right">
            <img
              src={outdoor_img1}
              alt="society branding"
            />
          </div>
        </div>
      </div>

      <div className="service-con">
        <div className="topic-align1 align1 society-align" id="topic-align2">
          <div className="">
            <div className="align3">
              <h1>SRISHTI'S PALAZZO</h1>
              <p>Avanti Vihar, Shankar Nagar, Raipur, Chhattisgarh 492007</p>
            </div>
            <div className="align2">
              <div className="align4" data-aos="fade-right">
                <table border="1" cellspacing="0" cellpadding="5">
                  <tr>
                    <td colspan="2">
                      <h2>SOCIETY DETAIL</h2>
                    </td>
                  </tr>
                  <tr>
                    <td>APPROX PEOPLE</td>
                    <td>1000</td>
                  </tr>
                  <tr>
                    <td>TOTAL FLAT</td>
                    <td>170</td>
                  </tr>
                  <tr>
                    <td>BUNGALOW</td>
                    <td>50</td>
                  </tr>
                </table>

                <table border="1" cellspacing="0" cellpadding="5">
                  <tr>
                    <td colspan="2">
                      <h2>MEDIA DETAIL</h2>
                    </td>
                  </tr>
                  <tr>
                    <td>BOARD TYPE</td>
                    <td>Pylon Board</td>
                  </tr>
                  <tr>
                    <td>SIZE</td>
                    <td>3 x 5 ft</td>
                  </tr>
                  <tr>
                    <td>VISIBILITY</td>
                    <td>Entry & exit point</td>
                  </tr>
                </table>
              </div>
              <div className="society-con">
                <img
                  src={SocietyBrandingImg1}
                  alt="society branding in raipur"
                  data-aos="zoom-in"
                />
                <p>
                  An eco- friendly project, the Srishtis Palazzo Shankar Nagar
                  is known to be the very first skyscapers of Raipur. Surrounded
                  by greenery and peace, the society is smartly located to keep
                  you away from the noise and stress of city
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="topic-align1 align1" id="topic-align2">
          <div className="">
            <div className="align3">
              <h1>ASHOKA HEIGHTS</h1>
              <p>Mowa, Raipur, Chhattisgarh 492014</p>
            </div>
            <div className="align2">
              <div className="align4" data-aos="fade-right">
                <table border="1" cellspacing="0" cellpadding="5">
                  <tr>
                    <td colspan="2">
                      <h2>SOCIETY DETAIL</h2>
                    </td>
                  </tr>
                  <tr>
                    <td>APPROX PEOPLE</td>
                    <td>1000</td>
                  </tr>
                  <tr>
                    <td>TOTAL FLAT</td>
                    <td>180</td>
                  </tr>
                  <tr>
                    <td>BLOCK</td>
                    <td>10</td>
                  </tr>
                </table>

                <table border="1" cellspacing="0" cellpadding="5">
                  <tr>
                    <td colspan="2">
                      <h2>MEDIA DETAIL</h2>
                    </td>
                  </tr>
                  <tr>
                    <td>BOARD TYPE</td>
                    <td>Pylon Board</td>
                  </tr>
                  <tr>
                    <td>SIZE</td>
                    <td>3 x 5 ft</td>
                  </tr>
                  <tr>
                    <td>VISIBILITY</td>
                    <td>Entry & exit point</td>
                  </tr>
                </table>
              </div>
              <div className="society-con">
                <img
                  src={SocietyBrandingImg2}
                  alt="society branding company in raipur"
                  data-aos="zoom-in"
                />
                <p>
                  This project is a perfect combination of comfort and style,
                  specifically designed to suit your requirements and
                  conveniences. One of the prime location that brings everything
                  around.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="topic-align1 align1" id="topic-align2">
          <div className="">
            <div className="align3">
              <h1>GT NATURA</h1>
              <p>
                MitanVihar-Daldal Seoni Rd, opp. gramin bank, Avani Vihar, Mowa,
                Raipur, Chhattisgarh 492014
              </p>
            </div>
            <div className="align2">
              <div className="align4" data-aos="fade-right">
                <table border="1" cellspacing="0" cellpadding="5">
                  <tr>
                    <td colspan="2">
                      <h2>SOCIETY DETAIL</h2>
                    </td>
                  </tr>
                  <tr>
                    <td>APPROX PEOPLE</td>
                    <td>400</td>
                  </tr>
                  <tr>
                    <td>TOTAL FLAT</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>BLOCK</td>
                    <td>4</td>
                  </tr>
                </table>

                <table border="1" cellspacing="0" cellpadding="5">
                  <tr>
                    <td colspan="2">
                      <h2>MEDIA DETAIL</h2>
                    </td>
                  </tr>
                  <tr>
                    <td>BOARD TYPE</td>
                    <td>Pylon Board</td>
                  </tr>
                  <tr>
                    <td>SIZE</td>
                    <td>3 x 5 ft</td>
                  </tr>
                  <tr>
                    <td>VISIBILITY</td>
                    <td>Entry & exit point</td>
                  </tr>
                </table>
              </div>
              <div className="society-con">
                <img
                  src={SocietyBrandingImg3}
                  alt="society branding agency in raipur"
                  data-aos="zoom-in"
                />
                <p>
                  G T Natura is a vibrant and modern destination in Raipur,
                  offering an exceptional blend of nature, luxury, and
                  entertainment. Known for its serene environment, innovative
                  design, and world-class amenities.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="topic-align1 align1" id="topic-align2">
          <div className="">
            <div className="align3">
              <h1>CG HEIGHTS</h1>
              <p>
                Infront of HP Gas Godown, Daldal Seoni Main Rd, Dubey Colony,
                Mowa, Raipur, Chhattisgarh 492001
              </p>
            </div>
            <div className="align2">
              <div className="align4" data-aos="fade-right">
                <table border="1" cellspacing="0" cellpadding="5">
                  <tr>
                    <td colspan="2">
                      <h2>SOCIETY DETAIL</h2>
                    </td>
                  </tr>
                  <tr>
                    <td>APPROX PEOPLE</td>
                    <td>400</td>
                  </tr>
                  <tr>
                    <td>TOTAL FLAT</td>
                    <td>90</td>
                  </tr>
                  <tr>
                    <td>BLOCK</td>
                    <td>06</td>
                  </tr>
                </table>

                <table border="1" cellspacing="0" cellpadding="5">
                  <tr>
                    <td colspan="2">
                      <h2>MEDIA DETAIL</h2>
                    </td>
                  </tr>
                  <tr>
                    <td>BOARD TYPE</td>
                    <td>Display Board</td>
                  </tr>
                  <tr>
                    <td>SIZE</td>
                    <td>9 x 7 ft</td>
                  </tr>
                  <tr>
                    <td>VISIBILITY</td>
                    <td>Entry & exit point</td>
                  </tr>
                </table>
              </div>
              <div className="society-con">
                <img
                  src={SocietyBrandingImg4}
                  alt="outdoor company in chhattisgarh"
                  data-aos="zoom-in"
                />
                <p>
                  A perfect blend of modern living and convenience with rich and
                  well educated people. CG Heights ensures a lifestyle of luxury
                  and ease in the heart of the city.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="topic-align1 align1" id="topic-align2">
          <div className="">
            <div className="align3">
              <h1>DIAMOND TREE</h1>
              <p>
                Daldal Seoni Main Rd, Dubey Colony, Mowa, Raipur, Chhattisgarh
                492014
              </p>
            </div>
            <div className="align2">
              <div className="align4" data-aos="fade-right">
                <table border="1" cellspacing="0" cellpadding="5">
                  <tr>
                    <td colspan="2">
                      <h2>SOCIETY DETAIL</h2>
                    </td>
                  </tr>
                  <tr>
                    <td>APPROX PEOPLE</td>
                    <td>250</td>
                  </tr>
                  <tr>
                    <td>TOTAL FLAT</td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>BLOCK</td>
                    <td>2</td>
                  </tr>
                </table>

                <table border="1" cellspacing="0" cellpadding="5">
                  <tr>
                    <td colspan="2">
                      <h2>MEDIA DETAIL</h2>
                    </td>
                  </tr>
                  <tr>
                    <td>BOARD TYPE</td>
                    <td>Clip on Board </td>
                  </tr>
                  <tr>
                    <td>SIZE</td>
                    <td>3 x 5 ft</td>
                  </tr>
                  <tr>
                    <td>VISIBILITY</td>
                    <td>Lift</td>
                  </tr>
                </table>
              </div>
              <div className="society-con">
                <img
                  src={SocietyBrandingImg5}
                  alt="society advertising in raipur"
                  data-aos="zoom-in"
                />
                <p>
                  Diamond Tree is a luxurious and modern residential destination
                  in Raipur, offering a perfect combination of elegance,
                  comfort, and contemporary living.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="topic-align1 align1" id="topic-align2">
          <div className="">
            <div className="align3">
              <h1>Ashtha Green</h1>
              <p>Near BSNL office, Raipur, Chhattisgarh 492001</p>
            </div>
            <div className="align2">
              <div className="align4" data-aos="fade-right">
                <table border="1" cellspacing="0" cellpadding="5">
                  <tr>
                    <td colspan="2">
                      <h2>SOCIETY DETAIL</h2>
                    </td>
                  </tr>
                  <tr>
                    <td>APPROX PEOPLE</td>
                    <td>400</td>
                  </tr>
                  <tr>
                    <td>TOTAL FLAT</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>BLOCK</td>
                    <td>01</td>
                  </tr>
                </table>

                <table border="1" cellspacing="0" cellpadding="5">
                  <tr>
                    <td colspan="2">
                      <h2>MEDIA DETAIL</h2>
                    </td>
                  </tr>
                  <tr>
                    <td>BOARD TYPE</td>
                    <td>Clip on Board</td>
                  </tr>
                  <tr>
                    <td>SIZE</td>
                    <td>3 X 5 and 4 X 5</td>
                  </tr>
                  <tr>
                    <td>VISIBILITY</td>
                    <td>Lift and Exit</td>
                  </tr>
                </table>
              </div>
              <div className="society-con">
                <img
                  src={SocietyBrandingImg6}
                  alt="society promotion in raipur"
                  data-aos="zoom-in"
                />
                <p>
                  Aastha Green typically focuses on providing modern amenities
                  and comfortable living spaces, appealing to families and
                  individuals looking for a well-equipped home.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="topic-align1 align1" id="topic-align2">
          <div className="">
            <div className="align3">
              <h1>OM SHREE</h1>
              <p>LIC Colony, Mowa, Raipur, Chhattisgarh 492007</p>
            </div>
            <div className="align2">
              <div className="align4" data-aos="fade-right">
                <table border="1" cellspacing="0" cellpadding="5">
                  <tr>
                    <td colspan="2">
                      <h2>SOCIETY DETAIL</h2>
                    </td>
                  </tr>
                  <tr>
                    <td>APPROX PEOPLE</td>
                    <td>350</td>
                  </tr>
                  <tr>
                    <td>TOTAL FLAT</td>
                    <td>70</td>
                  </tr>
                  <tr>
                    <td>BLOCK</td>
                    <td>04</td>
                  </tr>
                </table>

                <table border="1" cellspacing="0" cellpadding="5">
                  <tr>
                    <td colspan="2">
                      <h2>MEDIA DETAIL</h2>
                    </td>
                  </tr>
                  <tr>
                    <td>BOARD TYPE</td>
                    <td>Pylon Board</td>
                  </tr>
                  <tr>
                    <td>SIZE</td>
                    <td>3 x 5 ft</td>
                  </tr>
                  <tr>
                    <td>VISIBILITY</td>
                    <td>Entry & exit point</td>
                  </tr>
                </table>
              </div>
              <div className="society-con">
                <img
                  src={SocietyBrandingImg7}
                  alt="society advertising"
                  data-aos="zoom-in"
                />
                <p>
                  One of the finest and well planned residential project of
                  Central India. Comfortable living and with top-in-class
                  amenities with best environment and well educated people.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="topic-align1 align1" id="topic-align2">
          <div className="">
            <div className="align3">
              <h1>RAJAT PRIME</h1>
              <p>
                Amlidih Main Road, near water tank, Shreeji kalptaru Colony,
                Amlihdih, Mahaveer Nagar, Raipur, Tikrapara, Chhattisgarh 492001
              </p>
            </div>
            <div className="align2">
              <div className="align4" data-aos="fade-right">
                <table border="1" cellspacing="0" cellpadding="5">
                  <tr>
                    <td colspan="2">
                      <h2>SOCIETY DETAIL</h2>
                    </td>
                  </tr>
                  <tr>
                    <td>APPROX PEOPLE</td>
                    <td>400</td>
                  </tr>
                  <tr>
                    <td>TOTAL FLAT</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>BLOCK</td>
                    <td>02</td>
                  </tr>
                </table>

                <table border="1" cellspacing="0" cellpadding="5">
                  <tr>
                    <td colspan="2">
                      <h2>MEDIA DETAIL</h2>
                    </td>
                  </tr>
                  <tr>
                    <td>BOARD TYPE</td>
                    <td>Display Board</td>
                  </tr>
                  <tr>
                    <td>SIZE</td>
                    <td>15 x 6 ft</td>
                  </tr>
                  <tr>
                    <td>VISIBILITY</td>
                    <td>Entry & exit point</td>
                  </tr>
                </table>
              </div>
              <div className="society-con">
                <img
                  src={SocietyBrandingImg8}
                  alt="society promotion company in raipur"
                  data-aos="zoom-in"
                />
                <p>
                  Welcome to Rajat Prime, a premium residential society located
                  in the heart of Raipur. Designed to offer modern living with a
                  touch of elegance, Rajat Prime is a symbol of luxury, comfort,
                  and community living.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="topic-align1 align1" id="topic-align2">
          <div className="">
            <div className="align3">
              <h1>VIP KARISHMA</h1>
              <p>
                D2 601 VIP karishma,, LIC Colony, Shankar Nagar, Raipur,
                Chhattisgarh 492007
              </p>
            </div>
            <div className="align2">
              <div className="align4" data-aos="fade-right">
                <table border="1" cellspacing="0" cellpadding="5">
                  <tr>
                    <td colspan="2">
                      <h2>SOCIETY DETAIL</h2>
                    </td>
                  </tr>
                  <tr>
                    <td>APPROX PEOPLE</td>
                    <td>900</td>
                  </tr>
                  <tr>
                    <td>TOTAL FLAT</td>
                    <td>166</td>
                  </tr>
                  <tr>
                    <td>BLOCK</td>
                    <td>05</td>
                  </tr>
                </table>

                <table border="1" cellspacing="0" cellpadding="5">
                  <tr>
                    <td colspan="2">
                      <h2>MEDIA DETAIL</h2>
                    </td>
                  </tr>
                  <tr>
                    <td>BOARD TYPE</td>
                    <td>Display Board (3 board )</td>
                  </tr>
                  <tr>
                    <td>SIZE</td>
                    <td>4 x 5 ft, 4x 5 ft and 4 x 6 ft</td>
                  </tr>
                  <tr>
                    <td>VISIBILITY</td>
                    <td>Entry & exit point</td>
                  </tr>
                </table>
              </div>
              <div className="society-con">
                <img
                  src={SocietyBrandingImg9}
                  alt="society advertising agency in raipur"
                  data-aos="zoom-in"
                />
                <p>
                  Nestled in a prime location, VIP Karishma Society is a vibrant
                  residential community that redefines modern living. Designed
                  with elegance and functionality in mind with blend of comfort,
                  convenience, and sophistication.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="topic-align1 align1" id="topic-align2">
          <div className="">
            <div className="align3">
              <h1>GREEN MEADOWS</h1>
              <p>Avani Vihar, Mowa, Raipur, Chhattisgarh 492014</p>
            </div>
            <div className="align2">
              <div className="align4" data-aos="fade-right">
                <table border="1" cellspacing="0" cellpadding="5">
                  <tr>
                    <td colspan="2">
                      <h2>SOCIETY DETAIL</h2>
                    </td>
                  </tr>
                  <tr>
                    <td>APPROX PEOPLE</td>
                    <td>400</td>
                  </tr>
                  <tr>
                    <td>TOTAL FLAT</td>
                    <td>80</td>
                  </tr>
                  <tr>
                    <td>BLOCK</td>
                    <td>4</td>
                  </tr>
                </table>

                <table border="1" cellspacing="0" cellpadding="5">
                  <tr>
                    <td colspan="2">
                      <h2>MEDIA DETAIL</h2>
                    </td>
                  </tr>
                  <tr>
                    <td>BOARD TYPE</td>
                    <td>Pylon Board</td>
                  </tr>
                  <tr>
                    <td>SIZE</td>
                    <td>4 x 5 ft</td>
                  </tr>
                  <tr>
                    <td>VISIBILITY</td>
                    <td>Entry point</td>
                  </tr>
                </table>
              </div>
              <div className="society-con">
                <img
                  src={SocietyBrandingImg10}
                  alt="society hoarding in raipur"
                  data-aos="zoom-in"
                />
                <p>
                  Nestled in the heart of nature, Green Meadows offers a
                  peaceful escape from the hustle and bustle of everyday life
                  where nature and peace come together in perfect harmony.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocietyBranding;
