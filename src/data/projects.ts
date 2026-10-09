import type { Project, ProjectCategory } from "@/types/portfolio";

export const projects: Project[] = [
  {
    slug: "imtihan",
    title: "Imtihan.app",
    tagline: "AI-powered exam preparation platform",
    summary:
      "A full-stack EdTech platform with a Next.js web app and a Flutter mobile app, built end to end — schema design, role-based access control, local payment gateways and Gemini-powered AI features.",
    categories: ["full-stack", "mobile", "ai"],
    featured: true,
    role: "Built and shipped end to end — architecture, backend, database, the Next.js web app, the Flutter mobile app, payments and AI integration.",
    problem:
      "Exam preparation needs a steady supply of quality practice questions and quick answers to doubts. A platform serving students, teachers, guardians and internal staff also needs tight, role-aware access control and payment options that work for local users.",
    solution:
      "A modular backend that serves both a Next.js web app and a Flutter mobile app, a policy-driven permission system for ten distinct roles, a freemium subscription model powered by JazzCash and EasyPaisa, and Google Gemini integrations that turn PDFs into exam-ready MCQs and answer doubts bilingually with streaming responses.",
    features: [
      "Exam-ready MCQs generated from PDFs with Google Gemini",
      "Bilingual AI doubt-solving with streaming responses",
      "10-role RBAC with Casbin — students, teachers, guardians, editors, moderators, finance, admins and super admins",
      "Freemium subscriptions via JazzCash and EasyPaisa",
      "Flutter mobile app with MCQ practice, exams, past papers and AI tutor chat",
      "One modular backend serving the web and mobile apps",
      "PostgreSQL schemas tuned with indexing for fast reads",
    ],
    architecture: [
      {
        layer: "Clients",
        detail:
          "Next.js web app and a Flutter mobile app (Provider for state, secure token storage) consuming the same backend.",
      },
      {
        layer: "Backend",
        detail:
          "Modular Node.js services with clean separation of concerns between domains.",
      },
      {
        layer: "Access control",
        detail:
          "Casbin policies enforcing permissions across ten roles, from students to super admins.",
      },
      {
        layer: "Data",
        detail:
          "PostgreSQL modelled with Prisma, with indexing and query tuning for read-heavy flows.",
      },
      {
        layer: "Integrations",
        detail:
          "JazzCash and EasyPaisa for subscriptions; Google Gemini for MCQ generation and streaming doubt-solving.",
      },
    ],
    challenges: [
      {
        challenge: "Ten roles with very different permissions",
        solution:
          "Modelled access as Casbin policies instead of scattered role checks, so permissions stay auditable and easy to change.",
      },
      {
        challenge: "One backend for web and mobile",
        solution:
          "Structured the backend as independent modules with clean boundaries, so both clients share the same APIs.",
      },
      {
        challenge: "Fast reads on a growing question bank",
        solution:
          "Designed PostgreSQL schemas with Prisma and added indexing and query tuning for the hottest read paths.",
      },
      {
        challenge: "Payments that work for local users",
        solution:
          "Integrated JazzCash and EasyPaisa to power a freemium subscription model.",
      },
    ],
    stack: [
      "Next.js",
      "Flutter",
      "Node.js",
      "PostgreSQL",
      "Prisma",
      "Casbin",
      "Google Gemini",
      "JazzCash",
      "EasyPaisa",
    ],
    links: { live: "https://www.imtihan.app" },
    hue: 277,
  },
  {
    slug: "ish-motorcycle-parts",
    title: "ISH Motorcycle Parts",
    tagline: "B2B motorcycle parts marketplace app, live on Google Play",
    summary:
      "A Flutter e-commerce app I developed for ISH that connects super dealers, distributors, retailers and mechanics in one motorcycle parts supply chain.",
    categories: ["mobile"],
    role: "Developed the Flutter mobile app for ISH, published on Google Play.",
    problem:
      "The motorcycle parts trade runs through several kinds of businesses — super dealers, distributors, retailers and mechanics — and each one buys, routes or verifies parts differently. They needed one app that works for every role.",
    solution:
      "A single Flutter app with role-specific experiences: super dealers and distributors browse and buy from the catalogue, distributor orders are routed to super dealers, mechanics scan original parts and redeem reward points, and an in-app feed keeps the community connected.",
    features: [
      "Four account types — Super Dealer, Distributor, Retailer and Mechanic",
      "Catalogue browsing and purchasing for dealers and distributors",
      "Distributor orders routed directly to super dealers",
      "Original-part scanning to verify authenticity",
      "Reward points that mechanics earn and redeem",
      "Community feed for updates and promotions",
    ],
    architecture: [
      {
        layer: "Mobile app",
        detail: "Cross-platform Flutter app distributed through Google Play.",
      },
      {
        layer: "Roles",
        detail: "Tailored flows for super dealers, distributors, retailers and mechanics.",
      },
      {
        layer: "Ordering",
        detail: "Catalogue, purchasing and order routing from distributors to super dealers.",
      },
      {
        layer: "Loyalty",
        detail: "Part scanning for authenticity checks, with points that can be redeemed for rewards.",
      },
      {
        layer: "Community",
        detail: "A built-in feed for sharing updates and promotions.",
      },
    ],
    challenges: [
      {
        challenge: "Four account types, one app",
        solution:
          "Built role-specific flows so each business type only sees the features it needs, without shipping separate apps.",
      },
      {
        challenge: "Orders that move through a supply chain",
        solution:
          "Implemented ordering where distributor orders are routed straight to super dealers, matching how the business actually works.",
      },
      {
        challenge: "Trust in genuine parts",
        solution:
          "Added original-part scanning for mechanics, tied to a points system that rewards using genuine parts.",
      },
    ],
    stack: ["Flutter", "Dart", "Android", "Google Play"],
    links: { playStore: "https://play.google.com/store/apps/details?id=com.proj_ish.app" },
    hue: 45,
    kind: "mobile",
  },
  {
    slug: "chicago-street-pizza",
    title: "Chicago Street Pizza",
    tagline: "Food ordering app with kitchen, delivery and admin dashboards",
    summary:
      "A Flutter ordering app for Chicago Street Pizza, built on Firebase, with dedicated dashboards for customers, kitchen staff, delivery riders and admins.",
    categories: ["mobile"],
    role: "Designed and built the app end to end — Flutter UI, state management and Firebase integration.",
    problem:
      "A pizza restaurant's ordering flow involves customers, the kitchen, delivery riders and management — and each needs a different view of the same orders.",
    solution:
      "One Flutter app with role-based dashboards on Firebase: customers browse the menu, build a cart and track their orders, the kitchen and delivery teams work from their own dashboards, and admins manage the menu, products and staff.",
    features: [
      "Menu browsing, cart and checkout for customers",
      "Order tracking for customers",
      "Kitchen dashboard for incoming orders",
      "Delivery dashboard for riders",
      "Admin tools to manage the menu, products and staff",
      "Email sign-up and login with Firebase Authentication",
    ],
    architecture: [
      {
        layer: "App",
        detail: "Flutter app organised by feature — customer, kitchen, delivery and admin — with go_router navigation.",
      },
      {
        layer: "State",
        detail: "Riverpod controllers with repositories for products and orders.",
      },
      {
        layer: "Auth",
        detail: "Firebase Authentication for registration and login.",
      },
      {
        layer: "Data",
        detail: "Cloud Firestore storing products, orders and users.",
      },
    ],
    challenges: [
      {
        challenge: "Four roles in one codebase",
        solution:
          "Organised the app into feature modules per role, with routing that sends each user to their own dashboard.",
      },
      {
        challenge: "Everyone working from the same orders",
        solution:
          "Used a shared order repository over Cloud Firestore, so customer, kitchen and delivery views all read the same order data.",
      },
    ],
    stack: ["Flutter", "Dart", "Riverpod", "go_router", "Firebase Auth", "Cloud Firestore"],
    links: { repo: "https://github.com/ehsanallahi/chicago_street" },
    hue: 20,
    kind: "mobile",
  },
  {
    slug: "slack-reminders",
    title: "Slack Reminders App",
    tagline: "Serverless reminder scheduling for Slack",
    summary:
      "A serverless full-stack app with a React admin dashboard for scheduling automated Slack reminders.",
    categories: ["full-stack"],
    role: "Full-stack developer — dashboard, data models, REST endpoints and Slack formatting.",
    problem:
      "Recurring team reminders are tedious to send by hand, and rich-text messages don't map cleanly onto Slack's own Markdown format.",
    solution:
      "A React admin dashboard where reminders are created and scheduled, backed by a serverless Node.js API and MongoDB, with a converter that turns rich text into Slack Markdown before messages are sent.",
    features: [
      "React admin dashboard to create and manage reminders",
      "Automated, scheduled delivery of Slack reminders",
      "Rich-text to Slack Markdown conversion",
      "MongoDB data models and REST endpoints",
      "Serverless Node.js backend",
    ],
    architecture: [
      {
        layer: "Dashboard",
        detail: "React admin interface for composing and scheduling reminders.",
      },
      {
        layer: "API",
        detail: "Serverless Node.js REST endpoints for reminder management.",
      },
      {
        layer: "Data",
        detail: "MongoDB data models for reminders and their schedules.",
      },
      {
        layer: "Delivery",
        detail:
          "Scheduled jobs format rich text as Slack Markdown and post reminders to Slack.",
      },
    ],
    challenges: [
      {
        challenge: "Rich text doesn't match Slack's formatting",
        solution:
          "Implemented a rich-text to Slack Markdown conversion so messages look right when delivered.",
      },
      {
        challenge: "No always-on server",
        solution:
          "Designed the backend around serverless functions with MongoDB for persistence.",
      },
    ],
    stack: ["React", "Node.js", "MongoDB", "Serverless", "Slack API"],
    links: {},
    hue: 205,
  },
  {
    slug: "job-portal",
    title: "Full-Stack Job Portal",
    tagline: "Hiring platform for job seekers and recruiters",
    summary:
      "A job platform with JWT authentication, role-based access and recruiter dashboards that make applicant filtering faster and simpler.",
    categories: ["full-stack"],
    role: "Full-stack developer — authentication, REST APIs and recruiter dashboards.",
    problem:
      "Job seekers and recruiters need different experiences on the same platform, and recruiters need a quick way to sift through applicants.",
    solution:
      "A React frontend on top of a Strapi (Node.js) backend and PostgreSQL, with JWT authentication, role-based access for each user type and dedicated recruiter dashboards for filtering applicants.",
    features: [
      "JWT authentication",
      "Role-based access for job seekers and recruiters",
      "Recruiter dashboards for faster applicant filtering",
      "REST APIs powering listings and applications",
    ],
    architecture: [
      {
        layer: "Frontend",
        detail: "React interface with separate flows for job seekers and recruiters.",
      },
      {
        layer: "Backend",
        detail: "Strapi on Node.js exposing REST APIs with JWT-based auth and roles.",
      },
      {
        layer: "Data",
        detail: "PostgreSQL storing jobs, profiles and applications.",
      },
    ],
    challenges: [
      {
        challenge: "Two audiences, one platform",
        solution:
          "Used role-based access so job seekers and recruiters each see only the features and data meant for them.",
      },
      {
        challenge: "Filtering applicants quickly",
        solution:
          "Built recruiter dashboards and REST endpoints focused on making applicant filtering faster and simpler.",
      },
    ],
    stack: ["React", "Node.js", "Strapi", "PostgreSQL", "JWT"],
    links: {
      live: "https://jobportal-seven-roan.vercel.app",
      repo: "https://github.com/ehsanallahi/jobportal",
    },
    hue: 165,
  },
];

export const categoryLabels: Record<ProjectCategory, string> = {
  "full-stack": "Full Stack",
  web: "Web Apps",
  ai: "AI",
  mobile: "Mobile Apps",
};

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
