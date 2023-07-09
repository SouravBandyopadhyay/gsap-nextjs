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
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
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
    { icon: <FaReact />, color: "text-blue-500", name: "ReactJS" },
    { icon: <FaJsSquare />, color: "text-yellow-500", name: "JavaScript" },
    { icon: <IoLogoCss3 />, color: "text-blue-300", name: "CSS3" },
    { icon: <FaPython />, color: "text-red-500", name: "Python" },
    { icon: <FaCheckCircle />, color: "text-green-500", name: "Circle" },
  ];
  return (
    <section ref={skillsRef} className="py-1 h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {icons.map((el) => (
            <div
              key={el.id}
              className="skill-item bg-gray-800 rounded-lg p-4 shadow-md text-center"
            >
              <div className="text-2xl mb-4">{el.name}</div>
              <span className={`text-4xl ${el.color}`}>{el.icon}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
