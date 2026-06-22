"use client";

import { useReducedMotion } from "framer-motion";

export function AmbientBackground() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      <div className="ambient-base" />

      <div className={`ambient-orb ambient-orb-1${reduceMotion ? " motion-off" : ""}`} />
      <div className={`ambient-orb ambient-orb-2${reduceMotion ? " motion-off" : ""}`} />
      <div className={`ambient-orb ambient-orb-3${reduceMotion ? " motion-off" : ""}`} />

      <div className={`ambient-mesh${reduceMotion ? " motion-off" : ""}`} />
      <div className={`ambient-grid-drift${reduceMotion ? " motion-off" : ""}`} />

      <div className="ambient-vignette" />
    </div>
  );
}
