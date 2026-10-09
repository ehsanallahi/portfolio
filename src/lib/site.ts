import { profile } from "@/data/portfolio";

/**
 * Canonical site URL. Set NEXT_PUBLIC_SITE_URL in production (e.g. a custom
 * domain); on Vercel the production URL is picked up automatically.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000")
).replace(/\/$/, "");

export const siteTitle = `${profile.name} — ${profile.title}`;

export const siteDescription =
  "Ehsan Allahi is a full-stack software engineer in Lahore, Pakistan, building production web apps with React, Next.js, Node.js and PostgreSQL, and mobile apps with Flutter — creator of Imtihan.app, an AI-powered EdTech platform.";

export const keywords = [
  "Ehsan Allahi",
  "Full-Stack Software Engineer",
  "Full Stack Developer Lahore",
  "Next.js Developer",
  "React Developer",
  "Node.js Developer",
  "Flutter Developer",
  "PostgreSQL",
  "Prisma",
  "TypeScript",
  "Software Engineer Pakistan",
  "Imtihan.app",
];
