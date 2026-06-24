"use client";

import { useState, useEffect } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Returns the user's reduced-motion preference, but only AFTER hydration.
 * During SSR and the initial client render, this always returns false so that
 * Framer Motion variant expressions produce identical HTML on server and client,
 * preventing React hydration mismatches.
 */
export function useSafeReducedMotion(): boolean {
  const [mounted, setMounted] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted && !!prefersReduced;
}
