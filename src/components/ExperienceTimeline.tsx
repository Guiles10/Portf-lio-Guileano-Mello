import Reveal from "./Reveal";

export default function ExperienceTimeline() {
  const experiences = [
    {
      company: "Produtora Arion",
      role: "Gestor de Tráfego Pago & Desenvolvedor Web",
      period: "2025 – Atual",
      items: [
        {
          title: "Aquisição de clientes/leads via tráfego pago",
          description: "Estruturei um canal de aquisição recorrente e escalável via Google e Meta Ads, atingindo ROAS de até 20x.",
        },
        {
          title: "Desenvolvimento de páginas de alta conversão",
          description: "Implementação de Landing Pages e E-commerce com foco em UX, resultando em aumento de 50% na taxa de conversão.",
        },
        {
          title: "Estruturação do funil e operação comercial",
          description: "Integração ao CRM e automações de qualificação de leads para otimização da operação comercial.",
        },
      ],
    },
    {
      company: "Compuservise Softwares",
      role: "Desenvolvedor Full Stack / Suporte",
      period: "2024 – 2025",
      items: [
        {
          title: "Sistema de gestão de tarefas internas",
          description: "Desenvolvimento de plataforma Kanban (React/Node/PostgreSQL) para agilizar fluxos internos.",
        },
        {
          title: "Integração entre sistemas distintos",
          description: "Criação de APIs RESTful para sincronização automática de estoque entre plataformas de terceiros.",
        },
        {
          title: "Modernização da interface de sistema legado",
          description: "Refatoração de UX para sistema de 2002, reduzindo drasticamente o volume de chamados de suporte.",
        },
      ],
    },
    {
      company: "Kenzie Academy Brasil",
      role: "Monitor de Ensino",
      period: "Janeiro/2023 – Abril/2023",
      items: [
        {
          title: "Suporte aos alunos de Front End",
          description: "Auxílio direto na resolução de dúvidas técnicas em React, JavaScript e CSS, impulsionando a evolução dos alunos.",
        },
        {
          title: "Acompanhamento e feedback de desempenho",
          description: "Correção de projetos práticos e fornecimento de relatórios detalhados com foco em melhoria contínua.",
        },
        {
          title: "Resolução colaborativa de problemas",
          description: "Trabalho em equipe para debugar desafios técnicos e fortalecer o aprendizado coletivo da turma.",
        },
      ],
    },
  ];

  return (
    <Reveal>
      <section id="experiencia" className="container">
        <span className="mono section-label">// 002 — TRAJETÓRIA</span>
        <h2 className="section-title section-header">Experiência Profissional.</h2>
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
                    <h4 style={{ fontSize: "1.1rem", marginBottom: "0.5rem", color: "white" }}>{item.title}</h4>
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
