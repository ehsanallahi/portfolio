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
      "A Flutter ordering app for Chicago Street Pizza, built on Firebase, where customers, kitchen staff, delivery riders and admins each get their own live dashboard.",
    categories: ["mobile"],
    role: "Designed and built the app end to end — Flutter UI, Riverpod state, routing and Firebase integration.",
    problem:
      "A pizza restaurant's ordering flow involves customers, the kitchen, delivery riders and management — and each needs a different, up-to-date view of the same orders.",
    solution:
      "One Flutter app with role-based dashboards over live Firestore streams: customers order from the menu and track progress, the kitchen and riders move orders through each stage, and admins manage the menu and staff.",
    features: [
      "Menu with add-to-cart, cart total and one-tap checkout",
      "Live order tracking through pending, preparing, ready, out for delivery and delivered",
      "Kitchen dashboard to start preparing orders and mark them ready",
      "Delivery dashboard to pick up orders and mark them delivered",
      "Admin portal to add, edit and remove menu items and manage staff",
      "Email sign-up and login with Firebase Authentication, routed by role",
    ],
    architecture: [
      {
        layer: "App",
        detail: "Flutter app organised by feature — customer, kitchen, delivery and admin — with go_router navigation and a home screen that opens each user's dashboard by role.",
      },
      {
        layer: "State",
        detail: "Riverpod providers, with StreamProviders over Firestore so every dashboard updates live.",
      },
      {
        layer: "Auth",
        detail: "Firebase Authentication for registration and login, with each user's role stored in Firestore.",
      },
      {
        layer: "Data",
        detail: "Cloud Firestore storing products (with branch availability), orders and users.",
      },
    ],
    challenges: [
      {
        challenge: "Four roles in one codebase",
        solution:
          "Organised the app into feature modules per role, with routing that sends each user to their own dashboard after login.",
      },
      {
        challenge: "Everyone working from the same orders",
        solution:
          "Streamed orders from Cloud Firestore through Riverpod, so a status change in the kitchen shows up instantly for riders and customers.",
      },
      {
        challenge: "A clear order lifecycle",
        solution:
          "Modelled five order stages, each with its own action button and colour-coded progress bar, so every role knows the next step.",
      },
    ],
    stack: ["Flutter", "Dart", "Riverpod", "go_router", "Firebase Auth", "Cloud Firestore"],
    links: { repo: "https://github.com/ehsanallahi/chicago_street" },
    image: "/images/projects/chicago-street/chicago-cover.webp",
    imageBackground: "#0b1614",
    kind: "mobile",
    gallery: [
      {
        src: "/images/projects/chicago-street/menu.webp",
        alt: "Chicago Street Pizza menu grid with pizzas, prices in rupees, add-to-cart buttons and a View Cart button",
        caption: "Menu — browse, add to cart, check out",
        frame: "mobile",
      },
      {
        src: "/images/projects/chicago-street/orders.webp",
        alt: "My Orders screen with colour-coded progress bars for out for delivery, preparing and delivered orders",
        caption: "My Orders — live order tracking",
        frame: "mobile",
      },
      {
        src: "/images/projects/chicago-street/kitchen.webp",
        alt: "Kitchen Dashboard with pending and preparing orders and Start Preparing and Ready for Delivery buttons",
        caption: "Kitchen — move orders through preparation",
        frame: "mobile",
      },
      {
        src: "/images/projects/chicago-street/admin.webp",
        alt: "Admin Portal with Manage Menu, Manage Staff, Manage Branches and Sales & Stats tiles",
        caption: "Admin portal — menu and staff management",
        frame: "mobile",
      },
    ],
    hue: 20,
  },
  {
    slug: "slack-reminders",
    title: "Slack Reminders App",
    tagline: "Rich-text, recurring Slack reminders — built at TxLabz",
    summary:
      "A full-stack Next.js app I built during my internship at TxLabz: write formatted messages, schedule them once, daily or weekly, and track every delivery to Slack.",
    categories: ["full-stack"],
    role: "Full-stack developer — dashboard UI, rich-text editor, Slack Markdown conversion, scheduling and REST endpoints.",
    problem:
      "Teams send the same reminders over and over — standups, weekly reports, timesheets. Doing it by hand is easy to forget, and rich text written in a web form doesn't match Slack's own Markdown format.",
    solution:
      "An admin dashboard with a TipTap rich-text editor whose output is converted to Slack Markdown with Turndown, recurring schedules in Pakistan time, and a cron-driven scheduler that posts through the Slack Web API and logs every delivery.",
    features: [
      "Rich-text editor (bold, italic, strikethrough, links, code, lists) converted to Slack Markdown",
      "Once, daily or weekly schedules in Pakistan time (GMT+5)",
      "Searchable Slack channel picker loaded from the workspace",
      "Edit, pause, resume, run now or delete any reminder",
      "Home dashboard with totals, active, delivered, paused, failed and upcoming reminders",
      "Per-reminder delivery history with error details",
      "Admin login with NextAuth and a protected dashboard",
    ],
    architecture: [
      {
        layer: "Dashboard",
        detail: "Next.js App Router with shadcn/ui, TipTap and react-hook-form, protected by NextAuth.",
      },
      {
        layer: "Formatting",
        detail:
          "Turndown with custom rules turns the editor's HTML into Slack mrkdwn — *bold*, _italic_, ~strike~, <url|links> and code.",
      },
      {
        layer: "API & data",
        detail: "Next.js API routes over MongoDB (Mongoose) storing reminders, schedules and a delivery log.",
      },
      {
        layer: "Delivery",
        detail: "A cron-triggered route finds due reminders and posts them with the Slack Web API.",
      },
    ],
    challenges: [
      {
        challenge: "Rich text doesn't match Slack's format",
        solution:
          "Configured Turndown with Slack-specific rules for bold, strikethrough, links and inline code, so messages look right when they arrive.",
      },
      {
        challenge: "Recurring schedules in local time",
        solution:
          "Modelled once, daily and weekly frequencies and anchored them to Pakistan time, showing each schedule in plain language in the list.",
      },
      {
        challenge: "Knowing whether a message actually went out",
        solution:
          "Recorded every delivery attempt with its time, status and error, surfaced in the dashboard stats and a delivery-history dialog.",
      },
    ],
    stack: ["Next.js", "React", "MongoDB", "Mongoose", "NextAuth", "TipTap", "Slack Web API", "shadcn/ui"],
    links: { repo: "https://github.com/ehsanallahi/slack_app" },
    image: "/images/projects/slack-reminders/slack-app-cover.webp",
    imageBackground: "#04131f",
    gallery: [
      {
        src: "/images/projects/slack-reminders/scheduled-reminders.webp",
        alt: "Scheduled Reminders table with channels, once, daily and weekly schedules, Active and Paused badges, last delivery and icon actions",
        caption: "Scheduled reminders — recurring schedules and quick actions",
        frame: "web",
      },
      {
        src: "/images/projects/slack-reminders/create-reminder.webp",
        alt: "Create a New Reminder form with a rich-text editor toolbar, channel picker, weekly frequency, day and time",
        caption: "Create reminder — rich-text editor and recurring schedules",
        frame: "web",
      },
      {
        src: "/images/projects/slack-reminders/dashboard-home.webp",
        alt: "Dashboard home with cards for total, active, delivered, paused, failed and upcoming reminders",
        caption: "Home — reminder stats at a glance",
        frame: "web",
      },
      {
        src: "/images/projects/slack-reminders/delivery-history.webp",
        alt: "Delivery History dialog listing weekly deliveries with one failed attempt",
        caption: "Delivery history — every attempt logged",
        frame: "web",
      },
    ],
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
      "Job search by keyword with filters for job type, experience and salary range",
      "One-click applications, with expired listings blocked automatically",
      "CV uploads to Cloudinary, managed from the user dashboard",
      "Employer job posting and recruiter dashboards for faster applicant filtering",
      "Editor approval before jobs are published, plus a super-admin role",
      "JWT authentication with protected routes",
    ],
    architecture: [
      {
        layer: "Frontend",
        detail: "Next.js and React with Tailwind CSS and shadcn/ui, mixing server- and client-side rendering.",
      },
      {
        layer: "Backend",
        detail: "Strapi on Node.js exposing REST APIs with JWT-based auth and roles.",
      },
      {
        layer: "Data",
        detail: "PostgreSQL storing jobs, profiles and applications.",
      },
      {
        layer: "Files",
        detail: "Cloudinary storing uploaded CVs.",
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
    stack: ["Next.js", "React", "Node.js", "Strapi", "PostgreSQL", "Cloudinary", "JWT"],
    links: {
      repo: "https://github.com/ehsanallahi/jobportal-frontend-",
    },
    image: "/images/projects/job-portal/job-portal-cover.webp",
    imageBackground: "#04201d",
    gallery: [
      {
        src: "/images/projects/job-portal/listings.webp",
        alt: "Job Portal listings page with keyword search, salary range slider, job type and experience filters, and job cards with Apply Now",
        caption: "Job listings — search, filter by type, experience and salary, then apply",
        frame: "web",
      },
      {
        src: "/images/projects/job-portal/dashboard.webp",
        alt: "Job Portal user dashboard with profile, skills, social links, uploaded CVs and recent jobs",
        caption: "Dashboard — profile, CV uploads and recent jobs",
        frame: "web",
      },
      {
        src: "/images/projects/job-portal/landing.webp",
        alt: "Job Portal landing page with the headline Find Your Dream Job and get Hired, Find Jobs and Post a Job buttons",
        caption: "Landing page",
        frame: "web",
      },
    ],
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
