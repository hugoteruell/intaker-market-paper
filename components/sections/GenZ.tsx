import SectionHeader from "@/components/SectionHeader";

const tenure = [
  { gen: "Baby Boomers", val: 2.9 },
  { gen: "Gen X", val: 2.8 },
  { gen: "Millennials", val: 1.8 },
  { gen: "Gen Z", val: 1.1 },
];

const expectations = [
  {
    pct: "70%",
    title: "Promoção em dezoito meses",
    body: "Esperam ser promovidos nos primeiros dezoito meses no cargo. A expectativa é significativamente mais alta que a de gerações anteriores e frequentemente incompatível com a estrutura de carreira da empresa contratante.",
  },
  {
    pct: "74%",
    title: "Salários competitivos cedo",
    body: "Esperam salários altos no início de carreira. Apesar disso, ponderam salário com peso menor que gerações anteriores, indicando peso adicional para cultura, propósito e desenvolvimento.",
  },
  {
    pct: "69%",
    title: "Valores compartilhados",
    body: "Querem trabalhar em empresas que compartilham seus valores. Métrica central de fit cultural. Empresas com employer branding forte têm vantagem competitiva mensurável.",
  },
  {
    pct: "77%",
    title: "Diversidade e inclusão inegociáveis",
    body: "Consideram diversidade e inclusão fator não negociável na escolha do empregador. Empresas sem programas estruturados perderão acesso progressivo a esse talento.",
  },
  {
    pct: "57%",
    title: "Preferem trabalho presencial",
    body: "Preferem trabalho presencial, contrariando a narrativa dominante. Apenas 27% favorecem regime totalmente remoto. O dado sinaliza valorização de mentoria, conexão social e aprendizado por proximidade.",
  },
  {
    pct: "86%",
    title: "Soft skills como motor de carreira",
    body: "Atribuem peso elevado a soft skills como comunicação, colaboração e liderança no avanço profissional. Contraste claro com o foco tradicional em hard skills.",
  },
  {
    pct: "59%",
    title: "Fluência em IA como diferencial",
    body: "Acreditam que habilidades em inteligência artificial são essenciais para o avanço de carreira. O dado reflete a realidade do mercado em 2025 e 2026, onde IA está se tornando ubíqua.",
  },
  {
    pct: "22%",
    title: "Já saíram de um emprego",
    body: "Já deixaram ao menos um emprego, quase o dobro da taxa dos millennials (cerca de 11%). Indicador central de que o modelo tradicional de retenção não está se aplicando a essa geração.",
  },
];

const traits = [
  {
    h: "Comunica diferente",
    b: "Tom menos formal, mais autêntico, com valorização explícita de transparência. Comunicação corporativa tradicional gera atrito perceptível.",
  },
  {
    h: "Rejeita burocracia de seleção",
    b: "Processos longos, com múltiplas etapas e formulários extensos, são abandonados antes da conclusão em proporção crescente.",
  },
  {
    h: "Avalia identidade no trabalho",
    b: "Não opera com fronteira nítida entre cultura e performance. Marca pessoal e marca empregadora entram juntas na decisão.",
  },
  {
    h: "Valoriza autenticidade",
    b: "Menos espaço para mensagens corporativas vagas. Linguagem de employer branding genérica perde efeito acelerado.",
  },
];

