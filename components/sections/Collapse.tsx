import SectionHeader from "@/components/SectionHeader";

export default function Collapse() {
  return (
    <section id="colapso" className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader
          n="03"
          kicker="O funil quebrou"
          title="O mercado early-career não tem escassez de vagas. Tem escassez de sinal."
          lede="Entre o primeiro trimestre de 2021 e o segundo trimestre de 2024, as postagens de vagas entry-level caíram 11,2%. Mas o problema relatado por empresas e candidatos não é volume de oportunidades. É composição do funil. O sistema, otimizado para processar fluxo, parou de conseguir distinguir candidatos uns dos outros."
        />

        <div className="grid grid-cols-12 gap-8 py-16">
          <aside className="col-span-12 md:col-span-3 space-y-10">
            <div>
              <div className="eyebrow mb-3">Indicadores estruturais</div>
              <div className="space-y-5">
                <div className="border-l-2 border-ink/20 pl-4">
                  <div className="serif text-2xl tnum">−11,2%</div>
                  <div className="text-xs text-ash mt-1 leading-snug">
                    Postagens entry-level, do primeiro trimestre de 2021 ao
                    segundo trimestre de 2024.
                  </div>
                </div>
                <div className="border-l-2 border-ink/20 pl-4">
                  <div className="serif text-2xl tnum">5,6%</div>
                  <div className="text-xs text-ash mt-1 leading-snug">
                    Desemprego entre graduados de 22 a 27 anos, contra 4,2% da
                    taxa geral.
                  </div>
                </div>
                <div className="border-l-2 border-accent pl-4">
                  <div className="serif text-2xl tnum">−44%</div>
                  <div className="text-xs text-ash mt-1 leading-snug">
                    Taxa de contratação da Classe de 2025 em relação ao pico
                    da Classe de 2022.
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="eyebrow mb-3">Fontes</div>
              <p className="text-[11px] mono text-ash leading-relaxed">
                NACE 2026, Indeed 2025, ZipRecruiter, LinkedIn, Federal Reserve
                of New York, Gusto.
              </p>
            </div>
          </aside>

          <div className="col-span-12 md:col-span-9 space-y-16">
            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-7">
                <h3 className="serif text-3xl md:text-4xl leading-tight mb-6">
                  Volume cresceu dos dois lados. Resolução caiu nos dois.
                </h3>
                <p className="dropcap text-base leading-relaxed text-ink/85">
                  Em maio de 2024, cada vaga entry-level recebia em média 36
                  candidatos, alta de 22% em relação ao ano anterior. Do outro
                  lado, candidatos enviam cerca de 400 aplicações ao longo de
                  uma única busca completa. O resultado é um sistema em que
                  ambas as pontas produzem ruído em volume, com pouco sinal
                  aproveitável. Candidatos relatam ghosting generalizado.
                  Recrutadores recebem milhares de currículos quase
                  indistinguíveis e filtram por proxies fracos.
                </p>
                <p className="mt-6 text-base leading-relaxed text-ink/85">
                  A taxa de contratação da Classe de 2025, medida pela Gusto,
                  é de apenas 4,8%, queda de 44% em relação ao pico da Classe
                  de 2022. O número não responde a um ciclo macroeconômico
                  típico. Responde a uma deterioração estrutural do funil
                  entry-level, observável ao longo dos últimos quatro anos.
                </p>
              </div>
              <div className="md:col-span-5">
                <div className="border border-[var(--rule-strong)] p-7 bg-white/30">
                  <div className="eyebrow mb-4">Anatomia do ruído</div>
                  <dl className="space-y-4 text-sm">
                    <div className="flex justify-between gap-4 border-b border-[var(--rule)] pb-3">
                      <dt className="text-ink">Aplicações por candidato</dt>
                      <dd className="serif text-xl tnum">≈ 400</dd>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-[var(--rule)] pb-3">
                      <dt className="text-ink">Candidatos por vaga (APO)</dt>
                      <dd className="serif text-xl tnum">36</dd>
                    </div>
                    <div className="flex justify-between gap-4 border-b border-[var(--rule)] pb-3">
                      <dt className="text-ink">Variação YoY do APO</dt>
                      <dd className="serif text-xl tnum">+22%</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-ink">Hire rate Classe 2025</dt>
                      <dd className="serif text-xl tnum">4,8%</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>

            <div className="rule" />

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="eyebrow mb-4">Do lado do candidato</div>
                <ol className="space-y-5 text-base leading-relaxed text-ink/85 list-none counter-reset-item">
                  <li className="flex gap-4">
                    <span className="mono text-xs text-ash tnum mt-1.5">01</span>
                    <span>
                      Envia centenas de aplicações como estratégia de
                      cobertura, dado que o retorno individual por aplicação é
                      historicamente baixo.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="mono text-xs text-ash tnum mt-1.5">02</span>
                    <span>
                      Recebe ghosting frequente. A maioria das aplicações
                      jamais gera resposta, mesmo automatizada.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="mono text-xs text-ash tnum mt-1.5">03</span>
                    <span>
                      Preenche formulários longos e responde a testes genéricos
                      que não refletem o trabalho real da posição.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="mono text-xs text-ash tnum mt-1.5">04</span>
                    <span>
                      Conclui o processo sem feedback estruturado, o que
                      perpetua o ciclo de aplicação em massa.
                    </span>
                  </li>
                </ol>
              </div>
              <div>
                <div className="eyebrow mb-4">Do lado da empresa</div>
                <ol className="space-y-5 text-base leading-relaxed text-ink/85 list-none">
                  <li className="flex gap-4">
                    <span className="mono text-xs text-ash tnum mt-1.5">01</span>
                    <span>
                      Recebe milhares de candidatos por vaga, com diferenciação
                      reduzida em currículos cada vez mais padronizados,
                      inclusive por geração assistida por IA.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="mono text-xs text-ash tnum mt-1.5">02</span>
                    <span>
                      Filtra por proxies fracos: diploma, palavras-chave,
                      experiência declarada e instituição de origem.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="mono text-xs text-ash tnum mt-1.5">03</span>
                    <span>
                      Toma a decisão final com baixa densidade de sinal sobre
                      fit cultural, motivação ou comportamento observável.
                    </span>
                  </li>
                  <li className="flex gap-4">
                    <span className="mono text-xs text-ash tnum mt-1.5">04</span>
                    <span>
                      Encara turnover precoce que evidencia, em retrospecto,
                      que o sinal coletado não previu retenção nem performance.
                    </span>
                  </li>
                </ol>
              </div>
            </div>

            <div className="rule-strong" />

            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-4">
                <p className="serif italic text-2xl leading-snug text-ink/90">
                  “O sistema é spam bidirecional. Ambos os lados produzem
                  volume sem produzir sinal.”
                </p>
                <div className="mono text-[10px] tracking-[0.2em] uppercase text-ash mt-4">
                  Diagnóstico operacional
                </div>
              </div>
              <div className="md:col-span-8">
                <p className="text-base leading-relaxed text-ink/85">
                  O mismatch que emerge desse processo é massivo. Decisões de
                  contratação baseadas em proxies fracos têm correlação
                  limitada com retenção, performance e fit cultural, três
                  variáveis que, conjuntamente, determinam o retorno real de
                  cada contratação.
                </p>
                <p className="mt-6 text-base leading-relaxed text-ink/85">
                  A leitura estratégica que esse padrão permite é direta. Não
                  faz sentido tentar otimizar o mesmo funil. A oportunidade
                  está em introduzir uma camada paralela que opere com sinal
                  distinto: comportamento observado, padrões longitudinais e
                  correlação com outcomes reais pós-contratação. É essa camada
                  que ainda não existe como categoria estabelecida no mercado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
