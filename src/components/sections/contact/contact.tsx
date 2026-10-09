import { ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal } from "@/components/animations/reveal";
import { Section, SectionHeading } from "@/components/shared/section-heading";
import { SocialIcon } from "@/components/shared/social-icon";
import { ContactForm } from "./contact-form";

export function Contact() {
  const channels = [
    ...profile.socials,
    ...(profile.phone
      ? [
          {
            key: "phone" as const,
            label: "Phone",
            handle: profile.phone,
            href: `tel:${profile.phone.replace(/\s/g, "")}`,
          },
        ]
      : []),
  ];

  return (
    <Section id="contact">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[500px] bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,var(--glow),transparent)]"
      />
      <SectionHeading
        id="contact-title"
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build <span className="text-gradient">something great</span>
          </>
        }
        description="Hiring for a full-stack role, or need a developer for your next product? Send a message and I'll get back to you."
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-12 [&>*]:min-w-0">
        <Reveal className="space-y-4">
          <ul className="space-y-3">
            {channels.map((c) => {
              const external = c.href.startsWith("http");
              return (
                <li key={c.key}>
                  <a
                    href={c.href}
                    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                    className="gradient-border group flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-4 transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-muted text-brand transition-colors group-hover:bg-brand group-hover:text-background">
                      <SocialIcon name={c.key} className="size-[18px]" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs text-muted-foreground">{c.label}</span>
                      <span className="block truncate text-sm font-medium sm:text-base">{c.handle}</span>
                    </span>
                    <ArrowUpRight
                      className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground"
                      aria-hidden="true"
                    />
                    {external && <span className="sr-only">(opens in a new tab)</span>}
                  </a>
                </li>
              );
            })}
          </ul>
          <p className="flex items-center gap-2 px-1 pt-2 text-sm text-muted-foreground">
            <MapPin className="size-4" aria-hidden="true" />
            Based in {profile.location}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="rounded-3xl border border-border bg-card/70 p-5 shadow-xl shadow-black/5 backdrop-blur sm:p-8">
          <h3 className="mb-6 text-lg font-semibold tracking-tight">Send a message</h3>
          <ContactForm />
        </Reveal>
      </div>
    </Section>
  );
}
