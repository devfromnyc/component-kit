import { mergeGroup } from "../../mergeGroup.js";

export const defaultContent = {
  eyebrow: "Let's Connect",
  heading: "Ready to Build",
  headingAccent: "Something Great?",
  body: "Whether you need a website, an e-commerce platform, or AI workflows that transform the business — let's make it happen.",
  ctaLabel: "Start a Conversation",
  ctaHref: "#contact",
};

export function ConnectCta({ content }) {
  const merged = mergeGroup(defaultContent, content);

  return (
    <section className="relative overflow-hidden bg-zinc-950 py-20 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 via-fuchsia-500/5 to-cyan-400/5" />
        <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {merged.eyebrow ? (
          <span className="mb-4 inline-block font-mono text-sm text-cyan-400">{merged.eyebrow}</span>
        ) : null}
        <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
          {merged.heading}
          {merged.headingAccent ? (
            <>
              <br />
              <span className="text-cyan-400">{merged.headingAccent}</span>
            </>
          ) : null}
        </h2>
        {merged.body ? (
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/60">{merged.body}</p>
        ) : null}
        {merged.ctaLabel ? (
          <a
            href={merged.ctaHref}
            className="inline-flex rounded-full bg-cyan-400 px-8 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-300"
          >
            {merged.ctaLabel}
          </a>
        ) : null}
      </div>
    </section>
  );
}
