"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { practices, skillCategories } from "@/data/skills";
import { getTechColor, TechIcon } from "@/components/shared/tech-icon";
import { Reveal } from "@/components/animations/reveal";
import { Section, SectionHeading } from "@/components/shared/section-heading";
import { cn } from "@/lib/utils";

const ALL = "all";
const filters = [{ id: ALL, label: "All" }, ...skillCategories.map(({ id, label }) => ({ id, label }))];

export function Skills() {
  const [filter, setFilter] = useState(ALL);

  const visible = skillCategories.flatMap((cat) =>
    filter === ALL || filter === cat.id
      ? cat.skills.map((skill) => ({ ...skill, category: cat.label }))
      : [],
  );
  const activeCategory = skillCategories.find((c) => c.id === filter);

  return (
    <Section id="skills" className="bg-surface/50">
      <SectionHeading
        id="skills-title"
        eyebrow="Technical skills"
        title={
          <>
            The toolkit I <span className="text-gradient">ship with</span>
          </>
        }
        description="Technologies I use in production and in my own projects — from interface to database."
      />

      <Reveal>
        <div
          role="group"
          aria-label="Filter skills by category"
          className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {filters.map((f) => {
            const active = f.id === filter;
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(f.id)}
                className={cn(
                  "relative h-10 shrink-0 rounded-full border px-4 text-sm font-medium transition-colors",
                  active
                    ? "border-transparent text-primary-foreground"
                    : "border-border bg-card/60 text-muted-foreground hover:border-brand/40 hover:text-foreground",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="skill-filter"
                    aria-hidden="true"
                    className="absolute inset-0 -z-0 rounded-full bg-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative">{f.label}</span>
              </button>
            );
          })}
        </div>

        <p aria-live="polite" className="mb-6 min-h-6 text-sm text-muted-foreground">
          {activeCategory
            ? `${activeCategory.description} (${visible.length} skills)`
            : `${visible.length} technologies across ${skillCategories.length} areas.`}
        </p>
      </Reveal>

      <motion.ul layout className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((skill) => {
            const color = getTechColor(skill.icon);
            return (
              <motion.li
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="gradient-border group flex items-center gap-3 rounded-2xl border border-border bg-card/70 p-3 transition-transform duration-300 hover:-translate-y-1 sm:p-4"
                style={{ "--tech": color ?? "var(--foreground)" } as React.CSSProperties}
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-muted text-muted-foreground transition-colors duration-300 group-hover:text-[var(--tech)]">
                  <TechIcon name={skill.icon} className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm leading-tight font-medium">{skill.name}</span>
                  <span className="block truncate text-xs text-muted-foreground">{skill.category}</span>
                </span>
              </motion.li>
            );
          })}
        </AnimatePresence>
      </motion.ul>

      <Reveal className="mt-12">
        <h3 className="mb-4 text-sm font-medium tracking-wide">Engineering practices</h3>
        <ul className="flex flex-wrap gap-2">
          {practices.map((p) => (
            <li
              key={p}
              className="rounded-full border border-dashed border-border px-3.5 py-1.5 text-sm text-muted-foreground"
            >
              {p}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
