import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";
import { SocialIcon } from "./social-icon";

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {profile.socials.map((s) => {
        const external = s.href.startsWith("http");
        return (
          <li key={s.key}>
            <a
              href={s.href}
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
              aria-label={`${s.label}${external ? " (opens in a new tab)" : ""}`}
              className="grid size-11 place-items-center rounded-full border border-border bg-card/60 text-muted-foreground backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/50 hover:text-foreground"
            >
              <SocialIcon name={s.key} className="size-[18px]" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
