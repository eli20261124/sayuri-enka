"use client";

import { Children, Fragment, isValidElement } from "react";
import type { ReactElement } from "react";
import ReactMarkdown from "react-markdown";

type Props = {
  markdown: string;
  className?: string;
};

const citationPattern = /\[(\d+)\]/g;

function scrollToReference(id: number) {
  const target = document.getElementById(`ref-${id}`);
  if (!target) {
    return;
  }

  target.scrollIntoView({ behavior: "smooth", block: "start" });
  window.setTimeout(() => {
    window.scrollBy({ top: -96, behavior: "smooth" });
  }, 80);
}

export function MarkdownWithCitations({ markdown, className }: Props) {
  const renderCitations = (rawText: string, keyBase: string) => {
    const chunks = rawText.split(citationPattern);
    return chunks.map((chunk, idx) => {
      if (idx % 2 === 1) {
        const citationId = Number(chunk);
        return (
          <button
            key={`${keyBase}-${idx}-${citationId}`}
            type="button"
            onClick={() => scrollToReference(citationId)}
            className="align-baseline text-[0.9em] text-[var(--sayuri-red)] underline underline-offset-2 hover:text-[var(--sayuri-blue)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sayuri-blue)]"
            aria-label={`Jump to reference ${citationId}`}
          >
            [{citationId}]
          </button>
        );
      }

      return <Fragment key={`${keyBase}-${idx}`}>{chunk}</Fragment>;
    });
  };

  return (
    <div className={className}>
      <ReactMarkdown
        components={{
          p: ({ children }) => {
            return (
              <p className="mb-3 text-base leading-8">
                {Children.map(children, (child, childIndex) => {
                  if (typeof child === "string") {
                    return renderCitations(child, `c-${childIndex}`);
                  }

                  if (isValidElement(child)) {
                    const node = child as ReactElement<{ children?: unknown }>;
                    if (typeof node.props.children === "string") {
                      return (
                        <span>
                          {renderCitations(String(node.props.children), `e-${childIndex}`)}
                        </span>
                      );
                    }
                  }

                  if (
                    isValidElement(child) &&
                    child.type === "br" &&
                    typeof child.key === "string"
                  ) {
                    return (
                      <br key={`${child.key}-${childIndex}`} />
                    );
                  }

                  return child;
                })}
              </p>
            );
          },
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
