"use client";

import type { ArtistRow } from "@/data/sayuri-content";

type Props = {
  title: string;
  rows: ArtistRow[];
};

const HEADERS = ["歌手名稱", "出身地", "主要地理脈絡", "音樂風格特徵"];

export function ArtistTable({ title, rows }: Props) {
  return (
    <section className="border border-[var(--sayuri-border)] bg-white p-6">
      <p className="text-xs uppercase tracking-[0.18em] text-[var(--sayuri-muted)]">Artists</p>
      <h2 className="mt-1 font-serif text-2xl text-[var(--sayuri-ink)]">{title}</h2>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[540px] border-collapse text-sm">
          <thead>
            <tr>
              {HEADERS.map((h) => (
                <th
                  key={h}
                  className="border-b border-[var(--sayuri-border)] pb-2 text-left text-xs uppercase tracking-[0.13em] text-[var(--sayuri-muted)] font-normal pr-5"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.name}
                className="border-b border-[var(--sayuri-border)] last:border-b-0 hover:bg-[var(--sayuri-paper)] transition-colors"
              >
                <td className="py-3 pr-5 font-serif font-semibold text-[var(--sayuri-ink)]">
                  {row.name}
                </td>
                <td className="py-3 pr-5 text-[var(--sayuri-ink)]">{row.origin}</td>
                <td className="py-3 pr-5 text-[var(--sayuri-ink)]">{row.geoContext}</td>
                <td className="py-3 text-[var(--sayuri-muted)]">
                  {row.styleNote}
                  {row.refs.length > 0 && (
                    <span className="ml-1 text-xs text-[var(--sayuri-blue)]">
                      {row.refs.map((r) => (
                        <a key={r} href={`#ref-${r}`} className="hover:underline">
                          [{r}]
                        </a>
                      ))}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
