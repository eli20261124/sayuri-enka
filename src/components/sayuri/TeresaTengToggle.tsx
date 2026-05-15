"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  /** i18n section title */
  title: string;
  /** Label for the traditional Kobushi side */
  kobushiLabel: string;
  /** Label for the Teresa Teng side */
  teresaLabel: string;
  /** Body copy (already localised, supports markdown-like **bold**) */
  body: string;
};

type Side = "kobushi" | "teresa";

function renderBody(text: string) {
  // Minimal inline bold + paragraph support (no heavy markdown dependency)
  return text.split("\n\n").map((para, i) => (
    <p key={i} className="mt-3 first:mt-0 font-serif leading-8 text-[var(--sayuri-ink)]">
      {para.split(/(\*\*[^*]+\*\*)/).map((chunk, j) =>
        chunk.startsWith("**") ? (
          <strong key={j}>{chunk.replace(/\*\*/g, "")}</strong>
        ) : (
          chunk
        )
      )}
    </p>
  ));
}

export function TeresaTengToggle({ title, kobushiLabel, teresaLabel, body }: Props) {
  const [side, setSide] = useState<Side>("kobushi");

  return (
    <section className="border border-[var(--sayuri-border)] bg-white p-6">
      <p className="text-xs uppercase tracking-[0.18em] text-[var(--sayuri-red)]">Cross-Culture</p>
      <h2 className="mt-2 font-serif text-2xl sm:text-3xl text-[var(--sayuri-ink)]">{title}</h2>

      {/* Toggle pill */}
      <div className="mt-6 inline-grid h-10 grid-cols-2 overflow-hidden border border-[var(--sayuri-border)] text-xs uppercase tracking-[0.14em]">
        {(["kobushi", "teresa"] as Side[]).map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setSide(s)}
            className="relative px-5 transition-colors"
            style={{
              color: side === s ? "var(--sayuri-blue)" : "var(--sayuri-muted)",
              background: "transparent",
            }}
          >
            {side === s && (
              <motion.span
                layoutId="teresa-toggle-bg"
                className="absolute inset-0 bg-[var(--sayuri-blue-weak)]"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{s === "kobushi" ? kobushiLabel : teresaLabel}</span>
          </button>
        ))}
      </div>

      {/* Split view */}
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        {/* Kobushi side */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`kobushi-${side}`}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.4 }}
            transition={{ duration: 0.18 }}
            className="border border-[var(--sayuri-border)] p-4"
            style={{
              background: side === "kobushi" ? "var(--sayuri-blue-weak)" : "var(--sayuri-paper)",
            }}
          >
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--sayuri-muted)]">{kobushiLabel}</p>
            <p className="mt-3 font-serif leading-7 text-[var(--sayuri-ink)] text-sm">
              傳統「小節」裝飾音技法：在主旋律外加入微小音高起伏，產生哽咽、迴腸盪氣的情感效果。強韌的地域色彩，喚起切膚的鄉愁。 [1]
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="h-1 flex-1 bg-[var(--sayuri-ink)] opacity-20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[var(--sayuri-ink)]"
                  animate={{ width: side === "kobushi" ? "100%" : "0%" }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <span className="text-xs text-[var(--sayuri-muted)] font-mono">Kobushi</span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Teresa side */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={`teresa-${side}`}
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.4 }}
            transition={{ duration: 0.18 }}
            className="border border-[var(--sayuri-border)] p-4"
            style={{
              background: side === "teresa" ? "var(--sayuri-blue-weak)" : "var(--sayuri-paper)",
            }}
          >
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--sayuri-muted)]">{teresaLabel}</p>
            <p className="mt-3 font-serif leading-7 text-[var(--sayuri-ink)] text-sm">
              鄧麗君以清脆嗓音、自然轉音與克制的「小節」感，創造「柔聲演歌」——保留東亞情感語法，融入現代都會的輕盈質感。 [4]
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="h-1 flex-1 bg-[var(--sayuri-red)] opacity-20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[var(--sayuri-red)]"
                  animate={{ width: side === "teresa" ? "100%" : "0%" }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <span className="text-xs text-[var(--sayuri-muted)] font-mono">Teresa</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Body copy */}
      <div className="mt-5 max-w-4xl border-t border-[var(--sayuri-border)] pt-5">
        {renderBody(body)}
      </div>
    </section>
  );
}
