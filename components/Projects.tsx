import { CloudCog, Upload } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index="04"
          kicker="Lab queue"
          title="Projects"
          description="Cloud labs are being staged. This card will be replaced with documented architectures."
        />

        <article className="hud-corners overflow-hidden rounded-lg border border-dashed border-ink-700 bg-ink-900/50">
          <div className="flex items-center justify-between border-b border-ink-700/80 px-4 py-3 sm:px-6">
            <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-mist-400">
              <Upload className="h-3.5 w-3.5 text-signal-cyan" />
              lab-sync.service
            </div>
            <span className="rounded-sm border border-signal-cyan/40 bg-signal-cyan/10 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-signal-cyan">
              [ UPLOADING COMING SOON... ]
            </span>
          </div>
          <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[auto_1fr] lg:items-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-md border border-ink-700 bg-[#0B0F17] text-signal-cyan">
              <CloudCog className="h-7 w-7" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold">
                Upcoming Projects & Cloud Labs
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-mist-400">
                Currently setting up and documenting AWS/Azure cloud architecture
                labs, Terraform IaC deployment, and automated monitoring
                dashboards. Stay tuned!
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
