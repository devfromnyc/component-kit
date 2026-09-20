import { mergeGroup } from "../../mergeGroup.js";

export const defaultContent = {
  brand: "Studio",
  tagline: "Senior Web Developer & AI Specialist",
  links: [
    { label: "Home", href: "/" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
  copyright: `© ${new Date().getFullYear()} Studio. All rights reserved.`,
};

export function SimpleFooter({ content }) {
  const merged = mergeGroup(defaultContent, content);

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <a href="/" className="mb-4 flex items-center gap-2">
              <span className="text-2xl font-bold text-cyan-400">{"<"}</span>
              <span className="text-xl font-semibold text-white">{merged.brand}</span>
              <span className="text-2xl font-bold text-cyan-400">{"/>"}</span>
            </a>
            {merged.tagline ? <p className="text-sm text-white/60">{merged.tagline}</p> : null}
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {(merged.links || []).map((link) => (
                <li key={link.href + link.label}>
                  <a href={link.href} className="text-sm text-white/60 transition hover:text-cyan-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-white">Connect</h3>
            <p className="text-sm text-white/50">Copy this file into a client project and swap the links.</p>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-800 pt-8 text-center">
          <p className="text-sm text-white/40">{merged.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
