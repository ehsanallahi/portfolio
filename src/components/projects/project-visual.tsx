import Image from "next/image";
import type { Project } from "@/types/portfolio";
import { cn } from "@/lib/utils";

/**
 * Shows the project screenshot when one exists; otherwise a branded,
 * abstract app-window illustration tinted with the project's hue.
 */
export function ProjectVisual({
  project,
  className,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: {
  project: Project;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const h = project.hue;

  if (project.image) {
    return (
      <div className={cn("relative aspect-[16/10] overflow-hidden", className)}>
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`${project.title} — ${project.tagline}`}
      className={cn("relative aspect-[16/10] overflow-hidden", className)}
      style={{
        background: `radial-gradient(120% 90% at 0% 0%, oklch(0.62 0.17 ${h} / 0.45), transparent 60%),
          radial-gradient(90% 80% at 100% 100%, oklch(0.7 0.13 ${h + 60} / 0.35), transparent 60%),
          var(--surface)`,
      }}
    >
      <div className="bg-grid absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,#000,transparent)]" />

      {project.kind === "mobile" ? <PhoneMock project={project} /> : <WindowMock project={project} />}
    </div>
  );
}

function PhoneMock({ project }: { project: Project }) {
  const h = project.hue;
  return (
    <div className="absolute top-[12%] bottom-[-18%] left-1/2 aspect-[9/17] -translate-x-1/2 rounded-[1.75rem] border border-white/15 bg-background/75 p-2 shadow-2xl backdrop-blur-md transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.03]">
      <div className="mx-auto mb-2 h-1.5 w-10 rounded-full bg-foreground/15" />
      <div className="space-y-2 px-1.5">
        <p className="truncate text-xs font-semibold tracking-tight">{project.title}</p>
        <span
          className="block h-12 rounded-xl sm:h-16"
          style={{ background: `linear-gradient(135deg, oklch(0.65 0.17 ${h}), oklch(0.7 0.14 ${h + 40}))` }}
        />
        <div className="grid grid-cols-2 gap-1.5">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="h-8 rounded-lg border border-border sm:h-10"
              style={{ background: `oklch(0.65 0.15 ${h + i * 20} / ${0.22 - i * 0.04})` }}
            />
          ))}
        </div>
        <span className="block h-1.5 w-5/6 rounded-full bg-foreground/10" />
        <span className="block h-1.5 w-2/3 rounded-full bg-foreground/10" />
      </div>
    </div>
  );
}

function WindowMock({ project }: { project: Project }) {
  const h = project.hue;
  return (
    <>
      {/* Mock app window */}
      <div className="absolute inset-x-[8%] top-[14%] bottom-[-6%] rounded-t-xl border border-white/15 bg-background/70 shadow-2xl backdrop-blur-md transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.02]">
        <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
          <span className="size-2 rounded-full bg-foreground/20" />
          <span className="size-2 rounded-full bg-foreground/20" />
          <span className="size-2 rounded-full bg-foreground/20" />
          <span className="ml-3 h-2 w-1/3 rounded-full bg-foreground/10" />
        </div>
        <div className="grid h-full grid-cols-[28%_1fr] gap-3 p-3">
          <div className="space-y-2">
            {[70, 55, 80, 45, 60].map((w, i) => (
              <span
                key={i}
                className="block h-2 rounded-full"
                style={{
                  width: `${w}%`,
                  background: i === 0 ? `oklch(0.65 0.17 ${h})` : "color-mix(in oklch, var(--foreground) 10%, transparent)",
                }}
              />
            ))}
          </div>
          <div className="space-y-3">
            <p className="truncate text-sm font-semibold tracking-tight sm:text-base">{project.title}</p>
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="h-10 rounded-lg border border-border sm:h-12"
                  style={{ background: `oklch(0.65 0.15 ${h + i * 25} / ${0.22 - i * 0.05})` }}
                />
              ))}
            </div>
            <span className="block h-2 w-5/6 rounded-full bg-foreground/10" />
            <span className="block h-2 w-2/3 rounded-full bg-foreground/10" />
            <span className="block h-2 w-3/4 rounded-full bg-foreground/10" />
          </div>
        </div>
      </div>
    </>
  );
}
