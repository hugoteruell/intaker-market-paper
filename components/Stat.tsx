export default function Stat({
  value,
  label,
  note,
}: {
  value: string;
  label: string;
  note?: string;
}) {
  return (
    <div>
      <div className="serif text-[clamp(2.5rem,4vw,3.5rem)] leading-none tnum">
        {value}
      </div>
      <div className="rule my-4" />
      <div className="text-sm text-ink/80 leading-snug">{label}</div>
      {note && (
        <div className="mono text-[10px] tracking-[0.18em] uppercase text-ash mt-3">
          {note}
        </div>
      )}
    </div>
  );
}
