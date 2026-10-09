"use client";

import { useEffect, useRef } from "react";

/**
 * Soft radial glow that follows the pointer. Only active on devices with a
 * fine pointer and when the user hasn't asked for reduced motion. Updates a
 * CSS transform via rAF, so it never triggers layout.
 */
export function PointerGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    let frame = 0;
    function onMove(e: PointerEvent) {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el!.style.transform = `translate3d(${e.clientX - 300}px, ${e.clientY - 300}px, 0)`;
        el!.style.opacity = "1";
      });
    }
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        ref={ref}
        className="absolute top-0 left-0 size-[600px] rounded-full opacity-0 transition-opacity duration-700 will-change-transform"
        style={{ background: "radial-gradient(circle, var(--glow), transparent 65%)" }}
      />
    </div>
  );
}
