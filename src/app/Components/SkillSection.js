import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaAws,
  FaDocker,
  FaGithub,
  FaJsSquare,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";

const SkillsSection = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const skillsSection = skillsRef.current;
    const skillsItems = skillsSection.querySelectorAll(".skill-item");

    gsap.registerPlugin(ScrollTrigger);

    gsap.set(skillsItems, { opacity: 0, y: 50 });

    gsap.fromTo(
      skillsItems,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 0.2,
        scrollTrigger: {
          trigger: skillsSection,
          start: "top 70%",
          scroller: "body",
          markers: true,
          end: "top 20%",
          scrub: 5,
        },
      }
    );
  }, []);

  const icons = [
    { icon: <FaReact />, name: "ReactJS" },
    { icon: <FaJsSquare />, name: "JavaScript" },
    { icon: <IoLogoCss3 />, name: "CSS3" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <FaGithub />, name: "Github" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaPython />, name: "Python" },
  ];

  return (
    <section
      ref={skillsRef}
      className="py-1 h-screen border-2 border-red-600 border-solid"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          {icons.map((el) => (
            <div
              key={el.name}
              className="skill-item flex flex-row-reverse bg-gray-800 rounded-lg p-4 shadow-md text-center content-center"
            >
              <div className="text-2xl mx-auto">{el.name}</div>
              <span className="text-6xl mx-auto">{el.icon}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
// https://www.youtube.com/watch?v=kejUz1_7Eq8&t=0s
