import {
  ArrowRight,
  Check,
  Database,
  LayoutDashboard,
  Layers,
  MonitorSmartphone,
  Plug,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { services } from "@/data/services";
import type { Service } from "@/types/portfolio";
import { Reveal, Stagger, StaggerItem } from "@/components/animations/reveal";
import { Section, SectionHeading } from "@/components/shared/section-heading";
import { ctaVariants } from "@/components/shared/cta";

const icons: Record<Service["icon"], React.ComponentType<{ className?: string }>> = {
  layers: Layers,
  layout: MonitorSmartphone,
  plug: Plug,
  dashboard: LayoutDashboard,
  sparkles: Sparkles,
  database: Database,
  smartphone: Smartphone,
};

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        id="services-title"
        eyebrow="Services"
        title={
          <>
            How I can <span className="text-gradient">help your team</span>
          </>
        }
        description="Whether you need a full product or a focused feature, I bring the same end-to-end ownership I apply to my own work."
      />

      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = icons[service.icon];
          return (
            <StaggerItem
              key={service.title}
              className="gradient-border group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card/60 p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7"
            >
              <div
                aria-hidden="true"
                className="absolute -top-16 -right-16 size-40 rounded-full bg-brand/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <span className="mb-6 grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand/20 to-brand-2/20 text-brand ring-1 ring-border transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-4deg]">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{service.description}</p>
              <ul aria-label="Deliverables" className="mt-5 space-y-2 border-t border-border pt-5 text-sm">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-center gap-2.5 text-muted-foreground">
                    <Check className="size-4 shrink-0 text-brand-2" aria-hidden="true" />
                    {d}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          );
        })}
      </Stagger>

      <Reveal className="mt-10 flex flex-col items-start justify-between gap-5 rounded-3xl border border-border bg-gradient-to-r from-brand/10 via-card/60 to-brand-2/10 p-6 sm:flex-row sm:items-center sm:p-8">
        <div>
          <p className="text-lg font-semibold tracking-tight">Have a project in mind?</p>
          <p className="mt-1 text-muted-foreground">Tell me what you&apos;re building — I&apos;ll reply with how I can help.</p>
        </div>
        <a href="#contact" className={ctaVariants({ variant: "primary", size: "lg" })}>
          Start a conversation
          <ArrowRight className="group-hover/cta:translate-x-1" aria-hidden="true" />
        </a>
      </Reveal>
    </Section>
  );
}
