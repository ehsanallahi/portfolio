import type { Service } from "@/types/portfolio";

export const services: Service[] = [
  {
    title: "Full-Stack Web Applications",
    icon: "layers",
    description:
      "Complete products built on Next.js, Node.js and PostgreSQL — from the data model to the deployed app.",
    deliverables: [
      "Architecture & PostgreSQL schema design",
      "Frontend + backend implementation",
      "Indexing, query tuning & Vercel deployment",
    ],
  },
  {
    title: "Flutter Mobile Apps",
    icon: "smartphone",
    description:
      "Cross-platform mobile apps in Flutter — from role-based business apps to customer ordering — ready for Google Play.",
    deliverables: [
      "Flutter & Dart development",
      "Firebase or REST API backends",
      "Google Play release",
    ],
  },
  {
    title: "Frontend Development",
    icon: "layout",
    description:
      "Responsive, fast React and Next.js interfaces, translated pixel-accurately from your Figma designs.",
    deliverables: [
      "Reusable component libraries",
      "Tailwind CSS & shadcn/ui",
      "Performance improvements",
    ],
  },
  {
    title: "API Design & Integration",
    icon: "plug",
    description:
      "Reliable REST APIs and third-party integrations — including payment gateways — that keep your data flowing.",
    deliverables: [
      "REST API design",
      "Payment gateway integration",
      "API testing with Postman",
    ],
  },
  {
    title: "Dashboards & Admin Panels",
    icon: "dashboard",
    description:
      "Internal tools and admin dashboards with secure authentication and role-based access control.",
    deliverables: [
      "JWT / NextAuth authentication",
      "Role-based access control",
      "Data management views",
    ],
  },
  {
    title: "AI Feature Integration",
    icon: "sparkles",
    description:
      "Practical AI inside your product — content generation and streaming assistants built on Google Gemini.",
    deliverables: [
      "Gemini API integration",
      "Streaming AI responses",
      "Validated, production-minded output",
    ],
  },
];
