import Reveal from "./Reveal";
import { EXPERTISE_AREAS } from "@/constants/expertise";

export default function Expertise() {
  return (
    <Reveal>
      <section id="expertise" className="container">
        <span className="mono section-label">// 002 — ÁREAS DE ATUAÇÃO</span>
        <h2 className="section-title section-header">
          Perfil dinâmico, desenvolvedor fullcycle
        </h2>

        <div className="expertise-grid">
          {EXPERTISE_AREAS.map((area, index) => (
            <div className="exp-card" key={index}>
              <div className="exp-icon">
                {area.icon === "code" && (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                )}
                {area.icon === "layers" && (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                )}
                {area.icon === "message" && (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 6.1L12.6 1.15a1 1 0 0 0-1.2 0L7 6.1"></path>
                    <path d="M17 19.8l-4.4 4.95a1 1 0 0 1-1.2 0L7 19.8"></path>
                    <path d="M21 7.5l-4.5 4.5 4.5 4.5"></path>
                    <path d="M3 7.5l4.5 4.5L3 16.5"></path>
                    <path d="M19 12H5"></path>
                  </svg>
                )}
              </div>
              <h3 className="exp-title">{area.title}</h3>
              <ul className="exp-list">
                {area.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
