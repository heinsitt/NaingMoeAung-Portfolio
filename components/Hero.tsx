import { ArrowRight, Linkedin, MapPin } from "lucide-react";
import { SITE } from "@/lib/site";
import TerminalPanel from "@/components/TerminalPanel";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-24 sm:pt-28">
      <div className="pointer-events-none absolute inset-0 site-grid opacity-60" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B0F17]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 flex flex-wrap items-center gap-x-5 gap-y-2 border-y border-ink-700/80 bg-ink-900/40 px-3 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-mist-400">
          <span>
            Region <span className="text-mist-50">Yangon / MM</span>
          </span>
          <span className="hidden h-3 w-px bg-ink-700 sm:block" />
          <span>
            Role <span className="text-mist-50">Sys + Cloud</span>
          </span>
          <span className="hidden h-3 w-px bg-ink-700 sm:block" />
          <span className="inline-flex items-center gap-2">
            <span className="live-dot h-1.5 w-1.5 rounded-full bg-signal-green" />
            <span className="text-signal-green">Available</span>
          </span>
        </div>

        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-signal-cyan">
              {SITE.title}
            </p>
            <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-mist-50 sm:text-6xl">
              Naing Moe
              <br />
              Aung
            </h1>
            <p className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-mist-400">
              <MapPin className="h-3.5 w-3.5 text-signal-cyan" />
              {SITE.location} 🇲🇲
            </p>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-mist-400 sm:text-base">
              {SITE.bio}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-md bg-signal-blue px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-[#2563EB]"
              >
                Contact Me
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-ink-700 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-mist-50 transition hover:-translate-y-0.5 hover:border-signal-cyan/70 hover:text-signal-cyan"
              >
                <Linkedin className="h-4 w-4" />
                View LinkedIn
              </a>
            </div>
          </div>
          <TerminalPanel />
        </div>
      </div>
    </section>
  );
}
