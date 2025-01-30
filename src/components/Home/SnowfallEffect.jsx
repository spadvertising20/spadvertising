// SnowfallEffect.jsx
import React, { useState, useEffect } from "react";
import Snowfall from "react-snowfall"; // npm package for snowfall

const SnowfallEffect = () => {
  const [showSnow, setShowSnow] = useState(false); // Initially false to add delay

  // Add a delay before showing the snowfall
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSnow(true); // Show snowfall after 1.5 seconds
    }, 1500);

    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  // Add a scroll event listener to toggle the snowfall
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowSnow(false); // Stop snowfall on scroll
      } else {
        setShowSnow(true); // Resume snowfall when scrolled back to top
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Clean up listener
    };
  }, []);

  return (
    <div>
      {/* Conditionally render the snowfall effect */}
      {showSnow && (
        <Snowfall
          color="white" // Snowflake color
          snowflakeCount={0} // Number of snowflakes
        />
      )}
    </div>
  );
};

export default SnowfallEffect;
