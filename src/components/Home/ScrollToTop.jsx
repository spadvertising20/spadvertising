import React, { useState, useEffect } from "react";
import "./ScrollToTop.css";
import scroll from "../../assets/Home/home.png";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <div className="scroll-to-top">
          <button onClick={scrollToTop} className="scroll-button">
            <img src={scroll} alt="" />
          </button>
        </div>
      )}
    </div>
  );
}

export default ScrollToTop;
