import React, { useState, useEffect } from 'react';
import './ConsultingPopup.css';

function ConsultingPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the popup
   
    
    
      // Show the popup if this is the first time the user is visiting
      const timer = setTimeout(() => setIsOpen(true), 2000); // Popup after 2 seconds
      localStorage.setItem('hasVisited', 'true'); // Mark as visited
      return () => clearTimeout(timer);
    
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="popup-overlay">
          <div className="popup-form">
            <h2>Get a Free Consultation!</h2>
            <p>Fill out the form to discuss your advertising needs with our team.</p>
            <form>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Message" required></textarea>
            </form>
            <button type="submit">Submit</button>
            <button className="close-btn" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ConsultingPopup;
