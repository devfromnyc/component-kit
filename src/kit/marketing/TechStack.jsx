import { mergeGroup } from "../../mergeGroup.js";

export const defaultContent = {
  eyebrow: "Tech Stack",
  heading: "Tools of the Trade",
  subheading:
    "A curated selection of technologies used daily to build robust, scalable applications.",
  items: [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "TypeScript", icon: "📘" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "TailwindCSS", icon: "🎨" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Shopify", icon: "🛒" },
    { name: "Salesforce", icon: "☁️" },
    { name: "OpenAI", icon: "🤖" },
    { name: "Vercel", icon: "▲" },
    { name: "AWS", icon: "☁️" },
    { name: "Docker", icon: "🐳" },
    { name: "Git", icon: "📦" },
    { name: "GraphQL", icon: "◈" },
  ],
};

function TechChip({ tech }) {
  return (
    <div className="flex items-center gap-3 whitespace-nowrap rounded-full border border-zinc-800 bg-zinc-900/50 px-6 py-3 transition-colors hover:border-cyan-400/50">
      <span className="text-xl" aria-hidden="true">
        {tech.icon}
      </span>
      <span className="font-medium text-white/80">{tech.name}</span>
    </div>
  );
}

export function TechStack({ content }) {
  const merged = mergeGroup(defaultContent, content);
  const items = merged.items ?? [];
  const reversed = [...items].reverse();
  const marqueeItems = [...items, ...items];
  const reverseItems = [...reversed, ...reversed];
  const names = items.map((tech) => tech.name).join(", ");

  return (
    <section className="overflow-hidden bg-zinc-950 py-20 sm:py-32">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          {merged.eyebrow ? (
            <span className="mb-4 inline-block font-mono text-sm text-cyan-400">{merged.eyebrow}</span>
          ) : null}
          <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">{merged.heading}</h2>
          {merged.subheading ? (
            <p className="mx-auto max-w-2xl text-lg text-white/60">{merged.subheading}</p>
          ) : null}
        </div>

        <div className="hidden flex-wrap justify-center gap-4 motion-reduce:flex">
          {items.map((tech) => (
            <div key={tech.name} tabIndex={0}>
              <TechChip tech={tech} />
            </div>
          ))}
        </div>

        <div
          className="relative rounded-xl motion-reduce:hidden"
          aria-label={names ? `Technologies: ${names}` : undefined}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-zinc-950 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-zinc-950 to-transparent" />

          <div className="flex overflow-hidden">
            <div className="flex animate-[marquee_30s_linear_infinite] gap-8 py-4">
              {marqueeItems.map((tech, index) => (
                <TechChip key={`${tech.name}-${index}`} tech={tech} />
              ))}
            </div>
          </div>

          <div className="mt-4 flex overflow-hidden">
            <div className="flex animate-[marquee-reverse_25s_linear_infinite] gap-8 py-4">
              {reverseItems.map((tech, index) => (
                <TechChip key={`${tech.name}-rev-${index}`} tech={tech} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
