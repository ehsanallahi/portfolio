import { Award, GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { Stagger, StaggerItem } from "@/components/animations/reveal";
import { Section, SectionHeading } from "@/components/shared/section-heading";

export function Education() {
  return (
    <Section id="education" className="bg-surface/50">
      <SectionHeading
        id="education-title"
        eyebrow="Education & achievements"
        title={
          <>
            Foundations and <span className="text-gradient">recognition</span>
          </>
        }
      />

      <Stagger className="grid gap-4 md:grid-cols-2">
        {education.map((item) => {
          const Icon = item.kind === "education" ? GraduationCap : Award;
          return (
            <StaggerItem
              key={item.title}
              className="gradient-border group flex gap-5 rounded-3xl border border-border bg-card/60 p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand/20 to-brand-2/20 text-brand ring-1 ring-border">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="font-mono text-xs tracking-wider text-muted-foreground uppercase">
                  {item.period}
                </p>
                <h3 className="mt-1.5 text-lg font-semibold tracking-tight sm:text-xl">{item.title}</h3>
                <p className="mt-1 text-sm font-medium text-brand">{item.institution}</p>
                {item.detail && (
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{item.detail}</p>
                )}
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
