import { Check } from "lucide-react";
import { IMAGES } from "../lib/site";
import { ChapterTag, Reveal } from "./Reveal";
import { PhotoSlot } from "./PhotoSlot";

const HIGHLIGHTS = [
  "Ambiente climatizado",
  "Tatame amplo",
  "Espaço organizado",
  "Ambiente voltado ao aprendizado",
  "Comunidade",
];

export const Facility = () => (
  <section id="ambiente" data-testid="facility-section" className="bg-paper py-24 text-ink md:py-32">
    <div className="mx-auto max-w-[1400px] px-5 md:px-10">
      <Reveal>
        <ChapterTag number="04" label="O ambiente" dark={false} testId="facility-chapter" />
      </Reveal>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl uppercase leading-[1.02] sm:text-5xl lg:text-6xl" data-testid="facility-title">
            Um lugar onde você consegue se <span className="text-blood">imaginar treinando.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="lg:ml-auto lg:max-w-md">
            <p className="text-base leading-relaxed text-ink/60 md:text-lg">
              Treinar bem também depende do ambiente. A Grip Fight foi pensada para proporcionar
              conforto, organização e espaço para aprender, treinar e evoluir.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2" data-testid="facility-highlights">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-center gap-2 text-sm font-medium text-ink/80">
                  <Check className="h-4 w-4 shrink-0 text-blood" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-[1.4fr_1fr]" data-testid="facility-gallery">
        <Reveal className="h-full">
          <figure className="frame-corners relative h-full">
            <div className="h-full min-h-[320px] overflow-hidden rounded-2xl border border-ink/10 lg:min-h-[560px]">
              <img
                src={IMAGES.recepcao}
                alt="Recepção e área de treino da academia Grip Fight em São Leopoldo"
                data-testid="facility-main-image"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </figure>
        </Reveal>
        <div className="grid gap-5">
          <Reveal delay={0.08}>
            <figure className="relative">
              <div className="aspect-[16/10] overflow-hidden rounded-xl border border-ink/10">
                <PhotoSlot
                  src={IMAGES.poseKids}
                  alt="Crianças em pose de treino de Jiu-Jitsu Kids com o professor na Grip Fight"
                  label="Foto do treino de Jiu-Jitsu Kids"
                  filename="pose-treino-kids.webp"
                  testId="facility-tatame-image"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50">
                Treino de Jiu Jitsu Kids
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.14}>
            <figure className="relative">
              <div className="aspect-[16/10] overflow-hidden rounded-xl border border-ink/10">
                <PhotoSlot
                  src={IMAGES.treino}
                  alt="Treino de Luta Livre em andamento na Grip Fight"
                  label="Foto de treino — a experiência real no tatame"
                  filename="03-treino-grip-fight.jpg"
                  testId="facility-training-image"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50">
                Treino de Luta Livre
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);
