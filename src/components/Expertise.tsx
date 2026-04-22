import Reveal from "./Reveal";

export default function Expertise() {
  return (
    <Reveal>
      <section id="expertise" className="container">
        <span className="mono section-label">// 002 — ÁREAS DE ATUAÇÃO</span>
        <h2 className="section-title section-header">
          Perfil dinâmico, desenvolvedor fullcycle
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
              <li>PostgreSQL, SQL & Supabase</li>
              <li>Performance & Escalabilidade</li>
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
            <h3 className="exp-title">[Full Cycle Developer]</h3>
            <ul className="exp-list">
              <li>Sistemas alinhados à realidade do usuário</li>
              <li>Foco em usabilidade e adoção real</li>
              <li>Arquitetura centrada no ambiente do cliente</li>
              <li>Do planejamento ao ambiente de produção</li>
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
                <path d="M17 6.1L12.6 1.15a1 1 0 0 0-1.2 0L7 6.1"></path>
                <path d="M17 19.8l-4.4 4.95a1 1 0 0 1-1.2 0L7 19.8"></path>
                <path d="M21 7.5l-4.5 4.5 4.5 4.5"></path>
                <path d="M3 7.5l4.5 4.5L3 16.5"></path>
                <path d="M19 12H5"></path>
              </svg>
            </div>
            <h3 className="exp-title">[Comunicação & Adaptabilidade]</h3>
            <ul className="exp-list">
              <li>Ponte entre o técnico e o usuário final</li>
              <li>Vocabulário adaptado (Dev para Leigo)</li>
              <li>Alinhamento de expectativas e resultados</li>
              <li>Empatia e foco na solução de problemas</li>
            </ul>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
