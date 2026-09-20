import Link from "next/link";
import { mergeGroup } from "@/lib/mergeGroup.js";

export const defaultContent = {
  brand: "Apex",
  links: [
    { label: "Products", href: "/products" },
    { label: "Collections", href: "/products" },
    { label: "Sign in", href: "/sign-in" },
  ],
  copyright: "© 2026 Apex. Demo store UI.",
};

export function StoreFooter({ content }) {
  const merged = mergeGroup(defaultContent, content);

  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold text-zinc-900">{merged.brand}</p>
        <nav className="flex flex-wrap gap-4 text-sm text-zinc-600">
          {(merged.links || []).map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-zinc-900">
              {link.label}
            </Link>
          ))}
        </nav>
        <p className="text-sm text-zinc-500">{merged.copyright}</p>
      </div>
    </footer>
  );
}
