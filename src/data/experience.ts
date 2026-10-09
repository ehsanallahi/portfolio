import type { Experience } from "@/types/portfolio";

/** Most recent first. */
export const experience: Experience[] = [
  {
    company: "ISH",
    role: "Software Engineer",
    type: "Full-time",
    start: "Oct 2025",
    end: "Present",
    location: "Lahore, Pakistan",
    summary:
      "Building and maintaining production React and Next.js applications backed by Node.js services, plus the company's Flutter mobile app.",
    highlights: [
      "Develop reusable React components and improve the performance of production Next.js applications.",
      "Design and integrate REST APIs between the frontend and Node.js backend services for reliable data flow across workflows.",
      "Developed the company's Flutter mobile app, ISH Motorcycle Parts, published on Google Play.",
      "Debug issues across frontend, backend, API integrations and database layers — tracing root causes and verifying fixes.",
      "Validate features and edge cases before deployment to reduce regressions and production issues.",
      "Use GitHub Copilot and ChatGPT to speed up development and refactoring, reviewing all AI-assisted code before merge.",
      "Collaborate with designers and developers in an Agile team to deliver stable, on-time releases.",
    ],
    stack: ["React.js", "Next.js", "Node.js", "Flutter", "REST APIs", "GitHub Copilot"],
  },
  {
    company: "TxLabz",
    role: "MERN Stack Developer (Intern)",
    type: "Internship",
    start: "Jul 2025",
    end: "Oct 2025",
    location: "Lahore, Pakistan",
    summary:
      "Shipped full-stack features across a React frontend and Node.js backend in an Agile team.",
    highlights: [
      "Built full-stack features across a React.js frontend and Node.js backend.",
      "Developed reusable React components and implemented pixel-accurate UI from Figma designs with Tailwind CSS.",
      "Took part in code reviews, Git workflows, sprint planning and debugging.",
    ],
    stack: ["React.js", "Node.js", "Tailwind CSS", "Figma", "Git"],
  },
];
