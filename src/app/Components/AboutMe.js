import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AboutSection = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const aboutSection = aboutRef.current;
    if (!aboutSection) return;

    const content = aboutSection.querySelector(".content");
    const background = aboutSection.querySelector(".background");

    gsap.set(content, { opacity: 0, y: 100 });
    gsap.set(background, { yPercent: -20 });

    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.to(content, { opacity: 1, y: 0, duration: 1 }).to(
      background,
      { yPercent: 0, duration: 1 },
      '&lsquo'
    );
  }, []);

  return (
    <section ref={aboutRef} className="relative py-16">
      <div className="container mx-auto px-4">
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-gray-600 mb-6">
            I am a Web Developer from Gurgaon, Haryana. I have gone through a
            rigorous and competitive coding curriculum and learned MERN Stack at
            Masai School. I have done various Collaborative as well as
            Individual projects in my coding journey. Check out some of my work
            in the Projects section
          </p>
          <p className="text-lg text-gray-600">
            I am open to job opportunities where I can contribute, learn, and
            grow. If you have a good opportunity that matches my skills and
            experience, then don't hesitate to Contact me
          </p>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden">
        <div className="background absolute top-0 left-0 right-0 bottom-0" />
      </div>
    </section>
  );
};

export default AboutSection;
