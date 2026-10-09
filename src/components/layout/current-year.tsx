"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

/**
 * The year is read on the client only, so a statically prerendered page
 * never shows a stale year. The server snapshot renders nothing.
 */
export function CurrentYear() {
  const year = useSyncExternalStore(
    subscribe,
    () => new Date().getFullYear(),
    () => null,
  );
  return <span>{year}</span>;
}
