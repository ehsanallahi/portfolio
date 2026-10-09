import { getProject, projects } from "@/data/projects";
import { profile } from "@/data/portfolio";
import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "Project case study";
export const size = ogSize;
export const contentType = "image/png";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug) ?? projects[0];
  return renderOgImage({
    eyebrow: `Case study · ${profile.name}`,
    title: project.title,
    subtitle: project.tagline,
    tags: project.stack.slice(0, 4),
    hue: project.hue,
  });
}
