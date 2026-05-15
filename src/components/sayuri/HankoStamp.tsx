"use client";

import { motion, AnimatePresence } from "framer-motion";

type Props = {
  /** Short label rendered inside the stamp circle */
  label: string;
  /** When true the stamp springs into view */
  visible: boolean;
  /** Optional extra Tailwind classes for positioning */
  className?: string;
};

/**
 * HankoStamp – a red circular "seal" stamp that springs in with a
 * rotated, ink-press animation when `visible` becomes true.
 * Uses mix-blend-mode: multiply so it sits over text without blocking it.
 */
export function HankoStamp({ label, visible, className = "" }: Props) {
  // Trim label to ~4 characters for the stamp face
  const face = label.replace(/[/\s]/g, "").slice(0, 4);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="hanko"
          initial={{ scale: 0.15, rotate: -22, opacity: 0 }}
          animate={{ scale: 1, rotate: -8, opacity: 1 }}
          exit={{ scale: 0.15, rotate: -22, opacity: 0 }}
          transition={{ type: "spring", stiffness: 380, damping: 22 }}
          className={`pointer-events-none select-none ${className}`}
          aria-hidden="true"
        >
          <svg
            width="86"
            height="86"
            viewBox="0 0 86 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ mixBlendMode: "multiply" }}
          >
            {/* Outer ring */}
            <circle
              cx="43"
              cy="43"
              r="40"
              stroke="var(--sayuri-red)"
              strokeWidth="3.5"
              fill="none"
            />
            {/* Inner thin ring */}
            <circle
              cx="43"
              cy="43"
              r="34"
              stroke="var(--sayuri-red)"
              strokeWidth="1.2"
              strokeDasharray="3 2"
              fill="none"
              opacity="0.55"
            />
            {/* Label text */}
            <text
              x="43"
              y="47"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="var(--sayuri-red)"
              fontSize={face.length > 2 ? "14" : "18"}
              fontFamily="'Hiragino Mincho ProN', 'Yu Mincho', serif"
              fontWeight="600"
              letterSpacing="1"
            >
              {face}
            </text>
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
