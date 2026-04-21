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
            marginInline: "auto", 
            marginTop: "1.5rem", 
            textTransform: "none", 
            letterSpacing: "normal",
            lineHeight: "1.8"
          }}
        >
          <span style={{ color: "var(--primary)", fontWeight: "bold" }}>Desenvolvedor Web Full Stack</span> (Node.js, React, TypeScript, JavaScript, Data Base)
          <br /><span style={{ color: "var(--primary)", fontWeight: "bold" }}>|</span> <span style={{ fontWeight: "bold" }}>Full Cycle Developer</span> 
          <br /><span style={{ color: "var(--primary)", fontWeight: "bold" }}>|</span> Desenvolvedor de Sites, SaaS e E-commerce
        </motion.p>

        <div className="hero-ctas reveal delay-2 active" style={{ marginTop: "1rem" }}>
          <MagneticButton>
            <Link href="#projetos" className="btn btn-primary">
              Ver Experiência
            </Link>
          </MagneticButton>
          <MagneticButton>
            <Link href="#contato" className="btn btn-secondary">
              Falar Comigo
            </Link>
          </MagneticButton>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-line"></div>
      </div>
    </header>
  );
}

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    x.set(distanceX * 0.35);
    y.set(distanceY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
    >
      {children}
    </motion.div>
  );
}
