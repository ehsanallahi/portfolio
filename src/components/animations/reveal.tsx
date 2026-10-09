"use client";

import { motion, type Variants } from "motion/react";
import type { ComponentProps } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

type RevealProps = ComponentProps<typeof motion.div> & {
  delay?: number;
};

/** Fades and lifts its children into view once, when scrolled into the viewport. */
export function Reveal({ delay = 0, children, ...props }: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      variants={{
        hidden: fadeUp.hidden,
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease, delay },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Staggers direct `StaggerItem` children as the group enters the viewport. */
export function Stagger({
  stagger = 0.08,
  children,
  ...props
}: ComponentProps<typeof motion.div> & { stagger?: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger } } }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem(props: ComponentProps<typeof motion.div>) {
  return <motion.div variants={fadeUp} {...props} />;
}
