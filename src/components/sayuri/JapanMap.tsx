"use client";

import type { RegionContent, RegionKey } from "@/data/sayuri-content";

type Props = {
  regions: RegionContent[];
  selectedRegion: RegionKey | null;
  onSelect: (region: RegionKey) => void;
};

const markerPositions: Record<RegionKey, { x: number; y: number }> = {
  hokkaido: { x: 218, y:  88 },
  tohoku:   { x: 222, y: 255 },
  aomori:   { x: 210, y: 202 },
  tokyo:    { x: 246, y: 316 },
  osaka:    { x: 193, y: 382 },
  chugoku:  { x: 162, y: 418 },
  shikoku:  { x: 200, y: 452 },
  kyushu:   { x: 152, y: 500 },
  okinawa:  { x: 118, y: 580 },
};

export function JapanMap({ regions, selectedRegion, onSelect }: Props) {
  return (
    <div className="relative w-full">
      <svg
        viewBox="0 0 420 700"
        role="img"
        aria-label="Stylized map of Japan"
        className="h-auto w-full border border-[var(--sayuri-border)] bg-[var(--sayuri-paper)]"
      >
        <path
          d="M236 48l42 30 15 45-20 48-42 38 18 42-5 35-26 33-2 52-45 28-22 48-41 25-16 54-40 26"
          fill="none"
          stroke="var(--sayuri-ink)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />

        {regions.map((region) => {
          const pos = markerPositions[region.id];
          const active = selectedRegion === region.id;
          const color = active ? "var(--sayuri-red)" : "var(--sayuri-blue)";
          const opacity = active ? 1 : 0.82;

          return (
            <g key={region.id}>
              {/* Active pulse ring */}
              {active && (
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={22}
                  fill="none"
                  stroke={color}
                  strokeWidth="1.5"
                  opacity={0.35}
                />
              )}
              {/* Ukiyo-e region glyph */}
              {region.id === "aomori" && (
                /* Wave arcs – strait / sea motif */
                <g transform={`translate(${pos.x - 12}, ${pos.y - 12})`} opacity={opacity}>
                  <path d="M2 18 Q6 12 10 18 Q14 24 18 18" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M2 12 Q6 6 10 12 Q14 18 18 12" fill="none" stroke={color} strokeWidth="1.4" strokeLinecap="round" opacity="0.65"/>
                  <path d="M2 6 Q6 0 10 6 Q14 12 18 6" fill="none" stroke={color} strokeWidth="1" strokeLinecap="round" opacity="0.35"/>
                </g>
              )}
              {region.id === "tokyo" && (
                /* Torii gate silhouette */
                <g transform={`translate(${pos.x - 12}, ${pos.y - 14})`} opacity={opacity}>
                  <line x1="4" y1="5" x2="4" y2="24" stroke={color} strokeWidth="2" strokeLinecap="round"/>
                  <line x1="20" y1="5" x2="20" y2="24" stroke={color} strokeWidth="2" strokeLinecap="round"/>
                  <line x1="0" y1="4" x2="24" y2="4" stroke={color} strokeWidth="2.4" strokeLinecap="round"/>
                  <line x1="3" y1="10" x2="21" y2="10" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
                </g>
              )}
              {region.id === "kyushu" && (
                /* Mountain triangle – fire/volcanic motif */
                <g transform={`translate(${pos.x - 12}, ${pos.y - 13})`} opacity={opacity}>
                  <path d="M12 2 L22 22 L2 22 Z" fill="none" stroke={color} strokeWidth="1.8" strokeLinejoin="round"/>
                  <path d="M12 2 L12 22" fill="none" stroke={color} strokeWidth="1" strokeDasharray="2 2" opacity="0.5"/>
                  <line x1="2" y1="22" x2="22" y2="22" stroke={color} strokeWidth="1.5"/>
                </g>
              )}
              {region.id === "hokkaido" && (
                /* 4-arm snowflake – frontier / cold climate motif */
                <g transform={`translate(${pos.x - 12}, ${pos.y - 12})`} opacity={opacity}>
                  <line x1="12" y1="2" x2="12" y2="22" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="2" y1="12" x2="22" y2="12" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="5" y1="5" x2="19" y2="19" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
                  <line x1="19" y1="5" x2="5" y2="19" stroke={color} strokeWidth="1.2" strokeLinecap="round" opacity="0.7"/>
                  <circle cx="12" cy="12" r="2.2" fill={color}/>
                </g>
              )}
              {region.id === "tohoku" && (
                /* 2×2 rice-paddy grid – agricultural heartland */
                <g transform={`translate(${pos.x - 12}, ${pos.y - 12})`} opacity={opacity}>
                  <rect x="2" y="2" width="8" height="8" stroke={color} fill="none" strokeWidth="1.4"/>
                  <rect x="14" y="2" width="8" height="8" stroke={color} fill="none" strokeWidth="1.4"/>
                  <rect x="2" y="14" width="8" height="8" stroke={color} fill="none" strokeWidth="1.4"/>
                  <rect x="14" y="14" width="8" height="8" stroke={color} fill="none" strokeWidth="1.4"/>
                </g>
              )}
              {region.id === "osaka" && (
                /* Merchant sail – commercial port culture */
                <g transform={`translate(${pos.x - 12}, ${pos.y - 12})`} opacity={opacity}>
                  <line x1="12" y1="2" x2="12" y2="22" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M12 4 L22 16 L12 16 Z" fill="none" stroke={color} strokeWidth="1.5" strokeLinejoin="round"/>
                  <line x1="7" y1="20" x2="17" y2="20" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
                </g>
              )}
              {region.id === "chugoku" && (
                /* Anchor – Seto Inland Sea port towns */
                <g transform={`translate(${pos.x - 12}, ${pos.y - 12})`} opacity={opacity}>
                  <circle cx="12" cy="4.5" r="2.8" fill="none" stroke={color} strokeWidth="1.4"/>
                  <line x1="12" y1="7" x2="12" y2="20" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
                  <line x1="5" y1="10" x2="19" y2="10" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
                  <path d="M5 14 Q3 18 6 20" fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
                  <path d="M19 14 Q21 18 18 20" fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
                </g>
              )}
              {region.id === "shikoku" && (
                /* Concentric pilgrimage arcs + center dot */
                <g transform={`translate(${pos.x - 12}, ${pos.y - 12})`} opacity={opacity}>
                  <path d="M3 19 A11 11 0 0 1 12 1" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M5 18 A9 9 0 0 1 12 3" fill="none" stroke={color} strokeWidth="1.1" strokeLinecap="round" opacity="0.6"/>
                  <circle cx="12" cy="12" r="2" fill={color}/>
                </g>
              )}
              {region.id === "okinawa" && (
                /* Sanshin silhouette – 3-string instrument */
                <g transform={`translate(${pos.x - 12}, ${pos.y - 12})`} opacity={opacity}>
                  <ellipse cx="12" cy="16" rx="6" ry="4.5" fill="none" stroke={color} strokeWidth="1.5"/>
                  <line x1="12" y1="11" x2="12" y2="2" stroke={color} strokeWidth="1.8" strokeLinecap="round"/>
                  <line x1="9.5" y1="4" x2="9.5" y2="14" stroke={color} strokeWidth="0.9" opacity="0.7"/>
                  <line x1="12" y1="2" x2="12" y2="11" stroke={color} strokeWidth="0.9" opacity="0.7"/>
                  <line x1="14.5" y1="4" x2="14.5" y2="14" stroke={color} strokeWidth="0.9" opacity="0.7"/>
                </g>
              )}
            </g>
          );
        })}
      </svg>

      {regions.map((region) => {
        const pos = markerPositions[region.id];
        const active = selectedRegion === region.id;

        return (
          <button
            key={`btn-${region.id}`}
            type="button"
            onClick={() => onSelect(region.id)}
            aria-label={`Open ${region.title}`}
            className="absolute h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-transparent bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sayuri-blue)]"
            style={{
              left: `${(pos.x / 420) * 100}%`,
              top: `${(pos.y / 700) * 100}%`,
              outlineColor: active ? "var(--sayuri-red)" : undefined,
            }}
          />
        );
      })}
    </div>
  );
}
