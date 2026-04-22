import Reveal from "./Reveal";
import { experiences } from "@/constants/experience";

export default function ExperienceTimeline() {
  return (
    <Reveal>
      <section id="experiencia" className="container">
        <span className="mono section-label">// 002 — TRAJETÓRIA</span>
        <h2 className="section-title section-header">Experiência profissional</h2>
        <div className="experience-list">
          {experiences.map((exp, idx) => (
            <div key={idx} className="experience-item" style={{ marginBottom: "4rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1.5rem", flexWrap: "wrap", gap: "1rem" }}>
                <h3 style={{ fontSize: "1.5rem", color: "var(--text-main)" }}>
                  {exp.company} <span style={{ color: "var(--primary)", fontSize: "0.9rem", verticalAlign: "middle", marginLeft: "10px" }}>// {exp.role}</span>
                </h3>
                <span className="mono" style={{ color: "var(--text-muted)" }}>{exp.period}</span>
              </div>
              <div className="exp-details-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
                {exp.items.map((item, i) => (
                  <div key={i} style={{ borderLeft: "2px solid var(--primary)", paddingLeft: "1.5rem" }}>
                    <h4 style={{ fontSize: "1.1rem", marginBottom: "0.5rem", color: "var(--text-main)" }}>{item.title}</h4>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.6" }}>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
