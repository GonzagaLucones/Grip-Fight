import { useState } from "react";
import { Camera } from "lucide-react";
import { IMAGES } from "../lib/site";

// Renders the real photo once the file exists in /public/images;
// until then shows a branded reserved slot (no stock, no fakes).
export const PhotoSlot = ({
  src,
  alt,
  label,
  filename,
  className = "",
  imgClassName = "",
  position = "center",
  eager = false,
  testId,
}) => {
  const [missing, setMissing] = useState(false);

  if (!missing) {
    return (
      <img
        src={src}
        alt={alt}
        data-testid={testId}
        loading={eager ? "eager" : "lazy"}
        onError={() => setMissing(true)}
        className={`h-full w-full object-cover ${imgClassName}`}
        style={{ objectPosition: position }}
      />
    );
  }

  return (
    <div
      data-testid={testId}
      className={`mat-lines relative flex h-full w-full flex-col items-center justify-center gap-3 bg-smoke p-6 text-center ${className}`}
    >
      <img
        src={IMAGES.logo}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 m-auto w-1/2 max-w-[220px] opacity-[0.06] grayscale"
      />
      <span className="flex h-11 w-11 items-center justify-center border border-line bg-ink/60">
        <Camera className="h-5 w-5 text-steel" />
      </span>
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-blood">
        Espaço reservado
      </p>
      <p className="max-w-[260px] text-sm font-medium leading-snug text-paper/80">
        {label}
      </p>
      {filename && (
        <p className="font-mono text-[10px] tracking-wider text-steel/70">
          {filename}
        </p>
      )}
    </div>
  );
};
