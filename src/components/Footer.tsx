import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="premium-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Branding */}
          <div className="footer-column">
            <h2 className="nav-logo" style={{ marginBottom: "1.5rem", display: "block" }}>GGM</h2>
            <p>
              Desenvolvedor Full Stack especializado em experiências digitais de alta performance. 
              Unindo a precisão da engenharia com a inovação do growth marketing.
            </p>
            <div className="social-links">
              <a href="https://github.com/Guiles10" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="https://linkedin.com/in/guileano-mello" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h4>Navegação</h4>
            <div className="footer-links">
              <Link href="#sobre" className="footer-link">// SOBRE</Link>
              <Link href="#projetos" className="footer-link">// CASES</Link>
              <Link href="#stack" className="footer-link">// STACK</Link>
              <Link href="#formacao" className="footer-link">// FORMAÇÃO</Link>
              <Link href="#contato" className="footer-link">// CONTATO</Link>
            </div>
          </div>

          {/* Column 3: Contact/Status */}
          <div className="footer-column">
            <h4>Status</h4>
            <p style={{ fontSize: "0.85rem", marginBottom: "1rem" }}>
              <span style={{ color: "var(--primary)" }}>●</span> Disponível para novos projetos
            </p>
            <p style={{ fontSize: "0.85rem" }}>
              Localização: São Paulo, Brasil<br />
              Timezone: GMT-3
            </p>
            <button 
              onClick={scrollToTop} 
              className="footer-link scroll-top" 
              style={{ marginTop: "2rem", background: "none", border: "none", padding: 0, cursor: "pointer", display: "flex", alignItems: "center", gap: "0.5rem" }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"></path></svg> VOLTAR AO TOPO
            </button>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} Guileano Gadea de Mello. All rights reserved.
          </div>
          <div>
            BUILT WITH NEXT.JS & REACT
          </div>
        </div>
      </div>
    </footer>
  );
}
