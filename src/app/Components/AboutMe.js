import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AboutMeSection = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const aboutSection = aboutRef.current;
    const title = aboutSection.querySelector(".title");
    const description = aboutSection.querySelector(".description");

    gsap.set([title, description], { opacity: 0, y: 200 });

    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.to(title, { opacity: 1, y: 0, duration: 0.6 }).to(
      description,
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.3"
    );
  }, []);

  return (
    <section ref={aboutRef} className="mx-auto px-5 py-10 w-2/3 h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="title text-4xl font-bold mb-4">About Me</h2>
          <p className="description text-2xl text-gray-600">
            I am Sourav Bandyopadhyay, a passionate and experienced Developer
            based in Gurgaon, Haryana. I have dedicated myself to creating
            exceptional user experiences that blend functionality and aesthetics
            seamlessly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
