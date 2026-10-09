"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { categoryLabels, projects } from "@/data/projects";
import type { ProjectCategory } from "@/types/portfolio";
import { ProjectCard } from "@/components/projects/project-card";
import { Reveal } from "@/components/animations/reveal";
import { Section, SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

type Filter = "all" | ProjectCategory;

/**
 * Only offer filters that narrow the list: a category containing every
 * project would just duplicate "All", and empty categories are hidden.
 */
const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All Projects" },
  ...(Object.keys(categoryLabels) as ProjectCategory[])
    .map((id) => ({ id, count: projects.filter((p) => p.categories.includes(id)).length }))
    .filter(({ count }) => count > 0 && count < projects.length)
    .map(({ id }) => ({ id, label: categoryLabels[id] })),
];

export function Projects() {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = projects.filter((p) => filter === "all" || p.categories.includes(filter));

  return (
    <Section id="projects" className="bg-surface/50">
      <SectionHeading
        id="projects-title"
        eyebrow="Featured projects"
        title={
          <>
            Products I&apos;ve <span className="text-gradient">designed and built</span>
          </>
        }
        description="From a live AI-powered EdTech platform to internal tools — each one owned across frontend, backend and data."
      />

      {filters.length > 1 && (
        <Reveal>
          <div role="group" aria-label="Filter projects" className="mb-10 flex flex-wrap gap-2">
            {filters.map((f) => {
              const active = f.id === filter;
              return (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setFilter(f.id)}
                  className={cn(
                    "relative h-10 rounded-full border px-4 text-sm font-medium transition-colors",
                    active
                      ? "border-transparent text-primary-foreground"
                      : "border-border bg-card/60 text-muted-foreground hover:border-brand/40 hover:text-foreground",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="project-filter"
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full bg-primary"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative">{f.label}</span>
                </button>
              );
            })}
          </div>
        </Reveal>
      )}

      <motion.ul layout className="grid gap-6 md:grid-cols-2">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project, i) => {
            const wide = Boolean(project.featured);
            return (
              <motion.li
                key={project.slug}
                layout
                className={cn(wide && "md:col-span-2")}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -60px 0px" }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.55, delay: (i % 2) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} wide={wide} />
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>
    </Section>
  );
}
