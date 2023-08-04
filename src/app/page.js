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
gsap.registerPlugin(CSSPlugin);
export default function Home() {
  return (
    <TransitionProvider>
      <header>
        <Navbar />
      </header>
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
        <GithubCalender />
      </main>
      <Footer />
    </TransitionProvider>
  );
}
