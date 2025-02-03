import React, { useState } from 'react';
import { motion } from 'framer-motion';
import saffron from '../../assets/Navbar/saffron-balloon.png';
import white from '../../assets/Navbar/white-balloon.png';
import green from '../../assets/Navbar/green-balloon.png';
import './FloatingBalloons.css'

const FloatingBalloons = () => {
  const [showBalloons, setShowBalloons] = useState(true); // State to control balloon visibility
  const balloons = Array(15).fill(0); // Create 15 balloons
  const balloonImages = [saffron, white, green];

  const generateRandomX = () => Math.floor(Math.random() * window.innerWidth) - 50;

  return (
    <>
      {/* {showBalloons && (
        <div className='float'
          style={{
            position: 'absolute',
            overflow: 'hidden',
            height: '100vh',
            width: '100%',
            zIndex: '1',
            bottom: '-10px',
            
          }}
        >
          {balloons.map((_, index) => (
            <motion.img
              key={index}
              src={balloonImages[index % balloonImages.length]} // Cycle through the images
              alt="Floating balloon"
              style={{
                position: 'absolute',
                bottom: 0,
                left: generateRandomX(),
                width: 50, // Adjust size to fit your design
                height: 'auto',
              }}
              initial={{ y: '100%' }}
              animate={{ y: '-800%' }}
              transition={{
                duration: Math.random() * 1 + 3, // Random value between 9 and 10
                delay: Math.random() * 1,        // Random value between 0 and 1
              }}
              
              onAnimationComplete={() => {
                // When the last animation completes, hide balloons
                if (index === balloons.length - 15) {
                  setShowBalloons(false);
                }
              }}
            />
          ))}
        </div>
      )} */}
    </>
  );
};

export default FloatingBalloons;
