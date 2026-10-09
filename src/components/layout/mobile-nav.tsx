"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Download, Mail, X } from "lucide-react";
import { navItems, profile } from "@/data/portfolio";
import { ctaVariants } from "@/components/shared/cta";
import { SocialLinks } from "@/components/shared/social-links";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";

const noop = () => () => {};

const ease = [0.22, 1, 0.36, 1] as const;

export function MobileNav({ isHome, active }: { isHome: boolean; active: string | null }) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);
  // true only on the client, without a hydration mismatch
  const mounted = useSyncExternalStore(noop, () => true, () => false);

  // Scroll lock, Escape to close, focus trap, and focus restore
  useEffect(() => {
    if (!open) return;
    const toggle = toggleRef.current;
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";

    const focusables = () =>
      Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? [],
      );
    focusables()[1]?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;
      const items = focusables();
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", onKey);
      toggle?.focus({ preventScroll: true });
    };
  }, [open]);

  // Close if the viewport grows to desktop size
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <button
        ref={toggleRef}
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="grid size-10 place-items-center rounded-full border border-border bg-card/50 backdrop-blur transition-colors hover:border-brand/50 lg:hidden"
      >
        <span aria-hidden="true" className="relative block h-3 w-[18px]">
          <span
            className={cn(
              "absolute left-0 h-[1.5px] w-full rounded-full bg-foreground transition-all duration-300",
              open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0",
            )}
          />
          <span
            className={cn(
              "absolute left-0 h-[1.5px] w-full rounded-full bg-foreground transition-all duration-300",
              open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0",
            )}
          />
        </span>
      </button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                key="mobile-menu"
                className="fixed inset-0 z-[60] lg:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.25, delay: 0.1 } }}
              >
                <button
                  type="button"
                  tabIndex={-1}
                  aria-hidden="true"
                  onClick={close}
                  className="absolute inset-0 bg-background/60 backdrop-blur-md"
                />
                <motion.div
                  ref={panelRef}
                  id="mobile-menu"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Site navigation"
                  className="absolute inset-x-3 top-3 flex max-h-[calc(100dvh-1.5rem)] flex-col overflow-y-auto rounded-3xl border border-border bg-popover/95 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl"
                  initial={{ y: -24, opacity: 0, scale: 0.98 }}
                  animate={{ y: 0, opacity: 1, scale: 1, transition: { duration: 0.45, ease } }}
                  exit={{ y: -16, opacity: 0, scale: 0.98, transition: { duration: 0.25 } }}
                >
                  <div className="mb-4 flex items-center justify-between pl-1">
                    <Logo onClick={close} />
                    <button
                      type="button"
                      onClick={close}
                      aria-label="Close menu"
                      className="grid size-10 place-items-center rounded-full border border-border bg-card/60 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <X className="size-[18px]" aria-hidden="true" />
                    </button>
                  </div>
                  <nav aria-label="Mobile">
                    <motion.ul
                      className="flex flex-col"
                      initial="hidden"
                      animate="show"
                      variants={{ show: { transition: { staggerChildren: 0.045, delayChildren: 0.1 } } }}
                    >
                      {navItems.map((item, i) => {
                        const isActive = active === item.id;
                        return (
                          <motion.li
                            key={item.id}
                            variants={{
                              hidden: { opacity: 0, x: -12 },
                              show: { opacity: 1, x: 0, transition: { duration: 0.4, ease } },
                            }}
                          >
                            <a
                              href={isHome ? `#${item.id}` : `/#${item.id}`}
                              onClick={close}
                              aria-current={isActive ? "location" : undefined}
                              className={cn(
                                "group flex items-center justify-between rounded-2xl px-3 py-3.5 text-2xl font-medium tracking-tight transition-colors hover:bg-muted",
                                isActive ? "text-foreground" : "text-muted-foreground",
                              )}
                            >
                              <span className="flex items-baseline gap-4">
                                <span className="font-mono text-xs text-brand" aria-hidden="true">
                                  {String(i + 1).padStart(2, "0")}
                                </span>
                                {item.label}
                              </span>
                              <ArrowUpRight
                                aria-hidden="true"
                                className="size-5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100"
                              />
                            </a>
                          </motion.li>
                        );
                      })}
                    </motion.ul>
                  </nav>

                  <motion.div
                    className="mt-6 grid gap-3 border-t border-border pt-6 sm:grid-cols-2"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.35, duration: 0.4 } }}
                  >
                    <a
                      href={profile.resumePath}
                      download="Ehsan_Allahi_Resume.pdf"
                      className={ctaVariants({ variant: "outline", size: "lg" })}
                    >
                      <Download aria-hidden="true" /> Download Resume
                    </a>
                    <a
                      href={isHome ? "#contact" : "/#contact"}
                      onClick={close}
                      className={ctaVariants({ variant: "primary", size: "lg" })}
                    >
                      <Mail aria-hidden="true" /> Contact Me
                    </a>
                  </motion.div>
                  <SocialLinks className="mt-6 justify-center" />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </>
  );
}
