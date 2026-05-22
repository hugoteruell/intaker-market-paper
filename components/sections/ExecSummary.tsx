import SectionHeader from "@/components/SectionHeader";
import Stat from "@/components/Stat";

export default function ExecSummary() {
  return (
    <section id="sumario" className="px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        <SectionHeader
          n="01"
          kicker="Sumário Executivo"
          title="Por que o aumento de volume coincide com queda de qualidade no funil early-career."
          lede="Entre 2021 e 2024, o número médio de candidatos por vaga entry-level nos Estados Unidos subiu 22%. No mesmo período, a taxa de contratação da classe graduada caiu 44% em relação ao pico de 2022. Este paper analisa como esses dois movimentos coexistem, o que eles dizem sobre a qualidade do sinal no funil de hiring early-career, e como uma camada de inteligência comportamental se posiciona em relação aos sistemas existentes."
        />

        <div className="grid grid-cols-12 gap-8 py-16">
          <aside className="col-span-12 md:col-span-3 space-y-10">
            <div>
              <div className="eyebrow mb-3">Tese central</div>
              <p className="serif italic text-lg leading-snug text-ink/85">
                Volume aumentou. Resolução do sinal caiu. A camada que faltava
                no stack de hiring opera sobre comportamento, não sobre
                currículo.
              </p>
            </div>
            <div>
              <div className="eyebrow mb-3">Por que agora</div>
              <p className="text-sm text-ink/70 leading-relaxed">
                A Gen Z está entrando em massa no mercado. O mismatch ficou
                visível no P&amp;L. Os dados comportamentais finalmente são
                viáveis em escala. Nenhum dos players atuais reivindicou
                explicitamente a categoria de decision intelligence
                early-career.
              </p>
            </div>
          </aside>

          <div className="col-span-12 md:col-span-9 space-y-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 gap-y-12">
              <Stat
                value="US$ 12,28B"
                label="Tamanho do mercado de HR Technology nos Estados Unidos em 2025."
                note="IMARC, 2025"
              />
              <Stat
                value="US$ 31,75B"
                label="Projeção do mesmo mercado até 2034, com CAGR de 11,14%."
                note="Fortune BI, 2025"
              />
              <Stat
                value="400"
                label="Aplicações que um candidato envia em média durante uma busca completa."
                note="Indeed, LinkedIn"
              />
              <Stat
                value="36"
                label="Candidatos em média por vaga entry-level em maio de 2024, alta de 22% no ano."
                note="ZipRecruiter"
              />
              <Stat
                value="22%"
                label="Da Gen Z já abandonou ao menos um emprego, quase o dobro da taxa millennial."
                note="Deloitte, 2026"
              />
              <Stat
                value="33%"
                label="De todo o turnover voluntário ocorre nos primeiros doze meses de casa."
                note="HR.com, Mercer"
              />
              <Stat
                value="4,8%"
                label="Taxa de contratação da Classe de 2025, queda de 44% em relação a 2022."
                note="Gusto, 2025"
              />
              <Stat
                value="1,1 ano"
                label="Permanência média da Gen Z em um cargo nos cinco primeiros anos de carreira."
                note="BLS, Paycor"
              />
            </div>

            <div className="rule-strong" />

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="eyebrow mb-4">Diagnóstico</div>
                <p className="text-base leading-relaxed text-ink/85">
                  O agregado de HR Tech cresce a 11,14% ao ano. O sub-mercado
                  de recruitment software cresce ainda mais rápido, entre 7,85%
                  e 9,6%. A demanda existe e está concentrada em soluções que
                  vão além do ATS de prateleira. Ao mesmo tempo, do lado
                  operacional, o funil early-career opera com baixa densidade
                  de sinal. Empresas recebem milhares de candidatos quase
                  indistinguíveis e tomam decisão por proxies fracos como
                  diploma, palavras-chave e testes genéricos. O resultado é
                  mismatch elevado e turnover precoce em até três vezes a meta
                  saudável.
                </p>
              </div>
              <div>
                <div className="eyebrow mb-4">Oportunidade</div>
                <p className="text-base leading-relaxed text-ink/85">
                  O posicionamento correto para a Intaker não é competir como
                  ATS commodity. É operar como camada complementar ao ATS
                  existente, capturando sinal comportamental longitudinal que
                  hoje não está sendo coletado nem usado. Esse sinal alimenta
                  modelos preditivos de retenção, performance e fit cultural.
                  O ativo defensável não é o produto, mas a base de dados que
                  se acumula sobre quais perfis de Gen Z ficam, saem, performam
                  ou imploram culturalmente. É um ativo cujo valor cresce a
                  cada coorte observada.
                </p>
              </div>
            </div>

            <div className="rule" />

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="eyebrow mb-3">01 · O que mudou</div>
                <p className="text-sm leading-relaxed text-ink/75">
                  A Gen Z sinaliza competência de forma diferente. A
                  permanência média caiu para 1,1 ano. Cultura e performance
                  deixaram de funcionar como categorias separadas no processo
                  de avaliação.
                </p>
              </div>
              <div>
                <div className="eyebrow mb-3">02 · O que quebrou</div>
                <p className="text-sm leading-relaxed text-ink/75">
                  O funil de ambos os lados virou volume sem sinal. Candidatos
                  enviam centenas de aplicações por estatística. Empresas
                  recebem milhares de currículos cada vez mais padronizados,
                  inclusive por geração assistida por IA.
                </p>
              </div>
              <div>
                <div className="eyebrow mb-3">03 · O que vem</div>
                <p className="text-sm leading-relaxed text-ink/75">
                  A próxima camada do stack de hiring é decision intelligence
                  comportamental, complementar ao ATS, e medida por outcomes
                  reais: retenção, adaptação cultural, velocidade de
                  onboarding e redução de mismatch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
