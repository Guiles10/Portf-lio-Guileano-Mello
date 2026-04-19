import Link from "next/link";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <Reveal>
      <section id="projetos" className="container">
        <span className="mono section-label">// 003 — CASES DE ALTO IMPACTO</span>
        <h2 className="section-title section-header">Experiência & Resultados Ativos.</h2>

        <div className="projects-grid">
          {/* Case 1: Arion - Performance */}
          <div className="project-card">
            <div className="proj-metric">20x ROAS</div>
            <h3 className="proj-title">
              Estratégia de Aquisição Digital<br />
              <span className="mono" style={{ fontSize: "0.75rem", marginTop: "0.5rem", display: "inline-block" }}>Produtora Arion (2025 – Atual)</span>
            </h3>
            <div className="proj-tags">
              <span className="proj-tag">Google Ads</span>
              <span className="proj-tag">Meta Ads</span>
              <span className="proj-tag">Performance Funnels</span>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.7" }}>
              Estruturação completa do canal de aquisição recorrente e escalável. 
              Implementação de funis integrados ao CRM com automações de qualificação de leads, 
              eliminando gargalos comerciais e atingindo retorno recorde.
            </p>
          </div>

          {/* Case 2: Arion - Conversion */}
          <div className="project-card">
            <div className="proj-metric">+50% Conv.</div>
            <h3 className="proj-title">
              Engenharia de Landing Pages<br />
              <span className="mono" style={{ fontSize: "0.75rem", marginTop: "0.5rem", display: "inline-block" }}>Produtora Arion (2025 – Atual)</span>
            </h3>
            <div className="proj-tags">
              <span className="proj-tag">CRO</span>
              <span className="proj-tag">UX/UI</span>
              <span className="proj-tag">A/B Testing</span>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.7" }}>
              Desenvolvimento de interfaces focadas em clareza de mensagem e experiência do usuário. 
              Substituímos sistemas de baixa conversão por arquiteturas otimizadas, 
              elevando drasticamente a captura de leads.
            </p>
          </div>

          {/* Case 3: Compuservise - Dev */}
          <div className="project-card">
            <div className="proj-metric">Full Stack</div>
            <h3 className="proj-title">
              Sistema Kanban Interno<br />
              <span className="mono" style={{ fontSize: "0.75rem", marginTop: "0.5rem", display: "inline-block" }}>Compuservise Softwares (2024 – 2025)</span>
            </h3>
            <div className="proj-tags">
              <span className="proj-tag">React</span>
              <span className="proj-tag">Node.js</span>
              <span className="proj-tag">PostgreSQL</span>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.7" }}>
              Desenvolvimento de plataforma web para gestão de produtividade. 
              Implementação de fluxo Kanban para organização de tickets e tarefas diárias, 
              trazendo agilidade para a equipe.
            </p>
          </div>

          {/* Case 4: Compuservise - Integration */}
          <div className="project-card">
            <div className="proj-metric">APIs</div>
            <h3 className="proj-title">
              Sincronização via APIs RESTful<br />
              <span className="mono" style={{ fontSize: "0.75rem", marginTop: "0.5rem", display: "inline-block" }}>Compuservise Softwares (2024 – 2025)</span>
            </h3>
            <div className="proj-tags">
              <span className="proj-tag">RESTful</span>
              <span className="proj-tag">Sincronização</span>
              <span className="proj-tag">Scalability</span>
            </div>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.7" }}>
              Criação de pontes de comunicação entre sistemas distintos de estoque. 
              Eliminação de retrabalho manual através de automação em tempo real, 
              garantindo integridade de dados.
            </p>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
