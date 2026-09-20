import { ProductCard } from "@/components/ProductCard.jsx";
import { demoProducts } from "@/lib/demoProducts.js";

export default function HomePage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h1 className="text-3xl font-semibold text-zinc-900">Apex</h1>
      <p className="mt-2 max-w-xl text-zinc-600">
        Demo store UI. No database. Add a product, open the cart, then check out.
      </p>
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {demoProducts.map((product) => (
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
    </section>
  );
}
