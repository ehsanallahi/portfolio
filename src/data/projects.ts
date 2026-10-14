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
      "A Next.js web platform on a modular Node.js backend, an offline-first Flutter mobile app for Matric students, a policy-driven permission system for ten distinct roles, a freemium subscription model powered by JazzCash and EasyPaisa, and Google Gemini integrations that turn PDFs into exam-ready MCQs and answer doubts bilingually with streaming responses.",
    features: [
      "Exam-ready MCQs generated from PDFs with Google Gemini",
      "Bilingual AI doubt-solving with streaming responses",
      "10-role RBAC with Casbin — students, teachers, guardians, editors, moderators, finance, admins and super admins",
      "Freemium subscriptions via JazzCash and EasyPaisa",
      "Flutter mobile app with a daily study plan, practice quizzes, flashcards, a diagnostic test and an AI tutor",
      "Scan a stuck question with the camera (ML Kit text recognition) and get AI help",
      "English / Urdu interface with Nastaliq typography",
      "Offline-first mobile data with background sync",
      "PostgreSQL schemas tuned with indexing for fast reads",
    ],
    architecture: [
      {
        layer: "Clients",
        detail: "Next.js web app, plus a Flutter mobile app built with Riverpod and go_router.",
      },
      {
        layer: "Mobile data",
        detail:
          "Offline-first: a local Drift (SQLite) database feeds the UI, while a sync engine pushes changes to Firebase (Auth, Firestore, Cloud Functions, Storage).",
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
        challenge: "Studying on patchy mobile connections",
        solution:
          "Made the mobile app offline-first — the UI reads from a local database and an outbox syncs progress to Firebase when the connection returns.",
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
      "Firebase",
      "Riverpod",
    ],
    links: { live: "https://www.imtihan.app" },
    image: "/images/projects/imtihan/cover.webp",
    imageBackground: "#08251f",
    gallery: [
      {
        src: "/images/projects/imtihan/today.webp",
        alt: "Imtihan mobile app Today screen with study streak, days left, today's plan and quick access to AI Tutor, Flashcards and Diagnostic",
        caption: "Today — a daily plan built from topic mastery",
        frame: "mobile",
      },
      {
        src: "/images/projects/imtihan/practice.webp",
        alt: "Imtihan mobile app practice quiz on the Cell Cycle with the correct answer, Metaphase, highlighted and an explanation",
        caption: "Practice — MCQs with instant explanations",
        frame: "mobile",
      },
      {
        src: "/images/projects/imtihan/tutor.webp",
        alt: "Imtihan mobile app AI Tutor screen with syllabus-grounded suggested questions and a scan button",
        caption: "AI Tutor — grounded in the syllabus",
        frame: "mobile",
      },
    ],
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
      "Role-based experiences for super dealers, distributors, retailers, mechanics and marketers",
      "Catalogue browsing and purchasing for dealers and distributors",
      "Distributor orders routed directly to super dealers",
      "QR scanning of original parts to verify authenticity",
      "Reward points that mechanics earn, convert and redeem for rewards",
      "Marketer dashboard with referral tracking, analytics, payout requests and a leaderboard",
      "Community feed for updates and promotions",
      "English / Urdu interface, with Urdu product names",
      "Order history with downloadable PDF summaries",
      "Push notifications for orders and updates",
    ],
    architecture: [
      {
        layer: "Mobile app",
        detail: "Cross-platform Flutter app with Provider state management, distributed through Google Play.",
      },
      {
        layer: "Backend",
        detail:
          "Firebase — Authentication, Cloud Firestore, Storage, Cloud Functions and Cloud Messaging for push notifications.",
      },
      {
        layer: "Roles",
        detail: "Tailored home screens and flows for super dealers, distributors, retailers, mechanics and marketers.",
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
    stack: ["Flutter", "Dart", "Firebase", "Cloud Functions", "Provider", "Hive", "Google Play"],
    links: { playStore: "https://play.google.com/store/apps/details?id=com.proj_ish.app" },
    image: "/images/projects/ish/ish-cover-v2.webp",
    imageBackground: "#1a0305",
    gallery: [
      {
        src: "/images/projects/ish/mechanic-flip-win.webp",
        alt: "ISH Motorcycle Parts mechanic home with Scan Original Parts, points balance, Convert Points and Rewards, promotions and product tiles",
        caption: "Mechanic home — points, rewards and part scanning",
        frame: "mobile",
      },
      {
        src: "/images/projects/ish/qr-result.webp",
        alt: "ISH Motorcycle Parts QR result confirming an authentic product, points added to the account, product information and QR code details",
        caption: "Scan result — authentic part verified, points added",
        frame: "mobile",
      },
      {
        src: "/images/projects/ish/marketer.webp",
        alt: "ISH Motorcycle Parts marketer dashboard with quick actions for referred users, analytics, withdrawals, leaderboard and profile",
        caption: "Marketer dashboard — referrals and payouts",
        frame: "mobile",
      },
      {
        src: "/images/projects/ish/analytics.webp",
        alt: "ISH Motorcycle Parts marketer analytics with total points generated, active conversion, total withdrawals and top scanners",
        caption: "Marketer analytics — points, payouts and top scanners",
        frame: "mobile",
      },
    ],
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
