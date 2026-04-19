"use client";

import Reveal from "./Reveal";

export default function Education() {
  const certifications = [
    "Comunidade Sobral de Tráfego Pago",
    "Fórmula de Lançamento",
    "AWS (Cloud Foundations & Solutions)",
    "Delphi e FireBird Básico",
  ];

  return (
    <Reveal>
      <section id="formacao" className="container">
        <span className="mono section-label">// 005 — FORMAÇÃO & ESPECIALIZAÇÕES</span>
        
        <div className="education-grid" style={{ 
          display: "grid", 
          gridTemplateColumns: "1fr 1fr", 
          gap: "4rem", 
          marginTop: "3rem" 
        }}>
          {/* Academia */}
          <div className="edu-column">
            <h3 className="section-title" style={{ fontSize: "1.8rem", marginBottom: "2.5rem" }}>
              Formação Acadêmica
            </h3>
            <div className="soft-skill-card" style={{ padding: "2.5rem" }}>
              <div className="soft-skill-icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h4 className="soft-skill-title" style={{ fontSize: "1.3rem" }}>Desenvolvimento Full Stack</h4>
              <p className="mono" style={{ color: "var(--primary)", marginBottom: "1rem", fontSize: "0.85rem" }}>
                Kenzie Academy Brasil
              </p>
              <p className="soft-skill-desc">
                Junho/2022 – Julho/2023
              </p>
              <p className="soft-skill-desc" style={{ marginTop: "1rem" }}>
                Formação intensiva com mais de 2.000 horas de código, focada em tecnologias do ecossistema JavaScript (React, Node.js, TypeScript) e arquitetura de sistemas.
              </p>
            </div>
          </div>

          {/* Certificações */}
          <div className="edu-column">
            <h3 className="section-title" style={{ fontSize: "1.8rem", marginBottom: "2.5rem" }}>
              Certificações
            </h3>
            <div className="cert-list" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {certifications.map((cert, idx) => (
                <div key={idx} className="contact-link" style={{ cursor: "default", justifyContent: "flex-start", width: "100%" }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
