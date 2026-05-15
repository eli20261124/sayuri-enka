import type { ReferenceItem } from "@/data/sayuri-content";

type Props = {
  title: string;
  references: ReferenceItem[];
};

export function ReferencesFooter({ title, references }: Props) {
  return (
    <footer id="references" className="border-t border-[var(--sayuri-border)] pt-10 pb-8">
      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--sayuri-muted)] mb-2">
        Academic References · 學術參考文獻
      </p>
      <h2 className="font-serif text-2xl text-[var(--sayuri-ink)] mb-6">{title}</h2>
      <ol className="space-y-3">
        {references.map((ref) => (
          <li key={ref.id} className="flex gap-3">
            <span className="font-mono text-[10px] shrink-0 mt-0.5 w-6 text-right text-[var(--sayuri-muted)]">
              [{ref.id}]
            </span>
            <span className="font-serif text-sm leading-6">
              {ref.url ? (
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 text-[var(--sayuri-blue)]"
                >
                  {ref.title}
                </a>
              ) : (
                <span className="text-[var(--sayuri-ink)]">{ref.title}</span>
              )}
              {ref.source && (
                <span className="ml-1 text-[var(--sayuri-muted)]">· {ref.source} · {ref.retrievedDate}</span>
              )}
            </span>
          </li>
        ))}
      </ol>
      <div className="mt-10 h-px bg-[var(--sayuri-border)]" />
      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
        <p className="font-mono text-[10px] text-[var(--sayuri-muted)]">
          Project Sayuri · 小百合 © 2026 · 互動式演歌文化研究
        </p>
        <p className="font-serif text-[11px] text-[var(--sayuri-muted)]">
          九地之歌：大和靈魂的演歌版圖
        </p>
      </div>
    </footer>
  );
}
