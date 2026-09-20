import { mergeGroup } from "../../mergeGroup.js";

export const defaultContent = {
  brand: "Studio",
  brandHref: "/",
  tagline: "library",
  links: [
    { href: "/board", label: "Board" },
    { href: "/events", label: "Events" },
    { href: "/stays", label: "Stays" },
  ],
  logoutLabel: "Log out",
};

export function AppNav({ content, currentPath = "/board", onLogout }) {
  const merged = mergeGroup(defaultContent, content);
  const links = merged.links || [];

  function isActive(href) {
    const moreSpecificExists = links.some(
      (other) =>
        other.href !== href &&
        other.href.startsWith(`${href}/`) &&
        (currentPath === other.href || currentPath.startsWith(`${other.href}/`)),
    );
    return currentPath === href || (!moreSpecificExists && currentPath.startsWith(`${href}/`));
  }

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200 bg-stone-50/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href={merged.brandHref} className="group flex items-baseline gap-2">
          <span className="font-serif text-2xl tracking-tight text-stone-900 transition group-hover:text-amber-800">
            {merged.brand}
          </span>
          {merged.tagline ? (
            <span className="hidden text-xs uppercase tracking-[0.2em] text-stone-500 sm:inline">
              {merged.tagline}
            </span>
          ) : null}
        </a>
        <nav className="flex flex-wrap items-center justify-end gap-1 sm:gap-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-3 py-1.5 text-sm font-medium transition ${
                isActive(link.href)
                  ? "bg-amber-100 text-amber-800"
                  : "text-stone-500 hover:text-stone-900"
              }`}
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={onLogout || (() => {})}
            className="ml-1 rounded-full px-3 py-1.5 text-sm text-stone-500 transition hover:text-stone-900"
          >
            {merged.logoutLabel}
          </button>
        </nav>
      </div>
    </header>
  );
}
