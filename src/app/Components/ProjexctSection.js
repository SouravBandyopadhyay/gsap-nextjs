import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useIsomorphicLayoutEffect from "../useIsomorphicLayoutEffect";
gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: "Project 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis vitae mauris vitae fringilla.",
    imageUrl: "/project1.jpg",
  },
  {
    name: "Project 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis vitae mauris vitae fringilla.",
    imageUrl: "/project2.jpg",
  },
  {
    name: "Project 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis vitae mauris vitae fringilla.",
    imageUrl: "/project3.jpg",
  },
  {
    name: "Project 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis vitae mauris vitae fringilla.",
    imageUrl: "/project4.jpg",
  },
  {
    name: "Project 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus convallis vitae mauris vitae fringilla.",
    imageUrl: "/project5.jpg",
  },
  // Add more projects here
];

const ProjectsSection = () => {
  const projectsRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const projectsContainer = projectsRef.current;
    const projectsCards = projectsContainer.querySelectorAll(".project-card");

    gsap.set(projectsCards, { yPercent: -30, opacity: 0 });

    projectsCards.forEach((card, index) => {
      gsap.to(card, {
        yPercent: 0,
        opacity: 1,
        duration: 0.7,
        scrollTrigger: {
          trigger: card,
          start: "top center",
          end: "bottom center",
          scrub: 3,
        },
      });
    });
  }, []);

  return (
    <div className="py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-8">Projects</h2>
        <div
          ref={projectsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card p-8 bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.imageUrl}
                alt={project.name}
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
