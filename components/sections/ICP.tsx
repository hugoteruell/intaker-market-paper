import SectionHeader from "@/components/SectionHeader";

const sectors = [
  {
    s: "Varejo Premium",
    why: "Alto volume, turnover historicamente alto, employer branding como ativo competitivo.",
    vol: "500 a 2.000 / ano",
    pain: "Retenção e fit cultural",
  },
  {
    s: "Bancos",
    why: "Programas estruturados de trainee, volume elevado e necessidade de compliance.",
    vol: "1.000 a 5.000 / ano",
    pain: "Mismatch e retenção",
  },
  {
    s: "Fintechs",
    why: "Crescimento rápido, contratação em massa, cultura tratada como diferencial de produto.",
    vol: "200 a 1.000 / ano",
    pain: "Retenção e fit cultural",
  },
  {
    s: "Consultorias",
    why: "Programas de analyst e associate, volume elevado e seleção rigorosa.",
    vol: "500 a 2.000 / ano",
    pain: "Retenção e performance",
  },
  {
    s: "Big Tech",
    why: "Programas estruturados, volume elevado e employer branding consolidado.",
    vol: "1.000 a 5.000 / ano",
    pain: "Retenção e fit cultural",
  },
  {
    s: "Telecom",
    why: "Contratação recorrente, volume alto e processos em transformação digital.",
    vol: "500 a 2.000 / ano",
    pain: "Retenção e modernização",
  },
  {
    s: "Hospitalidade",
    why: "Volume entry-level alto, turnover historicamente muito alto.",
    vol: "1.000 a 5.000 / ano",
    pain: "Retenção e custo de turnover",
  },
  {
    s: "Operações Escaláveis",
    why: "Onboarding pesado, volume elevado e processos padronizados.",
    vol: "500 a 2.000 / ano",
    pain: "Retenção e eficiência",
  },
];

const criteria = [
  "Contratam mais de cem jovens talentos por ano de forma recorrente.",
  "Sofrem com turnover precoce acima de 20% no primeiro ano.",
  "Possuem employer branding forte e reconhecido pelo mercado.",
  "Têm programas estruturados de trainee, estágio ou early careers.",
  "Já tratam cultura interna como ativo competitivo, não como variável macia.",
  "Possuem orçamento de RH disponível, na faixa de US$ 500 mil por ano em recrutamento.",
  "Têm dor reputacional acumulada com má contratação no segmento.",
  "Fazem hiring recorrente em ciclos previsíveis, não apenas one-off.",
];

const programs = [
  {
    h: "Trainee Programs",
    b: "Programas de 1 a 2 anos para recém-graduados, com rotação entre departamentos e plano de carreira definido.",
  },
  {
    h: "Internship Programs",
    b: "Estágios estruturados, geralmente com conversão para full-time pós-formatura como caminho central de captação.",
  },
  {
    h: "Early Careers Programs",
    b: "Programas de 2 a 3 anos para recém-graduados, com mentoria estruturada e plano de desenvolvimento explícito.",
  },
  {
    h: "Programas Universitários",
    b: "Parcerias com universidades para construir pipeline de longo prazo. Funciona melhor combinado com programas de estágio.",
  },
  {
    h: "Liderança Jovem",
    b: "Programas voltados a identificar e desenvolver perfis de liderança dentro da própria organização.",
  },
  {
    h: "Customer-Facing Junior",
    b: "Posições em vendas, customer success e operações com alta rotatividade típica e necessidade de fit cultural alto.",
  },
];

