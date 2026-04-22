import Link from "next/link";
import Image from "next/image";
import Reveal from "./Reveal";
import { REALIZADOS } from "@/constants/projects";

export default function Projects() {
  return (
    <section id="projetos" className="container">
      <Reveal>
        <span className="mono section-label">// 003 — PROJETOS REALIZADOS</span>
        <h2 className="section-title section-header">Laboratório & desenvolvimentos</h2>


        <div className="realizados-grid">
          {REALIZADOS.map((project, index) => (
            <div key={index} className="project-realizado-card">
              <div className="project-img-wrapper" style={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden", borderRadius: "8px" }}>
                <Image 
                  src={project.img} 
                  alt={project.title} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="project-content">
                <h3 className="project-realizado-title">{project.title}</h3>
                <p className="project-realizado-desc">{project.desc}</p>
                
                <div className="project-realizado-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-realizado-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
