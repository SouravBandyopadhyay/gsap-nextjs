// components/Footer.js
import React, { useRef } from "react";
import gsap from "gsap";
import useIsomorphicLayoutEffect from "../useIsomorphicLayoutEffect";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">
          SOURAV BANDYOPADHYAY
        </h2>
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/souravbandyopadhyay/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/SouravBandyopadhyay"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300"
          >
            GitHub
          </a>
          <a
            href="https://drive.google.com/your-google-drive-link/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:text-red-300"
          >
            Google Drive
          </a>
        </div>
        <p className="text-gray-400 text-md">
          &copy; 2023 Your Portfolio. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;
