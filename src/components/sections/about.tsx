import { Bug, CheckCircle2, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import { about, highlights } from "@/data/portfolio";
import { Reveal, Stagger, StaggerItem } from "@/components/animations/reveal";
import { Section, SectionHeading } from "@/components/shared/section-heading";

const principleIcons = [Layers3, Bug, ShieldCheck, Sparkles];

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        id="about-title"
        eyebrow="About me"
        title={
          <>
            An engineer who owns <span className="text-gradient">the whole feature</span>
          </>
        }
      />

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="space-y-5 text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg lg:col-span-7">
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}

          <div className="pt-4">
            <h3 className="mb-4 text-sm font-medium tracking-wide text-foreground">
              What I focus on
            </h3>
            <ul className="grid gap-x-6 gap-y-3 text-[15px] sm:grid-cols-2">
              {about.focus.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden="true" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Stagger className="grid grid-cols-2 gap-3 self-start sm:gap-4 lg:col-span-5">
          {highlights.map((h) => (
            <StaggerItem
              key={h.label}
              className="gradient-border group rounded-2xl border border-border bg-card/60 p-5 backdrop-blur transition-transform duration-300 hover:-translate-y-1 sm:p-6"
            >
              <p className="text-gradient text-3xl font-semibold tracking-tight sm:text-4xl">
                {h.value}
              </p>
              <p className="mt-2 text-sm leading-snug text-muted-foreground">{h.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      <div className="mt-20">
        <Reveal>
          <h3 className="mb-6 text-xl font-semibold tracking-tight sm:text-2xl">How I work</h3>
        </Reveal>
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {about.principles.map((p, i) => {
            const Icon = principleIcons[i % principleIcons.length];
            return (
              <StaggerItem
                key={p.title}
                className="gradient-border group rounded-2xl border border-border bg-card/60 p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="mb-5 grid size-11 place-items-center rounded-xl border border-border bg-muted text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-background">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h4 className="font-semibold">{p.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </Section>
  );
}
