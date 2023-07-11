import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  FaJsSquare,
  FaPython,
  FaNpm,
  FaHtml5,
  FaReact,
  FaHeart,
  FaCheckCircle,
} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
const SkillsSection = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const skillsSection = skillsRef.current;
    const skillsItems = skillsSection.querySelectorAll(".skill-item");

    gsap.set(skillsItems, { opacity: 0, y: 50 });

    const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

    tl.fromTo(
      skillsItems,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }
    );
  }, []);

  useEffect(() => {
    const skillsSection = skillsRef.current;

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold as needed
    };

    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const skillsItems = skillsSection.querySelectorAll(".skill-item");
          gsap.fromTo(
            skillsItems,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }
          );
          skillsObserver.unobserve(entry.target);
        }
      });
    }, options);

    skillsObserver.observe(skillsSection);

    return () => {
      skillsObserver.disconnect();
    };
  }, []);
  const icons = [
    { icon: <FaReact />, name: "ReactJS" },
    { icon: <FaJsSquare />, name: "JavaScript" },
    { icon: <IoLogoCss3 />, name: "CSS3" },
    { icon: <FaPython />, name: "Python" },
  ];
  return (
    <section ref={skillsRef} className="py-1 h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {icons.map((el) => (
            <div
              key={el.id}
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
