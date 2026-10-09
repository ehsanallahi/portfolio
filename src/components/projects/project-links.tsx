import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SiGoogleplay } from "react-icons/si";
import type { Project } from "@/types/portfolio";
import { ctaVariants } from "@/components/shared/cta";
import { cn } from "@/lib/utils";

/** Live and source links — rendered only when they actually exist. */
export function ProjectLinks({
  project,
  size = "sm",
  className,
}: {
  project: Project;
  size?: "sm" | "md";
  className?: string;
}) {
  const { live, repo, playStore } = project.links;
  if (!live && !repo && !playStore) return null;
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {playStore && (
        <a
          href={playStore}
          target="_blank"
          rel="noopener noreferrer"
          className={ctaVariants({ variant: "outline", size })}
        >
          <SiGoogleplay aria-hidden="true" />
          Google Play
          <span className="sr-only">listing for {project.title} (opens in a new tab)</span>
        </a>
      )}
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className={ctaVariants({ variant: "outline", size })}
        >
          Live site
          <ArrowUpRight className="group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" aria-hidden="true" />
          <span className="sr-only">for {project.title} (opens in a new tab)</span>
        </a>
      )}
      {repo && (
        <a
          href={repo}
          target="_blank"
          rel="noopener noreferrer"
          className={ctaVariants({ variant: "outline", size })}
        >
          <FaGithub aria-hidden="true" />
          Source
          <span className="sr-only">code for {project.title} (opens in a new tab)</span>
        </a>
      )}
    </div>
  );
}
