"use client";

import { useState } from "react";
import { Check, Copy, Linkedin, Mail } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { SITE } from "@/lib/site";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${SITE.email}`;
    }
  };

  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index="06"
          kicker="Signal"
          title="Contact"
          description="Reach out for cloud, systems, and infrastructure roles."
        />

        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-lg border border-ink-700 bg-ink-900/70 p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist-400">
              Email
            </p>
            <p className="mt-3 break-all font-display text-xl text-mist-50">
              {SITE.email}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 rounded-md bg-signal-blue px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-white transition hover:-translate-y-0.5 hover:bg-[#2563EB]"
              >
                <Mail className="h-4 w-4" />
                Send mail
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex items-center gap-2 rounded-md border border-ink-700 px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-mist-50 transition hover:-translate-y-0.5 hover:border-signal-cyan/70"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-signal-green" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                {copied ? "Copied" : "Copy email"}
              </button>
            </div>
          </article>

          <article className="rounded-lg border border-ink-700 bg-ink-900/70 p-6">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist-400">
              LinkedIn
            </p>
            <p className="mt-3 font-display text-xl text-mist-50">
              Professional profile
            </p>
            <p className="mt-2 break-all font-mono text-xs text-mist-400">
              {SITE.linkedin.replace("https://", "")}
            </p>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md border border-signal-cyan/50 bg-signal-cyan/10 px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-signal-cyan transition hover:-translate-y-0.5 hover:border-signal-cyan"
            >
              <Linkedin className="h-4 w-4" />
              Open LinkedIn
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
