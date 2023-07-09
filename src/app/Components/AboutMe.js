import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AboutMeSection = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const aboutSection = aboutRef.current;
    const title = aboutSection.querySelector('.title');
    const description = aboutSection.querySelector('.description');

    gsap.set([title, description], { opacity: 0, y: 50 });

    const tl = gsap.timeline({ defaults: { ease: 'power1.out' } });

    tl.to(title, { opacity: 1, y: 0, duration: 0.6 })
      .to(description, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3');
  }, []);

  return (
    <section ref={aboutRef} className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="title text-4xl font-bold mb-4">About Me</h2>
          <p className="description text-lg text-gray-600">
            I am a Web Developer from Gurgaon, Haryana. I have gone through a rigorous and competitive coding curriculum and learned MERN Stack at Masai School. I have done various Collaborative as well as Individual projects in my coding journey. Check out some of my work in the Projects section.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
