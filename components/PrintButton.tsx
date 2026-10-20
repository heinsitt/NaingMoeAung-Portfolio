"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-md border border-ink-700 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-mist-50 hover:border-signal-cyan/70"
    >
      Print / Save PDF
    </button>
  );
}
