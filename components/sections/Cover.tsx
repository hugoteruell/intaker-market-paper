export default function Cover() {
  return (
    <section
      id="capa"
      className="relative min-h-[88vh] flex flex-col justify-between px-6 md:px-10 pt-24 pb-12 border-b border-[var(--rule)]"
    >
      <div className="max-w-[1280px] mx-auto w-full grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-3 mono text-[10px] tracking-[0.22em] uppercase text-ash space-y-1">
          <div>Volume 01</div>
          <div>Edição Maio 2026</div>
          <div>Confidencial, interno</div>
        </div>
        <div className="col-span-12 md:col-span-9">
          <div className="eyebrow mb-10">
            Intaker Research · Market Paper · Estados Unidos
          </div>
          <h1 className="serif text-[clamp(2.6rem,6.2vw,5.8rem)] leading-[0.98] tracking-tightest">
            Mais candidatos do que nunca.{" "}
            <em className="italic text-ash">Menos sinal do que nunca.</em>
          </h1>
          <p className="mt-12 max-w-2xl text-lg md:text-xl leading-relaxed text-ink/80">
            Um paper sobre a perda de resolução no processo americano de
            contratação para jovens talentos, e o que isso implica para o
            desenho da próxima geração de ferramentas de hiring.
          </p>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl">
            <div className="border-t border-ink/30 pt-4">
              <div className="serif text-2xl md:text-3xl tnum leading-none">
                400
              </div>
              <div className="text-xs text-ash mt-2 leading-snug">
                aplicações enviadas por candidato durante uma única busca de
                emprego
              </div>
            </div>
            <div className="border-t border-ink/30 pt-4">
              <div className="serif text-2xl md:text-3xl tnum leading-none">
                36
              </div>
              <div className="text-xs text-ash mt-2 leading-snug">
                candidatos em média por vaga entry-level em maio de 2024
              </div>
            </div>
            <div className="border-t border-ink/30 pt-4">
              <div className="serif text-2xl md:text-3xl tnum leading-none">
                33%
              </div>
              <div className="text-xs text-ash mt-2 leading-snug">
                do turnover voluntário acontece nos primeiros doze meses
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="max-w-[1280px] mx-auto w-full mt-20 grid grid-cols-12 gap-8 mono text-[10px] tracking-[0.22em] uppercase text-ash">
        <div className="col-span-6 md:col-span-3">
          <div className="text-ink mb-2">Autoria</div>
          <div>Intaker Research</div>
          <div>Análise estratégica</div>
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="text-ink mb-2">Escopo</div>
          <div>Estados Unidos</div>
          <div>HR Tech, early-career</div>
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="text-ink mb-2">Período</div>
          <div>2024 a 2034</div>
          <div>Dados, projeções e análise</div>
        </div>
        <div className="col-span-6 md:col-span-3">
          <div className="text-ink mb-2">Fontes principais</div>
          <div>IMARC, Fortune BI, NACE</div>
          <div>BLS, Fed NY, Deloitte</div>
        </div>
      </footer>
    </section>
  );
}
