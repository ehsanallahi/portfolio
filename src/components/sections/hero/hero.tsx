import { ArrowDown, ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import { profile } from "@/data/portfolio";
import { ctaVariants } from "@/components/shared/cta";
import { SocialLinks } from "@/components/shared/social-links";
import { TechIcon } from "@/components/shared/tech-icon";
import { CodeWindow } from "./code-window";
import { RotatingRoles } from "./rotating-roles";

/**
 * Entrance is CSS-driven (`animate-fade-up`) so it starts on first paint,
 * before hydration. This only staggers the delay.
 */
const enter = (step: number) => ({
  style: { animationDelay: `${80 + step * 80}ms` },
});

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="home-title"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20 md:pt-32"
    >
      {/* Background: masked grid + two soft glows */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,#000_40%,transparent_100%)]" />
        <div className="animate-float absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-brand/15 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-0 h-[360px] w-[420px] rounded-full bg-brand-2/10 blur-[110px]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:gap-10 lg:px-8">
        <div className="min-w-0">
          <p
            {...enter(0)}
            className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 py-1.5 pr-4 pl-2 text-xs font-medium text-muted-foreground backdrop-blur sm:text-sm"
          >
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60" />
              <span className="relative inline-flex size-2.5 rounded-full bg-success" />
            </span>
            {profile.availability}
          </p>

          <h1 id="home-title" className="font-semibold tracking-tight">
            <span {...enter(1)} className="animate-fade-up block text-lg text-muted-foreground sm:text-xl">
              Hi, I&apos;m
            </span>
            <span
              {...enter(2)}
              className="animate-fade-up mt-1 block text-[clamp(2.6rem,8vw,4.75rem)] leading-[1.02]"
            >
              {profile.name}
            </span>
            <span
              {...enter(3)}
              className="animate-fade-up mt-3 block text-[clamp(1.35rem,4vw,2.25rem)] leading-tight"
            >
              <RotatingRoles roles={profile.roles} />
            </span>
          </h1>

          <p
            {...enter(4)}
            className="animate-fade-up mt-6 max-w-xl text-base text-pretty text-muted-foreground sm:text-lg"
          >
            {profile.intro}
          </p>

          <div {...enter(5)} className="animate-fade-up mt-8 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap">
            <a href="#projects" className={ctaVariants({ variant: "primary", size: "lg" })}>
              View My Projects
              <ArrowRight className="group-hover/cta:translate-x-1" aria-hidden="true" />
            </a>
            <a href="#contact" className={ctaVariants({ variant: "outline", size: "lg" })}>
              Contact Me
            </a>
            <a
              href={profile.resumePath}
              download="Ehsan_Allahi_Resume.pdf"
              className={ctaVariants({ variant: "ghost", size: "lg" })}
            >
              <Download className="group-hover/cta:translate-y-0.5" aria-hidden="true" />
              Download Resume
            </a>
          </div>

          <div {...enter(6)} className="animate-fade-up mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <SocialLinks />
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4" aria-hidden="true" />
              {profile.location}
            </span>
          </div>
        </div>

        {/* Visual */}
        <div {...enter(4)} className="animate-fade-up relative mx-auto hidden w-full max-w-md sm:block lg:max-w-none">
          <div aria-hidden="true" className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-brand/20 via-transparent to-brand-2/20 blur-2xl" />
          <CodeWindow />

          <div
            aria-hidden="true"
            className="animate-float absolute -top-5 -right-2 hidden items-center gap-2 rounded-xl border border-border bg-popover/90 px-3 py-2 text-xs font-medium shadow-xl backdrop-blur md:flex"
          >
            <TechIcon name="gemini" className="size-4 text-[#8E75FF]" />
            Gemini-powered AI
          </div>
          <div
            aria-hidden="true"
            className="animate-float absolute -bottom-6 -left-4 hidden items-center gap-2 rounded-xl border border-border bg-popover/90 px-3 py-2 text-xs font-medium shadow-xl backdrop-blur md:flex"
            style={{ animationDelay: "-3.5s" }}
          >
            <Sparkles className="size-4 text-brand" />
            10-role RBAC · Casbin
          </div>
          <div
            aria-hidden="true"
            className="absolute -right-3 -bottom-7 hidden gap-1.5 rounded-xl border border-border bg-popover/90 p-2 shadow-xl backdrop-blur lg:flex"
          >
            {(["nextjs", "flutter", "nodejs", "postgresql"] as const).map((t) => (
              <span key={t} className="grid size-8 place-items-center rounded-lg bg-muted">
                <TechIcon name={t} className="size-4" />
              </span>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="group absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground md:flex"
      >
        <span className="flex h-9 w-5.5 justify-center rounded-full border border-border pt-1.5">
          <ArrowDown className="size-3 animate-bounce" aria-hidden="true" />
        </span>
        Scroll
      </a>
    </section>
  );
}
