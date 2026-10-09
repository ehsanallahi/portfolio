import type { TechKey } from "@/components/shared/tech-icon";

export type SocialKey = "github" | "linkedin" | "email" | "phone";

export interface SocialLink {
  key: SocialKey;
  label: string;
  /** Visible handle, e.g. "github.com/ehsanallahi" */
  handle: string;
  href: string;
}

export interface NavItem {
  /** Section id on the home page */
  id: string;
  label: string;
}

export interface Profile {
  name: string;
  firstName: string;
  initials: string;
  title: string;
  /** Roles cycled in the hero — only roles supported by the resume */
  roles: string[];
  tagline: string;
  intro: string;
  location: string;
  email: string;
  phone?: string;
  resumePath: string;
  availability: string;
  socials: SocialLink[];
}

export interface Highlight {
  value: string;
  label: string;
}

export interface Skill {
  name: string;
  icon: TechKey;
}

export interface SkillCategory {
  id: string;
  label: string;
  description: string;
  skills: Skill[];
}

export interface Experience {
  company: string;
  role: string;
  type: "Full-time" | "Internship";
  start: string;
  end: string;
  location: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export type ProjectCategory = "full-stack" | "web" | "ai" | "mobile";

export interface ProjectLink {
  live?: string;
  repo?: string;
  playStore?: string;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  categories: ProjectCategory[];
  featured?: boolean;
  role: string;
  problem: string;
  solution: string;
  features: string[];
  architecture: { layer: string; detail: string }[];
  challenges: { challenge: string; solution: string }[];
  stack: string[];
  links: ProjectLink;
  /** Optional screenshot in /public; a branded visual is rendered when absent */
  image?: string;
  /** Hue (0–360) for the branded placeholder visual */
  hue: number;
  /** Placeholder style: browser window (default) or phone */
  kind?: "web" | "mobile";
}

export interface Service {
  title: string;
  description: string;
  icon:
    | "layers"
    | "layout"
    | "plug"
    | "dashboard"
    | "sparkles"
    | "database"
    | "smartphone";
  deliverables: string[];
}

export interface EducationItem {
  title: string;
  institution: string;
  period: string;
  detail?: string;
  kind: "education" | "achievement";
}
