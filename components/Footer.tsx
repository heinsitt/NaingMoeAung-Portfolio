import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink-700">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-mist-400">
          © {new Date().getFullYear()} {SITE.name}
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-mist-400">
          Designed for Infrastructure & Cloud Performance
        </p>
      </div>
    </footer>
  );
}
