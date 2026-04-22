export interface AcademicFormation {
  title: string;
  institution: string;
  period: string;
  description: string;
  certificateUrl: string;
}

export const ACADEMIC_FORMATION: AcademicFormation = {
  title: "Desenvolvimento Full Stack",
  institution: "Kenzie Academy Brasil",
  period: "Junho/2022 – Julho/2023",
  description: "Formação intensiva com mais de 2.000 horas de código, focada em tecnologias do ecossistema JavaScript (React, Node.js, TypeScript) e arquitetura de sistemas.",
  certificateUrl: "/certificates/kenzie_fullstack.jfif",
};

export const CERTIFICATIONS: string[] = [
  "AWS (Cloud Foundations & Solutions)",
  "Iniciando formação em Banco de Dados (foco em Data Analytics)",
  "Delphi e FireBird Básico",
];
