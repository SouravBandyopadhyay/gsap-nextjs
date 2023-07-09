import React, { useEffect } from "react";
import { gsap } from "gsap";
const HomePage = () => {
  useEffect(() => {
    const t1 = gsap.timeline();
    t1.from(".line", {
      y: 100,
      ease: "power4.out",
      delay: 2,
      duration: 2,
      stagger: {
        amount: 0.4,
      },
    });

    return () => {};
  });
  return (
    //SECTION  APP Container
    <div className="w-full h-20 mx-auto mt-8 flex items-center content-center text-center overflow-hidden">
      {/* Wrapper */}
      <div className="wrapper w-full flex flex-col content-center items-center ">
        {/* Line Text */}
        {/* ANCHOR repeating task */}
        <div className="line w-9/12 h-20 overflow-hidden flex justify-center font-light">
          <p className="text-2xl leading-7 text-white">Software Developer</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
