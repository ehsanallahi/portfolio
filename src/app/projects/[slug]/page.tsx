import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2, Lightbulb, Target, User } from "lucide-react";
import { categoryLabels, getProject, projects } from "@/data/projects";
import { profile } from "@/data/portfolio";
import { ProjectVisual } from "@/components/projects/project-visual";
import { ProjectLinks } from "@/components/projects/project-links";
import { Reveal, Stagger, StaggerItem } from "@/components/animations/reveal";
import { JsonLd } from "@/components/shared/json-ld";
import { ctaVariants } from "@/components/shared/cta";
import { siteUrl } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const title = `${project.title} — ${project.tagline}`;
  return {
    title,
    description: project.summary,
    keywords: [project.title, ...project.stack, profile.name, "case study"],
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      url: `/projects/${project.slug}`,
      title,
      description: project.summary,
    },
    twitter: { card: "summary_large_image", title, description: project.summary },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.tagline,
    description: project.summary,
    url: `${siteUrl}/projects/${project.slug}`,
    keywords: project.stack.join(", "),
    author: { "@type": "Person", name: profile.name, url: siteUrl },
    ...((project.links.live || project.links.playStore) && {
      sameAs: [project.links.live, project.links.playStore].filter(Boolean),
    }),
    ...(project.links.repo && { codeRepository: project.links.repo }),
  };

  return (
    <article className="relative pt-28 pb-24 sm:pt-32">
      <JsonLd data={schema} />
      <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-[520px] overflow-hidden">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_0%,#000_30%,transparent_100%)]" />
        <div
          className="absolute -top-40 left-1/2 h-[420px] w-[680px] -translate-x-1/2 rounded-full blur-[120px]"
          style={{ background: `oklch(0.6 0.17 ${project.hue} / 0.18)` }}
        />
      </div>

      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/#projects"
          className="group mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
          All projects
        </Link>

        <header className="animate-fade-up">
          <div className="mb-5 flex flex-wrap gap-2">
            {project.categories.map((c) => (
              <span key={c} className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
                {categoryLabels[c]}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl">
            {project.title}
          </h1>
          <p className="text-gradient mt-3 text-xl font-medium sm:text-2xl">{project.tagline}</p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-pretty text-muted-foreground">
            {project.summary}
          </p>
          <ProjectLinks project={project} size="md" className="mt-8" />
        </header>

        <div
          className="animate-fade-up group mt-12 overflow-hidden rounded-3xl border border-border shadow-2xl shadow-black/20"
          style={{ animationDelay: "150ms" }}
        >
          <ProjectVisual project={project} priority sizes="(min-width: 1024px) 960px, 100vw" />
        </div>

        <dl className="mt-10 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card/60 p-5 sm:col-span-2">
            <dt className="mb-2 flex items-center gap-2 font-mono text-xs tracking-wider text-muted-foreground uppercase">
              <User className="size-3.5" aria-hidden="true" /> My role
            </dt>
            <dd className="text-[15px] leading-relaxed">{project.role}</dd>
          </div>
          <div className="rounded-2xl border border-border bg-card/60 p-5">
            <dt className="mb-2 font-mono text-xs tracking-wider text-muted-foreground uppercase">Tech stack</dt>
            <dd>
              <ul className="flex flex-wrap gap-1.5">
                {project.stack.map((t) => (
                  <li key={t} className="rounded-md bg-muted px-2 py-1 font-mono text-[11px] text-muted-foreground">
                    {t}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-3xl border border-border bg-card/60 p-6 sm:p-8">
            <h2 className="mb-4 flex items-center gap-3 text-xl font-semibold tracking-tight">
              <span className="grid size-9 place-items-center rounded-xl bg-destructive/10 text-destructive">
                <Target className="size-4" aria-hidden="true" />
              </span>
              The problem
            </h2>
            <p className="leading-relaxed text-muted-foreground">{project.problem}</p>
          </Reveal>
          <Reveal delay={0.08} className="rounded-3xl border border-border bg-card/60 p-6 sm:p-8">
            <h2 className="mb-4 flex items-center gap-3 text-xl font-semibold tracking-tight">
              <span className="grid size-9 place-items-center rounded-xl bg-success/10 text-success">
                <Lightbulb className="size-4" aria-hidden="true" />
              </span>
              The solution
            </h2>
            <p className="leading-relaxed text-muted-foreground">{project.solution}</p>
          </Reveal>
        </div>

        <section aria-labelledby="features-title" className="mt-20">
          <Reveal>
            <h2 id="features-title" className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">
              Key features
            </h2>
          </Reveal>
          <Stagger className="grid gap-3 sm:grid-cols-2">
            {project.features.map((f) => (
              <StaggerItem key={f} className="flex gap-3 rounded-2xl border border-border bg-card/60 p-4">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
                <span className="text-[15px] leading-relaxed">{f}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <section aria-labelledby="architecture-title" className="mt-20">
          <Reveal>
            <h2 id="architecture-title" className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">
              Architecture overview
            </h2>
          </Reveal>
          <Stagger className="relative space-y-3">
            {project.architecture.map((a, i) => (
              <StaggerItem
                key={a.layer}
                className="grid gap-2 rounded-2xl border border-border bg-card/60 p-5 sm:grid-cols-[180px_1fr] sm:items-center sm:gap-6"
              >
                <span className="flex items-center gap-3 font-medium">
                  <span className="grid size-7 place-items-center rounded-lg bg-gradient-to-br from-brand to-brand-2 font-mono text-xs font-bold text-background">
                    {i + 1}
                  </span>
                  {a.layer}
                </span>
                <span className="text-[15px] leading-relaxed text-muted-foreground">{a.detail}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <section aria-labelledby="challenges-title" className="mt-20">
          <Reveal>
            <h2 id="challenges-title" className="mb-8 text-2xl font-semibold tracking-tight sm:text-3xl">
              Challenges &amp; solutions
            </h2>
          </Reveal>
          <Stagger className="grid gap-4 md:grid-cols-2">
            {project.challenges.map((c) => (
              <StaggerItem key={c.challenge} className="gradient-border rounded-3xl border border-border bg-card/60 p-6">
                <h3 className="font-semibold">{c.challenge}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{c.solution}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <nav aria-label="More projects" className="mt-24 flex flex-col gap-4 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/#contact" className={ctaVariants({ variant: "primary", size: "lg" })}>
            Work with me
          </Link>
          {next.slug !== project.slug && (
            <Link
              href={`/projects/${next.slug}`}
              className="group flex items-center justify-between gap-6 rounded-2xl border border-border bg-card/60 p-4 transition-colors hover:border-brand/50 sm:min-w-72"
            >
              <span>
                <span className="block text-xs text-muted-foreground">Next project</span>
                <span className="block font-medium">{next.title}</span>
              </span>
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          )}
        </nav>
      </div>
    </article>
  );
}
