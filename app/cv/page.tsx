import Link from 'next/link';
import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import PrintButton from "@/components/PrintButton";
export const metadata: Metadata = {
  title: `${SITE.name} — CV`,
};

export default function CVPage() {
  return (
    <main className="min-h-screen bg-[#0B0F17] px-4 py-10 text-mist-50">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 flex items-center justify-between print:hidden">
          <link href="/" className="font-mono text-xs uppercase tracking-[0.16em] text-mist-400">
            ← Back to portfolio
          </link>
          <PrintButton />
        </div>

        <article className="rounded-lg border border-ink-700 bg-ink-900 p-8 print:border-0 print:bg-white print:text-black">
          <header className="border-b border-ink-700 pb-5 print:border-slate-300">
            <h1 className="font-display text-3xl font-semibold">{SITE.name}</h1>
            <p className="mt-1 text-sm text-mist-400 print:text-slate-600">{SITE.title}</p>
            <p className="mt-3 font-mono text-xs text-mist-400 print:text-slate-600">
              {SITE.location} · {SITE.email} · LinkedIn
            </p>
          </header>

          <section className="mt-6">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal-cyan print:text-slate-800">
              Profile
            </h2>
            <p className="mt-2 text-sm leading-7 text-mist-400 print:text-slate-700">{SITE.bio}</p>
          </section>

          <section className="mt-6">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal-cyan print:text-slate-800">
              Experience
            </h2>
            <h3 className="mt-2 text-base font-medium">NOC Engineer — BIM Group of Companies</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-mist-400 print:text-slate-700">
              <li>Monitored network infrastructure, system health, and service availability.</li>
              <li>Handled incident response, troubleshooting, and escalation protocols for seamless system uptime.</li>
              <li>Managed network routing, DNS configurations, and active server health checks.</li>
            </ul>
          </section>

          <section className="mt-6">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal-cyan print:text-slate-800">
              Skills
            </h2>
            <p className="mt-2 text-sm leading-6 text-mist-400 print:text-slate-700">
              Linux (Ubuntu, RHEL), Windows Server, AWS, Azure, VMware ESXi, Proxmox, Cisco, MikroTik, Firewall, VPN, DNS, Active Directory, Zabbix, Grafana, Prometheus, Veeam.
            </p>
          </section>

          <section className="mt-6">
            <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal-cyan print:text-slate-800">
              Education
            </h2>
            <p className="mt-2 text-sm text-mist-400 print:text-slate-700">
              Bachelor of Computer Science (B.C.Sc.)
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}
