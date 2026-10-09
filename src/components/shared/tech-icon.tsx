import type { ComponentType, SVGProps } from "react";
import {
  SiCloudinary,
  SiCss,
  SiDart,
  SiExpress,
  SiFigma,
  SiFlutter,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGithubcopilot,
  SiGooglegemini,
  SiHtml5,
  SiJavascript,
  SiJsonwebtokens,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiReact,
  SiShadcnui,
  SiStrapi,
  SiSupabase,
  SiTailwindcss,
  SiTanstack,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { TbBrandAws, TbBrandOpenai } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { Boxes, GitBranch, KeyRound, ShieldCheck, Waypoints, Webhook } from "lucide-react";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number | string }>;

/**
 * Brand colour is applied on hover. `undefined` means the brand mark is
 * black/white, so it follows the current text colour in either theme.
 */
const techIcons = {
  react: { icon: SiReact, color: "#58C4DC" },
  nextjs: { icon: SiNextdotjs, color: undefined },
  typescript: { icon: SiTypescript, color: "#3178C6" },
  javascript: { icon: SiJavascript, color: "#E3C700" },
  html: { icon: SiHtml5, color: "#E34F26" },
  css: { icon: SiCss, color: "#663399" },
  tailwind: { icon: SiTailwindcss, color: "#06B6D4" },
  shadcn: { icon: SiShadcnui, color: undefined },
  zustand: { icon: Boxes, color: "#C08A53" },
  tanstack: { icon: SiTanstack, color: "#EF4444" },
  flutter: { icon: SiFlutter, color: "#54C5F8" },
  dart: { icon: SiDart, color: "#0175C2" },
  provider: { icon: Waypoints, color: "#42A5F5" },
  riverpod: { icon: GitBranch, color: "#4FC3F7" },
  nodejs: { icon: SiNodedotjs, color: "#5FA04E" },
  express: { icon: SiExpress, color: undefined },
  rest: { icon: Webhook, color: "#8B8CF8" },
  prisma: { icon: SiPrisma, color: undefined },
  nextauth: { icon: KeyRound, color: "#A855F7" },
  strapi: { icon: SiStrapi, color: "#8E75FF" },
  casbin: { icon: ShieldCheck, color: "#22A6F2" },
  jwt: { icon: SiJsonwebtokens, color: "#D63AFF" },
  postgresql: { icon: SiPostgresql, color: "#4169E1" },
  supabase: { icon: SiSupabase, color: "#3ECF8E" },
  mongodb: { icon: SiMongodb, color: "#47A248" },
  firebase: { icon: SiFirebase, color: "#FFA000" },
  git: { icon: SiGit, color: "#F05032" },
  github: { icon: SiGithub, color: undefined },
  aws: { icon: TbBrandAws, color: "#FF9900" },
  vercel: { icon: SiVercel, color: undefined },
  cloudinary: { icon: SiCloudinary, color: "#3448C5" },
  postman: { icon: SiPostman, color: "#FF6C37" },
  figma: { icon: SiFigma, color: "#F24E1E" },
  vscode: { icon: VscVscode, color: "#22A6F2" },
  copilot: { icon: SiGithubcopilot, color: undefined },
  chatgpt: { icon: TbBrandOpenai, color: "#10A37F" },
  gemini: { icon: SiGooglegemini, color: "#8E75FF" },
} satisfies Record<string, { icon: IconComponent; color: string | undefined }>;

export type TechKey = keyof typeof techIcons;

export function getTechColor(key: TechKey) {
  return techIcons[key].color;
}

export function TechIcon({
  name,
  className,
}: {
  name: TechKey;
  className?: string;
}) {
  const Icon = techIcons[name].icon as IconComponent;
  return <Icon aria-hidden="true" focusable="false" className={className} />;
}
