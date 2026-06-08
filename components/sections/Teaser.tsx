export default function Teaser() {
  return (
    <section
      id="teaser"
      className="px-6 md:px-10 py-24 md:py-32 border-b border-[var(--rule)]"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 md:col-span-3">
            <div className="eyebrow mb-4">Teaser</div>
            <p className="text-sm leading-relaxed text-ink/80">
              Trinta segundos sobre o que este paper analisa. Por que o funil
              americano de contratação para jovens talentos passou a operar
              em alto volume e baixa resolução, e o que isso implica para o
              desenho da próxima camada de ferramentas de hiring.
            </p>
            <div className="mt-6 mono text-[10px] tracking-[0.22em] uppercase text-ash leading-relaxed">
              <div>30 segundos</div>
              <div>Narração em português</div>
              <div>Formato vertical · 1080×1920</div>
            </div>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-5">
            <figure className="max-w-[360px] mx-auto md:mx-0">
              <div className="aspect-[9/16] border border-[var(--rule-strong)] bg-[#15130f]">
                <video
                  src="/intaker-teaser.mp4"
                  poster="/intaker-teaser-poster.jpg"
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="mt-4 mono text-[10px] tracking-[0.22em] uppercase text-ash">
                Fig. 01 · Síntese visual do paper. Som ligado recomendado.
              </figcaption>
            </figure>
          </div>

          <aside className="hidden md:block md:col-span-2 md:col-start-11">
            <div className="eyebrow mb-3">Distribuição</div>
            <div className="space-y-3 text-xs text-ink/65 leading-relaxed">
              <p>
                Pensado para LinkedIn, Instagram e abertura de decks de
                investidor.
              </p>
              <p>
                Produzido em Remotion. Mesmo design system do paper.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
