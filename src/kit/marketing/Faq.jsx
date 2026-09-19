import { useState } from "react";
import { mergeGroup } from "../../mergeGroup.js";

export const defaultContent = {
  eyebrow: "FAQ",
  heading: "Common Questions",
  subheading: "Everything you need to know about working together.",
  faqs: [
    {
      question: "What's your typical project timeline?",
      answer:
        "It completely depends on the project assigned — scope and complexity vary, so there isn't a one-size-fits-all schedule. Every project is completed in a very timely manner, and a clear plan is shared once we talk through the work.",
    },
    {
      question: "How do you handle communication during a project?",
      answer:
        "Transparent, regular communication is the default. You'll get weekly progress updates, and email or Slack stays open for questions. For larger projects, brief weekly check-in calls are available.",
    },
    {
      question: "Do you offer ongoing maintenance and support?",
      answer:
        "Yes. Maintenance packages cover ongoing support, updates, and improvements. Many collaborations continue long after the initial launch.",
    },
    {
      question: "What if I need changes after the project is complete?",
      answer:
        "Every project includes a revision period so the final result lands well. After launch, changes can be handled through a maintenance agreement or on a per-project basis.",
    },
    {
      question: "Can you work with my existing team or other developers?",
      answer:
        "Absolutely. Clean code, documentation, and clear communication make handoffs smooth with in-house teams, designers, and other developers.",
    },
  ],
};

export function Faq({ content }) {
  const merged = mergeGroup(defaultContent, content);
  const faqs = merged.faqs ?? [];
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-zinc-950 py-20 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          {merged.eyebrow ? (
            <span className="mb-4 inline-block font-mono text-sm text-cyan-400">{merged.eyebrow}</span>
          ) : null}
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">{merged.heading}</h2>
          {merged.subheading ? <p className="text-lg text-white/60">{merged.subheading}</p> : null}
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div key={faq.question} className="rounded-xl border border-zinc-800 bg-zinc-900/50">
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full rounded-xl p-5 text-left transition-all hover:border-cyan-400/50"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-medium text-white">{faq.question}</span>
                    <span
                      className={`flex-shrink-0 text-xl text-cyan-400 transition-transform ${isOpen ? "rotate-45" : ""}`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </div>
                </button>

                {isOpen ? (
                  <div id={panelId} role="region" aria-labelledby={buttonId}>
                    <p className="px-5 pb-5 text-sm leading-relaxed text-white/70">{faq.answer}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
