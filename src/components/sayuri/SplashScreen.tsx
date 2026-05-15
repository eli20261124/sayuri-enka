"use client";

import { motion } from "framer-motion";

type Props = {
  onUnlock: () => void;
};

/**
 * Full-screen splash gate.
 * Blocks the page until the user clicks "Enter Experience".
 * Clicking calls onUnlock() which (a) initialises the AudioContext and
 * (b) removes this overlay via AnimatePresence in SayuriApp.
 */
export function SplashScreen({ onUnlock }: Props) {
  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#dfdcd6]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, pointerEvents: "none" }}
      transition={{ duration: 0.42, ease: "easeInOut" }}
      aria-modal="true"
      role="dialog"
      aria-label="Enter Project Sayuri"
    >
      {/* washi grain sits above content too */}
      <div className="washi-grain" aria-hidden="true" />

      <div className="relative z-10 flex max-w-[520px] flex-col items-center px-8 text-center">
        {/* Eyebrow */}
        <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-[var(--sayuri-muted)]">
          Project Sayuri
        </p>

        {/* Main title */}
        <h1 className="font-serif mt-5 text-3xl leading-snug text-[var(--sayuri-ink)] sm:text-4xl">
          《九地之歌》
          <br />
          大和靈魂的演歌版圖
        </h1>

        {/* Subtitle */}
        <p className="mt-3 font-mono text-xs tracking-[0.14em] text-[var(--sayuri-muted)]">
          戰後至昭和末期日本演歌互動研究（1945–1980）
        </p>

        {/* Thin rule */}
        <div className="mt-8 h-px w-14 bg-[var(--sayuri-border)]" />

        {/* CTA */}
        <motion.button
          type="button"
          onClick={onUnlock}
          className="mt-8 border border-[var(--sayuri-ink)] px-9 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--sayuri-ink)]"
          whileHover={{
            backgroundColor: "#FED7AA",
            borderColor: "#FED7AA",
          }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.12 }}
        >
          Enter Experience
        </motion.button>

        <p className="mt-5 font-mono text-[10px] text-[var(--sayuri-muted)]">
          互動式文獻研究
        </p>
      </div>
    </motion.div>
  );
}
