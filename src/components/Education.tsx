import Reveal from "./Reveal";

export default function Education() {
  const education = [
    {
      school: "Kenzie Academy",
      course: "Desenvolvimento Full Stack",
      period: "Junho/2022 – Julho/2023",
      description: "Foco intensivo em tecnologias modernas de desenvolvimento web (React, Node, TypeScript).",
    },
    {
      school: "Universidade Federal de Santa Maria (UFSM)",
      course: "Zootecnia",
      period: "Março/2010 – Agosto/2014",
      description: "Formação acadêmica inicial com base científica e analítica.",
    },
  ];

  const certifications = [
    "Comunidade Sobral de Tráfego Pago",
    "Fórmula de Lançamento",
    "AWS Certified Foundations",
    "Delphi e FireBird Básico",
  ];

  return (
    <Reveal>
      <section id="formacao" className="container">
        <span className="mono section-label">// 005 — FORMAÇÃO & CERTIFICAÇÕES</span>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", marginTop: "2rem" }}>
          <div>
            <h3 className="section-title" style={{ fontSize: "1.8rem", marginBottom: "2rem" }}>Educação.</h3>
            {education.map((edu, idx) => (
              <div key={idx} style={{ marginBottom: "2rem", borderLeft: "1px solid var(--border)", paddingLeft: "1.5rem" }}>
                <h4 style={{ fontSize: "1.1rem", color: "var(--text-main)" }}>{edu.school}</h4>
                <p style={{ color: "var(--primary)", fontSize: "0.9rem", fontWeight: "bold" }}>{edu.course}</p>
                <span className="mono" style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{edu.period}</span>
              </div>
            ))}
          </div>
          <div>
            <h3 className="section-title" style={{ fontSize: "1.8rem", marginBottom: "2rem" }}>Certificações.</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {certifications.map((cert, idx) => (
                <div key={idx} className="stack-item" style={{ height: "auto", padding: "10px 20px", display: "inline-flex", alignItems: "center", border: "1px solid var(--border)", borderRadius: "4px" }}>
                  <span className="mono" style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
