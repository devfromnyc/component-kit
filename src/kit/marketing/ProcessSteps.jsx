import { Fragment } from "react";
import { mergeGroup } from "../../mergeGroup.js";

export const defaultContent = {
  eyebrow: "How It Works",
  heading: "A Simple, Transparent Process",
  subheading: "No guesswork, no chaos. Just a clear path from idea to launch.",
  steps: [
    {
      step: 1,
      title: "Discovery",
      description: "Understand your goals, challenges, and vision",
      icon: "🔍",
    },
    {
      step: 2,
      title: "Strategy",
      description: "Plan timeline, tech stack, and milestones",
      icon: "📋",
    },
    {
      step: 3,
      title: "Build",
      description: "Develop with regular updates and feedback",
      icon: "⚡",
    },
    {
      step: 4,
      title: "Launch",
      description: "Deploy, document, and provide support",
      icon: "🚀",
    },
  ],
};

export function ProcessSteps({ content }) {
  const merged = mergeGroup(defaultContent, content);
  const steps = merged.steps ?? [];
  const gridTemplateColumns = steps
    .map((_, index) => (index < steps.length - 1 ? "6rem 5rem" : "6rem"))
    .join(" ");

  return (
    <section className="relative overflow-hidden bg-zinc-950 py-20 sm:py-32">
      <div
        className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-cyan-400/5"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          {merged.eyebrow ? (
            <span className="mb-4 inline-block font-mono text-sm text-cyan-400">{merged.eyebrow}</span>
          ) : null}
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">{merged.heading}</h2>
          {merged.subheading ? (
            <p className="mx-auto max-w-2xl text-lg text-white/60">{merged.subheading}</p>
          ) : null}
        </div>

        <div className="mb-16">
          <ol className="mx-auto max-w-md lg:hidden">
            {steps.map((step, index) => (
              <li
                key={step.step ?? step.title}
                className="flex gap-4 rounded-lg"
                aria-label={`Step ${step.step}: ${step.title}. ${step.description}`}
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-full border-2 border-cyan-400/50 bg-zinc-900">
                    <span className="text-xl leading-none">{step.icon}</span>
                    <span className="mt-0.5 text-[10px] text-white/70">{step.step}</span>
                  </div>
                  {index < steps.length - 1 ? (
                    <div className="my-1 min-h-10 w-0.5 flex-1 bg-gradient-to-b from-cyan-400/50 to-cyan-400/20" />
                  ) : null}
                </div>
                <div className="pb-8 pt-1">
                  <div className="text-base font-semibold text-white">{step.title}</div>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <div
            className="hidden items-center justify-center lg:grid"
            style={{ gridTemplateColumns }}
          >
            {steps.map((step, index) => (
              <Fragment key={`circle-${step.step ?? step.title}`}>
                <div
                  className="flex h-24 w-24 flex-col items-center justify-center justify-self-center rounded-full border-2 border-cyan-400/50 bg-zinc-900"
                  aria-label={`Step ${step.step}: ${step.title}. ${step.description}`}
                >
                  <span className="text-2xl">{step.icon}</span>
                  <span className="mt-1 text-xs text-white/70">Step {step.step}</span>
                </div>
                {index < steps.length - 1 ? (
                  <div className="h-0.5 w-full bg-gradient-to-r from-cyan-400/50 to-cyan-400/30" />
                ) : null}
              </Fragment>
            ))}
            {steps.map((step, index) => (
              <Fragment key={`label-${step.step ?? step.title}`}>
                <div className="w-24 justify-self-center self-start pt-4 text-center">
                  <div className="text-sm font-semibold text-white">{step.title}</div>
                  <div className="mt-1 text-xs text-white/70">{step.description}</div>
                </div>
                {index < steps.length - 1 ? <div /> : null}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
