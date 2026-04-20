"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { TECH_STACK } from "@/constants/tech-stack";
import { MessageSquare, Target, Zap, Users, ShieldCheck, Layers, Code2, BrainCircuit } from "lucide-react";

export default function Stack() {
  const [activeTab, setActiveTab] = useState<"hard" | "soft">("hard");

  const techCategories = [
    { id: "Frontend", label: "[FRONTEND]" },
    { id: "Backend", label: "[BACKEND]" },
    { id: "Performance", label: "[PERFORMANCE & ADS]" },
    { id: "Tools", label: "[TOOLS & SPECIALTIES]" },
  ];

  const softSkills = [
    {
      title: "Comunicação Técnica",
      icon: <MessageSquare size={24} />,
      desc: "Habilidade de traduzir conceitos e lógicas de programação e marketing para diferentes públicos, facilitando a comunicação o entendimento e o alinhamento de expectativas."
    },
    {
      title: "Foco em Resultados (ROAS)",
      icon: <Target size={24} />,
      desc: "Mentalidade orientada a performance, priorizando ações que geram retorno financeiro real e escalabilidade para o negócio."
    },
    {
      title: "Resolução de Problemas",
      icon: <Zap size={24} />,
      desc: "Abordagem analítica e criativa para solucionar problemas e bugs, explorando diversas variações e cenários possíveis com foco em prever consequências. Atuo em colaboração com a equipe para validar ideias, integrando IAs para lapidar e otimizar as soluções finais."
    },
    {
      title: "Colaboração & Adaptabilidade",
      icon: <Users size={24} />,
      desc: "Focado em um trabalho de equipe fluido, possuo facilidade em seguir diretrizes, proatividade para questionar e contribuir com opiniões construtivas. Ajusto-me rapidamente a qualquer ambiente, sendo capaz de liderar e organizar times quando necessário."
    },
    {
      title: "Trabalho em Equipe",
      icon: <Users size={24} />,
      desc: "Acredito que os melhores resultados nascem da sinergia coletiva. Priorizo a troca de experiências e o suporte mútuo, garantindo um ambiente de trabalho harmonioso onde o sucesso do time é o objetivo principal."
    },
    {
      title: "Confiabilidade & Entrega",
      icon: <ShieldCheck size={24} />,
      desc: "Comprometimento com prazos e qualidade técnica, garantindo que a solução final atenda aos requisitos de negócio e de performance."
    }
  ];

  return (
    <Reveal>
      <section id="stack" className="container">
        <span className="mono section-label">// 004 — COMPETÊNCIAS</span>
        <h2 className="section-title section-header">Minhas Skills.</h2>

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
                          {tech.name.includes("Claude") ? (
                            <div className="custom-stack-icon">
                              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                                <circle cx="12" cy="12" r="3" />
                              </svg>
                            </div>
                          ) : tech.name.includes("APIs REST") ? (
                            <div className="custom-stack-icon">
                              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                                <path d="M17.5 19c2.5 0 4.5-2 4.5-4.5 0-2.3-1.7-4.1-3.9-4.5-.4-3.5-3.4-6-6.9-6-2.5 0-4.6 1.3-5.8 3.2C3.2 7.8 1.5 9.4 1.5 11.5c0 2.5 2 4.5 4.5 4.5" />
                                <path d="M12 11h.01M16 11h.01M8 11h.01M12 15h.01M16 15h.01M8 15h.01" strokeWidth="3" strokeLinecap="round" />
                                <path d="M6 12l2 2 4-4 4 4 2-2" />
                              </svg>
                            </div>
                          ) : (
                            <img
                              src={`https://cdn.simpleicons.org/${tech.icon}/ffffff`}
                              alt={tech.name}
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                              }}
                            />
                          )}
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
