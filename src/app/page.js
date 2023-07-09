"use client";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import Navbar from "./Components/Navbar";
import LandingBanner from "./Components/LandingBanner";
import HomePage from "./Components/HomePage";
import AboutMe from "./Components/AboutMe";
import { useLayoutEffect, useRef } from "react";
import Circle from "./Components/CutomCursor";
import AboutSection from "./Components/AboutMe";
import SkillsSection from "./Components/SkillSection";
gsap.registerPlugin(CSSPlugin);
export default function Home() {
 
  return (
    <>
      {/* Navbar section */}
      <Circle />
      <header>
        <Navbar />
      </header>
      {/* Content of the page start from here */}
      <main>
        <LandingBanner />
        <HomePage />
        <AboutSection />
        <SkillsSection/>
      </main>
      {/* </CustomCursor> */}
    </>
  );
}
