import { IMAGES } from "../lib/site";
import { ChapterTag, Reveal } from "./Reveal";

const CESAR_CREDENTIALS = [
  "Formação em Educação Física",
  "Faixa-preta de Jiu-Jitsu desde 2009",
  "Criador e coordenador da Grip Fight",
  "Experiência com crianças, jovens e atletas",
  "Vivência competitiva nacional e internacional",
  "Intercâmbio Brasil–Suécia",
];

export const Team = () => (
  <section id="equipe" data-testid="team-section" className="bg-paper py-24 text-ink md:py-32">
    <div className="mx-auto max-w-[1400px] px-5 md:px-10">
      <Reveal>
        <ChapterTag number="06" label="A equipe" dark={false} testId="team-chapter" />
      </Reveal>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl uppercase leading-[1.02] sm:text-5xl lg:text-6xl" data-testid="team-title">
            Quem está por trás de <span className="text-blood">cada treino.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="max-w-md text-base leading-relaxed text-ink/60 md:text-lg lg:ml-auto">
            Experiência, dedicação e vivência no tatame.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 space-y-20">
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16" data-testid="team-cesar">
          <Reveal>
            <figure className="frame-corners relative">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-ink/10">
                <img
                  src={IMAGES.cesar}
                  alt="César Pinheiro, faixa-preta de Jiu-Jitsu e coordenador da Grip Fight"
                  data-testid="team-cesar-image"
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50">
                <span>César Pinheiro</span>
                <span>Fundador &amp; Coordenador</span>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-blood">O formador</span>
              <h3 className="mt-3 font-display text-3xl uppercase tracking-wide sm:text-4xl lg:text-5xl">
                César Pinheiro
              </h3>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 md:text-lg">
                César Pinheiro é formado em Educação Física e faixa-preta de Jiu-Jitsu desde 2009.
                É formador, criador e coordenador da equipe Grip Fight, com ampla experiência na
                educação de crianças e jovens e na preparação física de atletas de combate.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2" data-testid="team-cesar-credentials">
                {CESAR_CREDENTIALS.map((c) => (
                  <li key={c} className="flex items-start gap-3 border-t border-ink/10 pt-3 text-sm font-medium text-ink/80">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-blood" />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16" data-testid="team-william">
          <Reveal delay={0.05} className="lg:order-2">
            <figure className="frame-corners relative">
              <div className="aspect-[4/5] overflow-hidden border border-ink/10">
                <img
                  src={IMAGES.william}
                  alt="William Chaves, fundador e coproprietário da Grip Fight, em competição"
                  data-testid="team-william-image"
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <figcaption className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50">
                <span>William Chaves</span>
                <span>Fundador &amp; Coproprietário</span>
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.1} className="lg:order-1">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-blood">A prova de que dá tempo</span>
              <h3 className="mt-3 font-display text-3xl uppercase tracking-wide sm:text-4xl lg:text-5xl">
                William Chaves
              </h3>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 md:text-lg">
                William Chaves começou a praticar Jiu-Jitsu aos 32 anos. Em pouco tempo, encontrou
                na arte uma nova forma de evoluir, chegando ao topo do ranking estadual da Prime
                apenas dois anos depois.
              </p>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-ink/70 md:text-lg">
                Hoje, como fundador e coproprietário da Grip Fight ao lado de César Pinheiro,
                William busca ajudar outras pessoas a evoluírem através das artes marciais.
              </p>
              <blockquote
                className="mt-8 border-l-2 border-blood pl-6 font-display text-2xl uppercase leading-snug text-ink md:text-3xl"
                data-testid="team-william-quote"
              >
                "Começar mais tarde não significa chegar tarde."
              </blockquote>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);
