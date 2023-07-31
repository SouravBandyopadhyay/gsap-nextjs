// components/DropText.js
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const DropText = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

    gsap.from(textElement, {
      duration: 1.5,
      opacity: 0,
      y: -100, // Start position above the screen
      ease: 'power3.out',
      delay: 0.5,
    });
  }, []);

  return (
    <h1 ref={textRef} className="text-4xl font-bold text-center">
      Drop Effect with GSAP
    </h1>
  );
};

export default DropText;
