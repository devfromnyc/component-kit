import { mergeGroup } from "../../mergeGroup.js";

export const defaultContent = {
  eyebrow: "Services",
  heading: "How Studio Can Help",
  subheading: "Three core pillars of expertise, each honed through years of real-world application.",
  items: [
    {
      icon: "🌐",
      title: "Web Development",
      description:
        "Full-stack web work—from landing pages to applications built with React, Next.js, and TypeScript.",
      skills: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    },
    {
      icon: "🛒",
      title: "E-Commerce",
      description:
        "Shopify and Salesforce expertise to build, optimize, and scale online stores for maximum conversions.",
      skills: ["Shopify", "Salesforce", "Payment APIs", "Inventory Systems"],
    },
    {
      icon: "🤖",
      title: "AI Integration",
      description:
        "Custom AI workflows that automate business processes, from customer service to data analysis.",
      skills: ["OpenAI", "LangChain", "Automation", "Custom Agents"],
    },
  ],
};

export function Services({ content }) {
  const merged = mergeGroup(defaultContent, content);

  return (
    <section className="bg-zinc-950 py-20 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          {merged.eyebrow ? (
            <span className="mb-4 inline-block font-mono text-sm text-cyan-400">{merged.eyebrow}</span>
          ) : null}
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">{merged.heading}</h2>
          {merged.subheading ? (
            <p className="mx-auto max-w-2xl text-lg text-white/60">{merged.subheading}</p>
          ) : null}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {merged.items?.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 p-8 transition-all duration-500 hover:border-cyan-400/50"
            >
              <div
                className="absolute inset-0 bg-gradient-to-b from-cyan-400/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />

              <div className="relative z-10">
                <div className="mb-6 text-5xl">{service.icon}</div>

                <h3 className="mb-4 text-2xl font-bold text-white transition-colors group-hover:text-cyan-400">
                  {service.title}
                </h3>

                <p className="mb-6 leading-relaxed text-white/60">{service.description}</p>

                {service.skills?.length ? (
                  <div className="flex flex-wrap gap-2">
                    {service.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 font-mono text-xs text-white/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
