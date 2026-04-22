"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { TECH_STACK } from "@/constants/tech-stack";
import { MessageSquare, Target, Zap, Users, ShieldCheck, Layers, Code2, BrainCircuit } from "lucide-react";

export default function Stack() {
  const [activeTab, setActiveTab] = useState<"hard" | "soft">("hard");

  const techCategories = [
    { id: "Frontend", label: "[FRONTEND]" },
    { id: "Backend", label: "[BACKEND]" },
    { id: "Tools", label: "[TOOLS & SPECIALTIES]" },
  ];

  const softSkills = [
    {
      title: "Comunicação Técnica",
      icon: <MessageSquare size={24} />,
      desc: "Habilidade de traduzir conceitos complexos e lógicas de programação para diferentes públicos, facilitando o entendimento técnico e o alinhamento de expectativas entre times."
    },
    {
      title: "Mentalidade de Produto",
      icon: <Target size={24} />,
      desc: "Visão orientada a resultados reais, priorizando funcionalidades que agregam valor direto ao usuário final e garantem a viabilidade técnica do projeto."
    },
    {
      title: "Resolução de Problemas",
      icon: <Zap size={24} />,
      desc: "Abordagem analítica e criativa para solucionar desafios técnicos, explorando diversas variações e cenários possíveis com foco em arquiteturas resilientes."
    },
    {
      title: "Colaboração & Adaptabilidade",
      icon: <Users size={24} />,
      desc: "Focado em um trabalho de equipe fluido, com facilidade em seguir diretrizes e proatividade para contribuir com opiniões construtivas e melhorias contínuas."
    },
    {
      title: "Arquitetura & Clean Code",
      icon: <Layers size={24} />,
      desc: "Preocupação constante com a organização do código e a estrutura do sistema, garantindo que a solução seja legível, testável e fácil de manter."
    },
    {
      title: "Confiabilidade & Entrega",
      icon: <ShieldCheck size={24} />,
      desc: "Comprometimento rigoroso com prazos e excelência técnica, garantindo que a solução final atenda a todos os requisitos de segurança e performance."
    }
  ];

  return (
    <Reveal>
      <section id="stack" className="container">
        <span className="mono section-label">// 004 — COMPETÊNCIAS</span>
        <h2 className="section-title section-header">Minhas skills</h2>

        {/* Intuitive Switcher */}
        <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: "3rem" }}>
          <div className="skills-nav">
            <button 
              className={`skill-tab ${activeTab === "hard" ? "active" : ""}`}
              onClick={() => setActiveTab("hard")}
              style={{ position: "relative", zIndex: 10 }}
            >
              {activeTab === "hard" && (
                <motion.div 
                  layoutId="active-pill"
                  className="active-pill"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <Code2 size={16} style={{ position: "relative", zIndex: 11 }} />
              <span style={{ position: "relative", zIndex: 11 }}>HARD SKILLS</span>
            </button>
            <button 
              className={`skill-tab ${activeTab === "soft" ? "active" : ""}`}
              onClick={() => setActiveTab("soft")}
              style={{ position: "relative", zIndex: 10 }}
            >
              {activeTab === "soft" && (
                <motion.div 
                  layoutId="active-pill"
                  className="active-pill"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <BrainCircuit size={16} style={{ position: "relative", zIndex: 11 }} />
              <span style={{ position: "relative", zIndex: 11 }}>SOFT SKILLS</span>
            </button>
          </div>
        </div>

        <div className="stack-content-wrapper">
          <AnimatePresence mode="wait">
            {activeTab === "hard" ? (
              <motion.div
                key="hard-skills"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="stack-categories"
              >
                {techCategories.map((cat) => (
                  <div className="category" key={cat.id} style={{ marginBottom: "3rem" }}>
                    <h4 className="cat-title">{cat.label}</h4>
                    <div className="stack-grid">
                      {TECH_STACK.filter((tech) => tech.category === cat.id).map((tech) => (
                        <div className="stack-item" key={tech.name}>
                          <div className="stack-icon-wrapper">
                            <Image
                              src={tech.icon}
                              alt={tech.name}
                              width={32} height={32}
                              style={["AWS", "OpenAI", "CSS3", "Sass / CSS", "Fire Bird 2.5", "Delphi", "Claude / IA", "CI/CD", "GitHub", "Supabase", "Slack", "UX/UI", "Next.js", "Node.js"].includes(tech.name) ? { filter: "brightness(0) invert(1)" } : undefined}
                            />
                          </div>
                          <span className="stack-name">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="soft-skills"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="soft-skills-grid"
              >
                {softSkills.map((skill, idx) => (
                  <div className="soft-skill-card" key={idx}>
                    <div className="soft-skill-icon-wrapper">
                      {skill.icon}
                    </div>
                    <h4 className="soft-skill-title">{skill.title}</h4>
                    <p className="soft-skill-desc">{skill.desc}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </Reveal>
  );
}
