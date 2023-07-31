"use client";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import Navbar from "./Components/Navbar";
import LandingBanner from "./Components/LandingBanner";
import HomePage from "./Components/HomePage";
import AboutSection from "./Components/AboutMe";
import SkillSection from "./Components/SkillSection";
import TestimonialsCarousel from "./Components/Testimonial";
import TestimonialsCarousel2 from "./Components/Testimonials2";
import ProjectsSection from "./Components/ProjexctSection";
import MessageIcon from "./Components/RandomMotion";
import OpenSourceContributions from "./Components/OpenSourceContribution";
import Footer from "./Components/Footer";
import DropText from "./Components/DropEffect";
import { useEffect, useState } from "react";
import DataProgress from "./Components/DataProgess";
gsap.registerPlugin(CSSPlugin);
export default function Home() {
  const [dataPercentage, setDataPercentage] = useState(0);

  // Simulate increasing data over time (for demo purposes)
  useEffect(() => {
    const interval = setInterval(() => {
      setDataPercentage((prevPercentage) => {
        const newPercentage = prevPercentage + 10;
        return newPercentage > 100 ? 0 : newPercentage;
      });
    }, 2000); // Change the interval time as needed (e.g., 2000ms = 2 seconds)
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      {/* Navbar section */}
      <header>
        <Navbar />
      </header>
      {/* Content of the page start from here */}
      <main className="relative">
        <DataProgress className="sticky" dataPercentage={dataPercentage} />
        <div className="h-screen">
          <LandingBanner />
          <HomePage />
        </div>
        <AboutSection />
        <SkillSection />
        <TestimonialsCarousel />
        <ProjectsSection />
        <OpenSourceContributions />
      </main>
      <Footer />
    </>
  );
}
