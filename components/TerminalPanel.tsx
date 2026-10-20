"use client";

import { useEffect, useState } from "react";

const LINES = [
  { prompt: "nma@yangon:~$", cmd: "uptime" },
  { output: "  10:58:11 up 4y 2m,  1 user,  load 0.12 0.08 0.05" },
  { prompt: "nma@yangon:~$", cmd: "whoami" },
  { output: "  Naing Moe Aung — System Engineer" },
  { prompt: "nma@yangon:~$", cmd: "cat /etc/stack" },
  { output: "  linux  windows  esxi  proxmox" },
  { output: "  aws    azure    zabbix grafana" },
  { prompt: "nma@yangon:~$", cmd: "status --availability" },
  { output: "  OPEN FOR CLOUD & SYSTEM ROLES" },
];

export default function TerminalPanel() {
  const [clock, setClock] = useState("--:--:--");

  useEffect(() => {
    const tick = () => {
      setClock(
        new Date().toLocaleTimeString("en-GB", {
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <aside className="hud-corners overflow-hidden rounded-lg border border-ink-700 bg-[#0B0F17]/90 shadow-card">
      <div className="flex items-center justify-between border-b border-ink-700 bg-ink-900/80 px-3 py-2">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#EF4444]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#F59E0B]/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-signal-green/80" />
        </div>
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist-400">
          nma@ctl — bash
        </p>
        <p className="font-mono text-[10px] text-mist-400">{clock}</p>
      </div>
      <div className="space-y-1.5 px-4 py-4 font-mono text-[12px] leading-relaxed text-mist-50 sm:text-[13px]">
        {LINES.map((line, i) =>
          "cmd" in line ? (
            <p key={i}>
              <span className="text-signal-cyan">{line.prompt}</span>{" "}
              <span>{line.cmd}</span>
            </p>
          ) : (
            <p key={i} className="text-mist-400">
              {line.output}
            </p>
          ),
        )}
        <p>
          <span className="text-signal-cyan">nma@yangon:~$</span>
          <span className="terminal-cursor" />
        </p>
      </div>
      <div className="grid grid-cols-3 border-t border-ink-700 font-mono text-[10px] uppercase tracking-[0.14em]">
        <div className="border-r border-ink-700 px-3 py-2.5">
          <p className="text-mist-400">Host</p>
          <p className="mt-1 text-mist-50">YGN-NMA-01</p>
        </div>
        <div className="border-r border-ink-700 px-3 py-2.5">
          <p className="text-mist-400">SLA</p>
          <p className="mt-1 text-signal-green">99.9%</p>
        </div>
        <div className="px-3 py-2.5">
          <p className="text-mist-400">Focus</p>
          <p className="mt-1 text-signal-cyan">Cloud</p>
        </div>
      </div>
    </aside>
  );
}
