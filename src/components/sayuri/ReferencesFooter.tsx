import type { ReferenceItem } from "@/data/sayuri-content";

type Props = {
  title: string;
  references: ReferenceItem[];
};

export function ReferencesFooter({ title, references }: Props) {
  return (
    <footer id="references" className="border border-[var(--sayuri-border)] bg-white p-6">
      <h2 className="font-serif text-2xl text-[var(--sayuri-ink)]">{title}</h2>
      <ol className="mt-4 space-y-4">
        {references.map((ref) => (
          <li key={ref.id} id={`ref-${ref.id}`} className="border-t border-[var(--sayuri-border)] pt-3">
            <p className="font-serif text-[var(--sayuri-ink)]">
              [{ref.id}] {ref.title}
            </p>
            <p className="mt-1 text-xs text-[var(--sayuri-muted)]">
              {ref.retrievedDate} | {ref.source}
            </p>
            <a
              href={ref.url}
              target="_blank"
              rel="noreferrer"
              className="mt-1 inline-block text-sm text-[var(--sayuri-blue)] underline underline-offset-2"
            >
              {ref.url}
            </a>
          </li>
        ))}
      </ol>
    </footer>
  );
}
