import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import type { Project } from "@/types/portfolio";
import { categoryLabels } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ProjectLinks } from "./project-links";
import { ProjectVisual } from "./project-visual";

export function ProjectCard({ project, wide = false }: { project: Project; wide?: boolean }) {
  return (
    <article
      className={cn(
        "gradient-border group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/70 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/15",
        wide && "lg:grid lg:grid-cols-[1.15fr_1fr]",
      )}
    >
      <ProjectVisual
        project={project}
        className={cn("border-b border-border", wide && "lg:aspect-auto lg:h-full lg:border-r lg:border-b-0")}
        sizes={wide ? "(min-width: 1024px) 600px, 100vw" : "(min-width: 768px) 50vw, 100vw"}
      />

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {project.featured && (
            <span className="inline-flex items-center gap-1 rounded-full bg-brand/15 px-2.5 py-1 text-xs font-medium text-brand">
              <Star className="size-3 fill-current" aria-hidden="true" />
              Featured
            </span>
          )}
          {project.categories.map((c) => (
            <span key={c} className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">
              {categoryLabels[c]}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
          {/* Stretched link: the whole card opens the case study */}
          <Link
            href={`/projects/${project.slug}`}
            className="outline-none after:absolute after:inset-0 after:z-0 after:rounded-3xl focus-visible:after:ring-3 focus-visible:after:ring-ring/60"
          >
            {project.title}
          </Link>
        </h3>
        <p className="mt-1 text-sm font-medium text-brand">{project.tagline}</p>
        <p className="mt-4 text-[15px] leading-relaxed text-pretty text-muted-foreground">{project.summary}</p>

        {wide && (
          <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
            {project.features.slice(0, 4).map((f) => (
              <li key={f} className="flex gap-2.5">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-2" />
                {f}
              </li>
            ))}
          </ul>
        )}

        <ul aria-label="Tech stack" className="mt-6 flex flex-wrap gap-1.5">
          {project.stack.map((t, i) => (
            <li
              key={t}
              className="rounded-md bg-muted px-2 py-1 font-mono text-[11px] text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-foreground"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-8">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium" aria-hidden="true">
            View case study
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
          <ProjectLinks project={project} className="relative z-10" />
        </div>
      </div>
    </article>
  );
}
