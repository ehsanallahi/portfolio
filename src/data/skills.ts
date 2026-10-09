import type { SkillCategory } from "@/types/portfolio";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    description: "Fast, accessible interfaces with modern React.",
    skills: [
      { name: "React.js", icon: "react" },
      { name: "Next.js (App Router)", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript (ES6+)", icon: "javascript" },
      { name: "HTML5", icon: "html" },
      { name: "CSS3", icon: "css" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "shadcn/ui", icon: "shadcn" },
      { name: "Zustand", icon: "zustand" },
      { name: "TanStack Query", icon: "tanstack" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile",
    description: "Cross-platform apps with Flutter, shipped to Google Play.",
    skills: [
      { name: "Flutter", icon: "flutter" },
      { name: "Dart", icon: "dart" },
      { name: "Provider", icon: "provider" },
      { name: "Riverpod", icon: "riverpod" },
    ],
  },
  {
    id: "backend",
    label: "Backend & APIs",
    description: "APIs, auth and access control that scale with the product.",
    skills: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "REST APIs", icon: "rest" },
      { name: "Prisma ORM", icon: "prisma" },
      { name: "NextAuth v5", icon: "nextauth" },
      { name: "Strapi CMS", icon: "strapi" },
      { name: "Casbin RBAC", icon: "casbin" },
      { name: "JWT Auth", icon: "jwt" },
    ],
  },
  {
    id: "databases",
    label: "Databases",
    description: "Schema design, indexing and query optimization.",
    skills: [
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "Supabase", icon: "supabase" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    id: "cloud",
    label: "Cloud & Tools",
    description: "Shipping, collaborating and testing day to day.",
    skills: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "AWS", icon: "aws" },
      { name: "Vercel", icon: "vercel" },
      { name: "Cloudinary", icon: "cloudinary" },
      { name: "Postman", icon: "postman" },
      { name: "Figma", icon: "figma" },
      { name: "VS Code", icon: "vscode" },
    ],
  },
  {
    id: "ai",
    label: "AI",
    description: "AI features in products, and AI-assisted development.",
    skills: [
      { name: "Google Gemini API", icon: "gemini" },
      { name: "GitHub Copilot", icon: "copilot" },
      { name: "ChatGPT", icon: "chatgpt" },
    ],
  },
];

/** Engineering practices — shown as text, not as tool tiles. */
export const practices = [
  "Debugging & root-cause analysis",
  "API & regression testing",
  "Code review",
  "Agile / Scrum",
  "AI output validation",
  "Query optimization",
];
