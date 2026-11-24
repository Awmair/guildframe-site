// Synthesised table sounds. Nothing plays until the visitor switches sound on.
type SoundName = "flick" | "tock" | "roll" | "slide";

let context: AudioContext | null = null;
let master: GainNode | null = null;
let enabled = false;
const listeners = new Set<(on: boolean) => void>();
const storageKey = "gf-sound";

function ensureContext() {
  if (context) return context;
  const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctor) return null;
  context = new Ctor();
  master = context.createGain();
  master.gain.value = 0.5;
  master.connect(context.destination);
  return context;
}

function noiseBuffer(ctx: AudioContext, seconds: number) {
  const buffer = ctx.createBuffer(1, Math.ceil(ctx.sampleRate * seconds), ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;
  return buffer;
}

function tock(ctx: AudioContext, at: number, pitch = 1) {
  if (!master) return;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(220 * pitch, at);
  osc.frequency.exponentialRampToValueAtTime(130 * pitch, at + 0.09);
  gain.gain.setValueAtTime(0.0001, at);
  gain.gain.exponentialRampToValueAtTime(0.14, at + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.0001, at + 0.11);
  osc.connect(gain).connect(master);
  osc.start(at);
  osc.stop(at + 0.12);
  const click = ctx.createBufferSource();
  click.buffer = noiseBuffer(ctx, 0.006);
  const clickGain = ctx.createGain();
  clickGain.gain.value = 0.05;
  click.connect(clickGain).connect(master);
  click.start(at);
}

export function playSound(name: SoundName) {
  if (!enabled || document.hidden) return;
  const ctx = ensureContext();
  if (!ctx || !master) return;
  const now = ctx.currentTime;
  if (name === "tock") return tock(ctx, now);
  if (name === "roll") {
    let t = now;
    for (let i = 0; i < 6; i++) {
      t += 0.04 + Math.random() * 0.07;
      tock(ctx, t, 0.85 + Math.random() * 0.3);
    }
    return;
  }
  const source = ctx.createBufferSource();
  const filter = ctx.createBiquadFilter();
  const gain = ctx.createGain();
  if (name === "flick") {
    source.buffer = noiseBuffer(ctx, 0.03);
    filter.type = "bandpass";
    filter.frequency.value = 2500;
    gain.gain.value = 0.05;
  } else {
    source.buffer = noiseBuffer(ctx, 0.26);
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(400, now);
    filter.frequency.exponentialRampToValueAtTime(1200, now + 0.25);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.07, now + 0.06);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.26);
  }
  source.connect(filter).connect(gain).connect(master);
  source.start(now);
}

export function isSoundOn() {
  return enabled;
}

export function setSound(on: boolean) {
  enabled = on;
  try { localStorage.setItem(storageKey, on ? "1" : "0"); } catch { /* storage can be unavailable */ }
  if (on) {
    const ctx = ensureContext();
    void ctx?.resume();
  }
  listeners.forEach(listener => listener(on));
}

export function restoreSound() {
  try { enabled = localStorage.getItem(storageKey) === "1"; } catch { enabled = false; }
  listeners.forEach(listener => listener(enabled));
  return enabled;
}

export function onSoundChange(listener: (on: boolean) => void) {
  listeners.add(listener);
  return () => { listeners.delete(listener); };
}
