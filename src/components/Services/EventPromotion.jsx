import React, { useEffect, useState } from "react";
import "./Services.css";
import { Link } from "react-router-dom";
import event from "../../assets/Services/EventPromotion/event.png";
import Corporate_Event from "../../assets/Services/EventPromotion/Corporate-Event.jpg";
import mall from "../../assets/Services/EventPromotion/mall.png";
import loading from "../../assets/components/loading-image.png";
import ImageLoader from "../../elements/ImageLoader";
import WhyTrustUs from "../../elements/WhyTrustUs";

function EventPromotion() {
  const wcsservices = [
    "Corporate Event",
    "Mall Activation",
    "Corporate Event",
  ];
  useEffect(() => {
    document.title =
      "Best Event Promotion company in Raipur | Event Promotion services";

    document
      .querySelector("meta[name='description']")
      ?.setAttribute(
        "content",
        "Boost your event's success with our event promotion company. We offer corporate event branding, live marketing, customized campaigns for impactful experiences."
      );

    document
      .querySelector("meta[name='keywords']")
      ?.setAttribute(
        "content",
        "Event promotion company,	event marketing services, professional event promotion, event advertising agency,	Affordable event promotion strategies,  Event promotion agency near me, Event promotion company in Raipur, Best event marketing services in Raipur, Event advertising and marketing in Raipur"
      );
  }, []);

  return (
    <div className="service">
      <div className="service-box-con">
        <div className="service-box">
          <div className="service-left">
            <h1>Event Promotion</h1>
            <p>
              Driving Engagement and Attendance: Effective Strategies for Event
              Promotion
            </p>
            <Link to={"/Contact"}>
              <button>Enquire Now</button>
            </Link>
          </div>
          <div className="service-right">
            <ImageLoader src={loading}
              data-src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757487806/event_njd4ms.png"}
              alt="Event Promotion in Raipur"
              data-aos="zoom-in"
            />
          </div>
        </div>
      </div>

      <div className="service-con">
        <div className="ul">
          <div className="topic-align1">
            <ImageLoader src={loading}
              data-src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757487800/Corporate-Event_jmypiy.jpg"}
              alt="Corporate Event in Raipur"
              data-aos="zoom-in"
            />
            <div className="topic-left" data-aos="fade-right">
              <h1>Corporate Event</h1>
              <p>
                A{" "}
                <a href="https://spadvertising.in/Event-Promotion-in-Raipur">
                  corporate event
                </a>{" "}
                is a professionally organized gathering for business purposes,
                such as conferences, seminars, or company parties. It focuses on
                networking, team-building, or sharing important information,
                often requiring strategic promotion to ensure success.
              </p>
            </div>
          </div>

          <div className="topic-align1" id="topic-align2">
            <div className="topic-left" data-aos="fade-right">
              <h1>Mall Activation</h1>
              <p>
                <a href="https://spadvertising.in/Event-Promotion-in-Raipur">
                  Mall activation
                </a>{" "}
                involves organizing promotional events or interactive activities
                within a shopping mall to attract shoppers and boost engagement.
                This can include product demonstrations, contests, and
                experiential marketing to enhance brand visibility and drive
                foot traffic.
              </p>
            </div>

            <ImageLoader src={loading}
              data-src={"https://res.cloudinary.com/dxzxvhrhy/image/upload/v1757487795/mall_nkokh1.png"}
              alt="Mall Activation in Raipur"
              data-aos="zoom-in"
            />
          </div>
        </div>
      </div>
       <WhyTrustUs services={wcsservices}/>
    </div>
  );
}

export default EventPromotion;
