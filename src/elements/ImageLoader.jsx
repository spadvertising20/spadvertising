import React, { useEffect, useRef } from 'react';

const ImageLoader = ({ dataSrc, src, alt, ...props }) => {
  const imageRef = useRef(null);

  useEffect(() => {
    const img = imageRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          img.src = img.dataset.src;
          img.onload = () => {
            img.classList.remove('loading'); // Optional: add transition or effect
          };
          observer.unobserve(img);
        }
      });
    });

    observer.observe(img);

    return () => observer.disconnect();
  }, []);

  return (
    <img
      ref={imageRef}
      data-src={dataSrc}
      src={src} // Initial placeholder image
      alt={alt}
      className="loading" // Add class to show a loading state initially
      {...props} // Spread other props like data-aos or other attributes
    />
  );
};

export default ImageLoader;
