"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  artistTable,
  majorScale,
  references,
  regions,
  salesTable,
  teresaTeng,
  themeBlocks,
  type Language,
  type RegionKey,
  uiCopy,
  yonanukiScale,
} from "@/data/sayuri-content";
import { ArtistTable } from "./ArtistTable";
import { HankoStamp } from "./HankoStamp";
import { JapanMap } from "./JapanMap";
import { MarkdownWithCitations } from "./MarkdownWithCitations";
import { ReferencesFooter } from "./ReferencesFooter";
import { RegionPanel } from "./RegionPanel";
import { SalesTable } from "./SalesTable";
import { SplashScreen } from "./SplashScreen";
import { TeresaTengToggle } from "./TeresaTengToggle";
import { YonanukiLab } from "./YonanukiLab";
import { SayoriRecommendations } from "./SayoriRecommendations";

const languageOrder: Language[] = ["zh", "en", "jp"];

/** Short kanji label for the Hanko stamp on each region card */
const REGION_HANKO: Record<string, string> = {
  hokkaido: "北海", tohoku: "東北", aomori: "青森",
  tokyo: "東京", osaka: "大阪", chugoku: "山陽",
  shikoku: "四国", kyushu: "九州", okinawa: "沖縄",
};

export function SayuriApp() {
  const [language, setLanguage] = useState<Language>("zh");
  const [selectedRegion, setSelectedRegion] = useState<RegionKey | null>(null);
  const [unlocked, setUnlocked] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [hankoVisible, setHankoVisible] = useState<Record<string, boolean>>({});
  const observerRef = useRef<IntersectionObserver | null>(null);

  const copy = useMemo(() => uiCopy[language], [language]);

  // ── Scroll progress bar ───────────────────────────────────────────────────
  useEffect(() => {
    const onScroll = () => {
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(docH > 0 ? (window.scrollY / docH) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── IntersectionObserver for Hanko stamps ─────────────────────────────────
  useEffect(() => {
    observerRef.current?.disconnect();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-hanko-id");
            if (id) setHankoVisible((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.25 }
    );
    regions.forEach((r) => {
      const el = document.getElementById(`region-${r.id}`);
      if (el) observerRef.current?.observe(el);
    });
    themeBlocks.forEach((b) => {
      const el = document.getElementById(`theme-${b.id}`);
      if (el) observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--sayuri-paper)] text-[var(--sayuri-ink)]">
      {/* ── Splash gate ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {!unlocked && (
          <SplashScreen
            key="splash"
            onUnlock={() => {
              setUnlocked(true);
            }}
          />
        )}
      </AnimatePresence>

      {/* ── Scroll progress bar ─────────────────────────────────────────── */}
      <div
        className="fixed top-0 left-0 z-40 h-0.5 bg-[var(--sayuri-primary)] transition-none"
        style={{ width: `${scrollPct}%` }}
        aria-hidden="true"
      />

      {/* ── Sticky header ─────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-30 border-b border-[var(--sayuri-border)] bg-[var(--sayuri-paper)]/95 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-[1120px] items-center justify-between px-4 py-3 sm:px-8">
          <div>
            <h1 className="font-serif text-base leading-tight sm:text-lg">
              {copy.appTitle}
            </h1>
            <p className="font-mono text-[10px] tracking-[0.12em] text-[var(--sayuri-muted)] mt-0.5">
              {copy.appSubtitle}
            </p>
          </div>
          <div className="grid h-9 w-[168px] grid-cols-3 overflow-hidden border border-[var(--sayuri-border)] font-mono text-xs uppercase tracking-[0.14em]">
            {languageOrder.map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLanguage(lang)}
                className="transition-colors"
                style={{
                  background: language === lang ? "var(--sayuri-primary)" : "transparent",
                  color: language === lang ? "var(--sayuri-ink)" : "var(--sayuri-muted)",
                }}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1120px] space-y-12 px-4 py-10 sm:px-8">

        {/* ── §1 Map (hero, full-width) ───────────────────────────────────── */}
        <section>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--sayuri-muted)]">
            {copy.mapTitle}
          </p>
          <p className="mt-1 mb-5 text-sm text-[var(--sayuri-muted)]">{copy.mapHint}</p>
          <div className="paper-layer !p-0 overflow-hidden">
            <JapanMap
              regions={regions}
              selectedRegion={selectedRegion}
              onSelect={(id) => {
                setSelectedRegion(id);
              }}
            />
          </div>
        </section>

        {/* Region bottom-sheet (all screen sizes in v2) */}
        <RegionPanel
          panelTitle={copy.panelTitle}
          panelEmpty={copy.panelEmpty}
          closeLabel={copy.closeLabel}
          regions={regions}
          selectedRegion={selectedRegion}
          onClose={() => setSelectedRegion(null)}
        />

        {/* ── §2 Region Bento Grid (9 cards, Layered Paper) ───────────────── */}
        <section>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--sayuri-muted)] mb-6">
            Regional Landscape
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((region) => (
              <motion.article
                key={region.id}
                id={`region-${region.id}`}
                data-hanko-id={region.id}
                className="relative cursor-pointer bg-[var(--sayuri-surface)] border border-[var(--sayuri-border)] p-5"
                style={{
                  boxShadow: "2px 2px 0 var(--sayuri-border), 4px 4px 0 rgba(229,231,235,0.55)",
                  willChange: "transform",
                }}
                whileHover={{
                  y: -2,
                  x: -2,
                  boxShadow: "4px 4px 0 var(--sayuri-border), 8px 8px 0 rgba(229,231,235,0.55)",
                }}
                transition={{ type: "tween", ease: "easeOut", duration: 0.14 }}
                onClick={() => {
                  setSelectedRegion(region.id);
                }}
              >
                <HankoStamp
                  label={REGION_HANKO[region.id] ?? region.id}
                  visible={!!hankoVisible[region.id]}
                  className="absolute top-3 right-3"
                />
                <h3 className="font-serif text-lg leading-snug text-[var(--sayuri-ink)]">
                  {region.title}
                </h3>
                <p className="mt-1 font-mono text-[11px] text-[var(--sayuri-muted)]">
                  {region.subtitle}
                </p>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ── §3 Thematic Chapters (Vertical Storytelling) ───────────────── */}
        <section className="space-y-16">
          {themeBlocks.map((block, i) => (
            <article
              key={block.id}
              id={`theme-${block.id}`}
              data-hanko-id={`chapter-${block.id}`}
              className="paper-layer relative"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <span
                    className="font-mono text-5xl font-bold leading-none select-none"
                    style={{ color: "var(--sayuri-primary)" }}
                  >
                    0{i + 1}
                  </span>
                  <h2 className="font-serif mt-2 text-2xl leading-tight text-[var(--sayuri-ink)] sm:text-3xl">
                    {copy.categories[block.id]}
                  </h2>
                </div>
                <HankoStamp
                  label={copy.categories[block.id]}
                  visible={!!hankoVisible[`chapter-${block.id}`]}
                  className="mt-1 shrink-0"
                />
              </div>
              <MarkdownWithCitations
                markdown={block.markdown}
                className="mt-6 font-serif text-[var(--sayuri-ink)]"
              />
            </article>
          ))}
        </section>

        {/* ── §4 Artist Table ─────────────────────────────────────────────── */}
        <ArtistTable title={copy.artistsTitle} rows={artistTable} />

        {/* ── §5 Sales Table ──────────────────────────────────────────────── */}
        <SalesTable title={copy.salesTitle} rows={salesTable} />

        {/* ── §6 Teresa Teng Toggle ───────────────────────────────────────── */}
        <TeresaTengToggle
          title={copy.teresaTitle}
          kobushiLabel={copy.kobushiLabel}
          teresaLabel={copy.teresaTengLabel}
          body={teresaTeng[language]}
        />

        {/* ── §7 Yonanuki Lab ─────────────────────────────────────────────── */}
        <YonanukiLab
          title={copy.yonanukiTitle}
          body={copy.yonanukiBody}
          westernMajor={copy.westernMajor}
          yonanukiScale={copy.yonanukiScale}
          majorScale={majorScale}
          yonanuki={yonanukiScale}
        />

        {/* ── §8 Terms callout ────────────────────────────────────────────── */}
        <section className="paper-layer">
          <p className="font-serif text-[var(--sayuri-ink)]">{copy.terms}</p>
        </section>

        {/* ── Easter Egg: Sayori's Recommendations ───────────────────────── */}
        <SayoriRecommendations />

        {/* ── §9 References ───────────────────────────────────────────────── */}
        <ReferencesFooter title={copy.referencesTitle} references={references} />

      </div>
    </div>
  );
}
