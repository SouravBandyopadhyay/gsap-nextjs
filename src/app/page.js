"use client";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import Navbar from "./Components/Navbar";
import LandingBanner from "./Components/LandingBanner";
import HomePage from "./Components/HomePage";
import AboutSection from "./Components/AboutMe";
import SkillSection from "./Components/SkillSection";
import TestimonialsCarousel from "./Components/Testimonial";
import ProjectsSection from "./Components/ProjexctSection";
import OpenSourceContributions from "./Components/OpenSourceContribution";
import Footer from "./Components/Footer";
import { TransitionProvider } from "./Context/TransitionContext";
import GithubCalender from "./Components/GithubCalender";
import MotionPathAnimation from "./Components/MotionPathAnimation";
import DraggableSVG from "./Components/DraggableSVG";
gsap.registerPlugin(CSSPlugin);
export default function Home() {
  return (
    <TransitionProvider>
      <header>
        <Navbar />
      </header>
      <main className="relative">
        <div className="h-1/2">
          <LandingBanner />
          <HomePage />
          {/* <MotionPathAnimation/> */}
          {/* <DraggableSVG /> */}
        </div>
        <AboutSection />
        <SkillSection />
        <TestimonialsCarousel />
        <ProjectsSection />
        <OpenSourceContributions />
        <GithubCalender />
      </main>
      <Footer />
    </TransitionProvider>
  );
}
