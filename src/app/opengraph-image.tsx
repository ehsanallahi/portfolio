import { profile } from "@/data/portfolio";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = `${profile.name} — ${profile.title}`;
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage({
    eyebrow: "Portfolio · Lahore, Pakistan",
    title: profile.name,
    subtitle: profile.title,
    tags: ["React", "Next.js", "Node.js", "PostgreSQL"],
  });
}
