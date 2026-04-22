export interface Technology {
  name: string;
  icon: string;
  glow: string;
  category: "Frontend" | "Backend" | "Performance" | "Tools";
}

export const TECH_STACK: Technology[] = [
  // Frontend
  { name: "React", icon: "/tech-logos/react.svg", glow: "rgba(97, 218, 251, 0.2)", category: "Frontend" },
  { name: "Next.js", icon: "/tech-logos/nextdotjs.svg", glow: "rgba(255, 255, 255, 0.15)", category: "Frontend" },
  { name: "JavaScript", icon: "/tech-logos/javascript.svg", glow: "rgba(247, 223, 30, 0.2)", category: "Frontend" },
  { name: "TypeScript", icon: "/tech-logos/typescript.svg", glow: "rgba(49, 120, 198, 0.2)", category: "Frontend" },
  { name: "Tailwind CSS", icon: "/tech-logos/tailwindcss.svg", glow: "rgba(56, 189, 248, 0.2)", category: "Frontend" },
  { name: "Sass / CSS", icon: "/tech-logos/sass.svg", glow: "rgba(204, 102, 153, 0.2)", category: "Frontend" },
  { name: "HTML", icon: "/tech-logos/html5.svg", glow: "rgba(227, 79, 38, 0.2)", category: "Frontend" },
  { name: "CSS3", icon: "/tech-logos/css3.svg", glow: "rgba(21, 114, 182, 0.2)", category: "Frontend" },

  // Backend
  { name: "Node.js", icon: "/tech-logos/nodedotjs.svg", glow: "rgba(104, 160, 99, 0.2)", category: "Backend" },
  { name: "NestJS", icon: "/tech-logos/nestjs.svg", glow: "rgba(224, 35, 78, 0.2)", category: "Backend" },
  { name: "Prisma", icon: "/tech-logos/prisma.svg", glow: "rgba(12, 50, 73, 0.2)", category: "Backend" },
  { name: "PostgreSQL", icon: "/tech-logos/postgresql.svg", glow: "rgba(51, 103, 145, 0.2)", category: "Backend" },
  { name: "Supabase", icon: "/tech-logos/supabase.svg", glow: "rgba(62, 207, 142, 0.2)", category: "Backend" },
  { name: "APIs REST", icon: "/tech-logos/api.svg", glow: "rgba(255, 108, 55, 0.2)", category: "Backend" },
  { name: "Docker", icon: "/tech-logos/docker.svg", glow: "rgba(0, 144, 204, 0.2)", category: "Backend" },
  { name: "CI/CD", icon: "/tech-logos/CICD.svg", glow: "rgba(32, 136, 255, 0.2)", category: "Backend" },

  // Performance & Ads
  { name: "Google Ads", icon: "https://cdn.simpleicons.org/googleads/ffffff", glow: "rgba(255, 107, 0, 0.3)", category: "Performance" },
  { name: "Meta Ads", icon: "https://cdn.simpleicons.org/meta/ffffff", glow: "rgba(6, 104, 230, 0.2)", category: "Performance" },
  { name: "Analytics", icon: "https://cdn.simpleicons.org/googleanalytics/ffffff", glow: "rgba(244, 180, 0, 0.2)", category: "Performance" },
  { name: "Google Tag Manager", icon: "https://cdn.simpleicons.org/googletagmanager/ffffff", glow: "rgba(36, 129, 204, 0.2)", category: "Performance" },
  { name: "CRO / Funis", icon: "https://cdn.simpleicons.org/airtable/ffffff", glow: "rgba(24, 160, 240, 0.2)", category: "Performance" },

  // Tools & Specialties
  { name: "Git", icon: "/tech-logos/git.svg", glow: "rgba(240, 80, 50, 0.2)", category: "Tools" },
  { name: "GitHub", icon: "/tech-logos/github.svg", glow: "rgba(255, 255, 255, 0.15)", category: "Tools" },
  { name: "AWS", icon: "/tech-logos/aws.svg", glow: "rgba(255, 153, 0, 0.2)", category: "Tools" },
  { name: "Claude / IA", icon: "/tech-logos/claude.svg", glow: "rgba(217, 119, 87, 0.2)", category: "Tools" },
  { name: "OpenAI", icon: "/tech-logos/openai.svg", glow: "rgba(116, 170, 156, 0.2)", category: "Tools" },
  { name: "Slack", icon: "/tech-logos/slack.svg", glow: "rgba(74, 21, 75, 0.2)", category: "Tools" },
  { name: "Fire Bird 2.5", icon: "/tech-logos/firebord2.5.svg", glow: "rgba(227, 79, 38, 0.2)", category: "Tools" },
  { name: "Delphi", icon: "/tech-logos/delphi.svg", glow: "rgba(165, 30, 36, 0.2)", category: "Tools" },
  { name: "UX/UI", icon: "/tech-logos/uxui.svg", glow: "rgba(242, 78, 30, 0.2)", category: "Tools" },
];
