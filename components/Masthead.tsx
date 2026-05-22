"use client";

export default function Masthead() {
  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-sm border-b border-[var(--rule)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-3 flex items-center justify-between mono text-[10px] tracking-[0.22em] uppercase text-ash">
        <a href="#capa" className="text-ink">
          Intaker
        </a>
        <span className="hidden md:inline">
          Market Paper · Decision Intelligence for Early-Career Hiring
        </span>
        <span>Estados Unidos, Maio 2026</span>
      </div>
    </header>
  );
}
