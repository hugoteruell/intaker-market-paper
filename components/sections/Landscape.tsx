import SectionHeader from "@/components/SectionHeader";

const players = [
  {
    name: "Greenhouse",
    cat: "ATS moderno, líder de mercado",
    metrics: [
      { k: "ARR 2024", v: "US$ 266,3M" },
      { k: "Crescimento", v: "+12,6% YoY" },
      { k: "Valuation", v: "US$ 820M" },
      { k: "Rank G2", v: "#1 em 49 categorias" },
    ],
    strength:
      "Workflow superior, integrações maduras e marca consolidada em mid-market e enterprise. Reconhecido como Best ATS for Mid-Market e Best ATS for Enterprise no G2 Spring 2024.",
    gap: "Otimiza throughput e workflow operacional. Não foi desenhado para capturar sinal comportamental longitudinal nem para prever match quality em horizonte de 12 a 24 meses pós-contratação.",
  },
  {
    name: "LinkedIn Talent Solutions",
    cat: "Job board e sourcing platform",
    metrics: [
      { k: "Revenue FY25", v: "US$ 17,81B" },
      { k: "Crescimento", v: "+9% YoY" },
      { k: "Rede", v: "900M+ usuários" },
      { k: "Posição", v: "Principal driver do LinkedIn" },
    ],
    strength:
      "Vantagem de rede em escala global e integração com o ecossistema Microsoft. Maior infraestrutura de sourcing existente em recruiting tech.",
    gap: "É primariamente plataforma de job board e sourcing, não plataforma de decision intelligence. A camada de avaliação real continua acontecendo fora do LinkedIn, em outros sistemas do stack do cliente.",
  },
  {
    name: "Lever",
    cat: "ATS mid-market",
    metrics: [
      { k: "Market share recruitment", v: "0,19%" },
      { k: "Share HR e Recruitment", v: "2,79%" },
      { k: "Ranking categoria", v: "8º" },
      { k: "Posicionamento", v: "Growing companies" },
    ],
    strength:
      "Funcionalidades modernas em UX e candidate experience. Bem posicionado para empresas em fase de crescimento que precisam de ATS leve e bem integrado.",
    gap: "Compete em funcionalidade e usabilidade, não em decision intelligence. Disputa o mesmo espaço que Greenhouse, com armas diferentes mas no mesmo eixo competitivo.",
  },
  {
    name: "Workday",
    cat: "Suite enterprise integrada",
    metrics: [
      { k: "Categoria", v: "HCM enterprise" },
      { k: "Foco", v: "Gestão integrada de RH" },
      { k: "Especialização", v: "Não early-career" },
      { k: "Penetração", v: "Fortune 500" },
    ],
    strength:
      "Suite ampla com cobertura de RH, payroll, finanças e planejamento. Penetração profunda em grandes empresas e poder de plataforma elevado.",
    gap: "Generalista por design. Não otimizado para early-career hiring nem para captura de sinal comportamental específico desse segmento de força de trabalho.",
  },
];

export default function Landscape() {
  return (
    <section id="landscape" className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader
          n="06"
          kicker="Landscape competitivo"
          title="O mercado de recruiting tech é dominado por workflow. Decision intelligence early-career segue sem player dedicado."
          lede="Os players dominantes (Greenhouse, LinkedIn Talent Solutions, Lever e Workday) competem em integração, distribuição e funcionalidade. Nenhum compete em qualidade preditiva de match. É um espaço estruturalmente aberto, não por falha de execução dos atuais, mas por escolha de posicionamento."
        />

        <div className="grid grid-cols-12 gap-8 py-16">
          <aside className="col-span-12 md:col-span-3 space-y-10">
            <div>
              <div className="eyebrow mb-3">Leitura estratégica</div>
              <p className="text-sm leading-relaxed text-ink/75">
                Esta seção não é um ataque a competidores. Os players listados
                são bons no que se propõem a fazer. A análise é sobre o que
                nenhum deles otimiza, e por que a Intaker pode existir ao lado
                deles sem competir diretamente pelo mesmo orçamento.
              </p>
            </div>
            <div>
              <div className="eyebrow mb-3">Categorias representadas</div>
              <div className="text-sm text-ink/75 space-y-2 leading-relaxed">
                <p>ATS moderno (Greenhouse, Lever).</p>
                <p>Job board e sourcing (LinkedIn).</p>
                <p>HCM enterprise (Workday).</p>
                <p className="text-ink">
                  Decision intelligence comportamental, sem player dedicado.
                </p>
              </div>
            </div>
          </aside>

          <div className="col-span-12 md:col-span-9 space-y-12">
            {players.map((p) => (
              <article
                key={p.name}
                className="grid md:grid-cols-12 gap-8 pb-12 border-b border-[var(--rule-strong)]"
              >
                <div className="md:col-span-4">
                  <h3 className="serif text-3xl md:text-4xl leading-none mb-3">
                    {p.name}
                  </h3>
                  <p className="mono text-[10px] tracking-[0.2em] uppercase text-ash mb-6">
                    {p.cat}
                  </p>
                  <dl className="space-y-3 text-sm">
                    {p.metrics.map((m) => (
                      <div
                        key={m.k}
                        className="flex justify-between border-b border-[var(--rule)] pb-2"
                      >
                        <dt className="text-ash">{m.k}</dt>
                        <dd className="text-ink tnum">{m.v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="md:col-span-8 grid md:grid-cols-2 gap-6">
                  <div>
                    <div className="eyebrow mb-2">Força</div>
                    <p className="text-sm leading-relaxed text-ink/85">
                      {p.strength}
                    </p>
                  </div>
                  <div>
                    <div className="eyebrow mb-2">Gap relativo</div>
                    <p className="text-sm leading-relaxed text-ink/85">
                      {p.gap}
                    </p>
                  </div>
                </div>
              </article>
            ))}

            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-5">
                <p className="serif italic text-2xl leading-snug text-ink/90">
                  “Greenhouse tem vantagem em integração e distribuição. A
                  Intaker pode ter vantagem em dados comportamentais
                  proprietários. Um moat diferente, em outra dimensão.”
                </p>
                <div className="mono text-[10px] tracking-[0.2em] uppercase text-ash mt-4">
                  Posicionamento estratégico
                </div>
              </div>
              <div className="md:col-span-7">
                <h3 className="serif text-2xl md:text-3xl leading-tight mb-5">
                  Não é uma categoria contestada. É uma categoria não formada.
                </h3>
                <p className="text-base leading-relaxed text-ink/85">
                  Atacar Greenhouse, LinkedIn ou Workday no eixo de workflow é
                  uma guerra que a Intaker não tem condições de vencer. Esses
                  players têm escala, integração, marca e custo de switching
                  ao lado deles. A posição estrategicamente correta é não
                  competir nessa dimensão e construir a próxima: decision
                  intelligence comportamental como camada complementar ao ATS,
                  e não como substituta.
                </p>
                <p className="mt-5 text-base leading-relaxed text-ink/85">
                  Operacionalmente, isso significa que a Intaker conecta ao
                  ATS existente do cliente, opera ao lado, e adiciona dimensão
                  preditiva. Empresas não trocam de ATS para usar Intaker.
                  Adicionam Intaker ao stack atual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
