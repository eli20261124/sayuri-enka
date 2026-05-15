"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  body: string;
  westernMajor: string;
  yonanukiScale: string;
  majorScale: string[];
  yonanuki: string[];
};

export function YonanukiLab({
  title,
  body,
  westernMajor,
  yonanukiScale,
  majorScale,
  yonanuki,
}: Props) {
  return (
    <section id="yonanuki-lab" className="border border-[var(--sayuri-border)] bg-white p-6">
      <p className="text-xs uppercase tracking-[0.18em] text-[var(--sayuri-blue)]">Hardcore Lab</p>
      <h2 className="mt-2 font-serif text-3xl text-[var(--sayuri-ink)]">{title}</h2>
      <p className="mt-4 max-w-4xl font-serif leading-8 text-[var(--sayuri-ink)]">{body}</p>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="border border-[var(--sayuri-border)] p-4">
          <div className="mb-4">
            <h3 className="text-sm uppercase tracking-[0.14em] text-[var(--sayuri-muted)]">{westernMajor}</h3>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {majorScale.map((note) => (
              <div key={note} className="border border-[var(--sayuri-border)] bg-[var(--sayuri-paper)] py-6 text-center text-sm">
                {note}
              </div>
            ))}
          </div>
        </div>

        <div className="border border-[var(--sayuri-border)] p-4">
          <div className="mb-4">
            <h3 className="text-sm uppercase tracking-[0.14em] text-[var(--sayuri-muted)]">{yonanukiScale}</h3>
          </div>
          <div className="grid grid-cols-7 gap-2">
            {majorScale.map((note) => {
              const removed = !yonanuki.includes(note);
              return (
                <motion.div
                  key={`yo-${note}`}
                  initial={{ opacity: 0.85 }}
                  animate={{ opacity: removed ? 0.26 : 1 }}
                  transition={{ duration: 0.2 }}
                  className="border border-[var(--sayuri-border)] py-6 text-center text-sm"
                  style={{
                    background: removed ? "transparent" : "var(--sayuri-blue-weak)",
                    textDecoration: removed ? "line-through" : "none",
                  }}
                >
                  {note}
                </motion.div>
              );
            })}
          </div>
          <p className="mt-3 text-xs text-[var(--sayuri-muted)]">Removed tones: Fa, Si</p>
        </div>
      </div>


    </section>
  );
}
