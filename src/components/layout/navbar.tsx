"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { Download } from "lucide-react";
import { navItems, profile } from "@/data/portfolio";
import { useActiveSection } from "@/hooks/use-active-section";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";
import { ctaVariants } from "@/components/shared/cta";
import { Logo } from "./logo";
import { MobileNav } from "./mobile-nav";
import { ThemeToggle } from "./theme-toggle";

const sectionIds = navItems.map((n) => n.id);

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const scrolled = useScrolled();
  const active = useActiveSection(sectionIds, isHome);
  const [hovered, setHovered] = useState<string | null>(null);

  const highlighted = hovered ?? active;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || !isHome
          ? "border-b border-border bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/55"
          : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
      >
        <Logo />

        <ul
          className="hidden items-center gap-1 rounded-full border border-border bg-card/40 p-1 backdrop-blur lg:flex"
          onMouseLeave={() => setHovered(null)}
        >
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id} className="relative">
                <a
                  href={isHome ? `#${item.id}` : `/#${item.id}`}
                  aria-current={isActive ? "location" : undefined}
                  onMouseEnter={() => setHovered(item.id)}
                  onFocus={() => setHovered(item.id)}
                  onBlur={() => setHovered(null)}
                  className={cn(
                    "relative z-10 block rounded-full px-3.5 py-1.5 text-sm transition-colors",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {highlighted === item.id && (
                    <motion.span
                      layoutId="nav-pill"
                      aria-hidden="true"
                      className="absolute inset-0 -z-10 rounded-full bg-muted"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={profile.resumePath}
            download="Ehsan_Allahi_Resume.pdf"
            className={cn(ctaVariants({ variant: "outline", size: "sm" }), "hidden sm:inline-flex")}
          >
            <Download className="group-hover/cta:translate-y-0.5" aria-hidden="true" />
            Resume
          </a>
          <ThemeToggle />
          <MobileNav isHome={isHome} active={active} />
        </div>
      </nav>
    </header>
  );
}
