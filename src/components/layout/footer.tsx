import { ArrowUp } from "lucide-react";
import { navItems, profile } from "@/data/portfolio";
import { SocialLinks } from "@/components/shared/social-links";
import { CurrentYear } from "./current-year";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.4fr_1fr_auto] lg:px-8">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{profile.tagline}</p>
          <SocialLinks className="mt-6" />
        </div>

        <nav aria-label="Footer">
          <h2 className="mb-4 font-mono text-xs tracking-wider text-muted-foreground uppercase">Navigate</h2>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`/#${item.id}`}
                  className="relative text-muted-foreground transition-colors after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform hover:text-foreground hover:after:scale-x-100"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:text-right">
          <a
            href="#top"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2.5 text-sm text-muted-foreground transition-colors hover:border-brand/50 hover:text-foreground"
          >
            Back to top
            <ArrowUp className="size-4 transition-transform group-hover:-translate-y-0.5" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>
            © <CurrentYear /> {profile.name}. All rights reserved.
          </p>
          <p>Built with Next.js, TypeScript & Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
