"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  function toggle(event: React.MouseEvent<HTMLButtonElement>) {
    const next = resolvedTheme === "dark" ? "light" : "dark";
    const apply = () => {
      const root = document.documentElement;
      root.classList.toggle("dark", next === "dark");
      root.classList.toggle("light", next === "light");
      root.style.colorScheme = next;
      flushSync(() => setTheme(next));
    };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduceMotion) {
      apply();
      return;
    }

    // Circular reveal expanding from the toggle button
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));

    document.startViewTransition(apply).ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`],
        },
        {
          duration: 550,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle colour theme"
      title="Toggle theme"
      className={cn(
        "relative grid size-10 place-items-center overflow-hidden rounded-full border border-border bg-card/50 text-muted-foreground backdrop-blur transition-colors hover:border-brand/50 hover:text-foreground",
        className,
      )}
    >
      {/* Both icons render on the server; CSS picks the right one to avoid hydration mismatch */}
      <Sun className="size-[18px] scale-0 rotate-90 transition-transform duration-500 dark:scale-100 dark:rotate-0" aria-hidden="true" />
      <Moon className="absolute size-[18px] scale-100 rotate-0 transition-transform duration-500 dark:scale-0 dark:-rotate-90" aria-hidden="true" />
    </button>
  );
}
