"use client";

import type { SalesRow } from "@/data/sayuri-content";

type Props = {
  title: string;
  rows: SalesRow[];
};

const HEADERS = ["年份", "歌曲名稱", "歌手", "年度排名 / 銷量指標"];

export function SalesTable({ title, rows }: Props) {
  return (
    <section className="border border-[var(--sayuri-border)] bg-white p-6">
      <p className="text-xs uppercase tracking-[0.18em] text-[var(--sayuri-muted)]">Industry</p>
      <h2 className="mt-1 font-serif text-2xl text-[var(--sayuri-ink)]">{title}</h2>
      <p className="mt-2 text-xs text-[var(--sayuri-muted)]">
        1970 年代末演歌單曲銷量時常突破百萬，並非僅為中老年受眾——而是全民性的影響力指標。
      </p>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[480px] border-collapse text-sm">
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
            {rows.map((row, idx) => (
              <tr
                key={idx}
                className="border-b border-[var(--sayuri-border)] last:border-b-0 hover:bg-[var(--sayuri-paper)] transition-colors"
              >
                <td className="py-3 pr-5 font-mono text-[var(--sayuri-muted)] text-xs">{row.year}</td>
                <td className="py-3 pr-5 font-serif font-semibold text-[var(--sayuri-ink)]">
                  {row.title}
                </td>
                <td className="py-3 pr-5 text-[var(--sayuri-ink)]">{row.artist}</td>
                <td className="py-3 text-[var(--sayuri-muted)]">
                  {row.rank}
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

      <p className="mt-3 text-xs text-[var(--sayuri-muted)]">
        資料來源：
        <a href="#ref-1" className="text-[var(--sayuri-blue)] hover:underline">[1]</a>
      </p>
    </section>
  );
}
