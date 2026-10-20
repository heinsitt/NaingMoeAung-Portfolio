import { Radio } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const BULLETS = [
  "Monitored network infrastructure, system health, and service availability.",
  "Handled incident response, troubleshooting, and escalation protocols for seamless system uptime.",
  "Managed network routing, DNS configurations, and active server health checks.",
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index="03"
          kicker="Operations log"
          title="Work Experience"
          description="Production-facing NOC work: observe, diagnose, escalate, restore."
        />

        <div className="relative pl-6 sm:pl-8">
          <div className="absolute bottom-2 left-[9px] top-2 w-px bg-ink-700 sm:left-[11px]" />
          <article className="relative rounded-lg border border-ink-700 bg-ink-900/70 p-5 sm:p-7">
            <span className="absolute -left-6 top-7 flex h-4 w-4 items-center justify-center rounded-full border border-signal-cyan bg-[#0B0F17] sm:-left-[1.35rem]">
              <span className="h-1.5 w-1.5 rounded-full bg-signal-cyan" />
            </span>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal-cyan">
                  Former role
                </p>
                <h3 className="mt-1 font-display text-2xl font-semibold">
                  NOC Engineer
                </h3>
                <p className="mt-1 text-sm text-mist-400">
                  BIM Group of Companies
                </p>
              </div>
              <span className="inline-flex items-center gap-2 self-start rounded-md border border-ink-700 bg-[#0B0F17] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-mist-400">
                <Radio className="h-3 w-3 text-signal-green" />
                Production
              </span>
            </div>
            <ul className="mt-6 space-y-3">
              {BULLETS.map((bullet) => (
                <li
                  key={bullet}
                  className="flex gap-3 text-sm leading-6 text-mist-400"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal-cyan" />
                  {bullet}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
