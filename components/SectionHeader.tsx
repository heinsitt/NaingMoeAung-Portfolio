type SectionHeaderProps = {
  index: string;
  kicker: string;
  title: string;
  description?: string;
};

export default function SectionHeader({
  index,
  kicker,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-10 flex flex-col gap-4 md:mb-12 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="mb-3 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-mist-400">
          <span className="text-signal-cyan">{index}</span>
          <span className="h-px w-8 bg-ink-700" />
          <span>{kicker}</span>
        </div>
        <h2 className="font-display text-3xl font-semibold tracking-tight text-mist-50 sm:text-4xl">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-md text-sm leading-relaxed text-mist-400 md:text-right">
          {description}
        </p>
      ) : null}
    </div>
  );
}
