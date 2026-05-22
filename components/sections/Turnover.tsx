import SectionHeader from "@/components/SectionHeader";

const patterns = [
  {
    title: "Saída em menos de doze meses",
    body: "Parcela relevante das contratações early-career deixa a empresa antes de completar um ano. O padrão sinaliza que o fit não foi adequado já no momento da contratação, e não algo que se deteriorou em seguida.",
  },
  {
    title: "Mismatch cultural reincidente",
    body: "Um padrão recorrente é o da contratação que performa tecnicamente mas implode culturalmente. A leitura é direta. O processo de avaliação capturou habilidade técnica e falhou em capturar fit cultural.",
  },
  {
    title: "Frustração de líderes de linha",
    body: "Gerentes ficam frustrados com contratações que parecem boas no papel mas não funcionam na prática. A frustração reincidente é um dos principais gatilhos internos para uma empresa começar a buscar uma solução estruturada.",
  },
  {
    title: "Desengajamento pós-onboarding",
    body: "Jovens talentos desengajam pouco depois do onboarding, geralmente por desalinhamento entre expectativa e ambiente real. O sinal não foi capturado durante o processo seletivo e aparece tarde.",
  },
];

export default function Turnover() {
  return (
    <section id="turnover" className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader
          n="05"
          kicker="Turnover e mismatch"
          title="Um terço de todo o turnover voluntário acontece nos primeiros doze meses. Três vezes a meta saudável."
          lede="O turnover voluntário agregado nos Estados Unidos caiu para cerca de 13% em 2024 e 2025, queda de 17,3% em relação a 2023. Mesmo com essa queda, a parcela que ocorre no primeiro ano de casa permanece em 33%. Empresas operam, na média, em até três vezes a meta saudável de retenção no primeiro ano (abaixo de 10%). O custo dessa diferença é direto, mensurável e recorrente."
        />

        <div className="grid grid-cols-12 gap-8 py-16">
          <aside className="col-span-12 md:col-span-3 space-y-10">
            <div>
              <div className="eyebrow mb-3">Métricas-chave</div>
              <div className="space-y-5">
                <div>
                  <div className="serif text-3xl tnum">13,0%</div>
                  <div className="text-xs text-ash mt-1 leading-snug">
                    Turnover voluntário agregado nos EUA em 2024 e 2025.
                  </div>
                </div>
                <div>
                  <div className="serif text-3xl tnum text-accent">33%</div>
                  <div className="text-xs text-ash mt-1 leading-snug">
                    Da parcela voluntária acontece no primeiro ano de casa.
                  </div>
                </div>
                <div>
                  <div className="serif text-3xl tnum">&lt; 10%</div>
                  <div className="text-xs text-ash mt-1 leading-snug">
                    Meta saudável típica para retenção no primeiro ano.
                  </div>
                </div>
                <div>
                  <div className="serif text-3xl tnum">3×</div>
                  <div className="text-xs text-ash mt-1 leading-snug">
                    Razão entre a realidade observada e a meta saudável.
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="eyebrow mb-3">Fontes</div>
              <p className="text-[11px] mono text-ash leading-relaxed">
                Mercer 2024 e 2025, Paycor, HR.com State of Retention 2025 e
                2026, Gallup, BLS JOLTS.
              </p>
            </div>
          </aside>

          <div className="col-span-12 md:col-span-9 space-y-16">
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-7">
                <h3 className="serif text-3xl md:text-4xl leading-tight mb-6">
                  O custo de uma contratação ruim early-career é direto e
                  observável.
                </h3>
                <p className="text-base leading-relaxed text-ink/85">
                  Uma contratação que sai em seis meses custa, tipicamente,
                  entre US$ 15 mil e US$ 30 mil em custos diretos. A composição
                  envolve recrutamento, onboarding, treinamento, salário pago
                  no período e processo de separação. A esses números somam-se
                  perdas mais difíceis de isolar contabilmente: produtividade
                  reduzida da equipe ao redor, desgaste do gestor de linha,
                  impacto em moral e o custo de oportunidade da posição
                  recolocada.
                </p>
                <p className="mt-5 text-base leading-relaxed text-ink/85">
                  Multiplicado pelo volume típico de contratação early-career
                  do ICP (entre 200 e 5 mil por ano), o impacto anual excede,
                  com folga, a faixa de sete dígitos em uma única organização.
                  O problema, do ponto de vista executivo, é de P&amp;L, não de
                  RH.
                </p>
              </div>
              <div className="md:col-span-5">
                <div className="border border-[var(--rule-strong)] p-7 bg-white/30">
                  <div className="eyebrow mb-4">
                    Custo modelado de uma saída em seis meses
                  </div>
                  <dl className="space-y-3 text-sm">
                    <div className="flex justify-between border-b border-[var(--rule)] pb-2">
                      <dt>Recrutamento e sourcing</dt>
                      <dd className="tnum">US$ 4 a 8 mil</dd>
                    </div>
                    <div className="flex justify-between border-b border-[var(--rule)] pb-2">
                      <dt>Onboarding e treinamento</dt>
                      <dd className="tnum">US$ 5 a 10 mil</dd>
                    </div>
                    <div className="flex justify-between border-b border-[var(--rule)] pb-2">
                      <dt>Salário pago no período</dt>
                      <dd className="tnum">US$ 25 a 40 mil</dd>
                    </div>
                    <div className="flex justify-between border-b border-[var(--rule)] pb-2">
                      <dt>Separação e administrativo</dt>
                      <dd className="tnum">US$ 1 a 3 mil</dd>
                    </div>
                    <div className="flex justify-between pt-1 text-ink">
                      <dt className="text-ink">Custo direto agregado</dt>
                      <dd className="tnum serif text-lg">
                        ≈ US$ 15 a 30 mil
                      </dd>
                    </div>
                  </dl>
                  <p className="mono text-[10px] tracking-[0.2em] uppercase text-ash mt-4">
                    Antes de incluir perdas de produtividade.
                  </p>
                </div>
              </div>
            </div>

            <div className="rule" />

            <div>
              <div className="eyebrow mb-6">Padrões de saída precoce</div>
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-10">
                {patterns.map((p) => (
                  <div key={p.title} className="border-t border-ink/30 pt-5">
                    <h4 className="serif text-xl mb-3">{p.title}</h4>
                    <p className="text-sm leading-relaxed text-ink/75">
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rule-strong" />

            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-5">
                <p className="serif italic text-2xl leading-snug text-ink/90">
                  “A maioria das empresas ainda acha fit cultural importante,
                  mas contrata no Excel, emocionalmente.”
                </p>
                <div className="mono text-[10px] tracking-[0.22em] uppercase text-ash mt-4">
                  Observação sobre maturidade de RH
                </div>
              </div>
              <div className="md:col-span-7">
                <p className="text-base leading-relaxed text-ink/85">
                  O ponto não é que empresas ignorem fit cultural. É que não
                  têm ferramentas para medi-lo de forma confiável e
                  reprodutível. As avaliações culturais, hoje, são em larga
                  medida subjetivas e dependem do gut feeling do gestor que
                  conduz a entrevista final. O resultado é variabilidade
                  elevada entre contratações que, em tese, foram avaliadas
                  pelos mesmos critérios.
                </p>
                <p className="mt-5 text-base leading-relaxed text-ink/85">
                  Quem compra decision intelligence comportamental é o RH que
                  já internalizou que skill mismatch custa dinheiro. Esse é o
                  ICP real. Mercado mais específico, mas com propensão de
                  compra significativamente maior do que a média da categoria.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
