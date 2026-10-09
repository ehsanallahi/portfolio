import type { Highlight, NavItem, Profile } from "@/types/portfolio";

export const profile: Profile = {
  name: "Ehsan Allahi",
  firstName: "Ehsan",
  initials: "EA",
  title: "Full-Stack Software Engineer",
  roles: [
    "Full-Stack Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Node.js Developer",
    "Flutter Developer",
  ],
  tagline:
    "Full-stack engineer building production web apps with React, Next.js, Node.js and PostgreSQL — and mobile apps with Flutter.",
  intro:
    "I build and ship production web and mobile applications end to end — from database schema and APIs to polished interfaces in React and Flutter. Most recently I designed and launched Imtihan.app, an AI-powered exam preparation platform, and shipped ISH's Flutter app on Google Play.",
  location: "Lahore, Pakistan",
  email: "ehsanallahi47@gmail.com",
  phone: "+92 322 4542464",
  resumePath: "/resume.pdf",
  availability: "Open to full-stack roles & freelance projects",
  socials: [
    {
      key: "github",
      label: "GitHub",
      handle: "github.com/ehsanallahi",
      href: "https://github.com/ehsanallahi",
    },
    {
      key: "linkedin",
      label: "LinkedIn",
      handle: "linkedin.com/in/ehsanallahi",
      href: "https://www.linkedin.com/in/ehsanallahi",
    },
    {
      key: "email",
      label: "Email",
      handle: "ehsanallahi47@gmail.com",
      href: "mailto:ehsanallahi47@gmail.com",
    },
  ],
};

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

/** Facts taken directly from the resume — no invented metrics. */
export const highlights: Highlight[] = [
  { value: "1+ yr", label: "Professional experience" },
  { value: "10", label: "Roles in Imtihan's RBAC system" },
  { value: "2", label: "Payment gateways integrated" },
  { value: "1st", label: "Place, Xavor AI Bootcamp" },
];

export const about = {
  paragraphs: [
    "I'm a full-stack software engineer based in Lahore, currently building production React and Next.js applications at ISH — and I developed the company's Flutter app, ISH Motorcycle Parts, now live on Google Play. My work spans the full path of a feature: designing the data model, writing the REST APIs that serve it, and crafting the interface people actually use.",
    "Before ISH, I sharpened my MERN stack skills at TxLabz, turning Figma designs into pixel-accurate Tailwind UIs and shipping full-stack features in an Agile team. I also built Imtihan.app from the ground up — a modular backend serving its Next.js web app and Flutter mobile app, a 10-role permission system, local payment gateways and AI-generated practice content.",
  ],
  principles: [
    {
      title: "Clean architecture",
      body: "Modular code with clear separation of concerns, so features stay easy to extend and reason about.",
    },
    {
      title: "Root-cause debugging",
      body: "I trace issues across frontend, API and database layers instead of patching symptoms — then verify the fix.",
    },
    {
      title: "Reliable releases",
      body: "Edge cases get validated before deployment, keeping regressions out of production.",
    },
    {
      title: "Responsible AI-assisted dev",
      body: "Copilot and ChatGPT speed me up, but every AI-assisted change is reviewed before it merges.",
    },
  ],
  focus: [
    "Full-stack web apps with Next.js",
    "Cross-platform mobile apps with Flutter",
    "REST API design & integration",
    "PostgreSQL schema design",
    "Role-based access control",
    "Payment gateway integration",
    "AI features with Google Gemini",
  ],
};
