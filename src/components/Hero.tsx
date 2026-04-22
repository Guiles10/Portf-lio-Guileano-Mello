"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

export default function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);
  
  // Name split for better layout control
  const firstName = "GUILEANO GADEA";
  const lastName = "DE MELLO";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        const x = e.clientX;
        const y = e.clientY;
        glowRef.current.style.transform = `translate(calc(-50% + ${x / 15}px), calc(-50% + ${y / 15}px))`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <header id="hero" style={{ position: "relative", zIndex: 10 }}>
      {/* Visual background layers */}
      <div className="hero-glow" id="heroGlow" ref={glowRef}></div>
      
      <div className="container hero-content">
        <div className="title-wrapper">
          <h1 className="hero-title" style={{ flexDirection: "column", gap: "0" }}>
            <div className="title-line">
              {firstName.split("").map((char, i) => (
                <span key={i} className="char" style={{ animationDelay: `${i * 0.04}s` }}>
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>
            <div className="title-line">
              {lastName.split("").map((char, i) => (
                <span key={i} className="char" style={{ animationDelay: `${(firstName.length + i) * 0.04}s` }}>
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>
          </h1>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="hero-subtitle" 
          style={{ 
            fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)", 
            maxWidth: "1000px", 
            textAlign: "left",
            marginInline: "0", 
            marginTop: "1.5rem", 
            textTransform: "none", 
            letterSpacing: "normal",
            lineHeight: "1.8"
          }}
        >
          <span style={{ color: "var(--primary)", fontWeight: "bold" }}>|</span> <span style={{ color: "var(--primary)", fontWeight: "bold" }}>Desenvolvedor Web Full Stack</span>
          <br /><span style={{ color: "var(--primary)", fontWeight: "bold" }}>|</span> <span style={{ fontWeight: "bold" }}>Full Cycle Developer</span> 
          <br /><span style={{ color: "var(--primary)", fontWeight: "bold" }}>|</span> Desenvolvedor de Sites, SaaS e E-commerce
        </motion.p>


      </div>

      <div className="scroll-indicator">
        <div className="scroll-line"></div>
      </div>
    </header>
  );
}