export default function GenZ() {
  const max = Math.max(...tenure.map((t) => t.val));

  return (
    <section id="genz" className="px-6 md:px-10 bg-paper">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader
          n="04"
          kicker="Gen Z, behavioral research"
          title="A Gen Z não quebrou o modelo. Apenas parou de operar dentro dele."
          lede="Nascidos entre 1997 e 2012, os jovens da Gen Z chegam ao mercado de trabalho com expectativas, valores e modos de sinalização de competência diferentes das gerações anteriores. As ferramentas tradicionais de avaliação (testes padronizados, formulários extensos, entrevistas estruturadas em formato clássico) foram desenhadas para outro modo de sinalização e capturam menos do que se propõem a capturar."
        />

        <div className="grid grid-cols-12 gap-8 py-16">
          <aside className="col-span-12 md:col-span-3 space-y-10">
            <div>
              <div className="eyebrow mb-3">A geração</div>
              <p className="text-sm leading-relaxed text-ink/75">
                Nascidos entre 1997 e 2012. Em 2026, a Classe de 2025 está
                plenamente no mercado e a Classe de 2026 entra na sequência.
                Essa será a coorte dominante de contratação early-career pela
                próxima década.
              </p>
            </div>
            <div>
              <div className="eyebrow mb-3">Implicação prática</div>
              <p className="text-sm leading-relaxed text-ink/75">
                Se a sinalização mudou, a captura precisa mudar também.
                Ferramentas que avaliam por proxies tradicionais
                sub-capturam o potencial real desse perfil de candidato. O
                custo direto desse gap aparece em mismatch elevado e em
                turnover precoce.
              </p>
            </div>
            <div>
              <div className="eyebrow mb-3">Fontes</div>
              <p className="text-[11px] mono text-ash leading-relaxed">
                Deloitte 2026 Gen Z &amp; Millennial Survey, Randstad
                Workplace 2025, World Economic Forum, Cake, High5.
              </p>
            </div>
          </aside>

          <div className="col-span-12 md:col-span-9 space-y-20">
            <div>
              <div className="eyebrow mb-6">
                Permanência média por geração nos primeiros cinco anos de
                carreira
              </div>
              <div className="space-y-6">
                {tenure.map((t) => (
                  <div
                    key={t.gen}
                    className="grid grid-cols-12 gap-4 items-center border-b border-[var(--rule)] pb-5"
                  >
                    <div className="col-span-12 md:col-span-3 text-base">
                      {t.gen}
                    </div>
                    <div className="col-span-9 md:col-span-7">
                      <div className="h-px bg-ink/10 relative">
                        <div
                          className="absolute inset-y-0 left-0 bg-ink"
                          style={{
                            width: `${(t.val / max) * 100}%`,
                            background:
                              t.gen === "Gen Z" ? "var(--accent)" : undefined,
                          }}
                        />
                      </div>
                    </div>
                    <div className="col-span-3 md:col-span-2 text-right serif text-xl md:text-2xl tnum">
                      {t.val.toString().replace(".", ",")}{" "}
                      <span className="mono text-xs text-ash">anos</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-ink/70 max-w-3xl">
                A diferença entre Gen Z e Boomers é estrutural, não
                comportamental no sentido pejorativo do termo. Reflete valores
                diferentes em relação a emprego, mobilidade, propósito e o que
                constitui carreira. Fontes: BLS, Mercer, Paycor, HR.com,
                edições de 2025.
              </p>
            </div>

            <div>
              <div className="eyebrow mb-6">Expectativas e valores</div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
                {expectations.map((e) => (
                  <div key={e.title}>
                    <div className="serif text-4xl md:text-5xl tnum leading-none">
                      {e.pct}
                    </div>
                    <div className="rule my-4" />
                    <div className="text-sm text-ink mb-2">{e.title}</div>
                    <p className="text-xs text-ink/65 leading-relaxed">
                      {e.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rule-strong" />

            <div>
              <div className="grid md:grid-cols-12 gap-10">
                <div className="md:col-span-4">
                  <div className="eyebrow mb-4">Sinalização de competência</div>
                  <p className="serif italic text-2xl leading-snug text-ink/90">
                    A Gen Z não separa cultura de performance. Avalia
                    identidade antes de avaliar o cargo.
                  </p>
                </div>
                <div className="md:col-span-8 grid md:grid-cols-2 gap-8">
                  {traits.map((t) => (
                    <div key={t.h} className="border-t border-ink/20 pt-4">
                      <h4 className="text-base text-ink mb-2">{t.h}</h4>
                      <p className="text-sm text-ink/70 leading-relaxed">
                        {t.b}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rule" />

            <div className="grid md:grid-cols-12 gap-10">
              <div className="md:col-span-7">
                <h3 className="serif text-2xl md:text-3xl leading-tight mb-5">
                  Implicações para o desenho de ferramentas de avaliação
                </h3>
                <p className="text-base leading-relaxed text-ink/85">
                  Se o modo como esse perfil sinaliza competência mudou, a
                  captura também precisa mudar. Testes padronizados,
                  formulários estendidos e entrevistas estruturadas no formato
                  tradicional foram desenhados para candidatos formados no
                  molde corporativo do século XX. A Gen Z, em geral, não
                  sinaliza por esse molde. Não porque falte competência, mas
                  porque a expressa por canais e linguagens diferentes.
                </p>
                <p className="mt-5 text-base leading-relaxed text-ink/85">
                  A consequência prática é direta. Empresas que dependem
                  exclusivamente de ferramentas tradicionais sub-capturam
                  talento Gen Z e super-capturam candidatos que sabem performar
                  testes. É uma forma específica de mismatch, geralmente
                  invisível na própria fase de contratação e visível apenas
                  meses depois, quando o turnover acontece.
                </p>
              </div>
              <div className="md:col-span-5">
                <div className="border border-[var(--rule-strong)] p-7 bg-white/30">
                  <div className="eyebrow mb-4">Conexão com a tese</div>
                  <p className="text-sm leading-relaxed text-ink/85">
                    Decision intelligence comportamental existe para capturar
                    sinal no modo como a Gen Z sinaliza. Interações
                    longitudinais, comportamento em contexto e correlação com
                    outcomes reais de retenção e performance medidos depois da
                    contratação.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink/85">
                    Não substitui hard skills. Adiciona uma dimensão que o ATS
                    tradicional não mede e que nenhum dos players atuais
                    explora como categoria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
