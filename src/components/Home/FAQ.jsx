import React, { useState } from "react";
import "./FAQ.css";

const faqData = [
  {
    question: "What services does SP Advertising Agency offer?",
    answer:
      "We specialize in digital marketing, social media management, SEO, branding, and performance-driven campaigns tailored to your business needs.",
  },
  {
    question: "Why should I choose SP Advertising for my brand?",
    answer:
      "We combine creativity with data-driven strategies, ensuring your brand not only stands out but also achieves measurable growth.",
  },
  {
    question: "Do you provide customized marketing strategies?",
    answer:
      "Yes! Every business is unique, and we create personalized marketing strategies to match your goals and target audience.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Digital marketing is a process, but most clients start seeing noticeable improvements within 2-3 months depending on the campaign.",
  },
  {
    question: "Can I get a free consultation?",
    answer:
      "Absolutely! Contact us today and schedule a free consultation with our experts to discuss your marketing needs.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-subtitle">
          Find answers to the most common questions about our advertising and
          digital marketing services.
        </p>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                <span>{activeIndex === index ? "−" : "+"}</span>
              </div>
              <div
                className="faq-answer"
                style={{
                  maxHeight: activeIndex === index ? "200px" : "0px",
                }}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
