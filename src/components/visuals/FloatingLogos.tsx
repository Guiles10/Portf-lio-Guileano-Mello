"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TECH_STACK } from "@/constants/tech-stack";

export default function FloatingLogos() {
  const [mounted, setMounted] = useState(false);
  const [elements, setElements] = useState<any[]>([]);
  const [failedIcons, setFailedIcons] = useState<Set<string>>(new Set());

  useEffect(() => {
    setMounted(true);
    
    // Reduced density for performance (Clean Code)
    const isMobile = window.innerWidth < 768;
    const excludedLogos = ["Meta Ads", "Analytics", "Google Ads", "CRO / Funis", "GTM"];
    const filteredStack = TECH_STACK.filter(tech => !excludedLogos.includes(tech.name));
    
    const newElements = filteredStack.filter((_, i) => isMobile ? i % 4 === 0 : i % 2 === 0).map((tech, i) => ({
      id: `logo-${i}-${tech.name}`,
      tech: tech,
      x: Math.random() * 90 + 5,
      y: Math.random() * 90 + 5,
      size: isMobile ? (Math.random() * 30 + 40) : (Math.random() * 50 + 70), 
      duration: Math.random() * 60 + 50,
      delay: Math.random() * 20,
    }));
    setElements(newElements);
  }, []);

  if (!mounted) {
    return <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none" }} />;
  }

  const handleIconError = (iconName: string) => {
    setFailedIcons((prev) => new Set(prev).add(iconName));
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: -1, // Deeper than content
        overflow: "hidden",
      }}
    >
      <AnimatePresence>
        {elements.length > 0 && elements.map((el) => (
          <motion.div
            key={el.id}
            initial={{ x: `${el.x}vw`, y: `${el.y}vh`, opacity: 0, scale: 0.8 }}
            animate={{
              y: [`${el.y}vh`, `${el.y + 10}vh`, `${el.y - 10}vh`, `${el.y}vh`],
              x: [`${el.x}vw`, `${el.x + 5}vw`, `${el.x - 5}vw`, `${el.x}vw`],
              opacity: [0.05, 0.2, 0.05],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: el.duration,
              repeat: Infinity,
              delay: el.delay,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              width: el.size,
              height: el.size,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "140%",
                height: "140%",
                background: el.tech.glow,
                borderRadius: "50%",
                filter: "blur(60px)",
                zIndex: -1,
                opacity: 0.5
              }}
            />
            
            {!failedIcons.has(el.tech.name) ? (
              <div style={{ position: "relative", width: "50%", height: "50%", opacity: 0.5, marginBottom: "4px" }}>
                <Image
                  src={el.tech.icon}
                  alt={el.tech.name}
                  fill
                  className="tech-logo"
                  style={{ objectFit: "contain" }}
                  onError={() => handleIconError(el.tech.name)}
                />
              </div>
            ) : (
              <div className="floating-icon-text" style={{ color: "white", fontWeight: "bold", opacity: 0.6, marginBottom: "4px" }}>
                {el.tech.name[0]}
              </div>
            )}

            <span 
              className="floating-icon-text"
              style={{ 
                fontFamily: "'JetBrains Mono', monospace", 
                fontSize: "0.6rem", 
                color: "white", 
                opacity: 0.3,
                textAlign: "center"
              }}
            >
              {el.tech.name}
            </span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
