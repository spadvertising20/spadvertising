import React, { useState } from "react";
import { ChevronDown, MessageCircle, Search } from "lucide-react";
import "./FAQ.css"; // Import the external CSS file

const faqs = [
    {
      question: "What services does your agency offer?",
      answer: "We offer a comprehensive range of advertising services including digital marketing, social media management, brand strategy, content creation, PPC advertising, and traditional media campaigns. Our team specializes in creating integrated marketing solutions tailored to your business needs.",
      category: "Services"
    },
    {
      question: "How do you determine the best advertising strategy for my business?",
      answer: "We begin with a thorough analysis of your business, target audience, and industry landscape. Through market research, competitor analysis, and consultation with your team, we develop a customized strategy that aligns with your goals and budget. Our data-driven approach ensures measurable results.",
      category: "Process"
    },
    {
      question: "What platforms do you advertise on?",
      answer: "We advertise across all major digital platforms including Google Ads, Facebook, Instagram, LinkedIn, Twitter, and TikTok. We also handle traditional advertising channels such as TV, radio, print, and outdoor advertising, creating a multi-channel presence for your brand.",
      category: "Platforms"
    },
    {
      question: "How much does it cost to run an advertising campaign?",
      answer: "Campaign costs vary based on your objectives, target audience, and chosen platforms. We offer flexible packages starting from $2,000/month, with custom solutions for businesses of all sizes. Each proposal includes a detailed breakdown of costs and expected ROI.",
      category: "Pricing"
    },
    {
      question: "How long does it take to see results?",
      answer: "While some campaigns can show initial results within days, sustainable growth typically takes 3-6 months. We provide monthly performance reports and continuously optimize campaigns based on data-driven insights to ensure the best possible outcomes.",
      category: "Results"
    },
    {
      question: "Do you create ad content, or do I need to provide it?",
      answer: "Our in-house creative team handles all aspects of content creation, including copywriting, design, and video production. While we welcome any materials you'd like to provide, we can develop all necessary content from scratch, ensuring it aligns with your brand guidelines.",
      category: "Content"
    },
    {
      question: "How do you measure the success of an advertising campaign?",
      answer: "We use a variety of metrics such as conversion rates, click-through rates (CTR), return on ad spend (ROAS), customer engagement, and overall brand visibility. Our team provides detailed performance reports with actionable insights.",
      category: "Analytics"
    },
    {
      question: "Do you offer retargeting strategies?",
      answer: "Absolutely! We implement retargeting campaigns to re-engage visitors who have previously interacted with your brand. This helps increase conversion rates and maximize ad spend efficiency.",
      category: "Retargeting"
    },
    {
      question: "Can you help with influencer marketing?",
      answer: "Yes! We partner with influencers in various industries to create authentic brand collaborations. Our team handles influencer selection, contract negotiation, and campaign management.",
      category: "Influencer Marketing"
    },
    {
      question: "Do you offer branding and logo design?",
      answer: "Yes, our creative team provides full branding services including logo design, brand identity development, and visual guidelines to ensure a strong and cohesive brand presence.",
      category: "Branding"
    }
  ];
  

function FAQItem({ question, answer, category, isOpen, onClick }) {
  return (
    <div className="faq-item">
      <button className="faq-button" onClick={onClick} aria-expanded={isOpen}>
        <span>
          <strong>{category}:</strong> {question}
        </span>
        <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "faq-icon-rotate" : ""}`} />
      </button>
      <div className={`faq-answer ${isOpen ? "open" : ""}`}>{answer}</div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="faq-container">
      <div className="faq-wrapper">
        {/* Header */}
        <div className="faq-header">
          <div className="faq-icon">
            <MessageCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="faq-title">How can we help?</h2>
          <p className="faq-description">
            Find answers to common questions about our advertising services.
          </p>

        </div>

        {/* FAQ List */}
        <div>
          {filteredFaqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              category={faq.category}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Footer */}
        <div className="faq-footer">
          <p>
            Can't find what you're looking for?{" "}
            <a href="https://spadvertising.in/Contact">Get in touch with us</a>
          </p>
        </div>
      </div>
    </div>
  );
}
