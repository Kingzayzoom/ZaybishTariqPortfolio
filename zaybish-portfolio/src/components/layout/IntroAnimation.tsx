"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Phase = "hidden" | "showing" | "cracking" | "done";

const CRACK_EASE = [0.65, 0, 0.15, 1] as const;

export function IntroAnimation() {
  const [phase, setPhase] = useState<Phase>("hidden");

  useEffect(() => {
    // Show the white screen + pill
    setPhase("showing");

    // Crack open after pill has been visible for ~1500ms
    const t = setTimeout(() => setPhase("cracking"), 1500);
    return () => clearTimeout(t);
  }, []);

  if (phase === "hidden" || phase === "done") return null;

  const cracking = phase === "cracking";

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">

      {/* ── Top half of white screen ── slides up on crack */}
      <motion.div
        className="absolute inset-x-0 top-0 h-1/2 bg-white"
        animate={{ y: cracking ? "-101%" : 0 }}
        transition={{ duration: 1.1, ease: CRACK_EASE }}
        onAnimationComplete={() => {
          if (cracking) setPhase("done");
        }}
      />

      {/* ── Bottom half of white screen ── slides down on crack */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-white"
        animate={{ y: cracking ? "101%" : 0 }}
        transition={{ duration: 1.1, ease: CRACK_EASE }}
      />

      {/* ── Black pill ── centered at the split seam */}
      <motion.div
        className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-black"
        style={{ borderRadius: 9999 }}
        initial={{ width: 0, height: 96, opacity: 1 }}
        animate={
          cracking
            ? { width: 480, height: 96, opacity: 0, transition: { opacity: { duration: 0.25, ease: "easeIn" } } }
            : { width: 480, height: 96, opacity: 1, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
        }
      >
        <motion.span
          className="select-none font-mono text-xl tracking-[0.28em] uppercase text-white/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: cracking ? 0 : 1 }}
          transition={{ delay: 0.35, duration: 0.35 }}
        >
          SWE Pill
        </motion.span>
      </motion.div>

      {/* ── Crack seam glow ── a subtle line at the split point */}
      <motion.div
        className="absolute inset-x-0 top-1/2 h-px -translate-y-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.08) 20%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.08) 80%, transparent)" }}
        animate={{ opacity: cracking ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />
    </div>
  );
}
