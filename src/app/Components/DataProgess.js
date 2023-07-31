// components/DataProgress.js
import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

const DataProgress = ({ dataPercentage }) => {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (!isAnimated) {
      gsap.to('.progress-bar', {
        width: `${dataPercentage}%`,
        duration: 1.5,
        ease: 'power3.out',
      });
      setIsAnimated(true);
    }
  }, [dataPercentage, isAnimated]);

  return (
    <div className="relative w-full h-4 bg-gray-300 rounded-full">
      <div className="sticky top-0 left-0 h-4 bg-blue-500 rounded-full progress-bar"></div>
    </div>
  );
};

export default DataProgress;
