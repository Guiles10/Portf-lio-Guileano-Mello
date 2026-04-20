import Link from "next/link";
import Reveal from "./Reveal";

const REALIZADOS = [
  {
    title: "Guia AquiTem",
    desc: (
      <>
        <div style={{ marginBottom: "1rem" }}>
          <span className="mono" style={{ color: "var(--primary)", fontSize: "0.8rem", display: "block" }}>
            // FRONT-END & FULLSTACK SAAS
          </span>
          <strong>Ecossistema SaaS Multi-tenant</strong> projetado para conectar empresas e consumidores locais. 
          Implementação robusta de segurança com controle de acesso baseado em funções (<strong>User, ADM, Master</strong>), 
          garantindo integridade e privacidade de dados essenciais (RBAC & Auth).
        </div>
        
        <div style={{ borderLeft: "2px solid var(--primary)", paddingLeft: "1rem", marginTop: "1rem" }}>
          <span className="mono" style={{ fontSize: "0.80rem", opacity: 0.8 }}>SISTEMA CRUD COMPLETO:</span>
          <ul style={{ listStyle: "none", padding: 0, margin: "0.5rem 0", fontSize: "0.8rem", color: "var(--text-muted)" }}>
            <li>→ Lucid Icons (Interface)</li>
            <li>→ Framer Motion (Animações)</li>
            <li>→ Axios & TanStack Query (Data Fetching)</li>
            <li>→ React Hook Form & Zod (Validação)</li>
            <li>→ Sharp (Otimização de Imagens)</li>
          </ul>
        </div>
      </>
    ),
    tags: ["Nest.js", "Next JS", "Prisma", "Supabase", "TypeScript"],
    img: "/projects/guia_aquitem.png",
    github: "https://github.com/Guiles10",
    demo: "#"
  },
  {
    title: "Search API",
    desc: (
      <>
        Plataforma avançada para busca de APIs com autenticação completa, rotas personalizadas por usuário, sistema de comentários e painel administrativo.
        <br />
        <span style={{ fontStyle: "italic", fontSize: "0.80rem", opacity: 0.8, display: "block", marginTop: "4px" }}>
          (Projeto desenvolvido para graduação — Trabalho em grupo)
        </span>
      </>
    ),
    tags: ["React", "TypeScript", "Axios", "Styled Components"],
    img: "/projects/search_api.png",
    github: "https://github.com/Grupo06-Nocile/project-front-end-group06-Nicole",
    demo: "https://project-front-end-group06-nicole-blvu1aa4f-guiles10.vercel.app/"
  },
  {
    title: "Cars E-commerce API",
    desc: (
      <>
        API robusta para e-commerce de veículos com gestão de anúncios, filtragem avançada, cadastro de veículos por usuário, sistema de comentários e avaliações.
        <br />
        <span style={{ fontStyle: "italic", fontSize: "0.80rem", opacity: 0.8, display: "block", marginTop: "4px" }}>
          (Projeto desenvolvido para conclusão de módulo na graduação — Trabalho em grupo)
        </span>
      </>
    ),
    tags: ["Python", "Django", "DRF", "PostgreSQL"],
    img: "/projects/cars_ecommerce.png",
    github: "https://github.com/Kenzie-Academy-Brasil-M5-T14-Grupo-42/Api_Django_Ecommerce",
    demo: null
  },
  {
    title: "Burguer Kenzie",
    desc: (
      <>
        E-commerce / cardápio digital com autenticação de usuário, carrinho de compras dinâmico, integração com catálogo e finalização de pedidos.
        <br />
        <span style={{ fontStyle: "italic", fontSize: "0.80rem", opacity: 0.8, display: "block", marginTop: "4px" }}>
          (Projeto desenvolvido para graduação)
        </span>
      </>
    ),
    tags: ["React", "Styled Components", "API Interop"],
    img: "/projects/burguer_kenzie.png",
    github: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-template-hamburgueria-2.0-guiles10",
    demo: "https://burguer-kenzie-guiles10.vercel.app/"
  },
  {
    title: "Kenzie Hub",
    desc: (
      <>
        Plataforma de portfólio para desenvolvedores com autenticação, gestão de tecnologias e níveis de experiência.
        <br />
        <span style={{ fontStyle: "italic", fontSize: "0.80rem", opacity: 0.8, display: "block", marginTop: "4px" }}>
          (Projeto desenvolvido para graduação)
        </span>
      </>
    ),
    tags: ["React", "TypeScript", "React Hook Form"],
    img: "/projects/kenzie_hub.png",
    github: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-kenzie-hub-Guiles10",
    demo: "https://react-entrega-kenzie-hub-guiles10-akhfmdmfk-guiles10.vercel.app/login"
  },
  {
    title: "Nu Kenzie",
    desc: (
      <>
        Aplicação de gestão financeira para controle de entradas e saídas com filtragem por categoria.
        <br />
        <span style={{ fontStyle: "italic", fontSize: "0.80rem", opacity: 0.8, display: "block", marginTop: "4px" }}>
          (Projeto desenvolvido para graduação)
        </span>
      </>
    ),
    tags: ["React", "State Management", "CSS Modules"],
    img: "/projects/nu_kenzie.png",
    github: "https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-s1-template-nu-kenzie-Guiles10",
    demo: "https://react-entrega-s1-template-nu-kenzie-guiles10-djsswyjmg-guiles10.vercel.app/"
  },
  {
    title: "Kenzie Buster",
    desc: (
      <>
        API de locação de filmes com controle de estoque, avaliações e perfis de usuário personalizados.
        <br />
        <span style={{ fontStyle: "italic", fontSize: "0.80rem", opacity: 0.8, display: "block", marginTop: "4px" }}>
          (Projeto desenvolvido para graduação)
        </span>
      </>
    ),
    tags: ["Python", "Django", "REST API"],
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop",
    github: "https://github.com/Guiles10/kenzie-buster",
    demo: null
  },
  {
    title: "AccOrganized",
    desc: (
      <>
        Sistema Fullstack para gestão de contatos e tarefas diárias com dashboard intuitivo. (Front e Back-End vinculados)
        <br />
        <span style={{ fontStyle: "italic", fontSize: "0.80rem", opacity: 0.8, display: "block", marginTop: "4px" }}>
          (Projeto desenvolvido para graduação)
        </span>
      </>
    ),
    tags: ["Node.js", "Express", "React", "PostgreSQL"],
    img: "/projects/acc_organized.png",
    github: "https://github.com/Guiles10/ProjetoFullStack-Front-End-Guiles10",
    githubBack: "https://github.com/Guiles10/ProjetoFullStack-BackEnd-Guiles",
    demo: "https://accorganized.vercel.app/"
  },
  {
    title: "Pokédex",
    desc: "Enciclopédia digital utilizando a PokeAPI para listagem e detalhamento de criaturas, com gráficos comparativos das estatísticas de cada Pokémon e busca em tempo real.",
    tags: ["Vue.js", "JavaScript", "PokeAPI", "Responsive Design"],
    img: "/projects/pokedex.png",
    github: "https://github.com/Guiles10/pokedex_fidelizou.me",
    demo: "https://pokedex-768yf4ix8-guiles.vercel.app/"
  }
];

