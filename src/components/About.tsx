"use client";

import Reveal from "./Reveal";

export default function About() {
  return (
    <Reveal>
      <section id="sobre" className="container">
        <span className="mono section-label">// 001 — SOBRE MIM</span>
        <div className="about-grid">
          <div className="about-photo">
            <div className="photo-inner">
              <img 
                src="https://media.licdn.com/dms/image/v2/C4D03AQE1f_OQ_O_O_Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1651515151?e=1715151200&v=beta&t=example" 
                alt="Guileano"
                style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.parentElement?.querySelector('svg')?.setAttribute("style", "display: block");
                }}
              />
              <svg
                width="120"
                height="120"
                viewBox="0 0 24 24"
                fill="none"
                stroke="var(--text-muted)"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ display: "none" }}
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
          </div>
          <div className="about-content">
            <h2 className="section-title" style={{ marginBottom: "2rem" }}>
              Híbrido por Natureza. Resultados Orientados por Dados & Código.
            </h2>
            <p
              style={{
                color: "var(--text-muted)",
                marginBottom: "1.5rem",
                fontSize: "1.1rem",
                lineHeight: "1.8"
              }}
            >
              Integro tecnologia e aquisição de clientes para gerar crescimento escalável. 
              Atuo desde a arquitetura técnica até a otimização de campanhas em Google Ads e Meta Ads, 
              garantindo eficiência em toda a jornada do usuário — do clique à conversão.
            </p>
            <p
              style={{
                color: "var(--text-muted)",
                marginBottom: "2.5rem",
                fontSize: "1.1rem",
                lineHeight: "1.8"
              }}
            >
              Minha proposta de valor está em reduzir o gap entre tecnologia e marketing, 
              atuando como um profissional capaz de construir, medir e escalar resultados digitais. 
              Unindo inteligência tecnológica com visão de ROI real.
            </p>
            <div className="metrics-list">
              <div className="metric-item">
                <span className="mono">Projetos Web Entregues</span>
                <div className="metric-line"></div>
                <span className="metric-val">35+</span>
              </div>
              <div className="metric-item">
                <span className="mono">Máximo ROAS Alcançado</span>
                <div className="metric-line"></div>
                <span className="metric-val">20x</span>
              </div>
              <div className="metric-item">
                <span className="mono">Melhoria em Conversão</span>
                <div className="metric-line"></div>
                <span className="metric-val">+50%</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
