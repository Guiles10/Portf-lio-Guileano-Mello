export interface Technology {
  name: string;
  icon: string;
  glow: string;
  category: "Frontend" | "Backend" | "Performance" | "Tools";
}

export const TECH_STACK: Technology[] = [
  // Frontend
  { name: "React", icon: "react", glow: "rgba(97, 218, 251, 0.2)", category: "Frontend" },
  { name: "Next.js", icon: "nextdotjs", glow: "rgba(255, 255, 255, 0.15)", category: "Frontend" },
  { name: "JavaScript", icon: "javascript", glow: "rgba(247, 223, 30, 0.2)", category: "Frontend" },
  { name: "TypeScript", icon: "typescript", glow: "rgba(49, 120, 198, 0.2)", category: "Frontend" },
  { name: "Tailwind CSS", icon: "tailwindcss", glow: "rgba(56, 189, 248, 0.2)", category: "Frontend" },
  { name: "Sass / CSS", icon: "sass", glow: "rgba(204, 102, 153, 0.2)", category: "Frontend" },
  { name: "HTML", icon: "html5", glow: "rgba(227, 79, 38, 0.2)", category: "Frontend" },
  { name: "CSS3", icon: "css3", glow: "rgba(21, 114, 182, 0.2)", category: "Frontend" },

  // Backend
  { name: "Node.js", icon: "nodedotjs", glow: "rgba(104, 160, 99, 0.2)", category: "Backend" },
  { name: "NestJS", icon: "nestjs", glow: "rgba(224, 35, 78, 0.2)", category: "Backend" },
  { name: "Prisma", icon: "prisma", glow: "rgba(12, 50, 73, 0.2)", category: "Backend" },
  { name: "PostgreSQL", icon: "postgresql", glow: "rgba(51, 103, 145, 0.2)", category: "Backend" },
  { name: "Supabase", icon: "supabase", glow: "rgba(62, 207, 142, 0.2)", category: "Backend" },
  { name: "APIs REST", icon: "postman", glow: "rgba(255, 108, 55, 0.2)", category: "Backend" },
  { name: "Docker", icon: "docker", glow: "rgba(0, 144, 204, 0.2)", category: "Backend" },
  { name: "CI/CD", icon: "githubactions", glow: "rgba(32, 136, 255, 0.2)", category: "Backend" },

  // Performance & Ads
  { name: "Google Ads", icon: "googleads", glow: "rgba(255, 107, 0, 0.3)", category: "Performance" },
  { name: "Meta Ads", icon: "meta", glow: "rgba(6, 104, 230, 0.2)", category: "Performance" },
  { name: "Analytics", icon: "googleanalytics", glow: "rgba(244, 180, 0, 0.2)", category: "Performance" },
  { name: "Google Tag Manager", icon: "googletagmanager", glow: "rgba(36, 129, 204, 0.2)", category: "Performance" },
  { name: "CRO / Funis", icon: "airtable", glow: "rgba(24, 160, 240, 0.2)", category: "Performance" },

  // Tools & Specialties
  { name: "Git", icon: "git", glow: "rgba(240, 80, 50, 0.2)", category: "Tools" },
  { name: "GitHub", icon: "github", glow: "rgba(255, 255, 255, 0.15)", category: "Tools" },
  { name: "AWS", icon: "amazonwebservices", glow: "rgba(255, 153, 0, 0.2)", category: "Tools" },
  { name: "Claude / IA", icon: "anthropic", glow: "rgba(217, 119, 87, 0.2)", category: "Tools" },
  { name: "OpenAI", icon: "openai", glow: "rgba(116, 170, 156, 0.2)", category: "Tools" },
  { name: "Slack", icon: "slack", glow: "rgba(74, 21, 75, 0.2)", category: "Tools" },
  { name: "Fire Bird 2.5", icon: "firebird", glow: "rgba(227, 79, 38, 0.2)", category: "Tools" },
  { name: "Delphi", icon: "embarcadero", glow: "rgba(165, 30, 36, 0.2)", category: "Tools" },
  { name: "UX/UI", icon: "figma", glow: "rgba(242, 78, 30, 0.2)", category: "Tools" },
];
