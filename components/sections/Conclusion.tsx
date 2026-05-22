import SectionHeader from "@/components/SectionHeader";

const metrics = [
  {
    h: "Retenção",
    b: "Demonstrar, em comparação direta, que contratações feitas com Intaker apresentam taxa de retenção mensuravelmente maior aos seis e aos doze meses de casa.",
  },
  {
    h: "Adaptação cultural",
    b: "Demonstrar que essas contratações se adaptam mais rapidamente ao ambiente da empresa, com menor atrito reportado por gestores e equipes diretas.",
  },
  {
    h: "Velocidade de onboarding",
    b: "Demonstrar redução no tempo até produtividade plena, medida em ciclos padrão de revisão de performance.",
  },
  {
    h: "Redução de mismatch",
    b: "Demonstrar queda em casos de desligamento involuntário motivado por fit cultural ou comportamental nas coortes acompanhadas.",
  },
];

const next = [
  {
    n: "01",
    h: "Validar ICP",
    b: "Entrevistar 20 a 30 empresas enterprise e mid-market com programas estruturados de early-career, para confirmar dor, gatilhos de compra e disposição a pagar.",
  },
  {
    n: "02",
    h: "Quantificar dor",
    b: "Modelar com cada perfil de cliente o custo anual real do turnover precoce e do mismatch cultural, com base nos volumes do próprio ICP.",
  },
  {
    n: "03",
    h: "Prototipar solução",
    b: "Construir um MVP que demonstre captura de dados comportamentais em ambiente controlado, e que produza output legível para recrutadores e gestores.",
  },
  {
    n: "04",
    h: "Pilotar com cliente",
    b: "Conduzir pilotos de 6 a 12 meses com 1 ou 2 clientes do ICP, medindo retenção, adaptação e mismatch contra a baseline interna do próprio cliente.",
  },
  {
    n: "05",
    h: "Escalar GTM",
    b: "Com proof points consolidados de redução de turnover, escalar entrada nos setores-alvo identificados como de maior aderência.",
  },
];

export default function Conclusion() {
  return (
    <section id="conclusao" className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader
          n="09"
          kicker="Conclusão"
          title="O mercado mudou. Os sinais antigos perderam resolução. A próxima camada do stack de hiring será comportamental."
          lede="A oportunidade da Intaker é específica, mensurável e bem-temporizada. O timing é favorável não porque inteligência artificial está em alta, mas porque o mercado de trabalho early-career nos Estados Unidos está concretamente quebrado e o capital de paciência das empresas para suportá-lo está esgotando dentro do horizonte de planejamento atual."
        />

        <div className="grid grid-cols-12 gap-8 py-16">
          <aside className="col-span-12 md:col-span-3 space-y-10">
            <div>
              <div className="eyebrow mb-3">Síntese</div>
              <p className="text-sm leading-relaxed text-ink/75">
                O modelo industrial perdeu resolução. A Gen Z entrou em massa.
                ATSs otimizam workflow, não match. Os dados comportamentais
                finalmente são viáveis em escala. Nenhum player reivindicou a
                categoria. A janela existe agora.
              </p>
            </div>
            <div>
              <div className="eyebrow mb-3">Métrica única</div>
              <p className="text-sm leading-relaxed text-ink/85">
                Se uma métrica precisa importar, ela é retenção aos doze
                meses. Todas as demais correlacionam com ela.
              </p>
            </div>
          </aside>

          <div className="col-span-12 md:col-span-9 space-y-16">
            <div>
              <h3 className="serif text-3xl md:text-4xl leading-tight mb-8">
                Por que a janela é agora.
              </h3>
              <div className="grid md:grid-cols-5 gap-6 border-t border-[var(--rule-strong)]">
                {[
                  {
                    h: "Gen Z em massa",
                    b: "Classe 2025 plenamente no mercado. Classe 2026 a caminho. Coorte dominante na próxima década.",
                  },
                  {
                    h: "Mismatch visível",
                    b: "Turnover precoce afetando resultados, custo de capital humano e moral interno.",
                  },
                  {
                    h: "Employer branding como prioridade",
                    b: "Empresas estão ativamente buscando melhorar retenção e percepção externa.",
                  },
                  {
                    h: "Dados viáveis",
                    b: "IA e ML estão maduros o suficiente para modelagem comportamental em escala.",
                  },
                  {
                    h: "Competição ainda baixa",
                    b: "Nenhum player focado especificamente em decision intelligence early-career.",
                  },
                ].map((c, i) => (
                  <div
                    key={c.h}
                    className="border-r last:border-r-0 border-[var(--rule)] py-6 pr-5"
                  >
                    <div className="mono text-[10px] tracking-[0.22em] uppercase text-ash mb-3 tnum">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h4 className="text-base text-ink mb-2">{c.h}</h4>
                    <p className="text-xs leading-relaxed text-ink/70">
                      {c.b}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="eyebrow mb-6">Métricas de sucesso</div>
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-10">
                {metrics.map((m) => (
                  <div key={m.h} className="border-t border-ink/30 pt-4">
                    <h4 className="serif text-xl mb-2">{m.h}</h4>
                    <p className="text-sm leading-relaxed text-ink/75">
                      {m.b}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-ink/70 max-w-3xl">
                Todas são mensuráveis. Todas impactam diretamente o P&amp;L do
                cliente. Nenhuma depende de mensuração subjetiva ou de
                autorrelato.
              </p>
            </div>

            <div>
              <div className="eyebrow mb-6">Próximos passos</div>
              <ol className="space-y-5">
                {next.map((n) => (
                  <li
                    key={n.n}
                    className="grid md:grid-cols-12 gap-4 border-b border-[var(--rule)] pb-5"
                  >
                    <div className="md:col-span-1 mono text-[10px] tracking-[0.22em] uppercase text-ash tnum">
                      {n.n}
                    </div>
                    <div className="md:col-span-3 text-ink text-base">
                      {n.h}
                    </div>
                    <div className="md:col-span-8 text-sm leading-relaxed text-ink/75">
                      {n.b}
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rule-strong" />

            <div>
              <p className="serif text-3xl md:text-5xl leading-tight max-w-4xl">
                O timing é favorável. A janela existe agora. A pergunta não é
                se decision intelligence comportamental será uma categoria. É
                quem construirá a infraestrutura primeiro, antes que players
                maiores reconheçam o espaço e entrem nele.
              </p>
            </div>
          </div>
        </div>

        <footer className="mt-32 mb-16 grid grid-cols-12 gap-8 pt-10 border-t border-[var(--rule-strong)]">
          <div className="col-span-12 md:col-span-4 mono text-[10px] tracking-[0.22em] uppercase text-ash">
            <div className="text-ink mb-2">Intaker Research</div>
            <div>Decision intelligence comportamental</div>
            <div>para contratação early-career</div>
          </div>
          <div className="col-span-6 md:col-span-4 mono text-[10px] tracking-[0.22em] uppercase text-ash">
            <div className="text-ink mb-2">Relatório</div>
            <div>Maio 2026</div>
            <div>Volume 01</div>
            <div>Confidencial, interno</div>
          </div>
          <div className="col-span-6 md:col-span-4 mono text-[10px] tracking-[0.22em] uppercase text-ash">
            <div className="text-ink mb-2">Fontes consolidadas</div>
            <div>IMARC, Technavio, Fortune BI, SNS</div>
            <div>NACE, BLS, Fed NY, Indeed, Gusto</div>
            <div>Deloitte, Randstad, WEF, Mercer, Paycor</div>
            <div>GetLatka, 6sense, TechnologyChecker</div>
          </div>
        </footer>
      </div>
    </section>
  );
}
