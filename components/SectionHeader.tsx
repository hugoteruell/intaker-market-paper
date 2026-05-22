export default function SectionHeader({
  n,
  kicker,
  title,
  lede,
}: {
  n: string;
  kicker: string;
  title: string;
  lede?: string;
}) {
  return (
    <header className="grid grid-cols-12 gap-8 pt-24 pb-14 border-b border-[var(--rule)]">
      <div className="col-span-12 md:col-span-3">
        <div className="mono text-[10px] tracking-[0.25em] uppercase text-ash mb-3">
          § {n}
        </div>
        <div className="serif italic text-ash text-base">{kicker}</div>
      </div>
      <div className="col-span-12 md:col-span-9">
        <h2 className="serif text-[clamp(2rem,4.5vw,4rem)] leading-[1.02] tracking-tightest">
          {title}
        </h2>
        {lede && (
          <p className="mt-8 max-w-3xl text-lg md:text-xl leading-relaxed text-ink/75">
            {lede}
          </p>
        )}
      </div>
    </header>
  );
}
