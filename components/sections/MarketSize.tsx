import SectionHeader from "@/components/SectionHeader";

const segments = [
  {
    name: "Talent Management",
    share: 27.9,
    desc: "Recrutamento, gestão de candidatos, onboarding e performance.",
  },
  {
    name: "Payroll & Compliance",
    share: 22.3,
    desc: "Folha de pagamento e conformidade regulatória multijurisdicional.",
  },
  {
    name: "Learning & Development",
    share: 18.5,
    desc: "Treinamento, upskilling e trilhas de desenvolvimento.",
  },
  {
    name: "Other Solutions",
    share: 16.1,
    desc: "Benefícios, saúde ocupacional e produtos adjacentes.",
  },
  {
    name: "Analytics & Insights",
    share: 15.2,
    desc: "Business intelligence e workforce analytics.",
  },
];

const recruitmentSizing = [
  { year: "2024", val: "US$ 3,02B" },
  { year: "2026", val: "US$ 3,62 a 3,77B" },
  { year: "2031 a 2034", val: "US$ 5,50 a 7,48B" },
];

export default function MarketSize() {
  return (
    <section id="mercado" className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader
          n="02"
          kicker="Tamanho e dinâmica do mercado"
          title="HR Tech mais que dobra de tamanho até 2034. Recruitment software cresce mais rápido que o agregado."
          lede="O mercado americano de tecnologia de RH passa de US$ 12,28 bilhões em 2025 para US$ 31,75 bilhões em 2034, segundo IMARC e Fortune Business Insights. Dentro dele, o sub-segmento de recruitment software cresce em ritmo superior, com CAGR estimado entre 7,85% e 9,6%. A diferença não é trivial: indica demanda concentrada por soluções que vão além de ATS de prateleira."
        />

        <div className="grid grid-cols-12 gap-8 py-16">
          <aside className="col-span-12 md:col-span-3 space-y-10">
            <div>
              <div className="eyebrow mb-3">Drivers macro</div>
              <p className="text-sm leading-relaxed text-ink/75">
                Cinco fatores explicam a expansão do mercado: transformação
                digital acelerada dos processos de RH, adoção massiva de
                soluções em cloud, integração de inteligência artificial em
                talent management, demanda por conformidade
                multijurisdicional, e estabilização de modelos híbridos de
                trabalho.
              </p>
            </div>
            <div>
              <div className="eyebrow mb-3">Concentração de compradores</div>
              <p className="text-sm leading-relaxed text-ink/75">
                O mercado é dominado por empresas com mais de cinco mil
                funcionários, que combinam orçamentos substanciais, alta
                complexidade operacional e múltiplas linhas de negócio. O
                mid-market (1.000 a 5.000) é o segundo maior segmento. SMB
                ainda está em adoção crescente de soluções cloud.
              </p>
            </div>
          </aside>

          <div className="col-span-12 md:col-span-9 space-y-20">
            <div>
              <div className="eyebrow mb-6">
                Projeção do mercado de HR Technology nos EUA, 2025 a 2034
              </div>
              <div className="grid grid-cols-2 gap-8 items-end">
                <div className="border-t border-ink/30 pt-6">
                  <div className="mono text-xs text-ash">2025</div>
                  <div className="serif text-[clamp(2.2rem,4vw,3.5rem)] tnum leading-none mt-2">
                    US$ 12,28B
                  </div>
                </div>
                <div className="border-t border-ink pt-6">
                  <div className="mono text-xs text-ash">2034</div>
                  <div className="serif text-[clamp(3rem,6vw,5.5rem)] tnum leading-none mt-2">
                    US$ 31,75B
                  </div>
                </div>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex-1 h-px bg-ink/15 relative">
                  <div className="absolute inset-y-0 left-0 w-[39%] bg-ink" />
                </div>
                <div className="mono text-[10px] tracking-[0.22em] uppercase text-ash">
                  CAGR 11,14%
                </div>
              </div>
              <p className="mt-8 max-w-3xl text-base leading-relaxed text-ink/80">
                O crescimento agregado mascara dinâmicas internas relevantes.
                O segmento de Talent Management sozinho concentra 27,9% do
                mercado em 2025, refletindo a prioridade estratégica que
                empresas atribuem à atração e à retenção de talento.
              </p>
            </div>

            <div>
              <div className="eyebrow mb-6">
                Segmentação do mercado de HR Tech em 2025
              </div>
              <div className="space-y-5">
                {segments.map((s) => (
                  <div
                    key={s.name}
                    className="grid grid-cols-12 gap-4 items-baseline border-b border-[var(--rule)] pb-5"
                  >
                    <div className="col-span-12 md:col-span-3 text-base text-ink">
                      {s.name}
                    </div>
                    <div className="col-span-8 md:col-span-6">
                      <div className="h-px bg-ink/10 relative">
                        <div
                          className="absolute inset-y-0 left-0 bg-ink"
                          style={{ width: `${s.share * 2.8}%` }}
                        />
                      </div>
                    </div>
                    <div className="col-span-4 md:col-span-1 serif tnum text-xl text-right">
                      {s.share}%
                    </div>
                    <div className="col-span-12 md:col-span-2 text-xs text-ash leading-snug md:text-right">
                      {s.desc}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 mono text-[10px] tracking-[0.2em] uppercase text-ash">
                Fontes: IMARC Group, Technavio, Fortune Business Insights, SNS
                Insider.
              </p>
            </div>

            <div>
              <div className="eyebrow mb-6">
                Sub-mercado de recruitment software
              </div>
              <div className="grid md:grid-cols-3 gap-0 border-t border-[var(--rule)]">
                {recruitmentSizing.map((r) => (
                  <div
                    key={r.year}
                    className="py-8 px-6 border-r border-b border-[var(--rule)] last:border-r-0"
                  >
                    <div className="mono text-[10px] tracking-[0.2em] uppercase text-ash">
                      {r.year}
                    </div>
                    <div className="serif text-2xl md:text-3xl tnum mt-3">
                      {r.val}
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-12 gap-8 mt-10">
                <div className="md:col-span-7">
                  <p className="text-base leading-relaxed text-ink/80">
                    O sub-mercado de recruitment software cresce em ritmo
                    superior ao do agregado de HR Tech. O CAGR entre 7,85% e
                    9,6% projetado pelas casas Fortune Business Insights,
                    Mordor Intelligence e Coherent Market Insights reflete
                    demanda concentrada em plataformas que integram
                    inteligência artificial, behavioral insights e decision
                    intelligence. Empresas pagam premium por soluções que
                    melhoram qualidade de contratação, não apenas eficiência
                    operacional.
                  </p>
                </div>
                <div className="md:col-span-5">
                  <div className="border-l-2 border-accent pl-5">
                    <p className="serif italic text-lg leading-snug text-ink/85">
                      “O sucesso da Greenhouse, com ARR de US$ 266 milhões em
                      2024 e valuation de US$ 820 milhões, prova que existe
                      disposição clara a pagar por algo melhor que ATS de
                      prateleira.”
                    </p>
                    <div className="mono text-[10px] tracking-[0.2em] uppercase text-ash mt-4">
                      Análise Intaker
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
