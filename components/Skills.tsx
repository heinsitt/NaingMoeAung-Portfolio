import {
  Activity,
  Cloud,
  DatabaseBackup,
  Globe,
  Monitor,
  Network,
  Server,
  Shield,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

type SkillGroup = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

const GROUPS: SkillGroup[] = [
  {
    title: "Operating Systems",
    icon: Server,
    items: ["Linux (Ubuntu, RHEL)", "Windows Server"],
  },
  {
    title: "Cloud & Virtualization",
    icon: Cloud,
    items: ["AWS", "Azure", "VMware ESXi", "Proxmox"],
  },
  {
    title: "Networking & Security",
    icon: Shield,
    items: ["Cisco", "MikroTik", "Firewall", "VPN", "DNS", "Active Directory"],
  },
  {
    title: "Monitoring & Backup",
    icon: Activity,
    items: ["Zabbix", "Grafana", "Prometheus", "Veeam"],
  },
];

const EXTRA_ICONS: Record<string, LucideIcon> = {
  Cisco: Network,
  MikroTik: Globe,
  Grafana: Monitor,
  Veeam: DatabaseBackup,
};

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index="02"
          kicker="Capability matrix"
          title="Skills & Tools"
          description="A rack-style inventory of the platforms I operate and the stack I’m deepening for cloud."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {GROUPS.map((group) => (
            <article
              key={group.title}
              className="rounded-lg border border-ink-700 bg-ink-900/70 p-5 transition hover:-translate-y-0.5 hover:border-signal-cyan/45 hover:shadow-lift"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md border border-ink-700 bg-[#0B0F17] text-signal-cyan">
                    <group.icon className="h-4 w-4" />
                  </span>
                  <h3 className="font-display text-lg font-medium">{group.title}</h3>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-mist-400">
                  {group.items.length} tools
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const Icon = EXTRA_ICONS[item] ?? group.icon;
                  return (
                    <span
                      key={item}
                      className="inline-flex items-center gap-1.5 rounded-md border border-ink-700 bg-[#0B0F17] px-2.5 py-1.5 font-mono text-[11px] text-mist-50"
                    >
                      <Icon className="h-3 w-3 text-signal-cyan" />
                      {item}
                    </span>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
