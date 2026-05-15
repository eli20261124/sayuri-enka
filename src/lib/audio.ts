/**
 * Web Audio API synthesizer for Project Sayuri (v2).
 *
 * Uses oscillator synthesis to produce distinct tones per InstrumentMode.
 * AudioContext is initialized lazily and unlocked via unlockAudio() —
 * call it from the first user-interaction (SplashScreen button).
 *
 * ── mp3 swap instructions ─────────────────────────────────────────────────
 * To replace synthesis with mp3 files:
 *   1. Uncomment the SRC_MAP constant below.
 *   2. Replace the synthTone() call in playInstrument() with:
 *        const a = new Audio(SRC_MAP[mode]);
 *        a.volume = 0.8;
 *        a.play().catch(() => {});
 * ─────────────────────────────────────────────────────────────────────────
 */

export type InstrumentMode =
  | "major"
  | "yonanuki"
  | "strings"
  | "shamisen"
  | "brass"
  | "kobushi"
  | "teresa";

// mp3 source map — uncomment to swap in audio files:
// const SRC_MAP: Record<InstrumentMode, string> = {
//   major:    "/audio/instruments/major.mp3",
//   yonanuki: "/audio/instruments/yonanuki.mp3",
//   strings:  "/audio/instruments/strings.mp3",
//   shamisen: "/audio/instruments/shamisen.mp3",
//   brass:    "/audio/instruments/brass.mp3",
//   kobushi:  "/audio/instruments/kobushi.mp3",
//   teresa:   "/audio/instruments/teresa.mp3",
// };

// ─── AudioContext singleton ──────────────────────────────────────────────────
let _ctx: AudioContext | null = null;

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!_ctx) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  return _ctx;
}

/**
 * Call once on the first user interaction (SplashScreen button).
 * Resumes the AudioContext if the browser auto-suspended it on page load.
 */
export function unlockAudio(): void {
  const ctx = getCtx();
  if (ctx?.state === "suspended") {
    ctx.resume().catch(() => {});
  }
}

// ─── Synth parameters per mode ──────────────────────────────────────────────
type SynthParams = {
  freq: number;
  decay: number;
  type: OscillatorType;
  gain: number;
  detune?: number;
};

const PARAMS: Record<InstrumentMode, SynthParams> = {
  shamisen: { freq: 330,    decay: 1.0, type: "sawtooth", gain: 0.55, detune: 0   },
  strings:  { freq: 220,    decay: 2.8, type: "sine",     gain: 0.45, detune: 4   },
  brass:    { freq: 185,    decay: 0.8, type: "sawtooth", gain: 0.50, detune: 12  },
  major:    { freq: 261.63, decay: 1.4, type: "triangle", gain: 0.50, detune: 0   },
  yonanuki: { freq: 293.66, decay: 1.6, type: "triangle", gain: 0.50, detune: 0   },
  kobushi:  { freq: 370,    decay: 0.7, type: "sine",     gain: 0.60, detune: 6   },
  teresa:   { freq: 440,    decay: 1.8, type: "sine",     gain: 0.42, detune: 2   },
};

function synthTone(ctx: AudioContext, p: SynthParams): void {
  const now = ctx.currentTime;
  const { freq, decay, type, gain, detune = 0 } = p;

  const osc = ctx.createOscillator();
  osc.type = type;
  osc.frequency.value = freq;
  osc.detune.value = detune;

  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = freq * 6;
  filter.Q.value = 0.8;

  const gainNode = ctx.createGain();
  gainNode.gain.setValueAtTime(0, now);
  gainNode.gain.linearRampToValueAtTime(gain, now + 0.012);
  gainNode.gain.exponentialRampToValueAtTime(0.001, now + decay);

  osc.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + decay + 0.05);
}

/**
 * Play a synthesized tone for the given instrument mode.
 * Safe to call before unlockAudio() — will auto-resume context on interaction.
 */
export function playInstrument(mode: InstrumentMode): void {
  if (typeof window === "undefined") return;
  const ctx = getCtx();
  if (!ctx) return;

  const doPlay = () => {
    try {
      synthTone(ctx, PARAMS[mode]);
    } catch {
      // Ignore AudioContext errors on unsupported browsers
    }
  };

  if (ctx.state === "suspended") {
    ctx.resume().then(doPlay).catch(() => {});
  } else {
    doPlay();
  }
}

/** Close and reset the AudioContext (e.g. on route changes). */
export function stopAll(): void {
  if (_ctx) {
    _ctx.close().catch(() => {});
    _ctx = null;
  }
}
