import Reveal from "./Reveal";

export default function ExperienceTimeline() {
  const experiences = [
    {
      company: "Produtora Arion",
      role: "Desenvolvedor Web Full Stack",
      period: "2025 – Atual",
      items: [
        {
          title: "Desenvolvimento de aplicações SaaS escaláveis",
          description: "Arquitetura e implementação de soluções robustas com foco em escalabilidade, suporte a alto número de acessos simultâneos e manutenção de longo prazo",
        },
        {
          title: "Páginas de alta performance e conversão",
          description: "Desenvolvimento de interfaces otimizadas (LCP, SEO) utilizando React e Next.js para maximizar a experiência do usuário",
        },
        {
          title: "Integração de sistemas e automações",
          description: "Desenvolvimento de APIs e automações de fluxo de dados para conexão entre Front End e Bancos de dados como Supabase",
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
          description: "Desenvolvimento de plataforma estilo Kanban (React/Node/PostgreSQL/Supabase) para organizar e agilizar o fluxo de atividades e demandas internas",
        },
        {
          title: "Integração entre sistemas distintos",
          description: "Criação de APIs RESTful para sincronização automática de estoque entre plataformas de terceiros",
        },
        {
          title: "Modernização da interface de sistemas",
          description: "Refatoração de UX para sistemas antigos, criando agilidade e deixando mais intuitivo o uso do sistema pelo usuário, reduzindo drasticamente o volume de chamados de suporte",
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
          description: "Auxílio direto na resolução de dúvidas técnicas em React, JavaScript e CSS, impulsionando a evolução dos alunos",
        },
        {
          title: "Acompanhamento e feedback de desempenho",
          description: "Correção de projetos práticos e fornecimento de relatórios detalhados com foco em melhoria contínua",
        },
        {
          title: "Resolução colaborativa de problemas",
          description: "Trabalho em equipe para debugar desafios técnicos e fortalecer o aprendizado coletivo da turma",
        },
      ],
    },
  ];

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
