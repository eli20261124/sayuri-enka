"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { RegionContent, RegionKey } from "@/data/sayuri-content";
import { MarkdownWithCitations } from "./MarkdownWithCitations";

type Props = {
  panelTitle: string;
  panelEmpty: string;
  closeLabel: string;
  regions: RegionContent[];
  selectedRegion: RegionKey | null;
  onClose: () => void;
};

function findRegion(regions: RegionContent[], selectedRegion: RegionKey | null) {
  if (!selectedRegion) {
    return null;
  }
  return regions.find((region) => region.id === selectedRegion) ?? null;
}

export function RegionPanel({
  panelTitle,
  panelEmpty,
  closeLabel,
  regions,
  selectedRegion,
  onClose,
}: Props) {
  const region = findRegion(regions, selectedRegion);

  return (
    <>
      <AnimatePresence>
        {region && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-[rgba(43,43,43,0.28)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={onClose}
            />
            <motion.section
              className="fixed inset-x-0 bottom-0 z-50 max-h-[72vh] overflow-y-auto border-t border-[var(--sayuri-border)] bg-[var(--sayuri-paper)] p-5 will-change-transform"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ type: "tween", ease: "easeOut", duration: 0.24 }}
              style={{ transform: "translate3d(0,0,0)" }}
            >
              <div className="mx-auto mb-4 h-1.5 w-12 bg-[var(--sayuri-border)]" aria-hidden />
              <p className="mb-1 text-xs uppercase tracking-[0.18em] text-[var(--sayuri-blue)]">{panelTitle}</p>
              <h3 className="font-serif text-2xl leading-tight text-[var(--sayuri-ink)]">{region.title}</h3>
              <p className="mt-2 text-sm text-[var(--sayuri-muted)]">{region.subtitle}</p>
              <MarkdownWithCitations markdown={region.markdown} className="mt-4 font-serif text-[var(--sayuri-ink)]" />
              <button
                type="button"
                onClick={onClose}
                className="mt-4 border border-[var(--sayuri-border)] px-3 py-2 text-xs uppercase tracking-[0.14em] text-[var(--sayuri-muted)]"
              >
                {closeLabel}
              </button>
            </motion.section>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
