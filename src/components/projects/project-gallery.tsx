import Image from "next/image";
import type { ProjectScreen } from "@/types/portfolio";
import { Stagger, StaggerItem } from "@/components/animations/reveal";
import { cn } from "@/lib/utils";

/** Case-study screens, each shown in a phone or browser frame. */
export function ProjectGallery({ screens }: { screens: ProjectScreen[] }) {
  const mobileOnly = screens.every((s) => s.frame === "mobile");
  return (
    <Stagger
      className={cn(
        "grid gap-8",
        mobileOnly
          ? screens.length === 4
            ? "grid-cols-1 min-[480px]:grid-cols-2 lg:grid-cols-4"
            : "grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3"
          : "md:grid-cols-2",
      )}
    >
      {screens.map((screen) => (
        <StaggerItem key={screen.src} className={cn(screen.frame === "web" && "md:col-span-2")}>
          <figure className="group">
            {screen.frame === "mobile" ? (
              <div className="mx-auto w-full max-w-[280px] rounded-[2.4rem] bg-[#0d1312] p-2 shadow-2xl shadow-black/25 ring-1 ring-white/10 transition-transform duration-500 group-hover:-translate-y-1.5">
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  width={780}
                  height={1688}
                  sizes="280px"
                  className="h-auto w-full rounded-[2rem]"
                />
              </div>
            ) : (
              <div className="overflow-hidden rounded-2xl border border-border shadow-2xl shadow-black/20">
                <div className="flex items-center gap-1.5 border-b border-border bg-muted px-4 py-2.5" aria-hidden="true">
                  <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="size-2.5 rounded-full bg-[#febc2e]" />
                  <span className="size-2.5 rounded-full bg-[#28c840]" />
                </div>
                <Image src={screen.src} alt={screen.alt} width={1600} height={1000} sizes="(min-width: 1024px) 960px, 100vw" className="h-auto w-full" />
              </div>
            )}
            <figcaption className="mt-4 text-center text-sm text-muted-foreground">{screen.caption}</figcaption>
          </figure>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
