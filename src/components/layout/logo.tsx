import Link from "next/link";
import { profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Logo({ className, onClick }: { className?: string; onClick?: () => void }) {
  return (
    <Link
      href="/#home"
      onClick={onClick}
      aria-label={`${profile.name} — home`}
      className={cn("group inline-flex items-center gap-2.5 rounded-full", className)}
    >
      <span
        aria-hidden="true"
        className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand-2 font-mono text-sm font-bold text-background shadow-lg shadow-brand/20 transition-transform duration-300 group-hover:rotate-[-6deg]"
      >
        {profile.initials}
      </span>
      <span className="hidden font-semibold tracking-tight min-[360px]:inline">{profile.name}</span>
    </Link>
  );
}