export default function ICP() {
  return (
    <section id="icp" className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader
          n="08"
          kicker="Ideal customer profile"
          title="O ICP real não é definido por setor. É definido por maturidade de RH."
          lede="“Toda empresa que contrata jovens” é mercado amplo demais para um go-to-market viável. O ICP funcional é mais estreito. São empresas enterprise e mid-market com programas estruturados de early-career, que já sofreram com turnover precoce e estão buscando ativamente uma solução estruturada. Mercado mais específico, mas com propensão de compra significativamente maior."
        />

        <div className="grid grid-cols-12 gap-8 py-16">
          <aside className="col-span-12 md:col-span-3 space-y-10">
            <div>
              <div className="eyebrow mb-3">Filtro de tamanho</div>
              <p className="text-sm leading-relaxed text-ink/75">
                Empresas enterprise e mid-market que contratam acima de cem
                jovens por ano. Abaixo desse volume, o ROI da camada
                comportamental fica difícil de provar dentro do ciclo de venda,
                e o ATS tradicional ainda cobre razoavelmente bem o caso de
                uso.
              </p>
            </div>
            <div>
              <div className="eyebrow mb-3">Maturidade como filtro</div>
              <p className="text-sm leading-relaxed text-ink/75">
                A maioria das empresas ainda acha fit cultural importante, mas
                contrata no Excel, emocionalmente. Essas não compram Intaker.
                Quem compra é o RH que já percebeu que skill mismatch custa
                dinheiro e está disposto a estruturar a discussão internamente.
              </p>
            </div>
          </aside>

          <div className="col-span-12 md:col-span-9 space-y-20">
            <div>
              <div className="eyebrow mb-6">Critérios do ICP</div>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                {criteria.map((c, i) => (
                  <div
                    key={c}
                    className="flex gap-4 border-b border-[var(--rule)] pb-3"
                  >
                    <span className="mono text-[11px] tnum text-ash w-6 mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-ink/85">{c}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="eyebrow mb-6">
                Setores-alvo com maior aderência
              </div>
              <div className="border-t border-[var(--rule-strong)]">
                <div className="hidden md:grid grid-cols-12 gap-4 py-3 mono text-[10px] tracking-[0.22em] uppercase text-ash border-b border-[var(--rule)]">
                  <div className="col-span-3">Setor</div>
                  <div className="col-span-5">Razão de aderência</div>
                  <div className="col-span-2">Volume típico</div>
                  <div className="col-span-2">Dor típica</div>
                </div>
                {sectors.map((row) => (
                  <div
                    key={row.s}
                    className="grid md:grid-cols-12 gap-4 py-5 border-b border-[var(--rule)] items-baseline"
                  >
                    <div className="md:col-span-3 text-ink text-base">
                      {row.s}
                    </div>
                    <div className="md:col-span-5 text-sm text-ink/75 leading-snug">
                      {row.why}
                    </div>
                    <div className="md:col-span-2 mono text-xs text-ash tnum">
                      {row.vol}
                    </div>
                    <div className="md:col-span-2 text-sm italic text-ash">
                      {row.pain}
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm leading-relaxed text-ink/70 max-w-3xl">
                A análise prioriza setores que combinam volume alto, turnover
                conhecido e maturidade de programa. Hospitalidade e Varejo
                Premium têm o maior turnover relativo. Big Tech e Bancos
                concentram o maior volume estruturado. Fintechs e Consultorias
                acumulam a maior concentração de dor cultural reportada.
              </p>
            </div>

            <div>
              <div className="eyebrow mb-6">
                Programas onde a Intaker se encaixa
              </div>
              <div className="grid md:grid-cols-3 gap-x-8 gap-y-10">
                {programs.map((p) => (
                  <div key={p.h} className="border-t border-ink/30 pt-4">
                    <h4 className="serif text-xl mb-2">{p.h}</h4>
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
                  “Quem compra Intaker é o RH que já percebeu que skill
                  mismatch custa dinheiro.”
                </p>
              </div>
              <div className="md:col-span-7">
                <h3 className="serif text-2xl md:text-3xl leading-tight mb-5">
                  Sinais de que o ICP está pronto
                </h3>
                <div className="space-y-3 text-base leading-relaxed text-ink/85">
                  <p>
                    Turnover documentado de contratações com menos de doze
                    meses de casa, recorrente nas últimas coortes.
                  </p>
                  <p>
                    Contratações que performam tecnicamente mas implodem
                    culturalmente, em frequência percebida pelos líderes de
                    linha.
                  </p>
                  <p>
                    Líderes de linha frustrados com contratações boas no papel
                    mas que não funcionam na prática.
                  </p>
                  <p>
                    Jovens desengajando rapidamente após o onboarding,
                    sinalizando desalinhamento de expectativa.
                  </p>
                  <p>
                    Conversa interna sobre custo de turnover já estabelecida no
                    comitê de operações, e não restrita ao RH.
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
