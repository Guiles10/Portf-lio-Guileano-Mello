"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  text: string;
  color: string;
}

const codeFragments = [
  "<div>", "const", "useState", "useEffect", "=>", "async", "await", 
  "SELECT", "FROM", "WHERE", "ROAS", "GoogleAds", "MetaAds", "Next.js", 
  "TypeScript", "Node", "<section />", "import", "export", "{...}", "[]"
];

const colors = [
  "rgba(255, 107, 0, 0.4)", // Orange
  "rgba(97, 218, 251, 0.4)", // React Blue
  "rgba(255, 255, 255, 0.3)", // White
  "rgba(104, 160, 99, 0.4)",  // Node Green
];

export default function MouseTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);
  
  const addParticle = useCallback((x: number, y: number) => {
    const id = Date.now() + Math.random();
    const text = codeFragments[Math.floor(Math.random() * codeFragments.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    setParticles((prev) => [...prev.slice(-15), { id, x, y, text, color }]);
    
    // Auto-remove particles after animation
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== id));
    }, 1500);
  }, []);

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    const threshold = 40; // Only spawn every 40px of movement

    const handleMouseMove = (e: MouseEvent) => {
      const dist = Math.hypot(e.clientX - lastX, e.clientY - lastY);
      if (dist > threshold) {
        addParticle(e.clientX, e.clientY);
        lastX = e.clientX;
        lastY = e.clientY;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [addParticle]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 5,
        overflow: "hidden",
      }}
    >
      <AnimatePresence>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ 
              opacity: 0, 
              scale: 0.5, 
              x: p.x, 
              y: p.y,
              rotate: Math.random() * 20 - 10 
            }}
            animate={{ 
              opacity: [0, 1, 0], 
              scale: 1, 
              y: p.y - 60, // Drift upwards
              x: p.x + (Math.random() * 40 - 20) // Random horizontal drift
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              position: "absolute",
              color: p.color,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.85rem",
              fontWeight: 600,
              whiteSpace: "nowrap",
              textShadow: "0 0 10px rgba(0,0,0,0.5)",
              pointerEvents: "none",
            }}
          >
            {p.text}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
