"use client";

import { useMemo, useState } from "react";
import { demoProducts } from "@/lib/demoProducts.js";
import { Filters } from "./Filters.jsx";
import { ProductCard } from "./ProductCard.jsx";
import { Sort } from "./Sort.jsx";

export function CollectionGrid() {
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("featured");

  const products = useMemo(() => {
    const filtered = category === "all" ? demoProducts : demoProducts.filter((item) => item.category === category);
    const next = [...filtered];
    if (sort === "price-asc") next.sort((a, b) => a.price - b.price);
    if (sort === "price-desc") next.sort((a, b) => b.price - a.price);
    return next;
  }, [category, sort]);

  return (
    <section className="min-h-[60vh] bg-zinc-50 px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <Filters value={category} onChange={setCategory} />
          <Sort value={sort} onChange={setSort} />
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              content={{
                title: product.title,
                description: product.description,
                imageSrc: product.imageSrc,
                imageAlt: product.title,
                price: product.price,
                href: product.href,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
