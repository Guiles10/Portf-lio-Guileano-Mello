"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Education from "@/components/Education";
import Orbit from "@/components/Orbit";
import ResultsCounters from "@/components/ResultsCounters";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MouseTrail from "@/components/visuals/MouseTrail";
import FloatingLogos from "@/components/visuals/FloatingLogos";

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
      {/* Background Layers */}
      <div className="bg-grid" />
      <FloatingLogos />
      <MouseTrail />
      
      {/* Page Content */}
      <Navbar />
      
      <Hero />
      
      <div className="section-divider" />
      <About />
      
      <div className="section-divider" />
      <ExperienceTimeline />
      
      <div className="section-divider" />
      <Expertise />
      
      <div className="section-divider" />
      <Projects />
      
      <Orbit />
      
      <Stack />
      
      <div className="section-divider" />
      <Education />
      
      <div className="section-divider" />
      <ResultsCounters />
      
      <Contact />
      
      <Footer />
    </main>
  );
}
