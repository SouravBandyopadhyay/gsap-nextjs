"use client";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import Navbar from "./Components/Navbar";
import LandingBanner from "./Components/LandingBanner";
import HomePage from "./Components/HomePage";
import AboutSection from "./Components/AboutMe";
import SkillSection from "./Components/SkillSection";
gsap.registerPlugin(CSSPlugin);
export default function Home() {
  return (
    <>
      {/* Navbar section */}
      <header>
        <Navbar />
      </header>
      {/* Content of the page start from here */}
      <main>
        <div className="h-screen">
          <LandingBanner />
          <HomePage />
        </div>
        <AboutSection />
        <SkillSection />
      </main>
      {/* </CustomCursor> */}
    </>
  );
}
