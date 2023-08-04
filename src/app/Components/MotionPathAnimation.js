import React, { useRef, useEffect } from "react";
import { gsap, Power1 } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// Register the MotionPathPlugin
gsap.registerPlugin(MotionPathPlugin);

const MotionPathDemo = () => {
  const rectRef = useRef(null);

  useEffect(() => {
    const rect = rectRef.current;

    gsap.to(rect, {
      duration: 5,
      repeat: -1,
      ease: Power1.easeInOut,
      motionPath: {
        path: "#motionPath",
        align: "#motionPath",
        autoRotate: true,
        alignOrigin: [0.5, 0.5],
      },
    });
  }, []);

  return (
    <div className="flex justify-center items-center h-screen p-6">
      <svg width="500" height="400">
        <path
          id="motionPath"
          d="M50 50 Q100 150 150 50 T300 50"
          fill="none"
          stroke="gray"
        />
        <rect
          ref={rectRef}
          x="-15" // Adjusted to center the rectangle on the path
          y="-15" // Adjusted to center the rectangle on the path
          width="30"
          height="30"
          rx="15" // Set the horizontal radius for rounded corners (half of the width)
          ry="15" // Set the vertical radius for rounded corners (half of the height)
          fill="blue"
        />
      </svg>
    </div>
  );
};

export default MotionPathDemo;
