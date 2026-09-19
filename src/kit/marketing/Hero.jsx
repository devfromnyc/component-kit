import { mergeGroup } from "../../mergeGroup.js";

export const defaultContent = {
  heading: "Plan the trip you will actually take",
  subheading: "Save places, dates, and stays in one list.",
  body: "A personal list with enough structure to turn a weekend into a plan.",
  backgroundImage: "/placeholders/hero.jpg",
  backgroundAlt: "",
  primaryCta: { label: "Get started", href: "#signup" },
  secondaryCta: { label: "See how it works", href: "#features" },
};

export const defaultLayout = {
  align: "left",
  contentPosition: "bottom",
};

const alignClasses = {
  left: "items-start text-left",
  center: "items-center text-center",
  right: "items-end text-right",
};

const positionClasses = {
  top: "justify-start",
  center: "justify-center",
  bottom: "justify-end",
};

export function Hero({ content, layout }) {
  const mergedContent = mergeGroup(defaultContent, content);
  const mergedLayout = mergeGroup(defaultLayout, layout);
  const align = alignClasses[mergedLayout.align] ?? alignClasses.left;
  const position = positionClasses[mergedLayout.contentPosition] ?? positionClasses.bottom;

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <img
        src={mergedContent.backgroundImage}
        alt={mergedContent.backgroundAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/75 via-zinc-950/35 to-zinc-950/25" />
      <div
        className={`relative mx-auto flex min-h-[100svh] max-w-6xl flex-col px-4 pb-16 pt-28 sm:px-6 sm:pb-20 ${position} ${align}`}
      >
        <div className="max-w-2xl">
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl">
            {mergedContent.heading}
          </h1>
          {mergedContent.subheading ? (
            <p className="mt-4 max-w-xl text-xl font-medium leading-snug text-white/95 sm:text-2xl">
              {mergedContent.subheading}
            </p>
          ) : null}
          {mergedContent.body ? (
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/80">{mergedContent.body}</p>
          ) : null}
          <div className="mt-8 flex flex-wrap gap-3">
            {mergedContent.primaryCta?.label ? (
              <a
                href={mergedContent.primaryCta.href}
                className="rounded-full bg-zinc-50 px-6 py-3 text-sm font-semibold text-zinc-950 shadow-lg transition hover:bg-white"
              >
                {mergedContent.primaryCta.label}
              </a>
            ) : null}
            {mergedContent.secondaryCta?.label ? (
              <a
                href={mergedContent.secondaryCta.href}
                className="rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                {mergedContent.secondaryCta.label}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
