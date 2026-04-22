import Reveal from "./Reveal";
import { CONTACT_INFO } from "@/constants/contact";

export default function Contact() {
  return (
    <Reveal>
      <section id="contato" className="container">
        <div style={{ textAlign: "left", maxWidth: "900px" }}>
          <span className="mono section-label" style={{ justifyContent: "flex-start", display: "flex" }}>
            // 006 — INICIAR TRANSMISSÃO
          </span>
          <h2 className="contact-large">
            Pronto para desenvolver ou aprimorar seu sistema
          </h2>
          
          <div className="contact-links" style={{ justifyContent: "flex-start", marginTop: "4rem" }}>
            <a href={`mailto:${CONTACT_INFO.email}`} className="contact-link-premium">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <div style={{ textAlign: "left" }}>
                <span style={{ display: "block", fontSize: "0.7rem", opacity: 0.6 }}>E-MAIL</span>
                {CONTACT_INFO.email}
              </div>
            </a>

            <div className="contact-link-premium" style={{ cursor: "default" }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <div className="phone-action-container" style={{ textAlign: "left" }}>
                <span style={{ display: "block", fontSize: "0.7rem", opacity: 0.6 }}>TELEFONE / WHATSAPP</span>
                <span style={{ display: "block", marginBottom: "0.5rem" }}>{CONTACT_INFO.phone}</span>
                <div className="phone-action-buttons">
                  <a href={CONTACT_INFO.telUrl} className="phone-mini-btn">Ligar</a>
                  <a href={CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="phone-mini-btn">WhatsApp</a>
                </div>
              </div>
            </div>

            <a href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link-premium">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              <div style={{ textAlign: "left" }}>
                <span style={{ display: "block", fontSize: "0.7rem", opacity: 0.6 }}>LINKEDIN</span>
                Conectar Profissionalmente
              </div>
            </a>
          </div>

          <a href={`mailto:${CONTACT_INFO.email}`} className="btn btn-primary" style={{ marginTop: "1rem" }}>
            Enviar Mensagem
          </a>
        </div>
      </section>
    </Reveal>
  );
}
