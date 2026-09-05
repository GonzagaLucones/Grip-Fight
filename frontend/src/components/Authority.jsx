import { Check } from "lucide-react";
import { IMAGES } from "../lib/site";
import { ChapterTag, Reveal } from "./Reveal";

const MARKERS = [
  "Experiência no ensino de Jiu-Jitsu, Grappling e Submission",
  "Preparação física de atletas de combate",
  "Vivência competitiva em competições nacionais e internacionais",
  "Formação e coordenação de equipe",
];

export const Authority = () => (
  <section id="a-grip-fight" data-testid="authority-section" className="grain relative overflow-hidden bg-coal py-24 md:py-32">
    <div
      aria-hidden
      className="pointer-events-none absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-blood/10 blur-[130px]"
    />
    <div className="mx-auto max-w-[1400px] px-5 md:px-10">
      <Reveal>
        <ChapterTag number="03" label="A Grip Fight" testId="authority-chapter" />
      </Reveal>

      <div className="mt-10 grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div>
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl uppercase leading-[1.02] text-paper sm:text-5xl lg:text-6xl" data-testid="authority-title">
              Experiência que vai <span className="text-blood">além do discurso.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-steel md:text-lg" data-testid="authority-copy">
              A Grip Fight reúne profissionais com experiência no ensino, preparação física e
              vivência competitiva em Jiu-Jitsu, Grappling e Submission.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-steel md:text-lg">
              Experiência em competições nacionais e internacionais.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <ul className="mt-9 space-y-4" data-testid="authority-markers">
              {MARKERS.map((m) => (
                <li key={m} className="flex items-start gap-3 text-sm text-paper/85 md:text-base">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border border-blood/60">
                    <Check className="h-3 w-3 text-blood" />
                  </span>
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.3em] text-steel/70">
              Existe uma história por trás desse tatame.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <figure className="frame-corners relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-line sm:aspect-[5/5]">
              <img
                src={IMAGES.medalhas}
                alt="Medalhas de competições de Jiu-Jitsu conquistadas pela equipe Grip Fight"
                data-testid="authority-medals-image"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent"
              />
            </div>
            <figcaption className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-steel/70">
              <span>Campo de prova</span>
              <span>Competição — Grip Fight</span>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </div>
  </section>
);
