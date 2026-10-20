import Image from "next/image";
import { Clock3, ServerCog, ShieldCheck } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const STATS = [
  { label: "Domain", value: "Infrastructure" },
  { label: "Priority", value: "Uptime + Security" },
  { label: "Next hop", value: "Cloud-native" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index="01"
          kicker="Identity"
          title="About"
          description="From NOC operations to cloud architecture — built around reliability, visibility, and disciplined change."
        />

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="hud-corners overflow-hidden rounded-lg border border-ink-700 bg-ink-900">
            <div className="relative aspect-[4/5]">
              <Image
                src="/nma-profile.jpg"
                alt="Naing Moe Aung"
                fill
                className="object-cover object-[center_18%]"
                sizes="(max-width: 1024px) 100vw, 420px"
                priority
              />
              <div className="scanlines pointer-events-none absolute inset-0" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0B0F17] via-[#0B0F17]/50 to-transparent p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-signal-cyan">
                  Operator profile
                </p>
                <p className="mt-1 text-sm font-medium text-mist-50">
                  Naing Moe Aung
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-6">
            <div className="rounded-lg border border-ink-700 bg-ink-900/70 p-6">
              <p className="text-[15px] leading-7 text-mist-400">
                I come from hands-on systems work: watching services, tracing
                incidents, and keeping Linux and Windows estates healthy. That
                operational discipline now drives my move into cloud — designing
                environments that are observable, secure, and easy to recover.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-md border border-ink-700 bg-[#0B0F17] px-3 py-3"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-mist-400">
                      {stat.label}
                    </p>
                    <p className="mt-1 text-sm text-mist-50">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {[
                {
                  icon: ServerCog,
                  title: "Systems first",
                  body: "Linux, Windows Server, virtualization, and identity.",
                },
                {
                  icon: ShieldCheck,
                  title: "Secure by default",
                  body: "Firewall, VPN, DNS, and access-control hygiene.",
                },
                {
                  icon: Clock3,
                  title: "Uptime mindset",
                  body: "Monitoring, backup, and incident-ready operations.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-lg border border-ink-700 bg-ink-900/60 p-4 transition hover:-translate-y-0.5 hover:border-signal-cyan/40 hover:shadow-lift"
                >
                  <item.icon className="mb-3 h-4 w-4 text-signal-cyan" />
                  <h3 className="text-sm font-medium text-mist-50">{item.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-mist-400">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
