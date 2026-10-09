"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

/** Cycles through roles. All roles share one grid cell, so the width never shifts. */
export function RotatingRoles({ roles }: { roles: string[] }) {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % roles.length), 2800);
    return () => clearInterval(id);
  }, [roles.length, reduce]);

  return (
    <span className="relative inline-grid align-bottom">
      {/* Screen readers get the full list once instead of a live-changing value */}
      <span className="sr-only">{roles.join(", ")}</span>
      {roles.map((r) => (
        <span key={r} aria-hidden="true" className="invisible col-start-1 row-start-1">
          {r}
        </span>
      ))}
      <span aria-hidden="true" className="col-start-1 row-start-1 overflow-hidden">
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={roles[index]}
            className="text-gradient animate-gradient block"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {roles[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
