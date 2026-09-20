import { mergeGroup } from "../../mergeGroup.js";

export const defaultContent = {
  eyebrow: "What you get",
  heading: "From a single card to a whole trip",
  body: "Research with AI, save what you love, filter what's nearby, then plan today — or stitch everything into a multi-day trip.",
};

export function IntroText({ content }) {
  const merged = mergeGroup(defaultContent, content);

  return (
    <section className="bg-stone-50 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-2xl">
        {merged.eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-800">{merged.eyebrow}</p>
        ) : null}
        <h2 className="mt-2 font-serif text-4xl text-stone-900 sm:text-5xl">{merged.heading}</h2>
        {merged.body ? <p className="mt-4 text-stone-600">{merged.body}</p> : null}
      </div>
    </section>
  );
}