export default function Projects() {
  return (
    <section id="projetos" className="container">
      <Reveal>
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
        </div>
      </Reveal>

      <div style={{ marginTop: "8rem" }} />

      <Reveal>
        <span className="mono section-label">// 003.1 — PROJETOS REALIZADOS</span>
        <h2 className="section-title section-header">Laboratório & Desenvolvimentos.</h2>
        <p style={{ fontStyle: "italic", color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "3rem", maxWidth: "800px", lineHeight: "1.6" }}>
          Os projetos citados abaixo podem apresentar erros ou demora ao carregar pois são projetos realizados durante a graduação, e podem ser apenas partes do código e estão hospedados em plataformas gratuitas, podendo até ter saído do ar.
        </p>

        <div className="realizados-grid">
          {REALIZADOS.map((project, index) => (
            <div key={index} className="project-realizado-card">
              <div className="project-img-wrapper">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-realizado-title">{project.title}</h3>
                <p className="project-realizado-desc">{project.desc}</p>
                
                <div className="project-realizado-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-realizado-tag">{tag}</span>
                  ))}
                </div>

                <div className="project-realizado-links">
                  <Link href={project.github} target="_blank" className="project-realizado-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    {(project as any).githubBack ? "Front" : "Code"}
                  </Link>

                  {(project as any).githubBack && (
                    <Link href={(project as any).githubBack} target="_blank" className="project-realizado-link">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                      Back
                    </Link>
                  )}

                  {project.demo && (
                    <Link href={project.demo} target="_blank" className="project-realizado-link" style={{ color: "var(--primary)" }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
