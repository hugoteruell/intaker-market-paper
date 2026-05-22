import SectionHeader from "@/components/SectionHeader";

const pillars = [
  {
    n: "01",
    h: "Captura de comportamento",
    b: "Sinal longitudinal coletado a partir de assessments contextualizados, interações com a plataforma, entrevistas estruturadas e dados pós-contratação. A entrada não é o currículo. É o comportamento observado em contexto.",
  },
  {
    n: "02",
    h: "Modelagem preditiva de fit",
    b: "Correlação entre dados comportamentais e outcomes reais como retenção, performance e adaptação cultural, medidos nas mesmas coortes ao longo de 12, 24 e 36 meses de tempo de casa.",
  },
  {
    n: "03",
    h: "Insights de decisão",
    b: "Devolução estruturada para recrutadores e gestores de linha sobre fit cultural e comportamental do candidato, e não apenas sobre fit técnico ou de palavra-chave.",
  },
  {
    n: "04",
    h: "Melhoria em ciclos",
    b: "Cada coorte observada alimenta os modelos do próximo ciclo. O sistema melhora com o tempo, sem depender de adição de features para se diferenciar.",
  },
];

export default function Thesis() {
  return (
    <section id="tese" className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader
          n="07"
          kicker="Posicionamento da Intaker"
          title="A Intaker é infraestrutura de decision intelligence para early-career talent, não um ATS."
          lede="O ativo defensável não é o produto em si. É o conjunto de dados comportamentais longitudinais que a plataforma acumula sobre quem fica, quem sai, quem performa e quem implode culturalmente. É um ativo que cresce de valor a cada coorte e que não pode ser replicado por integração nem por aquisição instantânea."
        />

        <div className="grid grid-cols-12 gap-8 py-16">
          <aside className="col-span-12 md:col-span-3 space-y-10">
            <div>
              <div className="eyebrow mb-3">Tese em uma frase</div>
              <p className="serif italic text-lg leading-snug text-ink/90">
                Melhores decisões de contratação exigem sinal comportamental,
                não otimização de workflow.
              </p>
            </div>
            <div>
              <div className="eyebrow mb-3">O que muda no cliente</div>
              <div className="space-y-2 text-sm text-ink/75 leading-relaxed">
                <p>Retenção mensurável aos seis e aos doze meses.</p>
                <p>Adaptação cultural perceptivelmente mais rápida.</p>
                <p>Onboarding mais curto, com produtividade plena antes.</p>
                <p>Redução mensurável de mismatch nos primeiros doze meses.</p>
              </div>
            </div>
          </aside>

          <div className="col-span-12 md:col-span-9 space-y-16">
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-7">
                <h3 className="serif text-3xl md:text-4xl leading-tight mb-6">
                  O que a Intaker é, e o que não é.
                </h3>
                <p className="text-base leading-relaxed text-ink/85">
                  A Intaker não substitui o ATS. Opera ao lado dele, conectada
                  ao funil existente, adicionando uma camada que captura
                  sinal comportamental e devolve insights de fit para
                  recrutadores e gestores de linha. As empresas continuam
                  usando Greenhouse, Lever ou Workday para workflow.
                  Adicionam Intaker para a parte da decisão que esses sistemas
                  não cobrem.
                </p>
                <p className="mt-5 text-base leading-relaxed text-ink/85">
                  Trata-se de uma camada complementar, não substitutiva. Isso
                  reduz fricção de venda, encurta o tempo de implementação e
                  elimina a resistência política do RH que já investiu no ATS
                  atual.
                </p>
              </div>
              <div className="md:col-span-5">
                <div className="border border-[var(--rule-strong)] p-7 bg-white/30">
                  <div className="eyebrow mb-4">Não é</div>
                  <div className="space-y-2 text-sm text-ink/75 leading-relaxed">
                    <p>Mais um ATS commodity.</p>
                    <p>Plataforma de sourcing.</p>
                    <p>Substituto de Greenhouse, Lever ou Workday.</p>
                    <p>Ferramenta de assessment isolada.</p>
                  </div>
                  <div className="rule my-5" />
                  <div className="eyebrow mb-4">É</div>
                  <div className="space-y-2 text-sm text-ink/85 leading-relaxed">
                    <p>Camada de decision intelligence comportamental.</p>
                    <p>Repositório de dados longitudinais proprietários.</p>
                    <p>Modelo preditivo de match quality.</p>
                    <p>Foco específico em early-career hiring.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rule" />

            <div>
              <div className="eyebrow mb-6">Pilares</div>
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-12">
                {pillars.map((p) => (
                  <div key={p.n} className="border-t border-ink/30 pt-5">
                    <div className="mono text-[10px] tracking-[0.22em] uppercase text-ash mb-3">
                      {p.n}
                    </div>
                    <h4 className="serif text-2xl mb-3">{p.h}</h4>
                    <p className="text-sm leading-relaxed text-ink/75">
                      {p.b}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rule-strong" />

            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-5">
                <p className="serif italic text-2xl leading-snug text-ink/90">
                  “O moat não é o produto. O moat são os dados que ele coleta
                  ao longo do tempo.”
                </p>
              </div>
              <div className="md:col-span-7">
                <h3 className="serif text-2xl md:text-3xl leading-tight mb-5">
                  Por que dados comportamentais longitudinais formam moat
                </h3>
                <p className="text-base leading-relaxed text-ink/85">
                  Quanto mais coortes a plataforma observar do início ao
                  desligamento ou à promoção, mais robustos ficam os modelos
                  preditivos de retenção, performance e fit. É um ativo que
                  cresce com o tempo, e não um diferencial de feature que pode
                  ser copiado em um ciclo de release.
                </p>
                <p className="mt-5 text-base leading-relaxed text-ink/85">
                  Um competidor que entre no espaço daqui a três anos
                  precisará reconstruir não apenas o produto, mas o histórico
                  de dados. Esse histórico é o ativo defensável real. Para um
                  ATS tradicional, o ativo é integração com o stack. Para a
                  Intaker, o ativo é a base de dados acumulada sobre o
                  comportamento de contratações ao longo do tempo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
