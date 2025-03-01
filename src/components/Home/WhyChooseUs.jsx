import React, { useState } from "react";
import { Zap, Target, LaptopMinimalCheck, Lightbulb } from "lucide-react";
// import examining from "../../images/homepage/cost.jpg"; // Ensure this path is correct
import "./WhyChooseUs.css";
import goals from "../../assets/Home/goals.jpg";
import success from "../../assets/Home/success.jpg";
import ideas from "../../assets/Home/ideas.jpg";

const features = [
  {
    id: 2,
    icon: <Target className="w-6 h-6 text-yellow-600" />,
    title: "Goals",
    description: "We define precise objectives to maximize impact and drive sustainable growth.",
    image: goals,
  },
  {
    id: 3,
    icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
    title: "Ideas",
    description:
      "We develop innovative concepts that make brands stand out in competitive markets.",
    image: ideas, // Restored image
  },
  {
    id: 1,
    icon: <LaptopMinimalCheck className="w-6 h-6 text-red-600" />,
    title: "Success",
    description:
      "We achieve measurable success through strategic planning, creativity, and data-backed execution.",
    image: success,
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
              <p>HOW WE DRIVE RESULTS</p>
            </h1>
          </div>
          <h1 className="header-title">Our Results-Driven Performance</h1>
          <p className="header-description">
            We combine data-driven insights, creative expertise, and strategic
            execution to ensure every campaign maximizes ROI and delivers
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
