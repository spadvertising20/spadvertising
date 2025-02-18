import React from "react";
import "./OurValues.css";
import execution from "../../assets/OurValues/execution.png";
import accountability from "../../assets/OurValues/Accountability.png";
import growth from "../../assets/OurValues/growth.png";
import teamwork from "../../assets/OurValues/teamwork.png";

export default function OurValues() {
  const valuecards = [
    {
      id: 1,
      image: execution,
      title: "Execution",
      description:
        "We focus on delivering results with precision, ensuring timely, high-quality execution that meets client needs and expectations.",
    },
    {
      id: 2,
      image: accountability,
      title: "Accountability",
      description:
        "We embrace responsibility for our actions, maintaining transparency and trust, and ensuring high ethical standards in all our endeavors.",
    },
    {
      id: 3,
      image: growth,
      title: "Growth",
      description:
        "We value continuous learning, fostering innovation and development to help individuals and the organization reach their full potential.",
    },
    {
      id: 4,
      image: teamwork,
      title: "Teamwork",
      description:
        "We prioritize collaboration, leveraging diverse strengths and perspectives to achieve common goals and foster a supportive work environment.",
    },
  ];

  return (
    <div className="values">
      <div className="values-con">
        <div className="values-con-title">
          <h1>
            OUR VALUES<p>OUR VALUES</p>
          </h1>
        </div>
        <div className="values-con-heading">
          <h1>The core values behind our works</h1>
          <p>
            Our work is driven by integrity, innovation, collaboration, and
            excellence, ensuring meaningful impact and lasting success for all.
          </p>
        </div>
        <div className="values-con-cards">
          {valuecards.map((value) => (
            <div key={value.id} className="values-con-card">
              <img
                loading="lazy"
                src={value.image}
                alt="Event Promotion in Raipur"
              />
              <div className="card-text">
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
