export interface ExpertiseArea {
  title: string;
  skills: string[];
  icon: string; // We can use the SVG path or a key for the icon
}

export const EXPERTISE_AREAS: ExpertiseArea[] = [
  {
    title: "[Desenvolvimento Full Stack]",
    skills: [
      "React, Next.js & TypeScript",
      "Node.js, NestJS & APIs REST",
      "PostgreSQL, SQL & Supabase",
      "Performance & Escalabilidade",
    ],
    icon: "code",
  },
  {
    title: "[Full Cycle Developer]",
    skills: [
      "Sistemas alinhados à realidade do usuário",
      "Foco em usabilidade e adoção real",
      "Arquitetura centrada no ambiente do cliente",
      "Do planejamento ao ambiente de produção",
    ],
    icon: "layers",
  },
  {
    title: "[Comunicação & Adaptabilidade]",
    skills: [
      "Ponte entre o técnico e o usuário final",
      "Vocabulário adaptado (Dev para Leigo)",
      "Alinhamento de expectativas e resultados",
      "Empatia e foco na solução de problemas",
    ],
    icon: "message",
  },
];
