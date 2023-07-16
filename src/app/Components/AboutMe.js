import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const AboutMeSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({ defaults: { opacity: 0, y: 50 } });

    tl.from(sectionRef.current.children, {
      duration: 0.8,
      stagger: 0.3,
      opacity: 0,
      y: 20,
    });

    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top 70%",
      end: "top 20%",
      animation: tl,
      markers: true,
      scrub: true,
      toggleActions: "play none none reverse",
    });

    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="border-2 border-red-500 border-solid py-8"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-2xl mb-4">
          I am Sourav Bandyopadhyay, a passionate and experienced Developer
          based in Gurgaon, Haryana. I have dedicated myself to creating
          exceptional user experiences that blend functionality and aesthetics
          seamlessly.
        </p>
      </div>
    </section>
  );
};

export default AboutMeSection;
