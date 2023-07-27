import { useEffect, useRef } from "react";
import gsap from "gsap";
import { random } from "gsap/gsap-core";

const MessageIcon = () => {
  const messageRef = useRef(null);
  const iconSize = 24; // Adjust this size based on the actual icon dimensions

  useEffect(() => {
    const message = messageRef.current;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const maxX = screenWidth - iconSize;
    const maxY = screenHeight - iconSize;

    gsap.set(message, {
      x: random(0, maxX, true),
      y: random(0, maxY, true),
    });

    const animateMessage = () => {
      gsap.to(message, {
        x: random(0, maxX, true),
        y: random(0, maxY, true),
        duration: 3,
        ease: "power2.inOut",
        onComplete: animateMessage,
      });
    };

    animateMessage();
  }, []);

  return (
    <div
      ref={messageRef}
      className="absolute"
      style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
    >
      {/* Replace with your MessageIcon SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={iconSize}
        height={iconSize}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 3h18v18H3z"></path>
        <path d="M21 9l-9 7-9-7"></path>
      </svg>
    </div>
  );
};

export default MessageIcon;
