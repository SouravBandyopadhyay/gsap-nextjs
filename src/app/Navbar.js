import React, { useEffect } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".navbar", {
      y: 0,
      duration: 1.5,
      opacity: 1,
    }).from(".navbar__item", {
      y: -20,
      duration: 0.5,
      opacity: 0,
      stagger: 0.2,
    });
  }, []);

  const navLinks = [
    {
      id: 1,
      name: "Home",
      link: "#",
    },
    {
      id: 2,
      name: "About",
      link: "#",
    },
    {
      id: 3,
      name: "Services",
      link: "#",
    },
    {
      id: 4,
      name: "Contact",
      link: "#",
    },
  ];

  return (
    <nav className="navbar fixed top-0 left-0 w-full bg-gray-800 opacity-0 transform -translate-y-full z-50 px-2 py-6">
      <ul className="navbar__list flex justify-center items-center ">
        {navLinks.map((el) => (
          <li key={el.id} className="navbar__item list-none mx-2">
            <a
              href={el.link}
              className="text-white text-2xl hover:text-gray-300"
            >
              {el.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
