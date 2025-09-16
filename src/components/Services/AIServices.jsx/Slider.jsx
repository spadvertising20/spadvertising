import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Sp_services.css";

const services = [
  {
    title: "AI Brand Identity Generator",
    description:
      "AI-assisted creation of logo variations, color palettes, and typography suggestions.",
    icon: "/788.jpg",
  },
  {
    title: "Predictive Campaign Analytics",
    description: "AI models that forecast campaign performance before launch.",
    icon: "/analysis.png",
  },
  {
    title: "Hyper-Personalized Ad Creatives",
    description: "AI that generates multiple ad versions tailored to micro-audiences.",
    icon: "/5257.jpg",
  },
  {
    title: "AI-Powered Social Listening",
    description: "Real-time monitoring of brand mentions, sentiment, and competitor activity.",
    icon: "/aipic.jpg",
  },
  {
    title: "Content Automation Suite",
    description: "AI-assisted blog writing, social captions, and email sequences aligned with brand tone.",
    icon: "/aicontent.jpg",
  },
  {
    title: "Video Personalization",
    description: "AI-generated videos that adapt text, voiceover, visuals for each viewer segment.",
    icon: "/promo.jpg",
  },
];

const Slider = () => {
  return (
    <section className="services-main" id="services">
      <h2 className="services-title">
        Our <span>Services</span>
      </h2>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 10 },   // Mobile
          500: { slidesPerView: 2, spaceBetween: 15 }, // Small tablet
          768: { slidesPerView: 3, spaceBetween: 20 }, // Tablet
          1024: { slidesPerView: 4, spaceBetween: 25 } // Desktop
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="service-card">
              <div className="service-icon">
                <img src={service.icon} alt={service.title} />
              </div>
              <h3>{service.title}</h3>
              <p className="description">{service.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
