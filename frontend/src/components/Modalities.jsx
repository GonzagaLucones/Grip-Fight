import { IMAGES, waLink } from "../lib/site";
import { trackEvent } from "../lib/track";
import { ChapterTag, Reveal } from "./Reveal";
import { PhotoSlot } from "./PhotoSlot";

export const Modalities = () => (
  <section id="modalidades" data-testid="modalities-section" className="grain relative bg-ink py-24 md:py-32">
    <div className="mx-auto max-w-[1400px] px-5 md:px-10">
      <Reveal>
        <ChapterTag number="05" label="Modalidades" testId="modalities-chapter" />
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-8 max-w-3xl font-display text-4xl uppercase leading-[1.02] text-paper sm:text-5xl lg:text-6xl" data-testid="modalities-title">
          Encontre a forma de treinar que <span className="text-blood">combina com você.</span>
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        <Reveal className="h-full">
          <article className="group flex h-full flex-col border border-line bg-coal" data-testid="modality-jiujitsu">
            <div className="relative aspect-[16/9] overflow-hidden">
              <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]">
                <PhotoSlot
                  src={IMAGES.kids}
                  alt="Turma de Jiu-Jitsu de kimono na Grip Fight em São Leopoldo"
                  label="Foto de treino de Jiu-Jitsu"
                  filename="grip-fight-kids.webp"
                  testId="modality-jiujitsu-image"
                />
              </div>
              <span className="absolute left-4 top-4 bg-ink/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-paper backdrop-blur-sm">
                Modalidade 01
              </span>
            </div>
            <div className="flex flex-1 flex-col p-8">
              <h3 className="font-display text-3xl uppercase tracking-wide text-paper md:text-4xl">Jiu-Jitsu</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-steel md:text-base">
                Técnica, estratégia, controle e evolução. Uma arte marcial que ensina a lidar com
                desafios usando técnica, inteligência e persistência.
              </p>
            </div>
          </article>
        </Reveal>

        <Reveal delay={0.08} className="h-full">
          <article className="group flex h-full flex-col border border-line bg-coal" data-testid="modality-luta-livre">
            <div className="relative aspect-[16/9] overflow-hidden">
              <div className="h-full w-full transition-transform duration-500 group-hover:scale-[1.03]">
                <PhotoSlot
                  src={IMAGES.lutaLivreTurma}
                  alt="Turma de Luta Livre (no-gi) na Grip Fight em São Leopoldo"
                  label="Foto de treino de Luta Livre"
                  filename="luta-livre-turma.jpg"
                  testId="modality-luta-livre-image"
                />
              </div>
              <span className="absolute left-4 top-4 bg-ink/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-paper backdrop-blur-sm">
                Modalidade 02
              </span>
            </div>
            <div className="flex flex-1 flex-col p-8">
              <h3 className="font-display text-3xl uppercase tracking-wide text-paper md:text-4xl">Luta Livre</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-steel md:text-base">
                Quedas, controle, grappling e finalizações. Uma modalidade dinâmica para quem quer
                desenvolver técnica e experiência de combate.
              </p>
            </div>
          </article>
        </Reveal>
      </div>

      <Reveal delay={0.12}>
        <div className="mt-12 flex justify-center">
          <a
            href={waLink("modality")}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="modalities-cta"
            onClick={() => {
              trackEvent("modality_click");
              trackEvent("whatsapp_click", { location: "modalities" });
            }}
            className="group flex items-center gap-3 border border-paper/25 px-8 py-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-paper transition-colors duration-200 hover:border-blood hover:bg-blood hover:text-white"
          >
            Quero saber qual modalidade é para mim
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1.5">→</span>
          </a>
        </div>
      </Reveal>
    </div>
  </section>
);
