import Reveal from "./Reveal";

export default function Expertise() {
  return (
    <Reveal>
      <section id="expertise" className="container">
        <span className="mono section-label">// 002 — ÁREAS DE ATUAÇÃO</span>
        <h2 className="section-title section-header">
          Perfil Híbrido. Resultados Exponenciais.
        </h2>

        <div className="expertise-grid">
          <div className="exp-card">
            <div className="exp-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <h3 className="exp-title">[Desenvolvimento Full Stack]</h3>
            <ul className="exp-list">
              <li>React, Next.js & TypeScript</li>
              <li>Node.js, NestJS & APIs REST</li>
              <li>PostgreSQL, MongoDB & SQL</li>
              <li>Cloud, Docker & CI/CD</li>
            </ul>
          </div>

          <div className="exp-card">
            <div className="exp-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3 className="exp-title">[UX/UI & Conversão]</h3>
            <ul className="exp-list">
              <li>Design System & Prototipagem</li>
              <li>Interfaces Otimizadas (SEO & LCP)</li>
              <li>Testes A/B & Análise de Dados</li>
              <li>Automações & Webhooks</li>
            </ul>
          </div>

          <div className="exp-card">
            <div className="exp-icon">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3 className="exp-title">[Sistemas SaaS & E-commerce]</h3>
            <ul className="exp-list">
              <li>Arquitetura de Software Escalável</li>
              <li>Sistemas de Assinatura & Dashboard</li>
              <li>Segurança & Autenticação (JWT/OAuth)</li>
            </ul>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
