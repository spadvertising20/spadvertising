import React, { useState } from "react";
import { Zap, Target, LaptopMinimalCheck , Lightbulb } from "lucide-react";
// import examining from "../../images/homepage/cost.jpg"; // Ensure this path is correct
import "./WhyChooseUs.css";
import goals from "../../assets/Home/goals.jpg";
import success from "../../assets/Home/success.jpg";
import ideas from "../../assets/Home/ideas.jpg";

const features = [
  {
    id: 1,
    icon: <LaptopMinimalCheck  className="w-6 h-6 text-red-600" />,
    title: "Success",
    description:
      "Achieved through strategic planning, creativity, and data-driven execution.",
    image: success,
  },
  {
    id: 2,
    icon: <Target className="w-6 h-6 text-yellow-600" />,
    title: "Goals",
    description: "Defined with precision to maximize impact and growth.",
    image: goals,
  },
  {
    id: 3,
    icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
    title: "Ideas",
    description:
      "Innovative concepts that set brands apart in a competitive market.",
    image: ideas, // Restored image
  },
];

export default function WhyChooseUs() {
  const [selectedImage, setSelectedImage] = useState(features[0].image);

  return (
    <div className="why-choose-us">
      <div className="container">
        <div className="header">
          <div className="recent-work">
            <h1>
              RECENT WORK<p>RECENT WORK</p>
            </h1>
          </div>
          <h1 className="header-title">Our Results-Driven Performance</h1>
          <p className="header-description">
            Our data-driven approach, creative expertise, and strategic
            execution ensure that every campaign maximizes ROI and achieves
            outstanding results.
          </p>
        </div>
        <div className="content">
          <div className="features-column">
            <div className="features-list">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="feature-card"
                  onClick={() => setSelectedImage(feature.image)}
                >
                  <div className="feature-background"></div>
                  <div className="feature-icon">{feature.icon}</div>
                  <div className="feature-content">
                    <h2 className="feature-title">{feature.title}</h2>
                    <p className="feature-description">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="image-column">
            <img
              src={selectedImage}
              alt="Feature representation"
              className="feature-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
