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
              <li>React & Next.js</li>
              <li>Node.js & APIs REST</li>
              <li>PostgreSQL & Bancos Relacionais</li>
              <li>Arquitetura Serverless & CI/CD</li>
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
                <path d="M3 3v18h18"></path>
                <path d="M18 17V9"></path>
                <path d="M13 17V5"></path>
                <path d="M8 17v-3"></path>
              </svg>
            </div>
            <h3 className="exp-title">[Performance & Tráfego Pago]</h3>
            <ul className="exp-list">
              <li>Google Ads (Search, Display, PMax)</li>
              <li>Meta Ads (Facebook/Instagram)</li>
              <li>Otimização de ROAS & CPA</li>
              <li>Estruturação de Funis Avançados</li>
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
              <li>Desenho de Interfaces</li>
              <li>Landing Pages Focadas em ROI</li>
              <li>Testes A/B & Analytics</li>
              <li>Automações (CRM/Webhooks)</li>
            </ul>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
