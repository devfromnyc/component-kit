import Link from "next/link";
import { mergeGroup } from "@/lib/mergeGroup.js";

export const defaultContent = {
  title: "Trail Runner",
  description: "Cushioned daily trainer for mixed terrain.",
  imageSrc: "/placeholders/product.jpg",
  imageAlt: "Trail Runner sneaker",
  price: 128,
  href: "/products/trail-01",
};

export function ProductCard({ content }) {
  const merged = mergeGroup(defaultContent, content);
  const price =
    typeof merged.price === "number" ? `$${merged.price.toFixed(2)}` : merged.price;

  const body = (
    <article className="group overflow-hidden rounded-xl bg-white ring-1 ring-zinc-200 transition hover:ring-zinc-400">
      <div className="relative aspect-square overflow-hidden bg-zinc-100">
        <img
          src={merged.imageSrc}
          alt={merged.imageAlt || merged.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <div className="mb-1 flex items-baseline justify-between gap-3">
          <h3 className="text-lg font-semibold text-zinc-900">{merged.title}</h3>
          {price ? <span className="text-sm font-medium text-zinc-900">{price}</span> : null}
        </div>
        {merged.description ? <p className="text-sm text-zinc-600">{merged.description}</p> : null}
      </div>
    </article>
  );

  return merged.href ? (
    <Link
      href={merged.href}
      className="block rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500"
    >
      {body}
    </Link>
  ) : (
    body
  );
}
