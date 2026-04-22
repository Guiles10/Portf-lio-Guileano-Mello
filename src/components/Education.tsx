"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import { ACADEMIC_FORMATION, CERTIFICATIONS } from "@/constants/education";

export default function Education() {
  return (
    <Reveal>
      <section id="formacao" className="container">
        <span className="mono section-label">// 005 — FORMAÇÃO & ESPECIALIZAÇÕES</span>
        
        <div className="education-main-grid">
          {/* Academia */}
          <div className="edu-column">
            <h3 className="section-title" style={{ fontSize: "1.8rem", marginBottom: "2rem" }}>
              Formação Acadêmica
            </h3>
            <div className="soft-skill-card" style={{ padding: "2.5rem", position: "relative" }}>
              <div className="edu-info">
                <div className="soft-skill-icon-wrapper">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <h4 className="soft-skill-title" style={{ fontSize: "1.4rem", maxWidth: "70%" }}>
                  {ACADEMIC_FORMATION.title}
                </h4>
                <p className="mono" style={{ color: "var(--primary)", marginBottom: "1rem", fontSize: "0.85rem" }}>
                  {ACADEMIC_FORMATION.institution}
                </p>
                <p className="soft-skill-desc" style={{ marginBottom: "1.5rem" }}>
                  {ACADEMIC_FORMATION.period}
                </p>
                <p className="soft-skill-desc" style={{ maxWidth: "85%", fontSize: "0.95rem" }}>
                  {ACADEMIC_FORMATION.description}
                </p>
              </div>

              {/* Corner Badge Certificate */}
              <div 
                className="cert-corner-badge"
                onClick={() => window.open(ACADEMIC_FORMATION.certificateUrl, '_blank')}
                title="Ver Certificado Completo"
              >
                <Image 
                  src={ACADEMIC_FORMATION.certificateUrl} 
                  alt="Certificado Kenzie" 
                  className="cert-badge-img"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          </div>

          {/* Certificações */}
          <div className="edu-column">
            <h3 className="section-title" style={{ fontSize: "1.8rem", marginBottom: "2rem" }}>
              Certificações
            </h3>
            <div className="cert-list" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="contact-link" style={{ cursor: "default", justifyContent: "flex-start", width: "100%", background: "rgba(255,255,255,0.02)", border: "1px solid var(--border)", padding: "1.2rem", gap: "1rem" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span style={{ fontSize: "0.9rem", fontWeight: "500" }}>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
