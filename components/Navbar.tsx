"use client";

import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((link) => link.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[80] border-b transition-colors duration-300 ${
        scrolled
          ? "border-ink-700/80 bg-[#0B0F17]/75 backdrop-blur-md"
          : "border-transparent bg-[#0B0F17]/40 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="group flex items-center gap-3">
          <span className="font-mono text-sm font-semibold tracking-tight text-mist-50">
            &lt;{SITE.short} /&gt;
          </span>
          <span className="hidden items-center gap-2 rounded-full border border-ink-700 bg-ink-900/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-mist-400 sm:flex">
            <span className="live-dot h-1.5 w-1.5 rounded-full bg-signal-green" />
            Open
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-md px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] transition-colors ${
                active === link.href
                  ? "text-mist-50"
                  : "text-mist-400 hover:text-mist-50"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="/cv"
            className="hidden items-center gap-2 rounded-md border border-ink-700 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-mist-50 transition hover:border-signal-cyan/70 hover:text-signal-cyan sm:inline-flex"
          >
            <Download className="h-3.5 w-3.5" />
            Download CV
          </a>
          <a
            href="#contact"
            className="hidden rounded-md border border-signal-cyan/50 bg-signal-cyan/10 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-signal-cyan transition hover:border-signal-cyan hover:bg-signal-cyan/15 md:inline-flex"
          >
            Get in Touch
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-ink-700 text-mist-50 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-ink-700 bg-[#0B0F17]/95 px-4 py-4 backdrop-blur-md lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 font-mono text-xs uppercase tracking-[0.16em] text-mist-400 hover:bg-ink-800 hover:text-mist-50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/cv"
              className="mt-2 rounded-md border border-ink-700 px-3 py-3 text-center font-mono text-xs uppercase tracking-[0.16em] text-mist-50"
            >
              Download CV
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
