"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Briefcase, CalendarDays, MapPin } from "lucide-react";
import { experience } from "@/data/experience";
import { Reveal } from "@/components/animations/reveal";
import { Section, SectionHeading } from "@/components/shared/section-heading";

export function ExperienceSection() {
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 75%", "end 60%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <Section id="experience">
      <SectionHeading
        id="experience-title"
        eyebrow="Experience"
        title={
          <>
            Where I&apos;ve <span className="text-gradient">built and shipped</span>
          </>
        }
        description="Professional roles building production web applications in Agile teams."
      />

      <div ref={listRef} className="relative ml-2 sm:ml-4">
        {/* Rail + scroll-linked progress fill */}
        <span aria-hidden="true" className="absolute top-2 bottom-2 left-0 w-px bg-border" />
        <motion.span
          aria-hidden="true"
          style={{ scaleY: progress }}
          className="absolute top-2 bottom-2 left-0 w-px origin-top bg-gradient-to-b from-brand to-brand-2"
        />

        <ol className="space-y-10 md:space-y-14">

        {experience.map((job, i) => (
          <li key={`${job.company}-${job.start}`} className="relative pl-8 sm:pl-12">
            <span
              aria-hidden="true"
              className="absolute top-7 left-0 grid size-4 -translate-x-1/2 place-items-center rounded-full border border-brand/50 bg-background"
            >
              <span className="size-1.5 rounded-full bg-brand" />
            </span>

            <Reveal delay={i * 0.05}>
              <article className="gradient-border group rounded-3xl border border-border bg-card/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 sm:p-8">
                <header className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{job.role}</h3>
                    <p className="mt-1 flex items-center gap-2 text-base font-medium text-brand">
                      <Briefcase className="size-4" aria-hidden="true" />
                      {job.company}
                      <span className="rounded-full border border-border px-2 py-0.5 text-xs font-normal text-muted-foreground">
                        {job.type}
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground md:flex-col md:items-end">
                    <span className="inline-flex items-center gap-1.5 font-mono text-[13px]">
                      <CalendarDays className="size-4" aria-hidden="true" />
                      <time>{job.start}</time> – <time>{job.end}</time>
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="size-4" aria-hidden="true" />
                      {job.location}
                    </span>
                  </div>
                </header>

                <p className="mt-5 text-pretty text-foreground/90">{job.summary}</p>

                <ul className="mt-5 space-y-3">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
                      <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand-2" />
                      {h}
                    </li>
                  ))}
                </ul>

                <ul aria-label="Technologies used" className="mt-6 flex flex-wrap gap-2">
                  {job.stack.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-muted px-3 py-1 font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
        </ol>
      </div>
    </Section>
  );
}
