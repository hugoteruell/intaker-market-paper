"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "capa", n: "00", t: "Capa" },
  { id: "sumario", n: "01", t: "Sumário Executivo" },
  { id: "mercado", n: "02", t: "Tamanho do Mercado" },
  { id: "colapso", n: "03", t: "Colapso do Modelo" },
  { id: "genz", n: "04", t: "Gen Z" },
  { id: "turnover", n: "05", t: "Turnover & Mismatch" },
  { id: "landscape", n: "06", t: "Landscape Competitivo" },
  { id: "tese", n: "07", t: "Posicionamento Intaker" },
  { id: "icp", n: "08", t: "ICP" },
  { id: "conclusao", n: "09", t: "Conclusão" },
];

export default function TableOfContents() {
  const [active, setActive] = useState("capa");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="hidden xl:block fixed top-1/2 left-6 -translate-y-1/2 z-50">
      <ul className="space-y-2.5">
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="group flex items-center gap-3 mono text-[10px] tracking-[0.18em] transition-colors"
                style={{ color: isActive ? "var(--ink)" : "var(--ash)" }}
              >
                <span className="tabular-nums opacity-70">{s.n}</span>
                <span
                  className="block h-px transition-all"
                  style={{
                    width: isActive ? "32px" : "12px",
                    background: isActive ? "var(--ink)" : "var(--ash)",
                  }}
                />
                <span
                  className="uppercase opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ opacity: isActive ? 1 : undefined }}
                >
                  {s.t}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
