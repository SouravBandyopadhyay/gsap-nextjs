import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";

const contributions = [
  {
    id: 1,
    title: "UiVerse",
    description: "Developed UI elements which is ready to use in any project",
    link: "https://uiverse.io/profile/SouravBandyopadhyay",
  },
  {
    id: 2,
    title: "Awesome UI Kit",
    description:
      "Contributed to an awesome open-source UI kit with various components.",
    link: "https://github.com/example/awesome-ui-kit",
  },
  {
    id: 3,
    title: "Community Tools",
    description:
      "Created tools to help manage and grow open-source communities.",
    link: "https://github.com/example/community-tools",
  },
];

const OpenSourceContributions = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    gsap.from(container, { opacity: 0, y: 50, duration: 1 });
  }, []);

  return (
    <div ref={containerRef} className="py-8 text-center">
      <h1 className="text-4xl font-bold mb-4">My Open Source Contributions</h1>
      <div className="grid gap-4 md:grid-cols-3">
        {contributions.map((contribution) => (
          <div
            key={contribution.id}
            className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
          >
            <h2 className="text-xl font-semibold mb-4">{contribution.title}</h2>
            <p className="text-gray-600 mb-6">{contribution.description}</p>
            <a
              href={contribution.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline hover:text-blue-600"
            >
              Open Link
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenSourceContributions;
