import { mergeGroup } from "../../mergeGroup.js";

export const defaultContent = {
  eyebrow: "About",
  heading: "Hey, I'm Alex",
  body:
    "A senior developer with 7+ years of experience turning complex ideas into elegant, scalable solutions. Studio builds web applications that don't just work—they think.",
  bodySecondary:
    "From seamless e-commerce experiences to AI workflows that automate the mundane, the focus is on technology that solves real business problems.",
  imageSrc: "/placeholders/portrait.jpg",
  imageAlt: "Alex, senior web developer",
  stats: [
    { value: "7+", label: "Years Exp" },
    { value: "100%", label: "Dedication" },
  ],
};

export function About({ content }) {
  const merged = mergeGroup(defaultContent, content);

  return (
    <section className="bg-zinc-950 py-20 sm:py-32">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="relative flex-shrink-0">
            <div className="h-48 w-48 overflow-hidden rounded-full border-2 border-zinc-800 bg-zinc-900 sm:h-64 sm:w-64">
              <img
                src={merged.imageSrc}
                alt={merged.imageAlt}
                className="h-full w-full origin-[58%_32%] scale-[1.7] object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full border border-cyan-400/20" aria-hidden="true" />
          </div>

          <div className="flex-1 text-center md:text-left">
            {merged.eyebrow ? (
              <span className="mb-4 inline-block font-mono text-sm text-cyan-400">{merged.eyebrow}</span>
            ) : null}

            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">{merged.heading}</h2>

            {merged.body ? (
              <p className="mb-6 text-lg leading-relaxed text-white/70">{merged.body}</p>
            ) : null}

            {merged.bodySecondary ? (
              <p className="leading-relaxed text-white/60">{merged.bodySecondary}</p>
            ) : null}

            {merged.stats?.length ? (
              <div className="mt-8 flex justify-center gap-8 md:justify-start">
                {merged.stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-bold text-cyan-400">{stat.value}</div>
                    <div className="text-sm text-white/50">{stat.label}</div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
