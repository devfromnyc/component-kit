import { useState } from "react";
import { mergeGroup } from "../../mergeGroup.js";
import { useDemoCart } from "./demoCart.js";

export const defaultContent = {
  brand: "Apex",
  logoHref: "/",
  links: [
    { label: "Trail", href: "#trail" },
    { label: "City", href: "#city" },
    { label: "Kids", href: "#kids" },
    { label: "Collections", href: "#collections" },
  ],
};

export function StoreNavbar({ content, onCartClick }) {
  const merged = mergeGroup(defaultContent, content);
  const [open, setOpen] = useState(false);
  const count = useDemoCart((state) => state.items.reduce((sum, row) => sum + row.quantity, 0));

  return (
    <header className="w-full border-b border-zinc-200 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Main">
        <a href={merged.logoHref} className="text-xl font-semibold tracking-tight text-zinc-900">
          {merged.brand}
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {(merged.links || []).map((link) => (
            <li key={link.label}>
              <a href={link.href} className="text-sm font-medium text-zinc-900 hover:text-zinc-600">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden items-center gap-6 md:flex">
          <button
            type="button"
            onClick={onCartClick}
            className="text-sm font-medium text-zinc-900 hover:text-zinc-600"
          >
            Cart ({count})
          </button>
        </div>
        <button
          type="button"
          className="flex flex-col items-center justify-center gap-1.5 p-2 md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className={`block h-0.5 w-6 bg-zinc-900 transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-zinc-900 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-zinc-900 transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>
      {open ? (
        <div className="space-y-3 border-t border-zinc-200 px-6 py-4 md:hidden">
          {(merged.links || []).map((link) => (
            <a key={link.label} href={link.href} className="block text-sm font-medium text-zinc-900">
              {link.label}
            </a>
          ))}
          <button type="button" onClick={onCartClick} className="text-sm font-medium text-zinc-900">
            Cart ({count})
          </button>
        </div>
      ) : null}
    </header>
  );
}
