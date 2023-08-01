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
import DataProgress from "./Components/DataProgess";
gsap.registerPlugin(CSSPlugin);
export default function Home() {
  return (
    <>
      {/* Navbar section */}
      <header>
        <Navbar />
      </header>
      {/* Content of the page start from here */}
      <main className="relative">
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
