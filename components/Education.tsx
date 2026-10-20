import { BookOpen, GraduationCap } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const CONCEPTS = [
  "Algorithms",
  "Networks",
  "Operating Systems",
  "Databases",
  "Security",
];

export default function Education() {
  return (
    <section id="education" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index="05"
          kicker="Foundation"
          title="Education & Certifications"
          description="Core computer science training that underpins day-to-day systems work."
        />

        <article className="rounded-lg border border-ink-700 bg-ink-900/70 p-6 transition hover:-translate-y-0.5 hover:border-signal-cyan/40 hover:shadow-lift sm:p-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md border border-ink-700 bg-[#0B0F17] text-signal-cyan">
              <GraduationCap className="h-7 w-7" />
            </div>
            <div className="flex-1">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-signal-cyan">
                Degree
              </p>
              <h3 className="mt-1 font-display text-2xl font-semibold">
                Bachelor of Computer Science (B.C.Sc.)
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-mist-400">
                Strong foundational CS concepts applied to infrastructure:
                how systems boot, talk, fail, and recover.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {CONCEPTS.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-md border border-ink-700 bg-[#0B0F17] px-2.5 py-1.5 font-mono text-[11px] text-mist-50"
                  >
                    <BookOpen className="h-3 w-3 text-signal-cyan" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
