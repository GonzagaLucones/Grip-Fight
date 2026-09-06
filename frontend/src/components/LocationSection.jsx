import { Instagram, MapPin, Phone } from "lucide-react";
import { ADDRESS_LINES, IMAGES, INSTAGRAM_HANDLE, INSTAGRAM_URL, WHATSAPP_DISPLAY, waLink } from "../lib/site";
import { trackEvent } from "../lib/track";
import { ChapterTag, Reveal } from "./Reveal";

export const LocationSection = () => (
  <section id="localizacao" data-testid="location-section" className="bg-paper py-24 text-ink md:py-32">
    <div className="mx-auto max-w-[1400px] px-5 md:px-10">
      <Reveal>
        <ChapterTag number="10" label="Localização" dark={false} testId="location-chapter" />
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-8 max-w-3xl font-display text-4xl uppercase leading-[1.02] sm:text-5xl lg:text-6xl" data-testid="location-title">
          Seu próximo treino pode estar mais <span className="text-blood">perto</span> do que você imagina.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_1.2fr]">
        <div className="flex flex-col gap-5">
          <Reveal className="flex-1">
            <div className="flex h-full flex-col justify-between border border-ink/10 bg-bone p-8" data-testid="location-info-card">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-blood" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50">Endereço</p>
                    {ADDRESS_LINES.map((l) => (
                      <p key={l} className="mt-1 text-base font-medium text-ink" data-testid="location-address">
                        {l}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-blood" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50">WhatsApp</p>
                    <a
                      href={waLink("general")}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="location-whatsapp-link"
                      onClick={() => trackEvent("whatsapp_click", { location: "location" })}
                      className="mt-1 block text-base font-medium text-ink underline-offset-4 hover:text-blood hover:underline"
                    >
                      {WHATSAPP_DISPLAY}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Instagram className="mt-1 h-5 w-5 shrink-0 text-blood" />
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50">Instagram</p>
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="location-instagram-link"
                      className="mt-1 block text-base font-medium text-ink underline-offset-4 hover:text-blood hover:underline"
                    >
                      {INSTAGRAM_HANDLE}
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 overflow-hidden rounded-xl border border-ink/10">
                <img
                  src={IMAGES.recepcao}
                  alt="Recepção da academia Grip Fight em São Leopoldo"
                  data-testid="location-reception-image"
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08} className="h-full">
          <div className="h-full min-h-[380px] overflow-hidden rounded-2xl border border-ink/10" data-testid="location-map">
            <iframe
              title="Mapa — Grip Fight Self Defense, Av. Henrique Bier, 215, São Leopoldo"
              src="https://www.google.com/maps?q=Av.+Henrique+Bier,+215,+Campina,+S%C3%A3o+Leopoldo+-+RS,+93130-000&output=embed"
              className="map-mono h-full min-h-[380px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);
